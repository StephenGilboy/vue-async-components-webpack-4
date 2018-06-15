import Vue from 'vue';
import Vuex from 'vuex';
import { DefaultStore } from './store';
import App from './App.vue';
import LocalOffers from './local-offers';
import BuyAMeal from './buy-a-meal';
import MakeItAMeal from './make-it-a-meal';
Vue.use(Vuex);

const store = new Vuex.Store(DefaultStore);

new Vue({
  el: '#app',
  store,
  components: {
    App,
    'local-offers': LocalOffers,
    'make-it-a-meal': MakeItAMeal,
    'buy-a-meal': BuyAMeal,
  },
  created() {
    this.$store.commit('SET_MESSAGE', { message: 'Hello,' });
    this.$store.commit('SET_NAME', { name: 'Stephen'});
  },
  render: h => h(App),
  template: `<App />`,
});
