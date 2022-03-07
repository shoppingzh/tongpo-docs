<template>
  <div>
    <a-button
      :loading="loading"
      type="primary"
      size="small"
      @click="get">获取</a-button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { getProvinceCity } from 'tongpo/lib/amap'
import { Modal } from 'ant-design-vue'

export default {
  setup() {
    const loading = ref(false)
    const result = ref(null)

    const get = async() => {
      try {
        loading.value = true
        result.value = await getProvinceCity()
        Modal.success({
          title: '获取成功',
          content: JSON.stringify(result.value, null, 4)
        })
      } finally {
        loading.value = false
      }
    }

    return {
      loading,
      result,
      get
    }
  }
}
</script>

<style>

</style>
