<template>
  <qt-view class="mine-record" :clipChildren="false" ref="mine_record">
    <qt-view class="es_record_tab" :clipChildren="false">
      <qt-text class="es_record_title"
               text="全部记录"></qt-text>
      <qt-list-view class="record_tab_list" ref="record_tab_list" @item-focused="onTabChange" :endHintEnabled="false"
                    :clipChildren="false" :blockFocusDirections="['down','left']"
                    :nextFocusName="{right: 'type1'}">
        <qt-view class="record_tab_list_type">
          <qt-button class="text-button-class" text="text"
                     :text-style="{fontSize: '36px',marginLeft:'40px',color: 'rgba(255, 255, 255, 0.5)','focus-color': 'black','select-color': 'white'}"
                     :focusable="true" :focusScale="1.1" :enable-flex-style="true"></qt-button>
        </qt-view>
      </qt-list-view>
    </qt-view>
    <qt-view class="es_record_top_tip" :clipChildren="false" :focusable="false">
      <qt-view v-if="data.editMode" class="es_record_top_tip_view1">
        <qt-text class="es_record_top_tip_view_text"
                 text="按【返回键】退出"
                 :focustextable="false"></qt-text>
        <qt-button text="清空" @click="onClearContent" :-style="{fontSize: '30px'}" round
                   class="es_record_top_tip_view_btn" :focusScale="1" :focusable="true">
        </qt-button>
      </qt-view>
      <qt-view v-else class="es_record_top_tip_view2" :focusable="false">
        <qt-text class="es_record_top_tip_view_text"
                 text="按【菜单键】或长按【OK键】管理记录"></qt-text>
      </qt-view>
    </qt-view>
    <!-- loading-start -->
    <qt-view v-show="data.showLoading" class="es_record_loading" :focusable="false">
      <qt-loading-view style="width: 100px;height: 100px;"/>
    </qt-view>
    <!-- loading-end -->
    <qt-grid-view v-if="data.isShowGridview" class="es_ecord_content_list" ref="es_ecord_content_list"
                  name="es_ecord_content_list"
                  :spanCount="5" :areaWidth="1512" padding="0,0,46,16" @item-click="onItemClick"
                  @item-bind="onItemBind" :clipChildren="false" :blockFocusDirections="['right']" :useDiff="true"
                  :listenBoundEvent="true">
      <template v-slot:header>
        <qt-view type="1003" name="type0" ref="type0" class="type0" :focusable="false">
          <text-view :ellipsizeMode="2" :focusable="false" :duplicateParentState="true" :fontSize="38"
                     gravity="centerVertical" :lines="1"
                     class="tit0" text="${assetTitle}" :paddingRect="[20,20,0,6]" :showOnState="['normal','selected']"/>
        </qt-view>
      </template>
      <qt-view type="1" name="type1" ref="type1" class="type1" :focusable="true" :enableFocusBorder="true"
               focusScale="1.1" eventClick eventFocus :clipChildren="false">
        <img class="img-block" src="${audioCoverV}" :focusable="false"/>
        <text-view :focusable="false" :ellipsizeMode="2" :duplicateParentState="true" :fontSize="30"
                   gravity="centerVertical" :lines="1"
                   class="tit" text="${assetTitle}" :paddingRect="[16,0,0,0]" :showOnState="['normal','selected']"/>
        <text-view :focusable="false" :ellipsizeMode="3" :duplicateParentState="true" :fontSize="30"
                   gravity="centerVertical" :lines="1" :maxLines="1"
                   class="tit2" text="${assetTitle}" :paddingRect="[16,0,0,0]" :showOnState="['focused']"/>
        <!-- 编辑状态下的item样式-start -->
        <qt-view showIf="${editMode==true}" class="es_record_content_list_item_edit" :duplicateParentState="true">
          <qt-view :duplicateParentState="true" class="es_record_content_list_item_edit_focus_bg" showOnState="focused"
                   :gradientBackground="{ colors: ['#F5F5F5', '#F5F5F5'], cornerRadius: 99, orientation: 6 }">
          </qt-view>
          <qt-view :duplicateParentState="true" class="es_record_content_list_item_edit_focus_bg" showOnState="normal"
                   :gradientBackground="{ colors: ['#1AFFFFFF', '#1AFFFFFF'], orientation: 6, cornerRadius: 100 }">
          </qt-view>
          <qt-view :duplicateParentState="true" class="es_record_content_list_item_edit_focus_bg" showOnState="selected"
                   :gradientBackground="{ colors: ['#1AFFFFFF', '#1AFFFFFF'], orientation: 6, cornerRadius: 100 }">
          </qt-view>
          <text-view :duplicateParentState="true" class="es_record_content_list_edit_text_new" gravity="center"
                     :fontSize="36" :ellipsizeMode="2" text="${editText}"/>
        </qt-view>
        <!-- 编辑状态下的item样式-end -->
      </qt-view>
      <!-- 分页样式 -->
      <template v-slot:loading>
        <qt-view class="loading" type="1002" name="loading" ref="loading" :focusable="false">
          <qt-loading-view color="#409eff" style="height: 30px;width: 30px;" :focusable="false"/>
        </qt-view>
      </template>
    </qt-grid-view>
    <!-- 内容为空-start -->
    <qt-view class="mine_empty_view" v-if="data.isShowEmptyView" :focusable="false">
      <img :style="{width: emptyObj.width, height: emptyObj.height}" :src="emptyObj.src"/>
      <qt-text class="mine_empty_text"
               :text="emptyObj.msg" :style="{fontSize: '30px'}"></qt-text>
    </qt-view>
    <!-- 内容为空-end -->
  </qt-view>
