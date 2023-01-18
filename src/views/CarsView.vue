<template>

  <div>
    <NewCarHeader/>
    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <!--   COLUMN 1   -->
      <div class="col col-3">
        <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark">
      </div>

      <!--   COLUMN 2   -->
      <div class="col col-3">
        <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel">
      </div>

      <div class="col col-3">
        <button v-on:click="addCar" type="button" class="btn btn-outline-success">Lisa auto</button>
      </div>
    </div>

    <br>

  </div>

</template>

<script>
import NewCarHeader from "@/components/NewCarHeader.vue";

export default {
  name: 'CarsView',
  components: {NewCarHeader},
  data: function () {
    return {

      car: {
        carMake: '',
        carModel: ''
      },
      cars: []
    }
  },

  methods: {
    addCar: function () {
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati süsteemi")
    }
  }
}
</script>

<style scoped>

</style>