import Vue from 'vue';

export default Vue.component('make-it-a-meal', () => import(/* webpackChunkName: "make-it-a-meal" */ './MakeItAMeal'));