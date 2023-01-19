<template>
  <div>
    <div class="col-3">
    <select class="form-select" aria-label="Default select example">
      <option selected disabled value="-1">--linn--</option>
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
    getAllCities: function () {

      this.$http.get("/all/atm/city")
          .then(result => {
            //   siis kui status code 200

          }).catch(reason => {
        //   siis kui status code ei ole 200
      })
    },
  },
  beforeMount() {
    this.getAllCities()
  },
}

</script>
