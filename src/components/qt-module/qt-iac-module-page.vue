<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="发送给所有应用消息A" @onButtonClicked="onSendMessageAButtonClicked"/>
        <s-text-button text="注册消息接受者A" @onButtonClicked="onRegisterReceiverAButtonClicked"/>
        <s-text-button text="取消注册消息接受者A" @onButtonClicked="onUnregisterReceiverAButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="发送给所有应用消息B" @onButtonClicked="onSendMessageBButtonClicked"/>
        <s-text-button text="注册消息接受者B" @onButtonClicked="onRegisterReceiverBButtonClicked"/>
        <s-text-button text="取消注册消息接受者B" @onButtonClicked="onUnregisterReceiverBButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="给八阿哥发送消息C" @onButtonClicked="onSendMessageCButtonClicked"/>
        <s-text-button text="注册消息接受者C" @onButtonClicked="onRegisterReceiverCButtonClicked"/>
        <s-text-button text="取消注册消息接受者C" @onButtonClicked="onUnregisterReceiverCButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="给七阿哥发送消息D" @onButtonClicked="onSendMessageDButtonClicked"/>
        <s-text-button text="注册消息接受者D" @onButtonClicked="onRegisterReceiverDButtonClicked"/>
        <s-text-button text="取消注册消息接受者D" @onButtonClicked="onUnregisterReceiverDButtonClicked"/>
      </div>
    </div>
    <s-text-view :text="intentText"></s-text-view>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {
  ESIACMessage,
  ESIACReceiver,
} from "@extscreen/es3-core";
import {ref} from "vue";
import {ESLogLevel} from "@extscreen/es3-core";

const TAG = 'ESIACPage'

export default defineComponent({
  name: "应用间通信模块",
  setup() {

    const intentText = ref('')

    const receiverAMessageFilter = {
      action: [
        'android.intent.action.TEST_BC_A',
      ],
    }
    const receiverBMessageFilter = {
      action: [
        'android.intent.action.TEST_BC_B',
      ],
    }
    const receiverCMessageFilter = {
      action: [
        'android.intent.action.TEST_BC_C',
      ]
    }
    const receiverDMessageFilter = {
      action: [
        'com.huan.appstore.intent.action.ext',
      ]
    }

    const messageReceiverA: ESIACReceiver = {

      onReceive(message: ESIACMessage) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------messageReceiverA--onReceive--->>>" + message)
        }
        intentText.value = JSON.stringify(message);
      }
    }

    const messageReceiverB: ESIACReceiver = {

      onReceive(message: ESIACMessage) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------messageReceiverB--onReceive--->>>" + message)
        }
        intentText.value = JSON.stringify(message);
      }
    }

    const messageReceiverC: ESIACReceiver = {

      onReceive(message: ESIACMessage) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------messageReceiverC--onReceive--->>>" + message)
        }
        intentText.value = JSON.stringify(message);
      }
    }

    const messageReceiverD: ESIACReceiver = {

      onReceive(message: ESIACMessage) {
        if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
          qt.log.d(TAG, "------messageReceiverD--onReceive--->>>" + message)
        }
        intentText.value = JSON.stringify(message);
      }
    }

    function onSendMessageAButtonClicked() {
      let message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_A'
      }
      qt.iac.sendMessage(message)
    }

    function onSendMessageBButtonClicked() {
      let message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_B',
      }
      qt.iac.sendMessage(message)
    }

    function onSendMessageCButtonClicked() {
      let message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_C',
        package: 'es.test.eight'
      }
      qt.iac.sendMessage(message)
    }

    function onSendMessageDButtonClicked() {
      let message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_D',
        package: 'es.test.seven'
      }
      qt.iac.sendMessage(message)
    }

    function onRegisterReceiverAButtonClicked() {
      qt.iac.registerReceiver(messageReceiverA, receiverAMessageFilter)
    }

    function onRegisterReceiverBButtonClicked() {
      qt.iac.registerReceiver(messageReceiverB, receiverBMessageFilter)
    }

    function onRegisterReceiverCButtonClicked() {
      qt.iac.registerReceiver(messageReceiverC, receiverCMessageFilter)
    }

    function onRegisterReceiverDButtonClicked() {
      qt.iac.registerReceiver(messageReceiverD, receiverDMessageFilter)
    }

    function onUnregisterReceiverAButtonClicked() {
      qt.iac.unregisterReceiver(messageReceiverA)
    }

    function onUnregisterReceiverBButtonClicked() {
      qt.iac.unregisterReceiver(messageReceiverB)
    }

    function onUnregisterReceiverCButtonClicked() {
      qt.iac.unregisterReceiver(messageReceiverC)
    }

    function onUnregisterReceiverDButtonClicked() {
      qt.iac.unregisterReceiver(messageReceiverD)
    }

    return {
      intentText,
      onSendMessageAButtonClicked,
      onSendMessageBButtonClicked,
      onSendMessageCButtonClicked,
      onSendMessageDButtonClicked,
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
