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
      alert("Linnade paring")
    }
  },
  beforeMount() {
    this.getAllCities()
  }

}

</script>

