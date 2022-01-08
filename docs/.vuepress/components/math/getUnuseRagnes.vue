<template>
  <div>
    <a-row type="flex" align="middle">
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
      已用列表：
    </p>
    <a-row
      v-for="(item, index) in usedRanges"
      :key="index"
      :gutter="10"
      style="margin-bottom: 10px;">
      <a-col :span="8">
        <a-input
          v-model.number="item.from"
          type="number"
          placeholder="最小值" />
      </a-col>
      <a-col :span="8">
        <a-input
          v-model.number="item.to"
          type="number"
          placeholder="最大值" />
      </a-col>
      <a-col :span="8" align="right">
        <a-button
          v-if="canAdd && index >= usedRanges.length - 1"
          type="primary"
          ghost
          @click="addUsedRange">添加</a-button>
        <a-button
          v-if="usedRanges.length > 1"
          type="danger"
          @click="removeUsedRange(index)">删除</a-button>
      </a-col>
    </a-row>
    <p>
      <a-button
        type="primary"
        @click="calc">计算可用范围</a-button>
    </p>
    <p>
      <a-alert>
        <template #message>
          <p
            v-for="(item, index) in unuseRanges"
            :key="index">
            ({{ index + 1 }}) &nbsp;&nbsp;&nbsp; {{ item.from}} - {{ item.to }}  
          </p>
        </template>
      </a-alert>
    </p>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { getUnuseRagnes } from 'tongpo/lib/math'

function isDigit(val) {
  return val && /^\d+$/.test(val)
}

export default {
  setup() {
    const min = ref(1)
    const max = ref(10)
    const usedRanges = ref([])
    const canAdd = computed(() => {
      const last = usedRanges.value[usedRanges.value.length - 1]
      return isDigit(last.from) && isDigit(last.to)
    })
    const unuseRanges = ref([])

    const addUsedRange = (from, to) => {
      usedRanges.value.push({ from, to })
    }

    const removeUsedRange = (index) => {
      usedRanges.value.splice(index, 1)
    }

    const calc = () => {
      unuseRanges.value = getUnuseRagnes(min.value, max.value, [...usedRanges.value])
    }

    addUsedRange(4, 6)

    return {
      min,
      max,
      usedRanges,
      canAdd,
      unuseRanges,

      addUsedRange,
      removeUsedRange,
      calc
    }
  }
}
</script>

<style>

</style>