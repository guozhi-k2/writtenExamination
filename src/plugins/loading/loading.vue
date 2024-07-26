<template>
  <div class="loading-box">
    <div class="loading-mask">
      <div class="loading-icon-box">
        <img :src="loadingUrl" alt="" class="loading-icon">
        <span class="loading-text">{{msg}}</span>
      </div>
    </div>
  </div>
</template>
<script>
    var ModalHelper = (function(bodyCls) {
    var scrollTop;
    return {
      afterOpen: function() {
        // console.log(document)
        scrollTop = document.scrollingElement ? document.scrollingElement.scrollTop : document.activeElement.scrollTop
        // document.body.classList.add(bodyCls);
        document.body.style.top = -scrollTop + 'px';
      },
      beforeClose: function() {
        // document.body.classList.remove(bodyCls);
        const scrollEle = document.scrollingElement ? document.scrollingElement : document.activeElement
        scrollEle.scrollTop = scrollTop;
      }
    };
  })('modal-open');
    import config from '../../config'
    export default {
        name: "loading",
        data(){
          return {
            loading:false,
            msg: this.msg?this.msg:'加载中...',
            style:{
              background: 'url("'+config.baseUrl+'/static/icons/loading.gif") center center no-repeat',
              backgroundSize:'1.68rem'
            },
            isLoading: false,
            loadingUrl: config.baseUrl+'/static/icons/loading.gif'

          }
        },
        methods:{
          fixedHtml(e){
            e.preventDefault()
          },
          open(){
            ModalHelper.afterOpen()
            document.querySelector('body').className = 'fixed'
            document.getElementsByClassName('loading-box')[0].style.display = 'flex'
          },
          close(){
            document.getElementsByClassName('loading-box')[0].style.display = 'none'
            // console.log(this.isLoading)
            ModalHelper.beforeClose()
            document.querySelector('body').className = ''
          }
        }
    }
</script>
<style scoped>
  .loading-box{
    display: none;
  }
  .loading-mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 9999999999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
  }
  .loading-icon-box{
    position: fixed;
    z-index: 9999999999999;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%,-50%);
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
  }
  .loading-icon{
    width: 50px;
    height: 50px;
    /*animation: rotate 1s steps(12, end) infinite*/
  }
  .loading-text{
    display: block;
    margin-top: 0px;
    font-size: 12px;
  }
  .load{
    animation: loadAni 1s 0s 1 forwards;
  }
  @keyframes rotate {
    to{
      transform: rotate(360deg)
    }
  }
  @keyframes loadAni{
    to{
      opacity: 1
    }
  }
</style>
