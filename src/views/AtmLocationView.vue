<template>
  <div>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <!--  COLUMN 1  -->
      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <!--  COLUMN 2  -->
      <div class="col-3">

        <div class="input-group mb-3">
          <span class="input-group-text" :class="{'input-success' :locationName !== ''}">Asukoht</span>
          <input v-model="locationName" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" :class="{'input-success' : Number(numberOfAtms) > 0}">Automaatide arv</span>
          <input v-model="numberOfAtms" type="number" min="0" class="form-control">
        </div>


        <TransactionTypeCheckBox/>
        <ImageInput @pictureInputSuccess="setPictureBase64Data"/>

        <button type="button" class="btn btn-outline-success">Salvesta</button>

      </div>

      <!--  COLUMN 3  -->
      <div class="col-3">
        <img :src="pictureData" class="img-thumbnail" alt="...">

      </div>
    </div>





</div>
</template>

<script>
import TransactionTypeCheckBox from "@/components/atm/new/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import LocationName from "@/components/atm/new/location_name/LocationName.vue";
import NumberOfAtms from "@/components/atm/new/number_of/NumberOfAtms.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import ImageInput from "@/components/ImageInput.vue";

export default {
  name: "AtmLocationView",
  components: {ImageInput, AlertDanger, NumberOfAtms, LocationName, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
      locationName: '',
      numberOfAtms: 0,
      pictureData: ''

    }
  },
  methods: {
    setPictureBase64Data: function (pictureBase64Data) {
      this.pictureData = pictureBase64Data
    }
  }
}
</script>
