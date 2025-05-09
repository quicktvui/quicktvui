<template>
  <div
    ref="buttonRef"
    :clipChildren="false"
    :focusable="focusable"
    :enableFocusBorder="focusBorder"
    :focusScale="focusScale"
    @click="onClick"
    name="textButton"
    eventClick
    eventFocus
    @focus="onFocus"
    :style="buttonStyle"
    :class="[
      'quick-button--default',
      size ? 'quick-button--' + size : '',
      {
        'is-disabled-button': disabled,
        'is-circle': circle,
        'is-round': round,
        'is-square': square,
      },
    ]"
  >
    <!-- gradient -->
    <div
      v-if="gradientFocusBackground"
      class="button-gradient-background-css"
      :gradientBackground="gradientFocusBackground"
      :focusable="false"
      showOnState="focused"
    />
    <div
      v-if="gradientSelectedBackground"
      class="button-gradient-background-css"
      :gradientBackground="gradientSelectedBackground"
      :focusable="false"
      showOnState="selected"
    />
    <div
      v-if="gradientBackground"
      class="button-gradient-background-css"
      :gradientBackground="gradientBackground"
      :focusable="false"
      showOnState="normal"
    />

    <!-- -----------------------------icon--------------------------------- -->
    <div
      :duplicateParentState="true"
      :style="iconParentStyle"
      flexStyle="${iconParentStyle}"
      :class="['quick-button-icon-parent', size ? 'quick-button-icon--parent' + size : '']"
      v-if="(icon || focusIcon) && !$slots.default"
    >
      <img
        :style="iconStyle"
        flexStyle="${iconStyle}"
        :duplicateParentState="true"
        :class="[
          'quick-button-icon',
          size ? 'quick-button-icon--' + size : '',
          {
            'is-square-icon': square,
          },
        ]"
        :focusable="false"
        v-if="icon && !$slots.default"
        :src="enableFlexStyle ? '${' + icon + '}' : icon"
        showOnState="normal"
      />

      <img
        :style="focusIconStyle ? focusIconStyle : iconStyle"
        flexStyle="${iconStyle}"
        :class="[
          'quick-button-icon',
          size ? 'quick-button-icon--' + size : '',
          {
            'is-square-icon': square,
          },
        ]"
        :focusable="false"
        :duplicateParentState="true"
        v-if="focusIcon && !$slots.default"
        :src="enableFlexStyle ? '${' + focusIcon + '}' : focusIcon"
        showOnState="focused"
      />
    </div>
    <!-- ------------------------------------------------------------------- -->
    <!-- text -->
    <text-view
      :style="textStyle"
      v-if="enableFlexStyle"
      duplicateParentState
      :class="[
        size ? 'quick-button-text--' + size : '',
        {
          'is-disabled-text': disabled,
          'is-square-text': square,
        },
      ]"
      :focusable="false"
      :text="'${' + text + '}'"
      autoWidth
      autoHeight
    >
    </text-view>
    <span
      :style="textStyle"
      v-else-if="text && !$slots.default"
      duplicateParentState
      :class="[
        size ? 'quick-button-text--' + size : '',
        {
          'is-disabled-text': disabled,
          'is-square-text': square,
        },
      ]"
      :focusable="false"
      >{{ text }}</span
    >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useBaseView from '../base/useBaseView'

export default defineComponent({
  name: 'qt-button',
  props: {
    size: {
      type: String,
      default: 'default',
    },
    itemType: {
      type: Number,
      default: 20000,
    },
    focusBorder: {
      type: Boolean,
      default: false,
    },
    focusScale: {
      type: Number,
      default: 1.08,
    },
    focusable: {
      type: Boolean,
      default: true,
    },
    enableFlexStyle: {
      type: Boolean,
      default: false,
    },
    //---------------------------
    icon: {
      type: String,
      default: null,
    },
    focusIcon: {
      type: String,
      default: null,
    },
    //---------------------------
    text: {
      type: String,
      default: '',
    },
    gradientFocusBackground: {
      type: Object,
      default: () => {},
    },
    gradientSelectedBackground: {
      type: Object,
      default: () => null,
    },
    gradientBackground: {
      type: Object,
      default: () => null,
    },
    // size: String,
    disabled: Boolean,
    circle: Boolean,
    round: Boolean,
    square: Boolean,
    buttonStyle: Object,
    textStyle: Object,
    iconStyle: Object,
    focusIconStyle: Object,
    iconParentStyle: Object,
  },
  emits: ['focus', 'click'],
  setup(props, context) {
    const buttonRef = ref()
    const focused = ref(false)

    function onFocus(e) {
      focused.value = e.isFocused
      context.emit('focus', e.isFocused)
    }

    function onClick(e) {
      context.emit('click')
    }

    return {
      buttonRef,
      focused,
      onFocus,
      onClick,
      ...useBaseView(buttonRef),
    }
  },
})
</script>

<style scoped src="../theme/button.css" />
