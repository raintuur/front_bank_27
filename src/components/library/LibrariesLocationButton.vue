<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-success" type="button">Kõik</button>
    <button v-for="city in cities"  :value="city.cityId" class="btn btn-warning" type="button">{{city.cityName}}</button>
  </div>
</template>
<script>
import citiesDropdown from "@/components/atm/CitiesDropdown.vue";

export default {
  name: 'LibrariesLocationButton',
  computed: {
    citiesDropdown() {
      return citiesDropdown
    }
  },
  data: function () {
    return [
      {
        cityId: 0,
        cityName: ''
      }
    ]
  },
  methods: {
    getAllCities: function () {
      this.$http.get("/library/cities")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getAllCities()
  }

}
</script>