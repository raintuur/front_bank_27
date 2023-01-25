<template>
  <div>
    location id as query request parameter (URL): {{locationId}}
    <br>
    location id as parameter: {{locationIdAsParam}}
  </div>
</template>

<script>
export default {
  name: "EditLocationView",
  data: function () {
    return {
      locationId: this.$route.query.locationId,
      locationIdAsParam: this.$route.query.locationId
    }
  },
  methods: {
    getAtmLocation: function () {
      this.$http.get("/atm/location", {
        params: {
          locationId: this.locationId
        }
      })
    }
  },
  beforeMount() {
    this.getAtmLocation()
  }
}
</script>