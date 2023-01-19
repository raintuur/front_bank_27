<template>
  <div>
    <div class="col col-2">
      <select class="form-select" aria-label="Default select example">
        <option disabled selected>vali linn</option>
        <option value="0">Kõik</option>
        <option v-on:></option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "AtmsView",
  methods: {
    getAllCities: function () {
      alert("linnade p'ring")
    }
  },
  beforeMount() {
    this.getAllCities()
  }

}
</script>

<style scoped>
  select {
    text-align: center;
  }
</style>