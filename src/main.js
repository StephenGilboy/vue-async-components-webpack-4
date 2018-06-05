import Vue from 'vue';
import App from './App.vue';
import LocalOffers from './local-offers';
import MakeItAMeal from './make-it-a-meal';
import BuyAMeal from './buy-a-meal';

new Vue({
  el: '#app',
  components: {
    App,
    'local-offers': LocalOffers,
    'make-it-a-meal': MakeItAMeal,
    'buy-a-meal': BuyAMeal,
  },
  render: h => h(App),
  template: `<App />`,
});