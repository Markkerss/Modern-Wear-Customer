<template>
  <div>
    <div class="card ml-5 mr-5 mt-5"  v-for="(item,i) in cart" :key="i">
      <div class="card-body">
        <h5 class="card-title mb-4"> {{ item.Product.name }}</h5>
        <img :src="item.Product.image_url" >
        <p class="mt-3" style="font-weight:500"> Rp {{ item.Product.price }}</p>
        <p>Quantity: <input type="number" v-model="item.quantity"></p>
        <a href="#" class="btn btn-primary mr-4" @click.prevent="editCart(item.id)">Save Changes</a>
        <a href="#" class="btn btn-primary" @click.prevent="deleteCart(item.id)">Delete Item</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CartCard',
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    editCart (id) {
      this.$store.dispatch('editCart', id)
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    }
  },
  created () {
    this.getCart()
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style scoped>
  img {
    max-width: 20rem;
  }
</style>