<template>
  <div>
    <div class="col-2">
      <button type="button" class="btn btn-success">Kõik</button>
    </div>
    <div v-for="cityList in citiesList" class="col-2">
      <button type="button" class="btn btn-danger">{{cityList.cityName}}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CitiesLibrary',
  data: function () {
    return {
      citiesList: [
        {
          cityId: 0,
          cityName: 'Tallinn'
        }
      ]
    }
  },
  methods: {
    getCitiesNames: function () {
      this.$http.get("/library/cities")
          .then(result => {
            this.citiesList = result.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getCitiesNames()
  }


}
</script>