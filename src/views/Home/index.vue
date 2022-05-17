<template>
    <div>
        <div>
            <van-nav-bar>
                <template v-slot:left>
                    <img class="logo" src="@/assets/logo.png" alt="" />
                </template>
                <template v-slot:right>
                    <!-- 坑: postcss只能翻译style里css样式代码, 标签内行内样式它无法转换px转rem, 所以需要自己手动计算 -->
                    <van-icon name="search" size="0.48rem" color="#fff" @click="" />
                </template>
            </van-nav-bar>

        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';

export default {
    methods: {
        // onClickLeft() {
        //   Toast('返回');
        // },
        // onClickRight() {
        //   Toast('按钮');
        // },
    },
};
</script>
<style  scoped lang="less">
.logo {
    width: 100px;
    height: 30px;
}
</style>
