<template>
  <div class="scroller">
    <marquee>{{msg}}</marquee>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  computed: {
    msg() {
      return `${this.$store.getters['localoffers/scrollMessage']} ${this.$store.getters.name}`;
    }
  }
}
</script>

<style scoped>
  .scroller {
    width: 100px;
  }
</style>

