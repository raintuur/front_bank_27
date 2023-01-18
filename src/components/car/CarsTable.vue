<template>
  <div class="row justify-content-center">

    <div class="col col-9">

      <!--autod-->
      <table class="table table-success table-striped table-hover">
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