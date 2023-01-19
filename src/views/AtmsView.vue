<template>
  <div>

  <div class="col col-2">
    <select class="form-select" aria-label="Default select example">
      <option selected disabled value="-1">--Linn--</option>
      <option value="0">Koik linnad</option>
      <option value="2">???</option>
    </select>

  </div>





  </div>



</template>

<script>
export default {
  name: "AtmsView",
  methods : {
    getAllCities: function () {

      this.$http.get("/all/atm/city")
          .then(result => {
            // SIIA SATUME VAID SIIS KUI, STATUS CODE ON 200.

          }).catch(reason => {
           // SIIA SATUME VAID SIIS KUI, STATUS CODE EI OLE 200.


      })

    }

  },
  beforeMount() {
    this.getAllCities()
  }

}

</script>

