<template>
  <div class="quick-ui-root-css">
    <s-title-view class="quick-ui-content-title-css" text="使用初探"/>
    <div class="quick-ui-content-divider-css"/>
    <div class="qt-nav-bar-get-start" :clipChildren="false">

      <qt-nav-bar
        ref="navBar"
        class="qt-nav-bar-horizontal-css"
        @tab-select="onTabSelect">
      </qt-nav-bar>

      <qt-nav-bar
        ref="navBarV"
        :horizontal="false"
        :item-gap="10"
        class="qt-nav-bar-vertical-css"
        @tab-select="onTabSelect">
      </qt-nav-bar>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {QTINavBar, QTNavBar, QTNavBarItemType, QTNavBarItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'navbar-使用初探',
  setup(props, context) {
    const navBar = ref<QTINavBar>()
    const navBarV = ref<QTINavBar>()
    const onESCreate = (params) => {
      //--------------------------------------------------------
      let horizontalItemList: Array<QTNavBarItem> = []
      for (let i = 0; i < 10; i++) {
        let tabItem: QTNavBarItem = {
          type: QTNavBarItemType.QT_NAV_BAR_ITEM_TYPE_TEXT,
          text: 'Tab:' + i,
          titleSize: 20,
          decoration: {
            left: 40,
            right: 20,
          }
        }
        horizontalItemList.push(tabItem)
      }
      const horizontalNavBar: QTNavBar = {
        data: horizontalItemList
      }
      navBar.value?.init(horizontalNavBar)

      //--------------------------------------------------------
      let verticalItemList: Array<QTNavBarItem> = []
      for (let i = 0; i < 10; i++) {
        let tabItem: QTNavBarItem = {
          type: QTNavBarItemType.QT_NAV_BAR_ITEM_TYPE_TEXT,
          text: 'Tab:' + i,
          titleSize: 20,
          style: {
            width: 100,
            height: 60
          }
        }
        verticalItemList.push(tabItem)
      }
      const verticalNavBar: QTNavBar = {
        data: verticalItemList
      }
      navBarV.value?.init(verticalNavBar)
    }
    const onTabSelect = (e) => {
    }

    return {
      navBar,
      navBarV,
      onESCreate,
      onTabSelect
    }
  },
});

</script>

<style>
.qt-nav-bar-get-start {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  padding-top: 20px;
  padding-left: 60px;
  padding-right: 60px;
}

.qt-nav-bar-get-start .list_view {
  width: 1800px;
  margin-bottom: 36px;
  margin-top: 18px;
}

.qt-nav-bar-horizontal-css {
  width: 1920px;
  height: 100px;
}

.qt-nav-bar-vertical-css {
  width: 100px;
  height: 800px;
}
</style>
