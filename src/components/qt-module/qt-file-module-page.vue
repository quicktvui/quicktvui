<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-column-css">
        <s-text-view text="快应用根目录下：/file.test文件操作"></s-text-view>
        <div class="es-sdk-content-row-css">
          <s-text-button text="创建文件操作对象" @onButtonClicked="initFile"/>
          <s-text-button text="创建文件" @onButtonClicked="newFile"/>
          <s-text-button text="删除文件" @onButtonClicked="deleteFile"/>
          <s-text-button text="是否存在" @onButtonClicked="existsFile"/>
          <s-text-button text="是否是文件夹" @onButtonClicked="isDirectory"/>
          <s-text-button text="是否是文件" @onButtonClicked="isFile"/>
          <s-text-button text="关闭文件操作" @onButtonClicked="closeFile"/>
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <s-text-view text="扩展屏APP根目录下：/文件夹操作"></s-text-view>
        <div class="es-sdk-content-row-css">
          <s-text-button text="创建文件夹操作对象" @onButtonClicked="initDirectory"/>
          <s-text-button text="是否存在" @onButtonClicked="existsDirectory"/>
          <s-text-button text="创建文件夹" @onButtonClicked="newDirectory"/>
          <s-text-button text="遍历文件夹" @onButtonClicked="listDirectory"/>
          <s-text-button text="关闭文件操作" @onButtonClicked="closeDirectory"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESFile} from "@extscreen/es3-core";

export default defineComponent({
  name: "文件模块",
  setup() {

    let file = null
    let directory = null

    function initFile() {
      file = new ESFile();
      file.newFile('/file_text.test');
    }

    function newFile() {
      file.createNewFile().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    function deleteFile() {
      file.delete().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    function closeFile() {
      file.close().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    function existsFile() {
      file.exists().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    function isDirectory() {
      file.isDirectory().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    function isFile() {
      file.isFile().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    //---------------------------------------------------------
    function initDirectory() {
      //
      directory = new ESFile();
      directory.newFile('/cache');
    }

    function listDirectory() {
      directory.list().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    function existsDirectory() {
      directory.exists().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    function newDirectory() {
      directory.mkdirs().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('创建文件夹操作失败');
        });
    }

    function closeDirectory() {
      directory.close().then(
        (result) => {
          qt.toast.showToast(JSON.stringify(result));
        },
        error => {
          qt.toast.showToast('操作失败');
        });
    }

    return {
      initFile,
      newFile,
      deleteFile,
      closeFile,
      existsFile,
      isDirectory,
      isFile,
      initDirectory,
      listDirectory,
      existsDirectory,
      newDirectory,
      closeDirectory
    }
  },
});

</script>
<style>
</style>
