<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Modern Wear</a>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" style="padding-left: 35px">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart">Cart</router-link>
          </li>
        </ul>
          <div class="nav-item navbar-nav" style="padding-right: 20px">
            <router-link to="/login"><a @click.prevent="logout()">Log Out</a></router-link>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      localStorage.removeItem('role')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 1rem 2rem
  }

  .navbar-nav > li{
    padding-left:20px;
    padding-right:10px;
  }
</style>
