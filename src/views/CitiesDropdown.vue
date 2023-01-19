<template>
  <select class="form-select" aria-label="Default select example">
    <option selected disabled>--Linn--</option>
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>

  </select>
</template>
<script>
export default {
  name: 'CitiesDropdown',
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
      this.$http.get("/all/atm/city")
          .then(result => {
            this.cities = result.data

          }).catch(reason => {
      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>