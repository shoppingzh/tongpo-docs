<template>
  <div>
    <p>
      <a-input
        v-model="title"
        placeholder="自定义标题" />
    </p>
    <p>
      <a-button
        type="primary"
        @click="set">设置</a-button>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { setPageTitle } from 'tongpo/lib/dom'

export default {
  setup() {
    const title = ref('')
    const set = () => {
      setPageTitle(title.value)
    }
    return {
      title,
      setPageTitle,

      set
    }
  }
}
</script>

<style>

</style>