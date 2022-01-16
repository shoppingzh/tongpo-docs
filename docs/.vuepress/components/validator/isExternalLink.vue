<template>
  <div>
    <p>
      <a-input
        v-model="link"
        placeholder="请输入链接" />
    </p>
    <p>
      <a-alert
        v-if="pass != null"
        :type="pass ? 'success' : 'error'"
        :message="pass ? '通过' : '不通过'" />
    </p>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import { isExternalLink } from 'tongpo/lib/validator'

export default {
  setup(props, ctx) {
    const link = ref(null)
    const pass = ref(null)

    watch(link, newVal => {
      if (!newVal) return (pass.value = null)
      pass.value = isExternalLink(newVal)
    })

    return {
      link,
      pass
    }
  }
}
</script>

<style>

</style>