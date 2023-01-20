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
    <tr>
      <td>???</td>
      <td>???</td>
      <td>???</td>
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
    methods:
    getAllAtmLocations: function () {
      this.$http.get("/all/atm/location")
          .then(response => {
            //soovime andmeid kuhugi muutujasse panna
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>