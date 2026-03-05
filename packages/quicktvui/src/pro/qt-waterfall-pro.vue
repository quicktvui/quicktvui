<template>
  <qt-waterfall
    ref="waterfallRef"
    :style="{
      width: size.width,
      height: size.height,
      backgroundColor: backgroundColor,
    }"
    :useDiff="true"
  >
    <template v-slot:section>
      <qt-vue-section
        v-for="(section, index) in vueSectionList"
        :key="index"
        :type="section.type"
        :style="section.style"
      >
        <slot :name="section._id" :type="section.type" />
      </qt-vue-section>
    </template>
  </qt-waterfall>
</template>
<script lang="ts" setup>
import { QTIWaterfall } from 'src/waterfall/core/QTIWaterfall'
import { ref, onMounted, computed, watch } from 'vue'
import { Size, VueSectionProp } from './types/ProTypes'
import { QTWaterfall } from 'src/waterfall/core/QTWaterfall'
import { QTWaterfallSection } from 'src/waterfall/core/QTWaterfallSection'
defineOptions({
  name: 'qt-waterfall-pro',
})
const waterfallRef = ref<QTIWaterfall>()
const VUE_SECTION_TYPE_START_INDEX = 100001
const props = defineProps({
  size: {
    type: Object as () => Size,
    default: () => ({
      width: 1920,
      height: 1080,
    }),
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
  vueSections: {
    type: Array as () => VueSectionProp[],
    default: () => [],
  },
})
const vueSectionList = computed(() => {
  return props.vueSections.map((section, index) => ({
    _id: section.slotName,
    type: VUE_SECTION_TYPE_START_INDEX + index,
    style: {
      height: props.vueSections[index].height,
      width: props.size.width,
    },
    itemList: [],
  }))
})
onMounted(() => {
  const waterfallData: QTWaterfall = {
    width: props.size.width,
    height: props.size.height,
  }
  waterfallRef.value?.init(waterfallData)
  setSectionList()
})
function setSectionList() {
  const sectionList: QTWaterfallSection[] = []
  sectionList.push(...vueSectionList.value)
  console.log('sectionList:', sectionList)
  waterfallRef.value?.setSectionList(sectionList)
}
watch(
  () => props.vueSections,
  () => {
    setSectionList()
  }
)
</script>
