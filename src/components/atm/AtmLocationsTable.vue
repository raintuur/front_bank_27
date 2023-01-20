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

    <!--  Allolevat elementi soovime JSON massivi for loopiga genereerida  -->
    <tr v-for="atmLocation in atmLocations" :key="atmLocation.locationId">
      <td>{{atmLocation.cityName}}</td>
      <td>{{atmLocation.locationName}}</td>
      <td>
        <div v-for="transactionType in atmLocation.transactionTypes" :key="transactionType.typeName">
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

    someMethodName: function () {


    },

    getAllAtmLocations: function ()

      this.$http.get("/all/atm/locations")
          .then(response => {
            // soovime andmeid kuhugi muutujasse panna
            this.atmLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })

    },

  beforeMount() {

    getAtmLocations: function (cityId) {

      this.$http.get(url: "/atm/locations", config {
          params: {
            cityId: cityId
          },
        headers: {
          Prefer: 'code=200, example=' + cityId
          }
      }
    ).then(response => {
      this.atmLocations = response.data
      }).catch(error => {
        console.log(error)
      })

    }

  },

</script>