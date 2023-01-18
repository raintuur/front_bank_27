<template>
  <div class="row justify-content-center">


    <!--      -->
    <div class="col-2">
      <input v-model="planet.planetName" type="text" class="form-control" placeholder="Planeedi nimi"
             aria-label="Planeedi nimi">
    </div>


    <!--      -->
    <div class="col-3">
      <input v-model="planet.planetNumber" type="text" class="form-control" placeholder="Planeedi number"
             aria-label="Planeedi number">
    </div>

    <div class="col-3">
      <button v-on:click="addPlanet" id= "myButton" type="button" class="btn btn-primary btn-sm">Sisesta</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewPlanetInput',
  props: {
    planet: {}
  },
  methods: {
    addPlanet: function () {
      this.$emit('clickAddPlanetEvent')
    }
  }
}
</script>
