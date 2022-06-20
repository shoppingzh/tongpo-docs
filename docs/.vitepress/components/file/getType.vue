<template>
  <div>
    <p>
      <a-button
        type="primary"
        @click="chooseFile">选择文件</a-button>
    </p>
    <p>
      {{ fileType }}
    </p>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { chooseFile as doChooseFile } from 'tongpo/lib/dom'
import { getType } from 'tongpo/lib/file'

export default {
  setup() {
    const file = ref(null)
    const fileType = computed(() => file.value ? getType(file.value.type) : null)
    
    const chooseFile = async() => {
      const files = await doChooseFile()
      file.value = files[0]
    }
    
    return {
      file,
      fileType,

      chooseFile
    }
  }
}
</script>

<style>

</style>
