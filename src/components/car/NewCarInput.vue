<template>
  <div class="row justify-content-center">

    <!-- COLUMN 1 -->
    <div class="col col-4">
      <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark" aria-label="First name">
    </div>
    <!-- COLUMN 2 -->
    <div class="col col-4">
      <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel" aria-label="Last name">
    </div>
    <!-- COLUMN 3 -->
    <div class="col col-2">
      <button type="button" class="btn btn-outline-success">Lisa auto</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewCarInput',
  props: {
    car: {}
  }
}
</script>