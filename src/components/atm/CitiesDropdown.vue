<template>
  <select class="form-select" aria-label="Default select example">
    <option selected disabled value="-1">--Linn--</option>
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityName">{{city.cityName}}</option>
  </select>
</template>
<script>
export default {
  name: 'CitiesDropdown',
  data: function (){
    return {
      cities: [
        {
          cityID: 15,
          cityName: ''
        }
      ]
    }
  },
  methods: {
    getAllCities: function (){

      this.$http.get("all/atm/city")
          .then(result => {
            this.cities = result.data
          }).catch(reason => {
        //siia satume siis, kui status code EI OLE 200
      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>
