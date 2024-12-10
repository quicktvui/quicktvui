<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-view :text="'阿里支付'"></s-text-view>
      <s-text-button text="initAliPaySDK" @onButtonClicked="aliPayInit"/>
      <s-text-button text="createAliOrder" @onButtonClicked="createAliOrder"/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-view :text="'海信支付'"></s-text-view>
      <s-text-button text="initSDK" @onButtonClicked="initHXSDK"/>
      <s-text-button text="checkToken" @onButtonClicked="checkToken"/>
      <s-text-button text="isLoginState" @onButtonClicked="isLoginState"/>
      <s-text-button text="showUrl" @onButtonClicked="showUrl"/>
      <s-text-button text="loginDevice" @onButtonClicked="loginDevice"/>
      <s-text-button text="setPayParams" @onButtonClicked="setPayParams"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {EventBus, Native} from "@extscreen/es3-vue";
import {onMounted, onUnmounted} from "vue";
import {useESToast} from "@extscreen/es3-core";
import error from "../../views/error.vue";

export default defineComponent({
  name: "支付模块",
  setup() {
    const toast = useESToast();
    onMounted(() => {
      EventBus.$on('onTokenUserInfo', onTokenUserInfo);
      EventBus.$on('onPayError', onPayError);
      EventBus.$on('onUrlLoad', onUrlLoad);
    })

    onUnmounted(() => {
      EventBus.$off('onTokenUserInfo', onTokenUserInfo);
      EventBus.$off('onPayError', onPayError);
      EventBus.$off('onUrlLoad', onUrlLoad);
    })

    function aliPayInit() {
      Native.callNative('ESAliPayModule', 'initAliPaySDK', '123456', 'asdf');
    }

    function createAliOrder() {
      Native.callNative('ESAliPayModule', 'createAliOrder', '123456', 'asdf');
    }

    function initHXSDK() {
      Native.callNative('ESHXPayModule', 'initHXPaySDK', '1194013570', 'ogprmpb3pgtjmrx0vxukv24n16m94jag', 'F88C49ADAB30F3B9C1235BCD74A5DC08', '', 101);
    }

    function checkToken() {
      Native.callNative('ESHXPayModule', 'checkToken');
    }

    function isLoginState() {
      Native.callNativeWithPromise('ESHXPayModule', 'isLoginState').then(
        value => {
          toast.showToast('登录状态:' + value);
        },
        error => {

        }
      );
    }

    function showUrl() {
      Native.callNative('ESHXPayModule', 'showUrl', true);
    }

    function loginDevice() {
      Native.callNative('ESHXPayModule', 'loginDevice');
    }

    function setPayParams() {
      Native.callNative('ESHXPayModule', 'setPayParams', 'fanshu', 1, '1', '牛奶', '伊利牛奶', '10.5', 'https://www.baidu.com', '123456');
    }

    //----------------回调------------------

    function onTokenUserInfo(data) {
      toast.showToast('data:' + JSON.stringify(data));
    }

    function onPayError(data) {
      toast.showToast('code:' + data.code + '  message:' + data.message);
    }

    function onUrlLoad(data) {
      toast.showToast('url:' + data);
    }

    return {
      aliPayInit,
      createAliOrder,
      initHXSDK,
      checkToken,
      isLoginState,
      showUrl,
      loginDevice,
      setPayParams
    }
  },
});

</script>

<style scoped>

</style>
