<template>
  <div>
    location id {{locationId}}
  </div>
</template>

<script>
export default {
  name: "EditLocationView",
  data: function () {
    return {
      locationId: this.$route.query.locationId,
    }
  }
}
</script>

<style scoped>

</style>