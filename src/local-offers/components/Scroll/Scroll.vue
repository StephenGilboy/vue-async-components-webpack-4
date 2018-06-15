<template>
  <div class="scroller">
    <marquee>{{msg}}</marquee>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data() {
    return {
      msg: 'IT WORKS!',
    };
  },
}
</script>

<style scoped>
  .scroller {
    width: 100px;
  }
</style>

