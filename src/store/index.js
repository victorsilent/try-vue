import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
  usersList: [],
  searchContact: '',
  loading: false,
  messageRequest: '',
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
