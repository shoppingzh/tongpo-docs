<template>
  <div>
    <p>
      <a-input
        v-model="time"
        placeholder="如 01:12:30" />
    </p>
    <p>
      <a-button
        type="primary"
        @click="calc">计算</a-button>
    </p>
    <a-alert v-if="seconds != null" :message="seconds" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { getSeconds } from 'tongpo/lib/datetime'

export default {
  setup() {
    const time = ref('01:20:30')
    const seconds = ref(null)
    
    const calc = () => {
      seconds.value = getSeconds(time.value)
    }

    return {
      time,
      seconds,

      calc
    }
  }
}
</script>

<style>

</style>