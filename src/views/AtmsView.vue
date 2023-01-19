<template>
<div>

  <div class = "col-2">
  <select class="form-select" aria-label="Default select example">
    <option selected disabled="-1">--Linn--</option>
    <option value="0">Kõik linnad</option>
    <option value="?">?</option>
  </select>

  </div>

</div>

</template>


<script>
export default {
  name: "AtmsView",
  methods: {
    getAllCities: function (){

      this.$http.get()

    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>