<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <NewCarInput :car="car" @clickAddCarEvent="addCar"
                            @pictureInputSuccess="setCarImage"
    />

    <br>

    <!--  ROW 2  -->
    <!--  Autod   -->
    <CarsTable :cars="cars"/>
    
    <img : src="car.carImage" class="img-thumbnail">



  </div>

</template>


<script>
import NewCarHeader from "@/components/car/NewCarHeader.vue";
import NewCarInput from "@/components/car/NewCarInput.vue";
import CarsTable from "@/components/car/CarsTable.vue";

export default {
  name: 'CarsView',
  components: {CarsTable, NewCarInput, NewCarHeader},
  data: function () {
    return {
      car: {
        carId: 0,
        carMake: 'Audi',
        carModel: 'R8',
        carImage: '',
      },

      cars: [

        {
          carId: 1,
          carMake: 'Audi',
          carModel: 'A8',
        },
        {
          carId: 2,
          carMake: 'Tesla',
          carModel: 'x',
        },
        {
          carId: 3,
          carMake: 'Volvo',
          carModel: 'V70',
        }

      ],
      companyName: 'Kurvis Kraavis!!!!!!!!!!!'
    }
  },
  methods: {
    addCar: function () {
      // let carAsString = JSON.stringify(this.car)
      // let copyOfCar= JSON.parse(carAsString)
      // this.cars.push(copyOfCar)


      this.cars.push(JSON.parse(JSON.stringify(this.car)))},

          setCarImage: function (carImage) {
      this.setCarImage(carImage)
          }




  }
}
</script>
