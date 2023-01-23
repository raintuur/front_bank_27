<template>
  <div class="col-2 d-grid gap-2">
    <button type="button" class="btn btn-outline-success">Kõik</button>
    <button v-for="city in cities" class="btn btn-outline-danger">{{city.cityName}}</button>
  </div>
</template>
<script>

export default {
  name: 'CitiesButtons',
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
      this.$http.get("/library/cities")
          .then(result => {
            this.cities = result.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>