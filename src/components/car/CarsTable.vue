<template>
  <div class="row justify-content-center">
    <div class="col-9">
      <table class="table table-hover table-dark">
        <thead>
        <tr>
          <th>Auto mark</th>
          <th>Auto mudel</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="car in cars">
          <td>{{car.carMake}}</td>
          <td>{{car.carModel}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarsTable',
  props: {
    cars: {}
  }
}
</script>