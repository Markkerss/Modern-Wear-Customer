<template>
  <div class="card-body">
    <h4 class="card-title" style="font-size:2.5rem">Total Price</h4>
    <p class="card-title" style="font-size:2rem"> Rp. {{ totalPrice.totalPrice }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TotalCard',
  methods: {
    getTotalPrice () {
      this.$store.dispatch('getTotalPrice')
    }
  },
  created () {
    this.getTotalPrice()
  },
  computed: {
    ...mapState(['totalPrice'])
  }
}
</script>

<style>

</style>