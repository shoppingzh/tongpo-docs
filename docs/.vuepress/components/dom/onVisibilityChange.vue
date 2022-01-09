<template>
  <div>
    离开页面：{{ leaveTimes }}次
  </div>
</template>

<script>
import { onVisibilityChange } from 'tongpo/lib/dom'
import { onMounted, onUnmounted, ref } from '@vue/composition-api'

export default {
  setup() {
    const leaveTimes = ref(0)

    onMounted(() => {
      const destroy = onVisibilityChange(visible => {
        if (!visible) {
          leaveTimes.value++
        }
      })
      onUnmounted(() => {
        destroy()
      })
    })
    return {
      leaveTimes
    }
  }
}
</script>

<style>

</style>