<template>
  <div class="row justify-content-center">
    <div class="col col-8">
      <!-- Autode tabel -->
      <table class="table table-hover table-light">
        <thead>
        <tr>
          <th>Automark</th>
          <th>Mudel</th>
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