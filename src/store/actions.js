import * as api from '../api/api';

const actions = {
  getContacts: ({ commit }) => {
    commit('SET_LOADING', true);
    commit('CLEAR_CONTACTS_STATE');
    api.listUsers()
      .then((response) => {
        commit('LOAD_CONTACTS', response);
        commit('SET_LOADING', false);
      })
      .catch(error => commit('API_FAILURE', error));
  },
  searchContact: ({ commit }, id) => {
    commit('SET_LOADING', true);
    api.getContact(id)
      .then((response) => {
        commit('GET_SEARCH', response);
        commit('SET_LOADING', false);
      })
      .catch(error => commit('API_FAILURE', error));
  },
};

export default actions;
