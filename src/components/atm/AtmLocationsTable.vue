<template>
  <table class="table table-hover">
    <thead>
    <tr>
      <td>Linn</td>
      <td>Asukoht</td>
      <td>Teenused</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="AtmLocation in AtmLocations" :key="AtmLocations.locationId">
      <td>{{ AtmLocation.cityName }}</td>
      <td>{{ AtmLocation.locationName }}</td>
      <td>
        <div v-for="transactionType in AtmLocation.transactionTypes" class="row justify-content-center" :key="transactionType.typeName">
          {{transactionType.typeName}}
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'AtmLocationsTable',
  props: {
    selectedCityId: 0
  },
  data: function () {
    return {
      AtmLocations: [
        {
          locationId: 1,
          locationName: "",
          cityName: "",
          transactionTypes: [
            {
              typeName: ""
            }
          ]
        }
      ]
    }
  },
  methods: {
    getLocationsByCity: function () {
      this.$http.get("/all/atm/locations")
          .then(response => {
            this.AtmLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  beforeMount() {
    this.getLocationsByCity()
  }
}
</script>
