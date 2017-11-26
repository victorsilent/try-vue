const mutations = {
  LOAD_CONTACTS: (state, value) => {
    state.usersList = value; // eslint-disable-line no-param-reassign
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading; // eslint-disable-line no-param-reassign
  },
  CLEAR_CONTACTS_STATE: (state) => {
    state.usersList = []; // eslint-disable-line no-param-reassign
  },
  GET_SEARCH: (state, contact) => {
    state.messageRequest = { // eslint-disable-line no-param-reassign
      message: 'Usuário resgatado com sucesso',
      code: 200,
    };
    state.searchContact = contact; // eslint-disable-line no-param-reassign
  },
  API_FAILURE: (state, error) => {
    state.messageRequest = { // eslint-disable-line no-param-reassign
      message: error.message,
      code: error.status,
    };
  },
};

export default mutations;
