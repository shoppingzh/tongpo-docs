<template>
  <div>
    <a-alert
      v-if="supported != null"
      show-icon
      :type="supported ? 'success' : 'error'"
      :message="supported ? '支持' : '不支持'" />
  </div>
</template>

<script>
import { isSupport } from 'tongpo/lib/media'
import { onMounted, ref } from 'vue'

export default {
  setup(props, ctx) {
    const supported = ref(null)
    onMounted(() => {
      supported.value = isSupport()
    })
    return {
      supported
    }
  }
}
</script>

<style>

</style>