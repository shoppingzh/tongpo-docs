<template>
  <div>
    <p>
      <a-alert v-if="isStart" type="info" message="试着3秒内不操作鼠标与键盘吧~" />
      <a-button v-else type="primary" @click="start">开始检测</a-button>
    </p>
    <a-modal v-model="noAction">
      3秒内没有发生操作哦！请任意发生一次操作，此弹窗将关闭。
    </a-modal>
  </div>
</template>

<script>
import { detectAction } from 'tongpo/lib/dom'
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  setup() {
    const isStart = ref(false)
    const noAction = ref(false)

    const start = () => {
      isStart.value = true
      const destroy = detectAction(() => {
        noAction.value = false
      }, () => {
        noAction.value = true
      }, 3)
      onUnmounted(() => {
        destroy()
      })
    }

    return {
      isStart,
      noAction,

      start
    }
  }
}
</script>

<style>

</style>