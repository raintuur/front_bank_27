<template>

  <div>

    <div class="row justify-content-center">

      <div class="col col-2">
        <input v-model="carMake" type="text" class="form-control" placeholder="Auto mark" aria-label="First name">
      </div>

      <div class="col col-2">
        <input v-model="carModel" type="text" class="form-control" placeholder="Auto mudel" aria-label="Last name">
      </div>

    </div>

    <br><br><br>

    <h2>Itimehe külaskäik</h2>
    <br>
    Ukse taga itimees
    <br>
    raske valik on tal ees
    <br>
    mõtle, mõtle hoolega,
    <br>
    mida jõuluks kinkida?
    <br>
    <br>
    Ema tahaks soojat salli
    <br>
    õde aga roosat palli.
    <br>
    Isa sooviks kootut mütsi,
    <br>
    mina hoopis teksapükse.

  </div>

</template>

<script>
export default {
  name: "CarsView",
  data: function () {
    return {
      carMake: 'Audi',
      carModel: 'A7'
    }
  },
  methods:{

  }
}
</script>