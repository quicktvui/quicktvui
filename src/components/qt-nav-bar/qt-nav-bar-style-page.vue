<template>
  <div class="quick-ui-root-css">
    <s-title-view class="quick-ui-content-title-css" :text="this.$options.name"/>
    <div class="quick-ui-content-divider-css"/>
    <qt-nav-bar
      ref="navBar"
      className="qt-nav-bar-list-css"
      class="qt-nav-bar-css"
      @tab-select="onTabSelect">
    </qt-nav-bar>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {QTINavBar, QTNavBar, QTNavBarItemType, QTNavBarItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '设置样式',
  setup(props, context) {
    const navBar = ref<QTINavBar>()
    const onESCreate = (params) => {
      //--------------------------------------------------------
      let horizontalItemList: Array<QTNavBarItem> = []
      for (let i = 0; i < 10; i++) {
        let tabItem: QTNavBarItem = {
          type: QTNavBarItemType.QT_NAV_BAR_ITEM_TYPE_TEXT,
          text: 'Tab:' + i,
          titleSize: 20,
          style: {
            width: 200,
            height: 300,
          },
        }
        horizontalItemList.push(tabItem)
      }
      const horizontalNavBar: QTNavBar = {
        data: horizontalItemList
      }
      navBar.value?.init(horizontalNavBar)

    }
    const onTabSelect = (e) => {
    }

    return {
      navBar,
      onESCreate,
      onTabSelect
    }
  },
});

</script>

<style>
.qt-nav-bar-list-css {
  width: 1920px;
  height: 300px;
}

.qt-nav-bar-css {
  width: 1920px;
  background-color: palevioletred;
}

</style>
