import Vue from 'vue';

export default Vue.component('local-offers', () => import(/* webpackChunkName: "local-offers" */ './LocalOffers'));