</template>

<script lang="ts">

import {defineComponent, reactive, ref, nextTick} from "vue";
import {useESToast, ESKeyEvent} from "@extscreen/es3-core";
import {Native} from "@extscreen/es3-vue";
import {useESRouter} from "@extscreen/es3-router";

export default defineComponent({
  name: 'gridview-我的记录',
  setup(props, context) {
    const router = useESRouter()
    const toast = useESToast()
    const mine_record = ref()
    const record_tab_list = ref()
    const es_ecord_content_list = ref()
    let listDataRec: {} | null = {}
    let gridDataRec: any
    let leftTabData = [
      {text: '最近播放', openPage: false},
      {text: '我的收藏', openPage: false},
      {text: '已购内容', openPage: false}
    ]
    let timer: any = -1
    let isShowGridTimer: any = -1
    let showEmptyTimer: any = -1
    const data = reactive({
      leftTabDefaultIndex: 0 as number,
      currentTabIndex: -1 as number,
      isOneTime: false as boolean,
      isShowEmptyView: false as boolean,
      editMode: false as boolean,
      showLoading: false as boolean,
      isShowGridview: false as boolean,
      sortLength: 0 as number,
      centerKeyDown: 0 as number,
    })
    let todayList: any = []
    let sevenDayList: any = []
    let earlierList: any = []
    let content_list: any = []
    let todayTime = new Date(new Date().toLocaleDateString()).getTime()
    let emptyObj = {width: '612px', height: '381px', src: '', msg: ''}
    const onESCreate = (params) => {
      if (params.position) {
        data.leftTabDefaultIndex = params.position
      } else {
        data.leftTabDefaultIndex = 0
      }
      if (timer) {
        clearTimeout(timer)
      }
      nextTick(() => {
        listDataRec = record_tab_list.value.init(leftTabData)
        timer = setTimeout(() => {
          record_tab_list.value.setItemFocused(data.leftTabDefaultIndex)
        }, 200)
      })
      data.isOneTime = false
    }
    //左侧tab切换事件
    const onTabChange = (e) => {
      if (e.position == data.currentTabIndex) return
      data.isShowEmptyView = false
      if (e.hasFocus == true) {
        data.editMode = false;
        data.showLoading = true
        data.isShowGridview = false
        gridDataRec = null
        if (isShowGridTimer) clearTimeout(isShowGridTimer)
        if (showEmptyTimer) clearTimeout(showEmptyTimer)
        switch (e.position) {
          case 0:
            data.currentTabIndex = 0;
            data.sortLength = 0
            todayList = []
            sevenDayList = []
            earlierList = []
            emptyObj.src = require('../../assets/history.png').default;
            emptyObj.msg = '还没有最近播放哦~';
            isShowGridTimer = setTimeout(() => {
              data.isShowGridview = true;
              setTimeout(() => {
                getListData();
              }, 300)
            }, 400)
            break;
          case 1:
            data.currentTabIndex = 1;
            emptyObj.src = require('../../assets/collect.png').default;
            emptyObj.msg = '还没有收藏内容哦~'
            isShowGridTimer = setTimeout(() => {
              data.isShowGridview = true;
              setTimeout(() => {
                getListData();
              }, 300)
            }, 400)
            break;
          case 2:
            data.currentTabIndex = 2;
            emptyObj.src = require('../../assets/no_order.png').default;
            emptyObj.msg = '没有已购内容噢~';
            data.isShowEmptyView = true;
            data.showLoading = false
            break;
        }
      }
    }
    //获取数据
    const getListData = () => {
      todayList = []
      sevenDayList = []
      earlierList = []
      content_list = []
      let id = 0
      for (let i = 0; i < 10; i++) {
        let assetTitle = data.currentTabIndex == 0 ? '最近播放' + i : data.currentTabIndex == 1 ? '我的收藏' + i : '已购内容' + i
        let editText = data.currentTabIndex == 1 ? '取消收藏' : '删除'
        let audioCoverV = 'https://i.328888.xyz/2023/01/04/W49yq.md.jpeg'
        let obj = {
          type: 1,
          id: id++,
          assetTitle: assetTitle,
          decoration: {left: 20, top: 20, bottom: 16},
          audioCoverV: audioCoverV,
          editMode: data.editMode,
          editText: editText,
          updateTime: "2023-04-21 15:43:57"
        }
        content_list.push(obj)
      }
      if (data.currentTabIndex == 0) {
        for (let i = 0; i < content_list.length; i++) {
          let item = content_list[i]
          if ((Number(new Date(item.updateTime))) >= (Number(todayTime))) {
            todayList.push(item);
          }//今天
          else if ((Number(new Date(item.updateTime))) >= (Number(getLastSevenDayTime()))) {
            sevenDayList.push(item);
          }//一周内
          else {
            earlierList.push(item);
          }//更早
        }
        if (todayList.length > 0) todayList.unshift({type: '1003', assetTitle: '今天'})
        if (sevenDayList.length > 0) sevenDayList.unshift({type: '1003', assetTitle: '一周内'})
        if (earlierList.length > 0) earlierList.unshift({type: '1003', assetTitle: '更早'})
        content_list = []
        content_list.push(...todayList, ...sevenDayList, ...earlierList)
      }
      if (content_list.length > 0) {
        gridDataRec = es_ecord_content_list.value.init(content_list)
      }
      if (content_list.length < 1 || !content_list || content_list == undefined) {
        data.isShowEmptyView = true
      }
      data.showLoading = false
    }
    const onKeyDown = (keyEvent: ESKeyEvent) => {
      switch (keyEvent.keyCode) {
        case 82: //菜单键按下
          if (gridDataRec === null || gridDataRec === undefined || gridDataRec.length === 0 || data.currentTabIndex == 2) return true;
          blockFocus()
          data.editMode = !data.editMode;
          gridDataRec.forEach((el) => {
            if (el.type) {
              el.editMode = data.editMode;
            }
          })
          unblockFocus()
          break;
        case 23: //长按确认键
          data.centerKeyDown++;
          if (data.centerKeyDown > 4 && !data.editMode) {
            if (gridDataRec === null || gridDataRec === undefined || gridDataRec.length === 0 || data.currentTabIndex == 2) return true;
            blockFocus()
            data.editMode = true;
            gridDataRec.forEach((el) => {
              if (el.type) {
                el.editMode = data.editMode;
              }
            })
            unblockFocus()
          }
          break;
      }
      return false
    }
    const onBackPressed = () => {
      if (data.editMode) {
        data.editMode = false;
        gridDataRec.forEach((el) => {
          if (el.type) {
            el.editMode = data.editMode;
          }
        })
        return
      }
      router.back()
    }
    //清空事件
    const onClearContent = () => {
      switch (data.currentTabIndex) {
        case 0:
          // deleteAllHistory().then((res) => {
          //   listDataRec.splice(0)
          //   data.isShowEmptyView = false
          //   data.editMode = false
          // })
          break;
        case 1:
          // deleteAllCollect().then((res) => {
          //   listDataRec.splice(0)
          //   data.isShowEmptyView = false
          //   data.editMode = false
          // })
          break;
        case 2:

          break;
      }
    }
    const onItemClick = () => {
    }
    const onItemBind = () => {
    }
    //获取近七天日期
    const getLastSevenDayTime = () => {
      const start = new Date(new Date().toLocaleDateString());
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return start.getTime();
    }
    //锁住焦点
    const blockFocus = () => {
      Native.callUIFunction(mine_record.value, 'blockRootFocus', []);
    }
    //解开焦点
    const unblockFocus = () => {
      Native.callUIFunction(mine_record.value, 'unBlockRootFocus', []);
    }

    return {
      mine_record,
      record_tab_list,
      es_ecord_content_list,
      listDataRec,
      gridDataRec,
      data,
      emptyObj,
      onClearContent,
      onTabChange,
      onESCreate,
      onItemClick,
      onItemBind,
      getLastSevenDayTime,
      onKeyDown,
      onBackPressed,
      blockFocus,
      unblockFocus
    }
  },
});

