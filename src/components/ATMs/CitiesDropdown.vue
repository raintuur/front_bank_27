<template>
  <div>
    <select class="form-select" aria-label="Default select example">
      <option selected disabled value="-1">--Linn--</option>
      <option value="0">Kõik linnad</option>
      <option v-for="city in cities" :value=city.cityId>{{city.cityName}}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'CitiesDropdown',
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

        //   siia satume vaid CODE "200" korral
        this.cities = result.data

      }).catch(reason => {
        //   siia satume STATUS CODE EI OLE "200" korral
      })
    }
  },

  beforeMount() {
    this.getAllCities()
  }
}
</script>