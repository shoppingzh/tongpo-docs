<template>
  <div>
    <div v-if="!isNewTab">
      <p>
        <a-button type="link" @click="openNewTab">打开一个新的页面</a-button>
      </p>
      <a-input v-model="message" type="textarea" :auto-size="{ minRows: 5 }" />
      <div style="margin-top: 10px;">
        <a-button type="primary" @click="send">发送</a-button>
      </div>
    </div>
    <div v-else>
      <p>{{ message ? '接收到消息：' : '等待接收消息：' }}</p>
      <div>
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import BroadcastChannel from 'tongpo/lib/broadcast-channel'
import { onMounted, ref } from 'vue'

export default {
  setup(props, ctx) {
    const isNewTab = ref(false)
    const message = ref('')
    let channel = null

    const openNewTab = () => {
      window.open(location.href)
    }
    const send = () => {
      channel.postMessage(message.value)
    }

    onMounted(() => {
      channel = new BroadcastChannel('test')
      isNewTab.value = !!window.opener
      if (isNewTab.value) {
        channel.onMessage(msg => {
          message.value = msg.data
        })
      }
    })

    return {
      isNewTab,
      message,

      openNewTab,
      send
    }
  }
}
</script>

<style>

</style>