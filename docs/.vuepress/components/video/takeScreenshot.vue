<template>
  <div>
    <p>
      <video
        ref="video"
        src="./flower.webm"
        controls />
    </p>
    <p>
      <a-input
        v-model.number="width"
        type="number"
        placeholder="宽度" />
    </p>
    <p>
      <a-input
        v-model.number="height"
        type="number"
        placeholder="高度" />
    </p>
    <p>
      <a-button
        type="primary"
        @click="screenshot">视频截图</a-button>
    </p>
    <p v-if="image">
      <img :src="image" style="max-width: auto;">
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { takeScreenshot } from 'tongpo/lib/video'
import { Modal } from 'ant-design-vue'

export default {
  setup() {
    const video = ref(null)
    const image = ref(null)
    const width = ref(null)
    const height = ref(null)

    const screenshot = async() => {
      try {
        const blob = await takeScreenshot(video.value, 'image/png', null, width.value, height.value)
        image.value && URL.revokeObjectURL(image.value)
        image.value = URL.createObjectURL(blob)
      } catch (err) {
        console.error(err)
        Modal.error({
          content: err
        })
      }
    }
    return {
      video,
      image,
      width,
      height,

      screenshot
    }
  }
}
</script>

<style lang="stylus" scoped>
  video {
    width: 600px;
    height: 300px;
    object-fit: contain;
    background-color: rgba(0, 0, 0, .85);
  }
</style>