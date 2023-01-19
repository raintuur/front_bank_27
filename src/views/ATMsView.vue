<template>
  <div>
    <div class="col-3">
      <select class="form-select" aria-label="Default select example">
        <option selected disabled value="-1">--Linn--</option>
        <option value="0">Kõik linnad</option>
        <option value=?>?</option>
      </select>
    </div>


  </div>

</template>

<script>
// import * as http from "http";

export default {
  name: "ATMsView",
  methods: {
    getAllCities: function () {
      this.$http.get("/all/atm/city").then(result => {
        //ainult kui code ON 200
      }).catch(reason => {
        //ainult kui code EI OLE 200
      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>

<style scoped>

</style>