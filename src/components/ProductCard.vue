<template>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title mb-4"> {{ name }}</h5>
          <img :src="image_url">
          <p class="mt-3" style="font-weight:500"> Rp {{ price }}</p>
          <p class="mt-3" style="font-weight:500"> {{ stock }} left</p>
          <p>Quantity: <input type="number" v-model="quantity"></p>
          <a href="#" class="btn btn-primary" @click.prevent="addToCart(id)">Add to Cart</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['id', 'name', 'image_url', 'stock', 'price'],
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    addToCart (id) {
      const product = {
        id,
        quantity: this.quantity
      }
      this.$store.dispatch('addToCart', product)
      this.quantity = ''
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 20rem;
  }
</style>