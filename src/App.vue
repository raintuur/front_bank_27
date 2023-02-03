<template>
  <div id="app">
    <nav>
      <router-link to="/"><font-awesome-icon icon="fa-solid fa-house-chimney" /></router-link> |
      <router-link to="/atms">Pangaautomaadid</router-link> |
      <router-link v-if="isAdmin" :to="{name: 'atmLocationRoute', query: {isAdd:'true'}}">Asukoht</router-link> |
      <router-link v-if="userLoggedIn" to="/">Logi välja</router-link>
      <router-link v-else to="/login">Sisse logimine</router-link>

    </nav>
    <router-view @emitLoginSuccessEvent="updateNavigationMenu"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      userLoggedIn: false,
      isAdmin: false,
      userId: sessionStorage.getItem('userId')
      roleType: sessionStorage.getItem('roleType')
    }
  },
  methods: {
    updateNavigationMenu: function () {
      this.userId = sessionStorage.getItem('userId')
      this.roleType = sessionStorage.getItem('roleType')
      // kui userId on tühi, siis userLoggedIn = false
      // kui userId on täidetud, siis userLoggedIn = true
      this.userLoggedIn = this.userId == null

      this.isAdmin = this.roleType == 'admin'
    }
  },
  mounted() {
    this.updateStatus()
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
