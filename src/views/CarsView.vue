<template>
  <div>

    <div class="row justify-content-center">

      {{carMake}} + {{carModel}}
      <br>
      <div class="col col-2">
        <input v-model="carMake" type="text" class="form-control" placeholder="Auto mark" aria-label="First name">
      </div>
      <div class="col col-2">
        <input v-model="carModel" type="text" class="form-control" placeholder="Auto mudel" aria-label="Last name">
      </div>

    </div>

  </div>

</template>


<script>
export default {
  name: 'CarsView',
  data: function () {
    return {
      carMake: '',
      carModel: ''
    }
  },
  methods: {

  }
}
</script>
