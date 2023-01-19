<template>
  <div>

    <div class="col-2">
      <select class="form-select" aria-label="Default select example">
        <option selected disabled value="-1">--Linn--</option>
        <option value="0">Kõik linnad</option>
        <option v-for="city in cities" :value="city.cityId"> {{city.cityName}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "AtmsView",
  data: function () {
    return{
     cities: [
       {
         cityId: 0,
         cityName:''
       }
     ]
    }
  },
  methods: {
    getAllCities: function () {
      this.$http.get("/all/atm/city")
          .then(result => {
            // vaid siis kui status code on 200
            this.cities = result.data

          }).catch(reason => {
        // siia satume vaid siis kui status code ei ole 200
      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>