<template>
<div>
  <div class="row justify-content-center">


    <br>
    <div class="col col-2">
      <input v-model="carMake" type="text" class="form-control" placeholder="Auto mark" aria-label="Username">
    </div>

    <div class="col col-2">
      <input v-model="carModel" type="text" class="form-control" placeholder="Auto number" aria-label="Username">
    </div>

  </div>

</div>
</template>




<script>
export default {
  name: 'CarsView',
  data: function (){
    return {
      carMake: '',
      carModel: '',
    }
  }
  methods: {

  }
}
</script>