<template>
  <select v-model="cityId" v-on:change="citiesDropdownOnChangeEvent" class="form-select" aria-label="Default select example">
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
      ],
      cityId: 0
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
    citiesDropdownOnChangeEvent: function () {
      this.$emit('citiesDropdownOnChangeEvent', this.cityId)
    }
  },
  beforeMount() {
    this.getAllCities()
  },
}
</script>

<style scoped>

</style>