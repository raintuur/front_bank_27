<template>
  <div class="row justify-content-center">

    <!--  COLUMN 1    -->
    <div class="col col-3">
      <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark">
    </div>

    <!--  COLUMN 2    -->
    <div class="col col-3">
      <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel">
    </div>

    <!--  COLUMN 3    -->
    <div class="col col-3">
      <ImageInput/>
    </div>

    <!--  COLUMN 4    -->
    <div class="col col-3">
      <button v-on:click="addCar" type="button" class="btn btn-outline-success">Lisa auto</button>
    </div>

  </div>
</template>
<script>
import ImageInput from "@/components/ImageInput.vue";

export default {
  name: 'NewCarInput',
  components: {ImageInput},
  props: {
    car: {}
  },
  methods: {
    addCar: function () {
      this.$emit('clickAddCarEvent')
    }
  }
}
</script>