<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Linn</th>
      <th scope="col">Nimi</th>
      <th scope="col">Teenused</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="libraryLocation in libraryLocations">
      <td>{{libraryLocation.cityName}}</td>
      <td>{{libraryLocation.libraryName}}</td>
      <td>
        <div v-for="service in libraryLocation.services">
          {{service.serviceName}}
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'LibraryLocationsTable',
  data: function () {
    return {
      libraryLocations: [
        {
          cityName: '',
          libraryName: '',
          libraryId: 0,
          services: [
            {
              serviceName: ''
            }
          ]
        }
      ]
    }
  },
  methods: {
    getLibraryLocations: function (cityId) {
      this.$http.get("/library/libraries", {
            params: {
              cityId: cityId,
            }
          }
      ).then(response => {
       this.libraryLocations = response.data
      }).catch(error => {
        console.log(error)
      })
    },
  },
  beforeMount() {
    this.getLibraryLocations(0)
  }
}
</script>