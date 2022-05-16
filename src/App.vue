<template>
  <div>
    <div>
      tt2
    </div>
  </div>
</template>

<script>
import { allChannelListAPI } from '@/api'

export default {

  async created () {
    try {
      console.log(1)
      const res = await allChannelListAPI()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style lang="less">
</style>
