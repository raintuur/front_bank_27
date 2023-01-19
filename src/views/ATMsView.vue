<template>
  <div>
    <div class="col-3">
      <select class="form-select" aria-label="Default select example">
        <option selected disabled value="-1">--Linn--</option>
        <option value="0">Kõik linnad</option>
        <option v-for="city in cities" :value="city.cityId">{{city.cityName}}</option>
      </select>
    </div>


  </div>

</template>

<script>

export default {
  name: "ATMsView",
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
      this.$http.get("/all/atm/city").then(result => {
        this.cities = result.data
        //ainult kui code ON 200
      }).catch(reason => {
        //ainult kui code EI OLE 200
      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>

<style scoped>

</style>