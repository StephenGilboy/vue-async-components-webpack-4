<template>
  <div class="full-width center-content">
    <h1>{{msg}}</h1>
    <div class="async-components">
      <div class="async-component">
        <button @click="toggleLocalOffers">Toggle Local Offers</button>
        <div v-if="useLocalOffers">
          <local-offers></local-offers>
        </div>
      </div>
      <div class="async-component">
        <button @click="toggleMiam">Toggle Make it a Meal</button>
        <div v-if="useMiam">
          <make-it-a-meal></make-it-a-meal>
        </div>
      </div>
      <div class="async-component">
        <button @click="toggleBuyaMeal">Toggle Buy a Meal</button>
        <div v-if="useBuyaMeal">
          <buy-a-meal></buy-a-meal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello, Stephen',
      useLocalOffers: false,
      useMiam: false,
      useBuyaMeal: false,
    };
  },
  methods: {
    toggleLocalOffers() {
      this.useLocalOffers = !this.useLocalOffers;
    },
    toggleMiam() {
      this.useMiam = !this.useMiam;
    },
    toggleBuyaMeal() {
      this.useBuyaMeal = !this.useBuyaMeal;
    },
  },
  computed: {
    localOffersComponent() {
      if (!this.useLocalOffers) return '';
      return 'local-offers';
    },
  }
}
</script>

<style scoped>
  .full-width {
    width: 100%;
  }

  .center-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .async-components {
    display: flex;
    flex-direction: row;
  }

  .async-component {
    width: 40%;
    margin: 20px;
  }
</style>

