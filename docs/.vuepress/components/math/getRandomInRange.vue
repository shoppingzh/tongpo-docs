<template>
  <div>
    <a-row type="flex" align="middle" style="margin-bottom: 10px;">
      <a-col :span="2" align="center">从</a-col>
      <a-col :span="10">
        <a-input
          v-model.number="min"
          type="number"
          placeholder="最小值" />
      </a-col>
      <a-col :span="2" align="center">到</a-col>
      <a-col :span="10">
        <a-input
          v-model.number="max"
          type="number"
          placeholder="最大值" />
      </a-col>
    </a-row>
    <p>
      <a-button
        type="primary"
        @click="calc">计算随机值</a-button>
    </p>
    <a-alert v-if="value" type="success" :message="value"></a-alert>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { getRandomInRange } from 'tongpo/lib/math'

export default {
  setup() {
    const min = ref(1)
    const max = ref(10)
    const value = ref(null)

    const calc = () => {
      value.value = getRandomInRange(min.value, max.value)
    }

    return {
      min,
      max,
      value,

      calc
    }
  }
}
</script>

<style>

</style>