<template>
  <div class="col-2 d-grid gap-2">
    <button class="btn btn-success" type="button">Kõik</button>
    <button v-for="city in cities" class="btn btn-danger" type="button">{{city.cityName}}</button>
  </div>
</template>
<script>
export default {
  name: 'CityButtons',
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
    getAllLibraryCities: function () {
      this.$http.get("/library/cities")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  beforeMount() {
    this.getAllLibraryCities()
  }
}
</script>