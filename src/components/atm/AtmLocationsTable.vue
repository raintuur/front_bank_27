<template>
  <table class="table table-hover table-dark">
    <thead>
    <tr>
      <th scope="col">Linn</th>
      <th scope="col">Asukoht</th>
      <th scope="col">Teenused</th>
    </tr>
    </thead>
    <tbody>
    <!--          all olevat elementi soovime JSON for loopiga genereerida          -->
    <tr v-for="atmlocation in atmLocations" :key="atmLocation.locationId">
      <td>{{atmlocation.cityName}}</td>
      <td>{{atmlocation.locationName}}</td>
      <td>
        <div class="row" v-for="transactionType in atmlocation.transactionTypes" :key="transactionType.typeName">
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
      atmLocations: [
        {
          locationId: 0,
          locationName: '',
          cityName: '',
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

    getAllAtmLocations: function () {
      this.$http.get("/all/atm/locations")
          .then(response => {
            // soovime andmeid kuhugi muutujasse panna
            this.atmLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

  },
  beforeMount() {
    alert("cityId: " + this.selectedCityId)
    this.getAllAtmLocations()
  }
}
</script>