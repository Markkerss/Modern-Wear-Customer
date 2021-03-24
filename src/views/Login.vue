<template>
  <div id="login-page">
    <div class="masthead d-flex align-items-center justify-content-center" id="login-page-css">
      <div id="login-card" class="card shadow p-3 mb-5 bg-body rounded text-left" >
        <div class="card-body">
          <h1 class="text-center mb-3">Login</h1>
          <form>
            <div class="form-floating mb-3">
              <label>Email</label>
              <input type="email" class="form-control" v-model= "email" placeholder="name@example.com">
            </div>
            <div class="form-floating">
              <label>Password</label>
              <input type="password" class="form-control" v-model= "password" placeholder="Password">
            </div>
            <div class="row d-flex justify-content-center" style="margin-top: 1px">
              <a class="btn mt-4 col-md-7" type="button" @click.prevent="login()" id="btn-login-submit">Login</a>
              <p class="mt-4 mb-1">Don't have an account? <router-link to="/register">Register</router-link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
  #login-page-css {
    height: 100vh;
    min-height: 500px;
  }

  #login-card {
    min-width: 20rem !important;
  }

  #btn-login-submit {
    color: #212121;
    padding: 5px 10px;
    border-color: #DDDDDD;
    border-radius: 4px;
    box-shadow: 1px 4px 9px -1px rgba(117,117,117,0.39);
  }

  #btn-login-submit:hover {
    box-shadow: 1px 1px 9px 2px rgba(117,117,117,0.39);
  }
</style>
