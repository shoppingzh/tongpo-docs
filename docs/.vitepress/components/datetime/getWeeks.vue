<template>
  <div>
    <p>
      <a-date-picker
        v-model="beginDate"
        placeholder="请选择开始日期" />
      
      <a-date-picker
        v-model="endDate"
        placeholder="请选择结束日期" />
    </p>
    <p>
      <a-button
        type="primary"
        :disabled="!beginDate || !endDate"
        @click="calc">计算</a-button>
    </p>
    <p>
      <a-alert
        v-for="(days, index) in weeks"
        :key="index"
        style="margin-bottom: 5px;">
        <template #message>
          <div
            v-for="(day, index2) in days"
            :key="index2">
            {{ day.toLocaleDateString() }}  
          </div>
        </template>
      </a-alert>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getWeeks } from 'tongpo/lib/datetime'

export default {
  setup(props, ctx) {
    const beginDate = ref(null)
    const endDate = ref(null)
    const weeks = ref(null)

    const calc = () => {
      weeks.value = getWeeks(beginDate.value, endDate.value)
      console.log(weeks.value)
    }
    
    return {
      beginDate,
      endDate,
      weeks,

      calc
    }
  }
}
</script>

<style>

</style>