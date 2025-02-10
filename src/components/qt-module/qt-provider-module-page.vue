<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'当前数据：' + currentData"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-text-button text="插入数据" @onButtonClicked="insertData"/>
        <s-text-button text="查询数据" @onButtonClicked="queryData"/>
        <s-text-button text="更新数据" @onButtonClicked="updateData"/>
        <s-text-button text="删除数据" @onButtonClicked="deleteData"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "ContentProvider模块",
  setup() {
    const testView = ref()
    const currentData = ref('')
    const uri = 'content://com.extscreen.mytest4.UserContentProvider.provider/user'
    const uri2 = 'content://stbauthinfo/authentication/username'
    const insertDatas = {
      uid: 4,
      first_name: "yuyuyu",
      age: 50,
      money: 453.143,
    }
    const queryDatas = {
      uid: 0,
      first_name: "1",
      age: 0,
      money: 0.00,
    }
    const emptyData = {
      display_name: '0',
      data1: '0',
    }

    const onESCreate = (params) => {

    }

    function insertData() {
      qt.provider.insert(uri, insertDatas).then(
        value => {
          let result = value.result;
          let message = value.message;
          qt.toast.showToast('插入结果：' + result + '---message:' + message);
        },
        error => {

        }
      )
    }

    function queryData() {
      qt.provider.query(uri2).then(
        value => {
          let result = value.result;
          let message = value.message;
          let data = value.data;
          qt.toast.showToast('查询结果：' + result + '----message:' + message);
          currentData.value = JSON.stringify(data);
        },
        error => {

        }
      )
    }

    function updateData() {

    }

    function deleteData() {

    }

    const onESDestroy = () => {

    }

    return {
      onESCreate,
      onESDestroy,
      currentData,
      insertData,
      queryData,
      updateData,
      deleteData,
      testView
    }
  },
});

</script>
<style>

.es-test-view-css {
  width: 200px;
  height: 200px;
}
</style>
