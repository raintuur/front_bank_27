<template>
  <select v-model="cityIdProp" v-on:change="citiesDropdownOnChangeEvent" class="form-select" aria-label="Default select example">
    <option value="0">Kõik linnad</option>
    <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>
  </select>
</template>

<script>
export default {
  name: 'CitiesDropdown',
  props: {
    cityIdProp: Number
  },

  data: function () {
    return {
      cities: [
        {
          cityId: 0,
          cityName: ''
        }
      ],
      cityId: this.cityIdProp
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

    citiesDropdownOnChangeEvent: function () {
      this.$emit('citiesDropdownOnChangeEvent', this.cityIdProp)
    }


  },
  beforeMount() {
    this.getAllCities()
  }

}
</script>