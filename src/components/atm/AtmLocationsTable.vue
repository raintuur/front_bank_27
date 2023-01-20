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
import {config} from "@fortawesome/fontawesome-svg-core";

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


     getAllAtmLocations: function (cityId) {

      this.$http.get("atm/locations", {
        params:{
          cityId: cityId
        },
        headers:{
          Prefer: 'code=200, example=' + cityId
        }
      })
          .then(response => {
            // soobvime andmeid kuhugi muutujasse panna
            this.atmLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },


    demo: function (cityId) {

     }

  },
  beforeMount() {

    this.getAllAtmLocations()
  }


}
</script>