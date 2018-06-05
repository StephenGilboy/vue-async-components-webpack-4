import Vue from 'vue';

export default Vue.component('make-it-a-meal', (resolve) => {
  require(['./MakeItAMeal.vue'], resolve);
});