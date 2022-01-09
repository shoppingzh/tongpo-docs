<template>
  <div>
    <p>
      <a-input
        v-model="a"
        type="textarea"
        :auto-size="{ minRows: 5 }" />
    </p>
    <p>
      <a-input
        v-model="b"
        type="textarea"
        :auto-size="{ minRows: 5 }" />
    </p>
    <p>
      <a-button
        type="primary"
        @click="merge">合并对象</a-button>
    </p>
    <p>
      {{ result }}
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mergeWithNil } from 'tongpo/lib/object'

export default {
  setup() {
    const a = ref(JSON.stringify({
      name: 'xpzheng',
      age: null
    }, null, 4))
    const b = ref(JSON.stringify({
      name: 'jack',
      age: 20
    }, null, 4))
    const result = ref(null)

    const merge = () => {
      const o = {}
      mergeWithNil(o, JSON.parse(a.value))
      mergeWithNil(o, JSON.parse(b.value))
      result.value = o
    }

    return {
      a,
      b,
      result,

      merge
    }
  }
}
</script>

<style>

</style>