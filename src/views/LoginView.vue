<template>
<div>
  <div class="row justify-content-center">
    <div class="col-4">

      <form class="px-4 py-3">
        <div class="mb-3">
          <label class="form-label">Kasutajanimi</label>
          <input v-model="username" type="text" class="form-control" id="exampleDropdownFormEmail1" placeholder="Mart123">
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


</div>
</template>

<script>
export default {
  name: "LoginView",
  data: function () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login: function () {


      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        let userId = response.data.userId;
        let roleType = response.data.roleType;

        sessionStorage.setItem('userId', userId)
        sessionStorage.setItem('roleType', roleType)
        localStorage.setItem('lang', 'EST')

        this.$router.push({name: 'atmsRoute'})

      }).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>
