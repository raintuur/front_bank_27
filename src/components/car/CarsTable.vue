<template>
  <div class="row justify-content-center">
    <div class="col-9">
      <table class="table table-dark table-hover">
        <thead>
        <tr>
          <th scope="col">Auto mark</th>
          <th scope="col">Auto mudel</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="car in cars">
          <td>{{car.carMake}}</td>
          <td>{{car.carModel}}</td>
        <tr/>
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