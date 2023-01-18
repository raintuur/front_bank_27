<template>
  <div class="row justify-content-center">
    <div class="col col-9">
      <table class="table table-hover table-dark">
        <thead>
        <tr>
          <th>Planeedi nimi</th>
          <th>Planeedi number</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="planet in planets">
          <td>{{planet.planetName}}</td>
          <td>{{planet.planetNumber}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanetTable"
}
</script>

<style scoped>

</style>