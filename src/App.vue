<template>
  <div id="app">
    <vue-particles
     style="position: absolute; width:100%; heigth:100%"
      color="#dedede"
      particleOpacity="0.9"
      particlesNumber="90"
      shapeType="circle"
      particleSize="7"
      linesColor="#0000ff"
      linesWidth="1"
      lineLinked="true"
      lineOpacity="0.4"
      linesDistance="150"
      moveSpeed="3"
      hoverEffect="true"
      hoverMode="grab"
      clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <router-view style="postion:absolute"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html, body, #app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:100%;
  margin:0;
  padding:0;
  height: 100%;
}
.el-container{
  padding: 0px;
  margin: 0px;
  height: 100%;
}
</style>
