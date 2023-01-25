<template>
  <div>
    location id query/Request parameter (URL): {{locationId}}
    location id parameter: {{locationIdAsParam}}
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
      this.$http.get("/atm/location", {
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
    alert(this.getAtmLocation)
  }
}
</script>

