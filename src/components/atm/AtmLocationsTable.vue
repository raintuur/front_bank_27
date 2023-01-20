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

    <!-- Allolevat elementi soovime JSONI massiivi for loopiga genereerida-->
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
      this.$http.get("/all/atm/locations").then(response => {
        this.atmLocations = response.data
      })
          .catch(error => {
            console.log(error)
          })
    }

  },

  beforeMount() {
    this.getAllAtmLocations()
  }

}
</script>