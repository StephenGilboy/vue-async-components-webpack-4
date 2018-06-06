import Vue from 'vue';

export default Vue.component('buy-a-meal', () => import(/* webpackChunkName: "buy-a-meal" */ './BuyAMeal'));