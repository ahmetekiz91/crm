<template>
  <div>
    <div class="divout" v-if="loading">
      <div class="loader">
        <div class="loader-wheel"></div>
        <div class="loader-text"></div>
      </div>
    </div>
    <div class="hold-transition login-page">


      <div class="login-box">

        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <a href="" class="h1"><b>MNERP</b></a>
          </div>
          <div class="card-body">
            <p class="login-box-msg">Yönetim Portalı</p>

            <div>
              <div class="input-group mb-3">


                <input v-model="user.USERN" type="text" class="form-control" name="username" autocomplete="off" />

                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input v-model="user.PASS" type="password" class="form-control" name="password" autocomplete="off" />

                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>

            </div>

            <div class="social-auth-links text-center mt-2 mb-3">
              <a href="#" class="btn btn-block btn-primary" @click="handleLogin()">
                Giriş Yap
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
 
</template>

<script>
  import User from '../models/user';
  export default {
    name: 'Login',
    data() {
      return {
        user: new User('', ''),
        loading: false,
        message: ''
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      $("#bar1").css("display", "none")
      $("#bar2").css("display", "none")
      this.isLoggedin = false;
      if (this.loggedIn) {
        this.$router.push('/home');
      }
    },
    methods: {

      async handleLogin() {
        this.loading = true;
 
        if (this.user.USERN && this.user.PASS)
        {
       
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.isLoggedin = true;
              this.$router.push('/home');
              this.loading = false;
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }

      }
    }
  };

</script>
