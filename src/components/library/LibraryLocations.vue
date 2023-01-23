<template>
  <div>
    <div class="row">
      <div class="col-2 d-grid gap-2">
        <button type="button" class="btn btn-success">Koik</button>
        <button type="button" v-for="library in libraryLocation" class="btn btn-success">{{library.cityName}}</button>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LibraryLocations',
  data: function () {
    return {
      libraryLocation: [
        {
          cityId: 0,
          cityName: ''
        }
      ]
    }
  },

  methods: {
    getLibraries: function () {
      this.$http.get("/library/cities").then(result => {
        this.libraryLocation = result.data
      }).catch(reason => {
      })

    }

  },
  beforeMount() {
    this.getLibraries()
  }
}
</script>