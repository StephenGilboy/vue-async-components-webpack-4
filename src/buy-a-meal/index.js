import Vue from 'vue';

export default Vue.component('buy-a-meal', (resolve) => {
  require(['./BuyAMeal.vue'], resolve);
});