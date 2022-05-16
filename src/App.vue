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
    console.log(1)
    const res = await allChannelListAPI()
    console.log(res)
  }
}

</script>

<style lang="less">
</style>
