<template>
  <div>


    <div class="row justify-content-center">

      <div class="col col-2">
        <input v-model="carMake" type="text" class="form-control" placeholder="AUTOMARK" aria-label="First name">
      </div>

      <div class="col col-2">
        <input v-model="carModel" type="text" class="form-control" placeholder="AUTOMUDEL" aria-label="Last name">
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
      carModel: 'A7',
    }
  }
}
</script>

