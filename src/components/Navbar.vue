<template>
  <div>
    <div class="navbar">
      <div style="display: inline-block;width: 46%;">
        <div class="navbarTop">
          <img :src="require('@/assets/logo.png')" alt="" class="navbar_logo">
          <div style="text-align: center;">AI 工具箱</div>
        </div>
      </div>
      <div class="right-menu">
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper">
            <div>欢迎您：{{ title }}</div>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided @click.native="logout">
              <span>切换账号</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    title:{
      default:"",
      type:String
    },
  },
  data(){
    return{
      dialogVisible:false,
      loginTitle:''
    }
  },
  methods: {
    async logout() {
      this.$confirm('确定切换账号吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('getDialogVisible',true)
      }).catch(() => {

      });
    },
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  overflow: hidden;
  position: relative;
  z-index: 2001;
  background: #FEFEFE;
  box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbarTop{
    display: flex;
    align-items: center;
    color: #202020;
    width: 100%;
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    text-transform: none;
    padding: 3%;
  }

  .navbar_logo{
    width: 45px;
    height: 48px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #202020;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      font-weight: 400;
      font-size: 16px;
      color: #202020;
      font-style: normal;
      text-transform: none;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -15px;
          top: 7px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
