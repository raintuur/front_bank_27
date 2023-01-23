<template>
  <div class="col-2">

    <div class="row">
      <button type="button" class="btn btn-outline-secondary">Kõik linnad</button>
    </div>
    <div class="row">
      <button v-for="city in cities" type="button" class="btn btn-outline-secondary">{{ city.cityName }}</button>
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
          cityID: 0,
          cityName: ''
        }
      ]
    }
  },
  methods: {
    getCitiesName: function () {
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
    this.getCitiesName()
  }
}

</script>
