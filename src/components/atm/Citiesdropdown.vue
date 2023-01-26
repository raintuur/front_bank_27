<template>
  <select v-model="cityId" v-on:change="citiesDropdownemitSelectedCityIdEvent" class="form-select" aria-label="Default select example">
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>
  </select>
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
      ],
      cityId: 0
    }
  },
  methods: {

    getAllCities: function () {
      this.$http.get("/all/atm/city")
          .then(result => {
            this.cities = result.data

          }).catch(reason => {
        // vaid siis kui status code EI OLE 200
      })
    },

    citiesDropdownemitSelectedCityIdEvent: function () {
      this.$emit('citiesDropdownemitSelectedCityIdEvent', this.cityIdProp)
    },

    setCityId: function (cityId) {
      this.cityId = cityId
    }


  },
  beforeMount() {
    this.getAllCities()
  }

}
</script>