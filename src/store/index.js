const DefaultStore = {
  state: {
    message: '',
    name: '',
  },
  getters: {
    message: state => state.message,
    name: state => state.name,
  },
  mutations: {
    SET_MESSAGE: (state, { message }) => state.message = message,
    SET_NAME: (state, { name }) => state.name = name,
  },
  actions: {
  },
};

export { DefaultStore };
