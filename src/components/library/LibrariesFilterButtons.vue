<template>
  <div class="col col-2 align-items-start">
    <div class="col-8 btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="btnradio1">Kõik</label>

      <div v-for="city in cities" class="col col-12">
        <input v-on:select="citiesButtonsOnChangeEvent(city.cityId)" type="radio" class="btn-check" name="btnradio" :id="'btnradio' + city.cityId" autocomplete="off">
        <label class="btn btn-outline-primary col-12" :for="'btnradio' + city.cityId">{{ city.cityName }}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LibrariesFilterButtons',
  data: function () {
    return {
      cities: [
        {
          cityId: 0,
          cityName: ''
        }
      ]
    }
  },
  methods: {
    getAllCities: function () {
      this.$http.get("/library/cities")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            console.log("what the shit:" + error)
          })
    },
    citiesButtonsOnChangeEvent: function () {
      this.$emit('citiesButtonsOnChangeEvent', this.cityId)
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}


</script>

