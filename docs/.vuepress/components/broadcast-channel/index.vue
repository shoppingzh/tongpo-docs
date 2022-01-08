<template>
  <div>
    <div v-if="!isNewTab">
      <a-button type="link" @click="openNewTab">打开一个新的页面</a-button>
      <a-input v-model="message" type="textarea" :auto-size="{ minRows: 5 }" />
      <div style="margin-top: 10px;">
        <a-button type="primary" @click="send">发送</a-button>
      </div>
    </div>
    <div v-else>
      <p>{{ message ? '接收到消息：' : '等待接收消息：' }}</p>
      {{ message }}
    </div>
  </div>
</template>

<script>
import BroadcastChannel from 'tongpo/lib/broadcast-channel'
import { ref } from '@vue/composition-api'

export default {
  setup(props, ctx) {
    const isNewTab = !!window.opener
    const channel = new BroadcastChannel('test')
    const message = ref('')

    const openNewTab = () => {
      window.open(location.href)
    }
    const send = () => {
      channel.postMessage(message.value)
    }

    if (isNewTab) {
      channel.onMessage(msg => {
        message.value = msg.data
      })
    } else {

    }
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