<template>
  <div>
    <a-input
      v-model="value"
      type="textarea"
      :auto-size="{ minRows: 5 }" />
    <div style="margin-top: 10px;">
      <a-alert v-if="error" type="error">
        <template #message>
          {{ error }}
        </template>
      </a-alert>
      <template v-else>
        {{ convertValue }}
      </template>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { parseQueryParams } from 'tongpo/lib/url'

export default {
  setup(props, ctx) {
    const value = ref(JSON.stringify({
      name: 'xpzheng',
      age: 22
    }, null, 4))
    const error = ref(null)
    const convertValue = computed(() => {
      try {
        const o = JSON.parse(value.value)
        error.value = null
        return parseQueryParams(o)
      } catch(err) {
        error.value = err
      }
    })
    return {
      value,
      error,
      convertValue
    }
  }
}
</script>

<style>

</style>