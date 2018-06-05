import Vue from 'vue';

export default Vue.component('local-offers', (resolve) => {
  require(['./LocalOffers.vue'], resolve);
});
