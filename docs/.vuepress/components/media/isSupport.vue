<template>
  <div>
    <a-alert
      show-icon
      :type="supported ? 'success' : 'error'"
      :message="supported ? '支持' : '不支持'" />
  </div>
</template>

<script>
import { isSupport } from 'tongpo/lib/media'

export default {
  setup(props, ctx) {
    const supported = isSupport()
    return {
      supported
    }
  }
}
</script>

<style>

</style>