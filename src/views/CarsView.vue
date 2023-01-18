<template>
  <!--siia käib lehekülje struktuur HTML'na-->
  <div>

    <!--  row 1-->
    <div class="row justify-content-center">
      <!--   COLUMN 1   -->
      <div class="col col-3">
        <input v-model="carMake" type="text" class="form-control" placeholder="Auto mark">
      </div>

      <!--   COLUMN 2   -->
      <div class="col col-3">
        <input v-model="carModel" type="text" class="form-control" placeholder="mudel">
      </div>

      <!--   COLUMN 3   -->
      <div class="col col-2">
        <button v-on:click="addCar" type="button" class="btn btn-outline-success">Lisa auto</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CarsView',
  data: function () {
    return {
      carMake: 'Audi',
      carModel: 'A7'
    }
  },

  methods: {
    addCar: function () {
      alert("Auto xxxxxx lisatud andmebaasi")
    }
  }
}
</script>