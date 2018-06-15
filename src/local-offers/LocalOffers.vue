<template>
  <div>
    <h3>Local Offers</h3>
    <my-scroller></my-scroller>
  </div>
</template>

<script>
import { scroll } from './components/Scroll';
import { LocalOffersStore } from './store';
const storeName = 'localoffers';

export default {
  name: 'local-offers',
  created() {
    const store = this.$store;
    if (!(store && store.state && store.state[storeName])) {
      store.registerModule(storeName, LocalOffersStore);
    }
    store.commit('localoffers/SET_SCROLL_MESSAGE', { message: 'It works,' });
  },
}
</script>

<style scoped>

</style>
