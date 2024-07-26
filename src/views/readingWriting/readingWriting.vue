<template>
  <div class="container">
    <Navbar :title="this.title" @getDialogVisible="getDialogVisible"></Navbar>
    <div class="main">
      <div class="dataForm">
        <div v-for="(group, date) in groupedHistory" :key="date">
          <p class="dataFormDate">{{ date === currentDate ? "今天" : date }}</p>
          <div class="dataFormContext">
            <div v-for="(item, index) in group" v-if="item" :key="index" class="dataFormText">
              <div class="dataFormText_item" @click.stop="historyWatch(item.summary)">
                {{ item.summary }}
              </div>
              <button @click="deleteSummary(item)">删除</button>
            </div>
          </div>
        </div>
        <button @click="clearHistory">清空历史</button>
      </div>
      <div class="mainLeft">
        <div class="mainLeftText">
          <div style="flex-grow: 0.1;">
            <img :src="this.informationImg" alt="">
          </div>
          <div style="flex-grow: 0.8;text-align: left;">目前最高支持 8k 中文文本和 16k 英文文本输入</div>
          <div style="flex-grow: 0.1;">
            <img :src="this.cancellationImg" alt="">
          </div>
        </div>
        <div class="mainLeftContainer"
             v-loading="loading"
             element-loading-text="总结中，内容不可编辑"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
          <div class="mainLeftContainerText" v-if="isOriginalText && !hasContent">原始文本内容</div>
          <el-input
              type="textarea"
              v-model="textarea1"
              maxlength="16000"
              show-word-limit
              ref="textareaInput"
              @focus="startTextarea"
              @blur="endTextarea"
          >
          </el-input>
        </div>
        <div class="buttonHome">
          <el-button type="primary" class="startButton" v-if="mainButton" @click="submit">开始总结</el-button>
          <div class="convertButton">
            <el-button type="warning" class="reuseButton" v-if="convertButton" @click="summarizeAgain">重新总结</el-button>
            <el-button type="danger" class="cancellationButton" v-if="convertButton" @click="cancelSummary">取消总结</el-button>
          </div>
        </div>
      </div>
      <div class="mainRight">
        <div class="mainRightText" v-if="isSummaryText">总结结果内容</div>
        <el-input
            type="textarea"
            v-model="textarea2"
            readonly
        ></el-input>
        <el-button v-if="this.textarea2" @click="copyToClipboard" class="copyButton">一键复制</el-button>
        <el-button v-if="this.textarea2" @click="copyEmpty" class="copyEmpty">一键清空</el-button>
      </div>
      <el-dialog
          title="切换账号"
          :visible.sync="dialogVisible"
          width="30%">
        <el-input
            placeholder="请输入账号"
            v-model="loginTitle"
            clearable>
        </el-input>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Login">确 定</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {summarizer} from '@/api/index'
import Navbar from '@/components/Navbar'

