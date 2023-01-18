<template>
  <div class="row justify-content-center">
    <!--      COL 1-->
    <div class="col col-3">
      <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark">
    </div>

    <!--      COL 2-->
    <div class="col col-3">
      <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel">
    </div>

    <!--      COL 3-->
    <div class="col col-3">
      <ImageInput v-on="$listeners"/>
    </div>

    <!--      COL 4-->
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
    },
    setPictureData: function () {

    }
  }
}
</script>