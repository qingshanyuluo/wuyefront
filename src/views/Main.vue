<template>
    <div style="height: inherit;">
      <el-container style="heigh: inherit;" direction="vertical">
        <el-header height=120px>
          <h2>早啊，{{username}}！接受元气满满的一天吧</h2>
        </el-header>
        <el-container>
          <el-aside height=120px width="300px">
              <el-col :span="1">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="0">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>个人中心</span>
                  </template>
                    <el-menu-item index="0-1">
                      <router-link :to="{name: 'ShowInfo', query: user}" tag="li" >我的信息</router-link>
                    </el-menu-item>
                    <el-menu-item index="0-2">
                      <router-link :to="{name: 'UploadInfo', query: username}" tag="li" >上传信息</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>报修</span>
                  </template>
                    <el-menu-item index="1-1">
                      <router-link :to="{name: 'NewRepair', query: user}" tag="li" >报修</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                      <router-link :to="{name: 'NeedRepair', query: user}" tag="li" >已报修</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>财产</span>
                  </template>
                    <el-menu-item index="2-2">
                      <router-link :to="{name: 'UploadProperty'}" tag="li" >上传财产</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                      <router-link :to="{name: 'ShowProperty'}" tag="li" >我都财产</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>缴费</span>
                  </template>
                    <el-menu-item index="3-2">
                      <router-link :to="{name: 'NeedPay'}" tag="li" >待缴费</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                      <router-link :to="{name: 'Paid'}" tag="li" >以往缴费</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>投诉</span>
                  </template>
                    <el-menu-item index="4-2">
                      <router-link :to="{name: 'Complaint'}" tag="li" >新增投诉</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>快递</span>
                  </template>
                    <el-menu-item index="5-2">
                      <router-link :to="{name: 'Express'}" tag="li" >查看快递</router-link>
                    </el-menu-item>
                </el-submenu>

              </el-menu>
            </el-col>
          </el-aside>
          <el-container>
            <el-main>
              <router-view/>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      username: '',
      name: '',
      user: '',
      type: false
    }
  },
  created () {
    console.log(this.$route.params)
    this.username = this.$route.params.user.username
    console.log(this.username)
    var _this = this
    this.$axios.get('/info/owner/' + this.username)
      .then(function (response) {
        _this.$alert('登录成功', '提示', {})
        console.info(response.data)
        _this.user = response.data
      })
      .catch(function (error) {
        _this.$alert('您尚未填写信息', '提示', {})
        console.info('dds' + error)
        this.dialogVisible = true
        return false
      })
  }
}
</script>

<style scoped>

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 90px;
  }

  .el-aside {
    background-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 100%;
    left: 0;
    top: 120px;
    bottom: 0;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
    bottom: 0;
    height: 100%;
  }

</style>
