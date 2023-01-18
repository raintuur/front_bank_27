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

    <div class="col col-3">
      <button type="button" class="btn btn-outline-success">Lisa auto</button>
    </div>

  </div>
</template>
<script>
export default {
  name: 'AddNewCarInput',
  props: {
    car: {}
  }
}
</script>
