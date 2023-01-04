import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    orders: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart
    },
    ORDERS(state) {
      return state.orders
    }
  },
  mutations: {
    SET_ORDERS: (state) => {
      if (!state.orders.length) {
        let counterOrders = 1;
        while (sessionStorage.getItem(counterOrders)) {
          state.orders.push(sessionStorage.getItem(counterOrders));
          counterOrders++;
        }
      }
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) { //на случай если страница не обновлялась
        let isProductExist = false;
        state.cart.map(function (item) {
          if (item.name === product.name) {
            isProductExist = true;
            item.number = item.number + 1;
          }
        })
        if (!isProductExist) {
          if (sessionStorage.getItem(product.name)) {
            state.cart.push(sessionStorage.getItem(product.name))
          }
          else {
            state.cart.push(product);
          }
        }
      }
      else { //page reloaded
        //to do HERE
        // state.products.map( function (item) {
        //   if(sessionStorage.getItem(item.name)) {
        //     if(product.name === item.name) {
        //       product.number += 1;
        //     }
        //     state.cart.push(item); 
        //   }
          
        // })
        // if(!sessionStorage.getItem(product.name)) {
        //   state.cart.push(product);
        // }
        //
        state.cart.push(product);
      }
    },
    SET_CART_FROM_LOCAL: (state) => {
      if (!state.cart.length) {
        for (let item of state.products) {
          if (sessionStorage.getItem(item)) {
            state.cart.push(item);
          }
        }
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      if (state.cart[index].number > 1) {
        state.cart[index].number -= 1;
        sessionStorage.setItem(`${state.cart[index].name}`, JSON.stringify(state.cart[index]));
      }
      else {
        sessionStorage.removeItem(state.cart[index].name);
        state.cart.splice(index, 1);
      }
    },
    REMOVE_ALL_FROM_CART: (index) => {
      if(sessionStorage.getItem(index.name)) {
        sessionStorage.removeItem(index.name);
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_ORDERS({ commit }) {
      commit('SET_ORDERS')
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
    DELETE_ALL({ commit }, index) {
      commit('REMOVE_ALL_FROM_CART', index)
    },
    //experimental stuff for loading cart from storage
    ADD_TO_CART_FROM_LOCAL({ commit }) {
      commit('SET_CART_FROM_LOCAL')
    }
  },
  modules: {
  }
})
