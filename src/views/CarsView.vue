<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--    ROW 1     -->
    <NewCarInput :car="car"/>

    <!--    ROW 1     -->
    <div class="row justify-content-center">
      <div class="col col-7">

        <!--    Autod    -->
        <table class="table table-hover table-dark">
          <thead>
          <tr>
            <th scope="col">Auto mark</th>
            <th scope="col">Auto mudel</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>



  </div>
</template>

<script>
import NewCarHeader from "@/components/NewCarHeader.vue";
import NewCarInput from "@/components/car/NewCarInput.vue";

export default {
  name: 'CarsView',
  components: {NewCarInput, NewCarHeader},
  data: function () {
    return {
      car: {
        carMake: 'asd',
        carModel: 'dsa',
      },
      cars: [],
      companyName: 'Kurvis Kraavis',
    }
  },
  methods: {
    addCar: function () {
      let carMake = "tühjus";
      let carModel = "tühjus";
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati süsteemi")
    }
  }
}
</script>
