import Vue from 'vue';
import Vuex from 'vuex';
import modules from '@/store/modules';
import * as apiMethods from '@/services';
import { parseNetworkError } from '@/utils/request';

Vue.use(Vuex);

const state = {
  isAPICallInProgress: false,
  generalErrors: [],
};

const mutations = {
  SET_API_CALL_IN_PROGRESS: (s, status) => {
    s.isAPICallInProgress = status; /* eslint no-param-reassign:0 */
  },

  SET_GENERAL_ERRORS: (s, error) => {
    s.generalErrors.push(error);
  },
};

const actions = {
  /**
     * Dispatch AJAX calls
     * @param {String} entity e.g. `users`
     * @param {String} action method name eg. `getById`
     */
  async api({ commit }, { /* eslint consistent-return:0 */
    entity, action, payload = {}, query, params,
  }) {
    try {
      const response = await apiMethods[entity][action]({ payload, query, params });
      return response;
    } catch (error) {
      const errorPayload = { [`${entity}_${action}_request`]: parseNetworkError(error) };
      commit('SET_GENERAL_ERRORS', errorPayload);
    }
  },
};

export default new Vuex.Store({
  actions,
  modules,
  mutations,
  state,
});
