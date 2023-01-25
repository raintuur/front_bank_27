<template>
<div>
  location id as query/request parameter (URL): {{locationId}}
  <br>
  location id as parameter {{locationIdAsParam}}
</div>
</template>

<script>
export default {
  name: "EditLocationView",
  data: function () {
    return {
      locationId: this.$route.query.locationId,
      locationIdAsParam: this.$route.params.locationId
    }
  },
  methods: {
    getAtmLocation: function () {
      this.$http.get("/some/path", {
            params: {
              locationId: this.locationId,
            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  beforeMount() {
    this.getAtmLocation()
  }
}
</script>