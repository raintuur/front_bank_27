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

    <div class="col col-3">
      <ImageInput v-on="$listeners"/>
    </div>

    <div class="col col-3">
      <button v-on:click="addPlanet" id= "myButton" type="button" class="btn btn-primary btn-sm">Sisesta</button>
    </div>
  </div>
</template>
<script>
import ImageInput from "@/components/ImageInput.vue";

export default {
  name: 'NewPlanetInput',
  components: {ImageInput},
  props: {
    planet: {}
  },

  methods: {
    addPlanet: function () {
      this.$emit('clickAddPlanetEvent')
    },

    setPictureData: function () {

    }
  }
}
</script>
