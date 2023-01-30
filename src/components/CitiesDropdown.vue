<template>
  <select v-model="selectedCityId" v-on:change="emitSelectedCityId" :disabled="isView" class="form-select"
          aria-label="Default select example">
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>
  </select>
</template>

<script>
export default {
  name: 'CitiesDropdown',
  props: {
    isView: Boolean
  },
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
      this.$http.get("/atm/cities")
          .then(result => {
            this.cities = result.data

          }).catch(reason => {
        // vaid siis kui status code EI OLE 200
      })
    },

    emitSelectedCityId: function () {
      this.$emit('emitSelectedCityIdEvent', this.selectedCityId)
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