</script>


<style>
.mine-record {
  width: 1920px;
  height: 1080px;
  background-color: #252930;
}

.mine-record .es-record {
  width: 1920px;
  height: 1080px;
  background-color: #252930;
}

.mine-record .es_record_tab {
  width: 340px;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
  height: 1080px;
}

.mine-record .es_record_title {
  width: 340px;
  font-size: 46px;
  margin-top: 80px;
  margin-left: 20px;
  font-weight: 500;
  text-align: center;
  color: white;
}

.mine-record .record_tab_list {
  width: 340px;
  height: 600px;
  margin-top: 46px;
}

.mine-record .record_tab_list_type {
  width: 340px;
  height: 108px;
  background-color: transparent;
}

.mine-record .record_tab_list .text-button-class {
  width: 340px;
  height: 108px;
  background-color: transparent;
}


.mine-record .es_record_top_tip {
  position: absolute;
  right: 68px;
  top: 0;
}

.mine-record .es_record_top_tip_view1 {
  flex-direction: row;
  align-items: center;
  top: 40px;
}

.mine-record .es_record_top_tip_view2 {
  top: 60px;
}

.mine-record .es_record_top_tip_view_btn {
  width: 176px;
  height: 68px;
  margin-left: 34px;
}

.mine-record .es_record_top_tip_view_text {
  font-size: 30px;
  color: rgba(255, 255, 255, .5);
  text-align: right;
}

