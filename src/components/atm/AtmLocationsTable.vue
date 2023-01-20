<template>
  <table class="table table-success table-striped">
    <thead>
    <tr>
      <th scope="col">Linn</th>
      <th scope="col">Asukoht</th>
      <th scope="col">Teenused</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="atmLocation in atmLocations">
      <td>{{atmLocation.cityName}}</td>
      <td>{{atmLocation.locationName}}</td>
      <td>
        <div class="row" v-for="transactionType in atmLocation.transactionTypes">
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
  data: function ()
  {
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
      this.$http.get("/all/atm/location")
          .then(response => {
            //soovime andmeid kuhugi muutujasse panna
            this.atmLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  beforeMount() {
    console.log("OLEN SIIN")
    this.getAllAtmLocations()
  }
}
</script>