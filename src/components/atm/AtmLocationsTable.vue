<template>
  <div>
    <AlertDanger :message="message"/>
    <table class="table table-hover table-dark">
      <thead>
      <tr>
        <th scope="col">Linn</th>
        <th scope="col">Asukoht</th>
        <th scope="col">Teenused</th>
        <th v-if="roleType === 'admin'"></th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="atmLocation in atmLocations" :key="atmLocation.locationId">
        <td>{{ atmLocation.cityName }}</td>
        <td>
          <router-link :to="{name: 'atmLocationRoute', query: {isView: 'true', locationId:atmLocation.locationId}}">
            {{ atmLocation.locationName }}
          </router-link>

        </td>
        <td class="text-start">
          <div v-for="transactionType in atmLocation.transactionTypes" :key="transactionType.typeName">
            {{ transactionType.typeName }}
          </div>
        </td>
        <td v-if="roleType === 'admin'">
          <font-awesome-icon v-on:click="navigateToEditAtmLocation(atmLocation.locationId)"
                             icon="fa-regular fa-pen-to-square" class="icon-hover"/>
          <font-awesome-icon v-on:click="deleteAtmLocation(atmLocation.locationId)" icon="fa-solid fa-explosion"
                             class="mx-4 icon-hover"/>
        </td>
      </tr>
      </tbody>
    </table>

  </div>


</template>
<script>

// <router-link v-if="roleType === 'admin'" :to="{name: 'editLocationRoute', query: { locationId: atmLocation.locationId } }">{{ atmLocation.locationName }}</router-link>

import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: 'AtmLocationsTable',
  components: {AlertDanger},
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
      ],
      apiError: {
        message: '',
        errorCode: ''
      },

      message: '',

    }
  },
  methods: {

    getAtmLocations: function (cityId) {
      this.message = ''
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
        this.apiError = error.response.data

        if (this.apiError.errorCode == '555') {
          this.message = this.apiError.message
          this.atmLocations = []
        } else {
          this.$router.push({name: 'errorRoute'})
        }
      })

    },


    navigateToEditAtmLocation: function (locationId) {
      this.$router.push({name: 'atmLocationRoute', query: {locationId: locationId, isEdit: 'true'}})
    },

    deleteAtmLocation: function (locationId) {
      this.$http.delete("/atm/location", {
            params: {
              locationId: locationId
            }
          }
      ).then(response => {
        this.getAtmLocations(0)
      }).catch(error => {
        console.log(error)
      })
    },

  },
  beforeMount() {
    this.getAtmLocations(0)
  }


}
</script>