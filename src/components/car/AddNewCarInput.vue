<template>
  <div class="row justify-content-center">

    <!--   COLUMN 1   -->
    <div class="col col-3">
      <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark">
    </div>

    <!--   COLUMN 2   -->
    <div class="col col-3">
      <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel">
    </div>

    <div class="col col-1">
      <image-input v-on="$listeners"/>
    </div>

    <div class="col col-3">
      <button v-on:click="addCar" type="button" class="btn btn-outline-success">Lisa auto</button>
    </div>
  </div>
</template>
<script>
import carsView from "@/views/CarsView.vue";
import ImageInput from "@/components/ImageInput.vue";

export default {
  name: 'AddNewCarInput',
  components: {ImageInput},
  props: {
    car: {}
  },
  data: function () {
    return {
    }
  },
  methods: {
    addCar: function () {
      this.$emit('clickAddCarEvent')
    },

  }
}
</script>
