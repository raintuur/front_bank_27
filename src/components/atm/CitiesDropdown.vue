<template>
  <select class="form-select" aria-label="Default select example">
    <option disabled selected value="-1">vali linn</option>
    <option value="0">Kõik</option>
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
          })
          .catch(err => {
            console.log(err)
          })
    },
  },
  beforeMount() {
    this.getAllCities()
  },
}
</script>
<style scoped>
select {

}

option {
  text-align: center;
  padding-right: 20px;
}
</style>