<template>
  <div>
    <div class="col col-2">
      <select class="form-select" aria-label="Default select example">
        <option selected disabled value="-1">--Linn--</option>
        <option value="0">kõik linnad</option>
        <option value="?">?</option>
      </select>
    </div>

  </div>
</template>

<script>
import * as url from "url";

export default {
  name: "AtmsView",
  methods: {
    getAllCities: function () {

      this.$http.get("/all/atm/city")
          .then(result => {
            //siia satume vaid siis kui status CODE ON 200
          }).catch(reason => {
            //siia satume vaid siis kui status code EI OLE 200

      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>