.mine-record .es_ecord_content_list {
  width: 1512px;
  height: 900px;
  background-color: transparent;
  margin-left: 58px;
  width: 1580px;
  height: 800px;
  padding-bottom: 60px;
  position: absolute;
  left: 340px;
  top: 110px;
}

.mine-record .es_ecord_content_list .type2 {
  width: 1512px;
  height: 60px;
}

.mine-record .es_ecord_content_list .type0 {
  background-color: transparent;
  width: 1512px;
  height: 86px;
}

.mine-record .es_ecord_content_list .tit0 {
  width: 1512px;
  height: 86px;
}

.mine-record .es_ecord_content_list .type1 {
  width: 260px;
  height: 320px;
  focus-background-color: white;
  border-radius: 8px;
}

.mine-record .es_ecord_content_list .img-block {
  width: 260px;
  height: 260px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
}

.mine-record .es_ecord_content_list .tit {
  width: 260px;
  height: 60px;
  color: #666;
  position: absolute;
  top: 260px;
}

.mine-record .es_ecord_content_list .tit2 {
  width: 260px;
  height: 60px;
  color: #000;
  position: absolute;
  top: 260px;
}

.mine-record .es_record_content_list_item_edit {
  position: absolute;
  height: 320px;
  width: 260px;
  top: 0;
  left: 0;
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.mine-record .es_record_content_list_item_edit_focus_bg {
  position: absolute;
  top: 0;
  width: 176px;
  height: 68px;
  background-color: transparent;
}

.mine-record .es_record_content_list_edit_text_new {
  height: 68px;
  width: 126px;
  color: white;
  focus-color: #000000;
  numberOfLines: 1;
  background-color: transparent;
}

.mine-record .loading {
  width: 1512px;
  margin-left: 68px;
  height: 140px;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
}

.mine-record .es_record_loading {
  justify-content: center;
  align-items: center;
  position: absolute;
  align-self: center;
  width: 1560px;
  height: 1080px;
  left: 380px;
  background-color: #252930;
  z-index: 9999;
}

.mine-record .mine_empty_view {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 190px;
  position: absolute;
  width: 1580px;
  height: 600px;
  top: 40px;
  left: 340px;
}

.mine-record .mine_empty_text {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 26px;
}
</style>
