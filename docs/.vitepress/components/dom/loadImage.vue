<template>
  <div>
    <p>
      <a-input
        v-model="src"
        placeholder="图片地址" />
    </p>
    <p>
      <a-button
        type="primary"
        @click="load">加载</a-button>
    </p>
    <p v-if="error || image">
      <a-alert
        :type="error ? 'error' : 'success'">
        <template #message>
          <template v-if="error">
            加载失败！
          </template>
          <template v-else>
            <p>宽：{{ image.width }}</p>
            <p>高：{{ image.height }}</p>
          </template>
        </template>  
      </a-alert>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { loadImage } from 'tongpo/lib/dom'

export default {
  setup() {
    const src = ref(null)
    const image = ref(null)
    const error = ref(null)

    const load = async() => {
      try {
        image.value = await loadImage(src.value)
        console.log(image.value)
        error.value = null
      } catch (err) {
        console.error(err)
        error.value = err
      }
    }
    return {
      src,
      image,
      error,

      load
    }
  }
}
</script>

<style>

</style>