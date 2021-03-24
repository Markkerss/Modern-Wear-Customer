import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios'
import Swal from 'sweetalert2'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalPrice: {},
    products: [],
    cart: [],
    item: {}
  },
  mutations: {
    getProduct(state, payload) {
      state.products = payload
    },
    getCart(state, payload) {
      state.cart = payload
    },
    getTotalPrice(state, payload) {
      state.totalPrice = payload
    },
    getItem(state, payload) {
      state.item = payload
    }
  },
  actions: {
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(data => {
          localStorage.access_token = data.data.access_token
          localStorage.email = data.data.email
          localStorage.id = data.data.id
          localStorage.role = data.data.role
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          Swal.fire(
            'Oops!',
            'Invalid email/password',
            'error'
          )
        })
    },
    register (context, payload) {
      axios
        .post('/register', payload)
        .then(data => {
          localStorage.access_token = data.data.access_token
          localStorage.email = data.data.email
          localStorage.id = data.data.id
          localStorage.role = data.data.role
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          Swal.fire(
            'Oops!',
            'This account has been registered. Please Log In.',
            'error'
          )
        })
    },
    getProducts (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          const products = data.data
          const sortedProducts = products.sort((a, b) => a.id - b.id)
          context.commit('getProduct', sortedProducts)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCart (context) {
      axios
        .get('/carts', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          console.log(data)
          context.commit('getCart', data.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      console.log(payload.quantity)
      axios
        .post('/carts/' + payload.id, {quantity: payload.quantity}, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          console.log(data)
          context.commit('getCart', data)
          Swal.fire(
            'Yes!',
            'The product has been added to your cart',
            'success'
          )
        })
        .catch(err => {
          console.log(err.response.data.message)
          Swal.fire(
            'Oops!',
            `${err.response.data.message}`,
            'error'
          )
        })
    },
    editCart (context, payload) {
      const cartOne = this.state.cart.filter(item => +item.id === +payload)
      context.commit('getItem', cartOne)
      axios
        .patch('/carts/' + payload, {quantity: context.state.item[0].quantity}, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          console.log(data.data)
          context.commit('getCart', data)
          Swal.fire(
            'Yes!',
            'The quantity of a product in your cart has been updated',
            'success'
          )
          context.dispatch('getTotalPrice')
        })
        .catch(err => {
          console.log(err.response.data.message)
          Swal.fire(
            'Oops!',
            `${err.response.data.message}`,
            'error'
          )
        })
    },
    getTotalPrice (context) {
      axios
        .get('/carts/total', {
          headers: {
            access_token: localStorage.access_token
          } 
        })
        .then(data => {
          console.log(data.data)
          context.commit('getTotalPrice', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      axios
        .delete('/carts/' + payload, {
          headers: {
            access_token: localStorage.access_token
          } 
        })
        .then(data => {
          Swal.fire(
            'Yes!',
            'The item has been successfully deleted',
            'success'
          )
          context.dispatch('getCart', data)
          context.dispatch('getTotalPrice')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
