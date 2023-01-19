<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <table class="table table-hover table-info table-striped">
        <thead class="table-dark">
        <tr>
          <th>Auto mark</th>
          <th>Auto mudel</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="car in cars">
          <td>{{ car.carMake }}</td>
          <td>{{ car.carModel }}</td>
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