<template>
  <div>

    <div class="col-2">
<select class="form-select" aria-label="Default select example">
      <option selected disabled>--Linn--</option>
      <option value="1">Kõik linnad</option>
      <option value="2">Tallinn</option>
      <option value="3">Tartu</option>
      <option value="3">Pärnu</option>
    </select>
  </div>

  </div>
</template>

<script>


export default {
  name: "AtmsView",
  methods: {
    getAllCities: function () {
      this.$http.get("/all/atm/city")
          .then(result =>{
            //   siia satume vaid siis kui status code on 200
          }).catch(reason => {
        //  siia satume vaid siis kui status code EI OLE 200
      })
    }
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>
