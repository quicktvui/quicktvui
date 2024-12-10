<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="发送广播A" @onButtonClicked="onSendBroadcastAButtonClicked"/>
        <s-text-button text="注册广播接受者A" @onButtonClicked="onRegisterReceiverAButtonClicked"/>
        <s-text-button text="取消注册广播接受者A" @onButtonClicked="onUnregisterReceiverAButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="发送广播B" @onButtonClicked="onSendBroadcastBButtonClicked"/>
        <s-text-button text="注册广播接受者B" @onButtonClicked="onRegisterReceiverBButtonClicked"/>
        <s-text-button text="取消注册广播接受者B" @onButtonClicked="onUnregisterReceiverBButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="发送广播C" @onButtonClicked="onSendBroadcastCButtonClicked"/>
        <s-text-button text="注册广播接受者C" @onButtonClicked="onRegisterReceiverCButtonClicked"/>
        <s-text-button text="取消注册广播接受者C" @onButtonClicked="onUnregisterReceiverCButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="发送广播D" @onButtonClicked="onSendBroadcastDButtonClicked"/>
        <s-text-button text="注册广播接受者D" @onButtonClicked="onRegisterReceiverDButtonClicked"/>
        <s-text-button text="取消注册广播接受者D" @onButtonClicked="onUnregisterReceiverDButtonClicked"/>
      </div>
    </div>
    <s-text-view :text="intentText"></s-text-view>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESBroadcastReceiver, ESIntentFilter} from "@extscreen/es3-core";
import {ref} from "vue";
import {ESLogLevel} from "@extscreen/es3-core";

const TAG = 'BroadcastPage'

