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
        <div v-for="transactionType in AtmLocation.transactionTypes" class="row justify-content-center"
             :key="transactionType.typeName">
          {{ transactionType.typeName }}
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'AtmLocationsTable',
  data: function () {
    return {
      AtmLocations: [
        {
          locationId: 1,
          locationName: "",
          cityName: "",
          transactionTypes: [
            {
              typeName: ''
            }
          ]
        }
      ]
    }
  },
  methods: {
    getAtmLocations: function (cityId) {
      this.$http.get("/atm/locations", {
            params: {
              cityId: cityId
            },
            headers: {
              Prefer: 'code=200, example=' + cityId
            }
          }
      ).then(response => {
        this.AtmLocations = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeMount() {
    this.getAtmLocations(0)
  }
}
</script>
