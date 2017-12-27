<template>
  <vuf-star :size="this.starSize" :score="this.starScore">
   </vuf-star>
</template>

<script>
export default {
  name: 'doStar',
  data () {
    return {
      starSize: 36,
      starScore: 3.5
    }
  }
}
</script>