export default defineComponent({
  name: "广播模块",
  setup() {

    const intentText = ref('')

    const receiverAIntentFilter = {
      action: [
        'android.intent.action.TEST_BC_A',
      ],
      // scheme: ['package'],
    }
    const receiverBIntentFilter = {
      action: [
        'android.intent.action.TEST_BC_B',
      ],
      // scheme: ['package'],
    }
    const receiverCIntentFilter = {
      action: [
        'android.intent.action.TEST_BC_C',
      ]
    }
    const receiverDIntentFilter = {
      action: [
        'com.huan.appstore.intent.action.ext',
      ]
    }

    const broadcastReceiverA: ESBroadcastReceiver = {

      onReceive(intent: ESIntentFilter) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------BroadcastReceiverA--onReceive--->>>" + intent)
        }
        intentText.value = JSON.stringify(intent);
      }
    }

    const broadcastReceiverB: ESBroadcastReceiver = {

      onReceive(intent: ESIntentFilter) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------BroadcastReceiverB--onReceive--->>>" + intent)
        }
        intentText.value = JSON.stringify(intent);
      }
    }

    const broadcastReceiverC: ESBroadcastReceiver = {

      onReceive(intent: ESIntentFilter) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------BroadcastReceiverC--onReceive--->>>" + intent)
        }
        intentText.value = JSON.stringify(intent);
      }
    }

    const broadcastReceiverD: ESBroadcastReceiver = {

      onReceive(intent: ESIntentFilter) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------BroadcastReceiverD--onReceive--->>>" + intent)
        }
        intentText.value = JSON.stringify(intent);
      }
    }

    function onSendBroadcastAButtonClicked() {
      let paramsArray = [
        ['-a', 'android.intent.action.TEST_BC_A'],
        ['--es', 'stringKey', 'stringValue'],
      ]
      qt.broadcast.sendBroadcast(paramsArray)
    }

    function onSendBroadcastBButtonClicked() {
      let paramsArray = [
        ['-a', 'android.intent.action.TEST_BC_B'],
        ['--ez', 'booleanKey', true],
        ['--ei', 'intKey', 1000],
      ]
      qt.broadcast.sendBroadcast(paramsArray)
    }

    function onSendBroadcastCButtonClicked() {
      let paramsArray = [
        ['-a', 'android.intent.action.TEST_BC_C'],
      ]
      qt.broadcast.sendBroadcast(paramsArray)
    }

    function onSendBroadcastDButtonClicked() {
      let paramsArray = [
        ['-a', 'com.huan.appstore.intent.action.ext'],
      ]
      qt.broadcast.sendBroadcast(paramsArray)
    }

    function onRegisterReceiverAButtonClicked() {
      qt.broadcast.registerReceiver(broadcastReceiverA, receiverAIntentFilter)
        .then((() => {
            qt.toast.showToast("注册广播成功！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "---A---registerReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "---A---registerReceiver---error-->>>" + error)
            }
          })
    }

    function onRegisterReceiverBButtonClicked() {
      qt.broadcast.registerReceiver(broadcastReceiverB, receiverBIntentFilter)
        .then((() => {
            qt.toast.showToast("注册广播成功！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--B----registerReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--B----registerReceiver---error-->>>" + error)
            }
          })
    }

    function onRegisterReceiverCButtonClicked() {
      //传null,接收不到广播
      qt.broadcast.registerReceiver(broadcastReceiverC, receiverCIntentFilter)
        .then((() => {
            qt.toast.showToast("注册广播成功！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--C----registerReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--C----registerReceiver---error-->>>" + error)
            }
          })
    }

    function onRegisterReceiverDButtonClicked() {
      qt.broadcast.registerReceiver(broadcastReceiverD, receiverDIntentFilter)
        .then((() => {
            qt.toast.showToast("注册广播成功！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--D----registerReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--D----registerReceiver---error-->>>" + error)
            }
          })
    }

    function onUnregisterReceiverAButtonClicked() {
      qt.broadcast.unregisterReceiver(broadcastReceiverA, receiverAIntentFilter)
        .then((() => {
            qt.toast.showToast("取消注册广播成功！")
            intentText.value = ''
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--A----unregisterReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("取消注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--A----unregisterReceiver---error-->>>" + error)
            }
          })
    }

    function onUnregisterReceiverBButtonClicked() {
      qt.broadcast.unregisterReceiver(broadcastReceiverB, receiverBIntentFilter)
        .then((() => {
            intentText.value = ''
            qt.toast.showToast("取消注册广播成功！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--B----unregisterReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("取消注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "--B----unregisterReceiver---error-->>>" + error)
            }
          })
    }

    function onUnregisterReceiverCButtonClicked() {
      qt.broadcast.unregisterReceiver(broadcastReceiverC, receiverCIntentFilter)
        .then((() => {
            intentText.value = ''
            qt.toast.showToast("取消注册广播成功！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "---C---unregisterReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("取消注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "---C---unregisterReceiver---error-->>>" + error)
            }
          })
    }

    function onUnregisterReceiverDButtonClicked() {
      qt.broadcast.unregisterReceiver(broadcastReceiverD, receiverDIntentFilter)
        .then((() => {
            intentText.value = ''
            qt.toast.showToast("取消注册广播成功！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "---D---unregisterReceiver---success-->>>")
            }
          }),
          error => {
            qt.toast.showToast("取消注册广播失败！")
            if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
              qt.log.d(TAG, "---D---unregisterReceiver---error-->>>" + error)
            }
          })
    }

    return {
      intentText,
      onSendBroadcastAButtonClicked,
      onSendBroadcastBButtonClicked,
      onSendBroadcastCButtonClicked,
      onSendBroadcastDButtonClicked,
      onRegisterReceiverAButtonClicked,
      onRegisterReceiverBButtonClicked,
      onRegisterReceiverCButtonClicked,
      onRegisterReceiverDButtonClicked,
      onUnregisterReceiverAButtonClicked,
      onUnregisterReceiverBButtonClicked,
      onUnregisterReceiverCButtonClicked,
      onUnregisterReceiverDButtonClicked,
    }
  },
});

</script>
<style>
</style>
