<template>
  <div :type="1006"
       class="qt-ui-waterfall-card-section-css"
       :clipChildren="false"
       :clipPadding="false"
       focusScrollTarget="${isFocusScrollTarget==true}"
       keyName="_id"
       flexStyle="${style}"
       scrollOverride="${scrollOverride}"
       gradientBackground="${style.gradientBackground}"
       :bringFocusChildToFront="true"
       :useAdvancedFocusSearch="true">

    <text-view class="qt-ui-waterfall-card-section-title-css"
               :postDelay="300"
               flexStyle="${titleStyle}"
               :focusable="false" textSize="${titleStyle.fontSize}" text="${title}"/>

    <es-card-container
      cardId="${cardId}"
      @focus="onFocus"
      :clipChildren="false"
      :clipPadding="false"
      :autoRecycle="true"
      focusScale="${cardPlaceHolder.focusScale}"
      focusable="${cardPlaceHolder.focusable}"
      showPlaceHolder="${cardPlaceHolder.enable}"
      placeHolderRadius="${cardPlaceHolder.radius}"
      placeHolderRect="${cardPlaceHolder.rect}"
      flexStyle="${cardStyle}"
      class="qt-ui-waterfall-card-section"/>

  </div>
</template>

<script lang="ts">

import {defineComponent,} from '@vue/runtime-core';
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

export default defineComponent({
  name: 'card-section',
  setup(props, context) {
    const log = useESLog()

    function onFocus(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d('card-section', '------onFocus--------->>>>', e)
      }
      context.emit('focus', e)
    }

    return {
      onFocus
    };
  },
});
</script>

<style scoped>

.qt-ui-waterfall-card-section-css {
  background-color: transparent;
}

.qt-ui-waterfall-card-section {
  background-color: transparent;
}

.qt-ui-waterfall-card-section-title-css {
  width: 1920px;
  height: 60px;
  color: #ffffff;
  background-color: transparent;
}

</style>
