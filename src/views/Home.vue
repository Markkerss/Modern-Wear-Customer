<template>
  <div class="home">
    <Navbar />
    <body>
      <div class="wrapper">
        <h1 style="padding-top:3.5rem; margin-bottom:50px; text-align:center">Our Products</h1>
        <div class="row" style="margin-left:70px; margin-right:70px; text-align:center">
          <ProductCard v-for="(product,i) in products" :key="i" :name="product.name" :price="product.price" :stock="product.stock" :image_url="product.image_url" :id="product.id" />   
        </div>
        <div class="push"></div>
        <footer class="footer" style="margin-top:5rem">
          <p id="footer-text">&copy; Copyright Marco Laju 2021</p>
        </footer>
      </div>
    </body>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>

<style scoped>
  body {
    height: 100%;
    margin: 0;
  }
  .wrapper {
    min-height: 100%;
    margin-bottom: -50px;
  }

  .push,footer {
    height: 50px;
  }

  footer {
    text-align: center;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px;
    height: 5rem;
    background-color: grey;
    margin-top: 100px;
  }

  #footer-text {
    vertical-align: middle;
    margin-top: 1.5rem;
    color: white;
  }
</style>
