<template>
  <select v-model="selectedCityId" v-on:change="onChangeEvent" class="form-select" aria-label="Default select example">
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
      selectedCityId: 0
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

    onChangeEvent: function () {
      this.$emit('onChangeEvent', this.selectedCityId)
    },

    setSelectedCityId: function (cityId) {
      this.selectedCityId = cityId
    }


  },
  beforeMount() {
    this.getAllCities()
  }

}
</script>