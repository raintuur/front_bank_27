<template>
  <table class="table table-hover table-dark">
    <thead>
    <tr>
      <th scope="col">Linn</th>
      <th scope="col">Asukoht</th>
      <th scope="col">Teenused</th>
      <th v-if="roleType === 'admin'">Muuda</th>
    </tr>
    </thead>
    <tbody>

    <tr v-for="atmLocation in atmLocations" :key="atmLocation.locationId">
      <td>{{ atmLocation.cityName }}</td>
      <td>

        <router-link :to="{name:'atmLocationRoute', query: {isView: 'true', locationId: atmLocation.locationId}}">
          {{ atmLocation.locationName }}
        </router-link>


        <div v-if="roleType ==='admin'">
          <router-link :to="{name:'atmLocationRoute', query:{locationId: atmLocation.locationId, isEdit: 'true'}}">
            {{ atmLocation.locationName }} URL
          </router-link>
        </div>
        <div v-else>
          {{ atmLocation.locationName }}
        </div>

      </td>
      <td>
        <div v-for="transactionType in atmLocation.transactionTypes" :key="transactionType.typeName">
          {{ transactionType.typeName }}
        </div>
      </td>
      <td v-if="roleType === 'admin'">
        <font-awesome-icon v-on:click="navigateToEditAtmLocation(atmLocation.locationId)"
                           icon="fa-regular fa-pen-to-square"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>

// <router-link v-if="roleType === 'admin'" :to="{name: 'editLocationRoute', query: { locationId: atmLocation.locationId } }">{{ atmLocation.locationName }}</router-link>

export default {
  name: 'AtmLocationsTable',
  data: function () {
    return {
      roleType: sessionStorage.getItem('roleType'),

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
        this.atmLocations = response.data
      }).catch(error => {
        console.log(error)
      })

    },


    navigateToEditAtmLocation: function (locationId) {
      this.$router.push({name: 'atmLocationRoute', query: {locationId: locationId, isEdit: 'true'}})
    }


  },
  beforeMount() {
    this.getAtmLocations(0)
  }


}
</script>