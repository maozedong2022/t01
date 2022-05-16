<template>
    <div>
         <van-nav-bar title="仿头条-登录"/>  <!--配置了路由要设置挂在点 -->
    </div>
</template>

<script>
export default{
}
</script>

<style lang="less" scoped>
/* 此类名是van-nav-bar组件内根标签 */
//   .van-nav-bar {
//    background-color: #007bff;
//   }
//  此选择器名字是van-nav-bar组件内标签
//  scoped尝试把此选择器后属性选择器匹配当前页面标签 (选不中组件内部的) 
//  lang="less" 当前style标签内是less语法
//  用/deep/就不会被vscode标记红线
//  /deep/ 会把属性选择器加到前面 (用后代选择器的方式往里找匹配的类名)
//  结论: 要修改组件内样式, 如果你用了scoped, 就需要在选择器前/deep/即可 
 /deep/ .van-nav-bar__title {
   color: white; //这里css优先级要比cover.less高
 }


</style>