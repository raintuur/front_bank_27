<template>
  <select class="form-select" aria-label="Default select example">
    <option value="-1" selected disabled>--Linn--</option>
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>
  </select>
</template>
<script>
export default {
  name: 'CitiesDorpdown',
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
        // Kui EI OLE 200
      })
    }

  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>