<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="false">
      <s-text-view text="不同尺寸"></s-text-view>
      <div class="es-sdk-content-row-css" :clipChildren="false">
        <qt-button text="默认"></qt-button>
        <qt-button size="mini" class="text-button-class" text="超小"></qt-button>
        <qt-button size="small" class="text-button-class" text="小"></qt-button>
        <qt-button size="medium" class="text-button-class" text="中"></qt-button>
        <qt-button size="large" class="text-button-class" text="大"></qt-button>
        <qt-button class="text-button-class" text="自定义按钮样式" :style="{backgroundColor: '#FF0022', height: '100px'}">
        </qt-button>
      </div>
      <div class="es-sdk-content-row-css">
        <div class="es-sdk-content-column-css">
          <s-text-view text="禁用状态"></s-text-view>
          <qt-button size="medium" disabled text="不可用" class="text-button-class"></qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="圆角按钮"></s-text-view>
          <qt-button size="medium" round text="圆角" class="text-button-class"></qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="渐变背景"></s-text-view>
          <qt-button
            size="medium" class="text-button-class" round
            text="渐变背景"
            :gradientFocusBackground="{colors:['#10F5F5','#AA79F0'], cornerRadius: 100, orientation: 3}"
            :gradient-background="{colors:['#FF2648','#FF6F44'], cornerRadius: 100 ,orientation: 3}">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="渐变背景"></s-text-view>
          <qt-button
            size="large" class="text-button-class"
            text="渐变背景large"
            :gradientFocusBackground="{colors:['#10F5F5','#AA79F0'] , orientation: 4}"
            :gradient-background="{colors:['#FF2648','#FF6F44'] ,orientation: 6}">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="自定义文字样式"></s-text-view>
          <qt-button size="medium" disabled
                     text="自定义文字样式"
                     :text-style="{width:'100px', backgroundColor:'#FF8022', fontSize: '20px'}"
                     class="text-button-class">
          </qt-button>
        </div>
      </div>
      <div class="es-sdk-content-row-css">
        <div class="es-sdk-content-column-css">
          <s-text-view text="自定义按钮内容"></s-text-view>
          <qt-button style="width: 400px;background-color: green; margin: 20px">
            <div class="es-sdk-content-row-css">
              <span style="font-size: 20px; color: red">自定义内容1</span>
              <span style="font-size: 30px; color: #7415B1">自定义内容1</span>
            </div>
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="图标"></s-text-view>
          <qt-button size="medium" text="图标"
                     :icon="imageA"
                     :focusIcon="imageB"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="图标"></s-text-view>
          <qt-button size="small" text="图标"
                     :icon="imageA"
                     :focusIcon="imageB"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="图标"></s-text-view>
          <qt-button size="mini" text="图标"
                     :icon="imageA"
                     :focusIcon="imageB"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="网络图标"></s-text-view>
          <qt-button size="medium" text="网络图标" round
                     icon="http://qcloudimg.a311.ottcn.com/project/zero/img_test/2021/41/30bae62fda-5150-4ec9-93e2-86d24b32309d.jpg"
                     focusIcon="http://qcloudimg.a311.ottcn.com/project/zero/img_test/2021/41/30f0ce3f83-9cb7-4593-ad5c-911f223db6f1.jpg"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="selected图标"></s-text-view>
          <qt-button size="medium" text="选中图标" selected
                     :selected-icon="imageC"
                     :selected-focus-icon="imageD"
                     class="text-button-class">
          </qt-button>
        </div>
      </div>
      <div class="es-sdk-content-row-css">
        <div class="es-sdk-content-column-css">
          <s-text-view text="边框"></s-text-view>
          <qt-button :focus-border="true"
                     size="medium" text="边框"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="自定义图标样式"></s-text-view>
          <qt-button size="large" text="自定义图标样式"
                     :icon-style="{width: '50px', height: '50px'}"
                     :focus-icon-style="{backgroundColor: '#FF9933', width: '20px', height: '20px'}"
                     :icon="imageA"
                     :focusIcon="imageB"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="正方形"></s-text-view>
          <qt-button square
                     text="正方形"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="正方形"></s-text-view>
          <qt-button square
                     text="正方形"
                     :icon="imageA"
                     :focusIcon="imageB"
                     class="text-button-class">
          </qt-button>
        </div>
        <div class="es-sdk-content-column-css">
          <s-text-view text="自定义正方形内容"></s-text-view>
          <qt-button square
                     class="text-button-class">
            <div class="es-sdk-content-row-css">
              <span style="font-size: 20px; color: red">自定义内容1</span>
              <span style="font-size: 30px; color: #7415B1">自定义内容1</span>
            </div>
          </qt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {useESRouter} from "@extscreen/es3-router";

import imageA from '../../../src/assets/add-circle.png'
import imageB from '../../../src/assets/ashbin.png'
import imageC from '../../../src/assets/ic_radio_selected.png'
import imageD from '../../../src/assets/ic_radio_selected_focus.png'

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const router = useESRouter()
    console.log('-------使用初探------->>>>')
    return {
      imageA,
      imageB,
      imageC,
      imageD
    }
  },
});
</script>

<style>
.text-button-class {
  /*width: 400px;*/
  /*height: 150px;*/
  margin: 20px;
  /*border-radius: 20px;*/
}

.text-button-class-icon {
  width: 80px;
  height: 80px;
}

.es-sdk-sample-row-css {
  width: 1920px;
  background-color: #40b883;
  height: 200px;
}

</style>
