<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary" type="button">Kõik</button>
    <button v-for="city in cities" class="btn btn-primary" type="button">{{city.cityName}}</button>

  </div>
</template>
<script>
export default {
  name: 'LibraryCities',
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
    },

  },
  beforeMount() {
    this.getAllLibraryCities()
  }
}
</script>
