<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-view text="Boolean:"></s-text-view>
        <s-text-view :text="booleanValue"></s-text-view>
        <s-text-view text="Int:"></s-text-view>
        <s-text-view :text="intValue"></s-text-view>
        <s-text-view text="Long:"></s-text-view>
        <s-text-view :text="longValue"></s-text-view>
        <s-text-view text="String:"></s-text-view>
        <s-text-view :text="stringValue"></s-text-view>
        <s-text-view text="Array:"></s-text-view>
        <s-text-view :text="arrayValue"></s-text-view>
        <s-text-view text="Map:"></s-text-view>
        <s-text-view :text="mapValue"></s-text-view>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
        <s-text-button text="getBoolean" @onButtonClicked="onGetBooleanButtonClicked"/>
        <s-text-button text="getInt" @onButtonClicked="onGetIntButtonClicked"/>
        <s-text-button text="getLong" @onButtonClicked="onGetLongButtonClicked"/>
        <s-text-button text="getString" @onButtonClicked="onGetStringButtonClicked"/>
        <s-text-button text="getArray" @onButtonClicked="onGetArrayButtonClicked"/>
        <s-text-button text="getMap" @onButtonClicked="onGetMapButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="putBoolean" @onButtonClicked="onPutBooleanButtonClicked"/>
        <s-text-button text="putInt" @onButtonClicked="onPutIntButtonClicked"/>
        <s-text-button text="putLong" @onButtonClicked="onPutLongButtonClicked"/>
        <s-text-button text="putString" @onButtonClicked="onPutStringButtonClicked"/>
        <s-text-button text="putArray" @onButtonClicked="onPutArrayButtonClicked"/>
        <s-text-button text="putMap" @onButtonClicked="onPutMapButtonClicked"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {ESSharedDataMode} from "@extscreen/es3-core";

export default defineComponent({
  name: '共享数据',
  setup() {
    const booleanValue = ref(false)
    const intValue = ref(0)
    const longValue = ref(0)
    const stringValue = ref('')
    const arrayValue = ref([])
    const mapValue = ref({})


    const shareDataParams = {
      packageName: "debug",
      secretKey: "111111111"
    }

    function onGetBooleanButtonClicked() {
      qt.shareData.getBoolean(shareDataParams, "booleanKey", false)
        .then(value => {
            booleanValue.value = value;
          },
          error => {

          }
        );
    }

    function onGetIntButtonClicked() {
      qt.shareData.getInt(shareDataParams, "intKey", 0)
        .then(value => {
            intValue.value = value;
          },
          error => {

          }
        );
    }

    function onGetLongButtonClicked() {
      qt.shareData.getLong(shareDataParams, "longKey", 0)
        .then(value => {
            longValue.value = value;
          },
          error => {

          }
        );
    }

    function onGetStringButtonClicked() {
      qt.shareData.getString(shareDataParams, "stringKey", "")
        .then(value => {
            stringValue.value = value;
          },
          error => {

          }
        );
    }

    function onGetArrayButtonClicked() {
      qt.shareData.getArray(shareDataParams, "arrayKey", [])
        .then(value => {
            arrayValue.value = value;
          },
          error => {

          }
        );
    }

    function onGetMapButtonClicked() {
      qt.shareData.getMap(shareDataParams, "mapKey", null)
        .then(value => {
            mapValue.value = value;
          },
          error => {

          }
        );
    }

    //--------------------------------------------------------------------------------------
    function onPutBooleanButtonClicked() {
      qt.shareData.putBoolean(shareDataParams, "booleanKey", true,
        ESSharedDataMode.ES_SHARED_DATA_MODE_PRIVATE)
        .then(value => {
            qt.toast.showToast("putSharedBoolean success");
          },
          error => {
            qt.toast.showToast("putSharedBoolean error");
          }
        );

    }

    function onPutIntButtonClicked() {
      qt.shareData.putInt(shareDataParams, "intKey", 22,
        ESSharedDataMode.ES_SHARED_DATA_MODE_PRIVATE)
        .then(value => {
            qt.toast.showToast("putSharedInt success");
          },
          error => {
            qt.toast.showToast("putSharedInt error");
          }
        );
    }

    function onPutLongButtonClicked() {
      qt.shareData.putLong(shareDataParams, "longKey", 22,
        ESSharedDataMode.ES_SHARED_DATA_MODE_PRIVATE)
        .then(value => {
            qt.toast.showToast("putSharedLong success");
          },
          error => {
            qt.toast.showToast("putSharedLong error");
          }
        );
    }

    function onPutStringButtonClicked() {
      qt.shareData.putString(shareDataParams, "stringKey", "22",
        ESSharedDataMode.ES_SHARED_DATA_MODE_PRIVATE)
        .then(value => {
            qt.toast.showToast("putSharedString success");
          },
          error => {
            qt.toast.showToast("putSharedString error");
          }
        );
    }

    function onPutArrayButtonClicked() {
      qt.shareData.putArray(shareDataParams, "arrayKey", [22],
        ESSharedDataMode.ES_SHARED_DATA_MODE_PRIVATE)
        .then(value => {
            qt.toast.showToast("putSharedArray success");
          },
          error => {
            qt.toast.showToast("putSharedArray error");
          }
        );
    }

    function onPutMapButtonClicked() {

      const map = new Map<string, string>()
      map.set("mapKey", "mapValue")

      qt.shareData.putMap(shareDataParams, "mapKey", map,
        ESSharedDataMode.ES_SHARED_DATA_MODE_PRIVATE)
        .then(value => {
            qt.toast.showToast("putSharedMap success");
          },
          error => {
            qt.toast.showToast("putSharedMap error");
          }
        );
    }

    return {
      booleanValue,
      intValue,
      longValue,
      stringValue,
      arrayValue,
      mapValue,
      onGetBooleanButtonClicked,
      onGetIntButtonClicked,
      onGetLongButtonClicked,
      onGetStringButtonClicked,
      onGetArrayButtonClicked,
      onGetMapButtonClicked,
      onPutBooleanButtonClicked,
      onPutIntButtonClicked,
      onPutLongButtonClicked,
      onPutStringButtonClicked,
      onPutArrayButtonClicked,
      onPutMapButtonClicked,
    }
  },
});

</script>

<style>
</style>
