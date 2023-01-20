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

    <!--  Allolevat elemnti soovime JSON massivi for loopiga genereerida  -->
    <tr>
      <td>?</td>
      <td>?</td>
      <td>?</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'AtmLocationsTable',
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
            // soobvime andmeid kuhugi muutujasse panna
            this.atmLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

  }
}
</script>