<template>
  <div>
    <p>
      {{ arr }}
    </p>
    <p>
      将索引位置为 &nbsp;
      <a-input
        v-model.number="index"
        type="number"
        style="width: 100px;" />
      &nbsp;的元素移动&nbsp;
      <a-input
        v-model.number="offset"
        type="number"
        placeholder="负值表示向左移动"
        style="width: 200px;" />
    </p>
    <p>
      <a-button
        type="primary"
        @click="move">移动</a-button>
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { move as doMove } from 'tongpo/lib/array'

export default {
  setup() {
    const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const index = ref(null)
    const offset = ref(null)

    const move = () => {
      doMove(arr.value, index.value, offset.value)
    }

    return {
      arr,
      index,
      offset,

      move
    }
  }
}
</script>

<style>

</style>