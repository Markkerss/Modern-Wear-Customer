<template>
  <div class="cartPage">
    <Navbar />
    <body>
      <div class="wrapper">
        <h1 class="mt-5 mb-5" style="text-align:center">Cart</h1>
        <div class="row" style="text-align:center; margin-left:80px; margin-right:70px">
          <div class="col-sm-6 mb-5 mr-5">
            <div class="card border-primary" style="padding-bottom:40px">
                <CartCard />
            </div>
          </div>
          <div class="col-sm-5">
            <div class="card border-primary mb-3" >
              <TotalCard />
            </div>
          </div>
        </div>
        <div class="push"></div>
      </div>
      <footer class="footer" style="margin-top:50px">
        <p id="footer-text">&copy; Copyright Marco Laju 2021</p>
      </footer>
    </body>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CartCard from '@/components/CartCard.vue'
import TotalCard from '@/components/TotalCard.vue'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartCard,
    TotalCard
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

  .push, footer {
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
