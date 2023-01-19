<template>

<div class="col-2">

  <select class="form-select" aria-label="Default select example">
    <option selected disabled>--Linn--</option>
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityID">{{city.cityName}}</option>


  </select>

</div>

</template>

<script>
export default {
  name: "AtmsView",
  data: function () {
    return{
      cities: [
        {
          cityID: 0,
          cityName: ''
        }
      ]
    }

  },
  methods: {
    getAllCities: function (){

      this.$http.get("/all/atm/city")
          .then(result => {
      // vaid siis kui status code on 200
        this.cities = result.data

          }).catch(reason => {
        // siia satume vaid siis kui status code EI OLE 200
      })
    }


  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>



