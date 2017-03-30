import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action.js';
import * as getters from './getter.js';
import cart from './modules/cart';
import products from './modules/products';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  },
  strict: debug
})