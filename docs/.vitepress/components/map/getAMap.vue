<template>
  <div>
    <a-alert message="请打开控制台查看" />
  </div>
</template>

<script>
import { getAMap } from 'tongpo/lib/amap'
export default {
  setup() {
    getAMap().then(AMap => {
      console.log(AMap)
    })
  }
}
</script>

<style>

</style>