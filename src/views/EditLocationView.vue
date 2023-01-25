<template>
  <div>
    location id as query/request parameter (URL): {{locationId}}
    <br>
    location id as parameter: {{locationId}}
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
  }
}
</script>