export default {
  name: "readingWriting",
  components:{
    Navbar
  },
  data(){
    return{
      title: 'username', //默认用户名
      informationImg: require('@/assets/msg.png'),
      cancellationImg: require('@/assets/quxiao.png'),
      textarea1: '',
      textarea2: '',
      isOriginalText: true, //原始文本内容显隐
      hasContent: false, //文本状态跟踪变量
      isSummaryText: true, //总结结果内容显隐
      mainButton: true, //主要按钮功能显隐
      convertButton: false, //重新总结和取消总结按钮显隐
      loading: false, //加载
      isCanceled: false, //请求状态
      intervalId: null, //定时器ID
      history: [], //历史总结记录
      loginTitle:'', //弹窗数据
      dialogVisible: false, //弹窗显隐
    }
  },
  watch: {
    //监听textarea2，控制文本显隐
    textarea2(newValue) {
      this.isSummaryText = !newValue.trim();
    },
    //监听textarea1，控制文本显隐
    textarea1(newValue){
      this.isOriginalText = !newValue.trim();
    },
    history: {
      handler() {
        this.saveHistory();
      },
      deep: true
    }
},
  computed: {
    groupedHistory() {
      return this.groupByDate(this.history);
    },
    currentDate() {
      return new Date().toISOString().split('T')[0].replace(/-/g, '');
    },
  },

  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); //组件销毁前清理定时器
    }
    this.cancelSummary();
  },

  created() {
    this.getHistory();
    this.getUser();
  },

  mounted() {

  },
  methods:{
    //文本输入框显隐
    startTextarea(){
      this.isOriginalText = false
      this.hasContent = true;
    },
    endTextarea(){
      if (this.textarea1 === '') {
        this.isOriginalText = true;
        this.hasContent = false;
      } else {
        this.isOriginalText = false;
      }
    },
    //提交
    submit(){
      if (!this.textarea1) {
        this.$message.error('请输入原始文本！');
        return;
      }
      if (this.intervalId) {
        clearInterval(this.intervalId); // 清除旧的定时器
        this.intervalId = null; // 清理定时器ID
      }
      this.textarea2 = ''
      this.loading = true;
      this.mainButton = false
      this.convertButton = true
      this.isCanceled = false; // 设置为未取消状态
      summarizer({
        messages:[
         {
           role: "user",
           content: this.textarea1,
         }
        ],
        model: "model-100b",
        stream: false,
      }).then(res => {
        if (this.isCanceled) {
          return;
        }
        if (res.role === 'assistant') {
          if (res.content) {
            const summary = {
              summary: res.content,
              date: new Date(),
            };
            this.history.push(summary);
            this.saveHistory();
            this.isSummaryText = false
            let index = 0;
            this.intervalId = setInterval(() => {
              if (index < res.content.length) {
                this.textarea2 = res.content.slice(0, index) + res.content[index];
                index++;
              } else {
                clearInterval(this.intervalId); //结束循环
                this.intervalId = null; //清理定时器ID
              }
            }, 50); //每隔100毫秒添加一个字符
          } else {
            this.textarea2 = '';
            this.isSummaryText = true
          }
          this.loading = false;
        } else {
          this.$message.error(res.msg)
        }
      }).catch(error => {
        console.error('请求错误：', error);
        this.$message.error('请求出错，请稍后再试');

        this.loading = false;
      });
    },
    //取消总结
    cancelSummary(){
      // 取消请求
      this.isCanceled = true; // 设置为已取消状态
      // 停止流式文本显示
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.textarea1 = '';
      this.textarea2 = '';
      this.isSummaryText = true;
      this.isOriginalText = true;
      this.hasContent = false;
      this.mainButton = true;
      this.convertButton = false;
      this.loading = false;
    },
    //重新总结
    summarizeAgain(){
      // 取消请求
      this.isCanceled = true; //设置为已取消状态
      // 停止流式文本显示
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.textarea2 = '';
      this.isSummaryText = true;
      this.mainButton = true;
      this.convertButton = false;
      this.loading = false;
      this.focusAndSelectTextarea()
    },
    //获取光标位置
    focusAndSelectTextarea() {
      const textarea = this.$refs.textareaInput.$el.querySelector('.el-textarea__inner');
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    },
    //一键复制,原生ClipboardAPI
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.textarea2);
        alert('文本已复制！');
      } catch (err) {
        console.error('复制失败：', err);
      }
    },
    //一键清空
    copyEmpty(){
      if (this.intervalId) {
        clearInterval(this.intervalId); // 清除旧的定时器
        this.intervalId = null; // 清理定时器ID
      }
      this.textarea2 = ''
    },
    // 从 localStorage 获取历史记录
    getHistory() {
      const username = this.title;
      const key = `${username}${this.currentDate}`
      const storedHistory = JSON.parse(localStorage.getItem(key));
      if (storedHistory) {
        this.history = storedHistory;
      }
    },
    // 将历史记录保存到localStorage，并且能够追加数据
    saveHistory() {
      const username = this.title;
      const key = `${username}${this.currentDate}`;
      if (this.history.length > 0 ){
        localStorage.setItem(key, JSON.stringify(this.history));
      }
    },
    // 按日期分组历史记录
    groupByDate(items) {
      return items.reduce((acc, item) => {
        let date = ''
        if(typeof item.date === 'string'){
          item.date = new Date(item.date); // 尝试转换为日期对象
          date = item.date && item.date instanceof Date ? item.date.toISOString().split('T')[0].replace(/-/g, '') : '';
        }else{
          date = item.date && item.date instanceof Date ? item.date.toISOString().split('T')[0].replace(/-/g, '') : '';
        }
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item);
        return acc;
      }, {});
    },
    // 删除单个历史记录
    deleteSummary(item) {
      if (item) {
        this.history = this.history.filter(historyItem => historyItem !== item);
        this.saveHistory();
      }
    },
    // 清空所有历史记录
    clearHistory() {
      this.history = [];
      this.saveHistory();
    },
    //获取子组件title
    getDialogVisible(data){
      this.dialogVisible = data
    },
    Login(){
      if (!this.loginTitle) {
        this.$message.error('请输入账号！');
        return;
      }
      localStorage.setItem('token', this.loginTitle);
      this.textarea1 = ''
      this.textarea2 = ''
      this.history = []
      this.getUser();
      this.dialogVisible = false
      this.loginTitle = ''
      this.mainButton = true
      this.convertButton = false
    },
    getUser(){
      const storedUser = localStorage.getItem('token');
      if (storedUser) {
        this.title = storedUser
        this.getHistory()
        return storedUser;
      }
    },
    historyWatch(e){
      if (this.intervalId) {
        clearInterval(this.intervalId); // 清除旧的定时器
        this.intervalId = null; // 清理定时器ID
      }
      if (e) {
        this.isSummaryText = false
        let index = 0;
        this.intervalId = setInterval(() => {
          if (index < e.length) {
            this.textarea2 = e.slice(0, index) + e[index];
            index++;
          } else {
            clearInterval(this.intervalId); //结束循环
            this.intervalId = null; //清理定时器ID
          }
        }, 50); //每隔100毫秒添加一个字符
      } else {
        this.textarea2 = '';
        this.isSummaryText = true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  background-color: #FAFAFA;
}
.main{
  display: flex;
  justify-content: space-evenly;
}
.dataForm{
  width: 20%;
  height: 200px;
  margin-top: 6%;

  .dataFormDate{
    margin: 0;
    padding: 0;
    color: #000000;
  }

  .dataFormContext{
    background-color: #EBEDF0;
    padding: 8px 10px 8px 10px;

    .dataFormText{
      background-color: #D0D0D0;
      font-size: 12px;
      max-width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .dataFormText_item{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 70%;
      }
    }
  }

}
.mainLeft{
  width: 36%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 6%;

  .mainLeftText{
    width: 100%;
    height: 6%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    border: 1px solid #DCDFE6;

    img{
      width: 16px;
      height: 16px;
    }

    div{
      height: 16px;
    }
  }

  .buttonHome{
    width: 100%;
    height: 7%;
    margin-bottom: 0.2%;

    .startButton{
      width: 100%;
      height: 100%;
    }

    .convertButton{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      .reuseButton{
        width: 50%;
        height: 100%;
      }

      .cancellationButton{
        width: 50%;
        height: 100%;
      }
    }
  }

  .mainLeftContainer{
    position: relative;
    width: 100%;
    height: 84%;

    ::v-deep .el-textarea{
      width: 100%;
      height: 100%;

      .el-textarea__inner{
        width: 100%;
        height: 100% !important;
        border-radius: 0;
        overflow-y: auto;
        padding: 0 !important;
      }
    }

    .mainLeftContainerText{
      font-size: 16px;
      color: #8C8C8C;
      position: absolute;
      top: 1%;
      left: 1%;
      z-index: 99;
    }
  }
}
.mainRight{
  width: 36%;
  height: 600px;
  position: relative;
  margin-top: 6%;

  .mainRightText{
    font-size: 16px;
    color: #8C8C8C;
    position: absolute;
    top: 1%;
    left: 1%;
    z-index: 99;
  }

  ::v-deep .el-textarea{
    width: 100%;
    height: 100%;

    .el-textarea__inner{
      width: 100%;
      height: 100% !important;
      border-radius: 0;
      overflow-y: auto;
    }
  }

  .copyButton{
    position: absolute;
    right: 0;
    top: -8%;
  }

  .copyEmpty{
    position: absolute;
    left: 0;
    top: -8%;
  }
}
</style>
