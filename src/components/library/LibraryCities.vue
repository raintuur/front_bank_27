<template>
  <div>
    <div class="col-2 d-grid gap-2">
        <button type="button" class="btn btn-warning" >Kõik</button>
        <button type="button" v-for="libraryCity in libraryCities" class="btn btn-success" >{{libraryCity.cityName}}</button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'LibraryCitiesView',
  data: function () {
    return {
      libraryCities: [
        {
          cityId: 0,
          cityName: ''
        }
      ]
    }
  },
  methods: {
    getLibraryCityNames: function () {
      this.$http.get("/library/cities")
          .then(response => {
            this.libraryCities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

  },
  beforeMount() {
    this.getLibraryCityNames()
  }

}
</script>
