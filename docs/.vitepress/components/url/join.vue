<template>
  <div>
    <a-input
      v-model="value"
      placeholder="以空格隔开" />
    <div style="margin-top: 10px;">
      {{ convertValue }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { join } from 'tongpo/lib/url'

export default {
  setup(props, ctx) {
    const value = ref('a/ /b c// ///ddd eee')
    const convertValue = computed(() => join(...value.value.split(/\s+/)))
    return {
      value,
      convertValue
    }
  }
}
</script>

<style>

</style>