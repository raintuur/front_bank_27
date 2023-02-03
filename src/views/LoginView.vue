<template>
  <div class="row justify-content-center">


    <div class="col-4 ">

      <AlertDanger :message="message"/>

      <form class="px-4 py-3">
        <div class="mb-3">
          <label class="form-label">Kasutajanimi</label>
          <input v-model="username" type="text" class="form-control" placeholder="Mart123">
        </div>
        <div class="mb-3">
          <label class="form-label">Parool</label>
          <input v-model="password" type="password" class="form-control" placeholder="parool123">
        </div>

        <button v-on:click="login" type="submit" class="btn btn-primary">Logi sisse</button>
      </form>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">New around here? Sign up</a>
    </div>

  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: "LoginView",
  components: {AlertDanger},
  data: function () {
    return {

      message: '',

      loginResponse: {
        userId: 0,
        roleType: ''
      },

      apiError: {
        message: '',
        errorCode: ''
      },

      username: '',
      password: '',
    }
  },

  methods: {

    login: function () {
      this.message = '';
      if (this.username == '' || this.password == '') {
        this.message = 'Palun täida kõik väljad!';
      } else {
        this.sendLoginRequest();
      }
    },

    sendLoginRequest: function () {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleType', this.loginResponse.roleType)
        localStorage.setItem('lang', 'EST')

        this.$router.push({name: 'atmsRoute'})

      }).catch(error => {
        this.apiError = error.response.data
        this.message = this.apiError.message
      });
    },
  }
}
</script>
