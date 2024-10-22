<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-list-view">
      <qt-list-view class="list_view" ref="listViewRef" :clipChildren="false" :clipPadding="false" :listData="listData"
                    @item-click="onItemClick"
                    @item-bind="onItemBind" horizontal :padding="'0,0,30,0'" :defaultFocus="defaultFocus"
                    :blockFocusDirections="['left','right']">
        <!-- item -->
        <qt-poster />

        <tv-item
            :type="6"
                 flexStyle="${style}"
                 :focusable="false"
                 :clipChildren="false"
                 class="loop-img-root-css">
          <div flexStyle="${style}"
               :clipChildren="true"
               style="background-color: red">
            <qt-indicator-list-view class="loop-img-list-css" horizontal
                          :clipChildren="true"
                          :clipPadding="true"
                          :focusable="false"
                          flexStyle="${style}" list="${itemList}">
              <qt-view :type="66" flexStyle="${style}" style="background-color: #669966;" name="loop_img_item"
                       :focusable="true" eventClick eventFocus >
                <img class="item-loop-img-css" :postDelay="200" src="${image.img}" :focusable="false"
                     flexStyle="${image.style}" />
                <div duplicateParentState showOnState="focused" style="position: absolute;top: -1px;left: -1px;right: -1px;bottom: -1px; background-color: transparent;border-color: white;border-radius: 9px;border-width: 3px;border-style: solid"/>
              </qt-view>
            </qt-indicator-list-view>
          </div>

        </tv-item>
      </qt-list-view>

    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent, nextTick} from "@vue/runtime-core";
import {ref, reactive, watch, watchEffect} from "vue";
import {QTIListView, QTListViewItem, QTPoster, qtRef} from "@quicktvui/quicktvui3";
import {ElementFlags} from "typescript";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const listViewRef = ref<QTIListView>()
    const cmdListViewRef = ref<QTIListView>()
    let defaultFocus = ref(0)
    let listDataRec: Array<QTListViewItem> = [];
    const listData = qtRef()
    const onESCreate = (params) => {
      let arr: Array<QTListViewItem> = []
      let arr1:any = []
      for (let i = 0; i < 3; i++) {
        let imgSrc = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
        if (i == 1){
          const poster1: QTPoster = {
            type:6,
            style: {
              width: 260,
              height: 320,
            },
            decoration: {
              top: 20,
              left: 20,
              right: 20,
              bottom: 20
            },
            itemList:[{
              type: 66,
              style: {
                width: 260,
                height: 320,
              },
              image: {
                img: 'http://cms.hmon.tv/common/static/file/2024/05/31/ce5b63bc-5f2f-4171-871c-b709b9cb822a.png',
                style: {
                  width: 260,
                  height: 320
                }
              },
            },{
              type: 66,
              style: {
                width: 260,
                height: 320,
              },
              image: {
                img: 'http://cms.hmon.tv/common/static/file/2024/05/31/ce5b63bc-5f2f-4171-871c-b709b9cb822a.png',
                style: {
                  width: 260,
                  height: 320
                }
              },
            }]
          }
          arr1.push(poster1)
        } else {
          const poster: QTPoster = {
            type: 10001,
            focus: {
              enable: true,
              scale: 1.1,
              border: false
            },
            decoration: {
              top: 20,
              left: 20,
              right: 20,
              bottom: 20
            },
            title: {
              text: '主标题' + i,
              enable: true,
              style: {
                width: 260,
              }
            },
            subTitle: {
              text: '副标题' + i,
              enable: true,
              style: {
                width: 260,
              }
            },
            floatTitle: {
              text: '浮动标题',
              enable: true,
              style: {
                width: 260,
              },
              background: {colors: ['#e5000000', '#00000000'], orientation: 4}
            },
            shimmer: {
              enable: true,
            },
            ripple: {
              enable: true,
              style: {
                right: 0,
                bottom: 0,
                marginRight: -12,
              }
            },
            image: {
              src: imgSrc,
              enable: true,
              style: {
                width: 260,
                height: 320
              }
            },
            corner: {
              text: '角标' + i,
              enable: true,
              style: {
                width: 260,
                height: 30
              },
              background: {
                colors: ['#A06419', '#CDA048'],
                cornerRadii4: [0, 8, 0, 8],
                orientation: 2
              }
            },
            style: {
              width: 260,
              height: 320,
            },
            titleStyle: {
              width: 260,
              height: 120,
              marginTop: 320 - 60,
            },
            titleFocusStyle: {width: 260, marginTop: 320 - 100},
          }
          arr1.push(poster)
        }
      }
      listDataRec = listViewRef.value?.setListData(arr1)
      // listData.value = arr
    }

    const onItemClick = () => {
    }
    const onItemBind = () => {
    }
    return {
      listViewRef,
      cmdListViewRef,
      listDataRec,
      defaultFocus,
      listData,
      onESCreate,
      onItemBind,
      onItemClick,
    }
  },
});

</script>

<style scoped>

.loop-img-root-css {
  position: absolute;
  background-color: transparent;
}

.loop-img-list-css {
  background-color: yellow;
}

.item-loop-img-css {
  border-radius: 9px;
  background-color: rgba(255,255,255,0.1);
}

.quick-list-view {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  padding-top: 20px;
  flex-direction: column;
}

.quick-list-view .list_view {
  width: 1800px;
  height: 800px;
  margin-left: 60px;
  background-color: #0D71FF;
}
</style>
