<template>
  <div class="col-2">
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-warning" type="button">Kõik</button>
      <button v-for="city in cities" class="btn btn-success" type="button">{{ city.cityName }}</button>
    </div>
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
    getLibraryCities: function () {
      this.$http.get("/library/cities").then(result => {
        this.cities = result.data
      }).catch(reason => {

      })
    }
  },

  beforeMount() {
    this.getLibraryCities()
  }

}
</script>
