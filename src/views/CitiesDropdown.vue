<template>
  <select class="form-select" aria-label="Default select example">
    <option selected disabled value="-1">--Linn--</option>
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityId">{{city.cityName}}</option>
  </select>
</template>
<script>
export default {
  name: 'CitiesDropdown',
  data: function () {
    return{
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
            // siia satume vaid siis kui STATUS CODE on 200
          }).catch(reason => {""
        //siia satume vaid siis kui status code EI OLE 200
      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>