<template>
  <div>
    <a-input v-model="value" placeholder="输入网址" />
    <div v-if="value && value.trim()" style="margin-top: 12px;">
      <a-alert v-if="!convertValue" message="解析失败" type="error" />
      <div v-else>
        <div
          v-for="(value, key) in convertValue"
          :key="key">
          <strong>{{ key }}：</strong>{{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { parse } from 'tongpo/lib/url'

export default {
  setup(props, ctx) {
    const value = ref('https://www.google.com:80/a/b/c?name=xpzheng&age=20#hello')
    const convertValue = computed(() => parse(value.value))
    const result = computed(() => {
      if (!convertValue.value) return '解析失败'
      return JSON.stringify(convertValue.value, null, 2)
    })
    return {
      value,
      convertValue,
      result
    }
  }
}
</script>

<style>

</style>
