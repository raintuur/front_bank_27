<template>
  <div class="row justify-content-center">
    <div class="col-2">
      <select class="form-select" aria-label="Default select example">
        <option selected value="0" disabled>--Linn--</option>
        <option value="0">Kõik linnad</option>
        <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "AtmsView",
  data: function (){
    return{
      cities: [
        {
          cityId: 0,
          cityName: '',
        }
      ]
    }
  },
  methods: {
    getAllCities: function () {
      this.$http.get("/all/atm/city")
          .then(result => {
            this.cities = result.data
          }).catch(reason => alert("ERRORRRRRRRRRRRRRR"))
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>
