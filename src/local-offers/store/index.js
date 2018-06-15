const LocalOffersStore = {
  namespaced: true,
  state: {
    scrollMessage: '',
  },
  getters: {
    scrollMessage: state => state.scrollMessage,
  },
  mutations: {
    SET_SCROLL_MESSAGE: (state, { message }) => state.scrollMessage = message
  },
  actions: { },
}

export { LocalOffersStore };
