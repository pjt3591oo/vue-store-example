const initialState = {
  id: 1,
};

const mutations = {
  UPDATE_ID(state, value) {
    state.id = value
  },
};

const actions = {
  update_id({commit, state}, $data) {
    commit('UPDATE_ID', $data)
  },
};

const getters = {
  'get_id': state => state.id * 1000,
};

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    ...initialState
  },
  mutations,
  actions,
  getters
}
