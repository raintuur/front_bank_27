<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/memes">Memes</router-link> |
      <router-link to="/cars">Cars</router-link> |
      <router-link to="/atms">ATMs</router-link> |
      <router-link to="/atm/location">Lisa uus automaat</router-link> |
      <router-link to="/login">Sisse logimine</router-link>
      <router-link to="/libraries">Raamatukogud</router-link>
    </nav>
    <router-view/>
  </div>
</template>

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
