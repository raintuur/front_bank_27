<template>
  <div>
    <div class="row">
      <button type="button" class="btn btn-success">Kõik</button>

    </div>
    <div class="row">
      <button v-for="city in cities" type="button" class="btn btn-secondary" :value="city.cityId">{{city.cityName}}</button>
    </div>


  </div>
</template>
<script>
export default {
  name: 'LibraryCityButtons',
  data: function () {
    return {
      cities: [
        {
          cityId: 0,
          cityName: ""
        },
      ]
    }

  },
  methods: {
    getCitiesNames: function () {
      this.$http.get("/library/cities")
          .then(response => {
            this.cities = response.data
            // console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

  },
  beforeMount() {
    this.getCitiesNames()
  },
}
</script>