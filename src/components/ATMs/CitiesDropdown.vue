<template>
  <div class="col-2">
    <select class="form-select" aria-label="Default select example">
      <option selected disabled value="-1">--Linn--</option>
      <option value="0">Kõik linnad</option>
      <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>
    </select>
  </div>
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
            // vaid siis kui status code ON 200


          }).catch(reason => {
        // vaid siis kui status code EI OLE 200
      })
    },

  },

  beforeMount() {
    this.getAllCities()
  }
}
</script>