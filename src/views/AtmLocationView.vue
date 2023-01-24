<template>
  <div>
    <AlertDanger :message="message"/>
    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <!--  COLUMN 1  -->
      <div class="col-2">
        <CitiesDropdown @citiesDropdownOnChangeEvent="setCityId"/>
      </div>

      <!--  COLUMN 2  -->
      <div class="col-3">

        <div class="input-group mb-3">
          <span class="input-group-text" :class="{'input-success' :atmRequest.locationName !== ''}">Asukoht</span>
          <input v-model="atmRequest.locationName" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" :class="{'input-success' : Number(atmRequest.numberOfAtms) > 0}">Automaatide arv</span>
          <input v-model="atmRequest.numberOfAtms" type="number" min="0" class="form-control">
        </div>


        <TransactionTypeCheckBox ref="transactionTypes" @transactionTypesUpdateEvent="setTransactionTypes"/>
        <ImageInput @pictureInputSuccess="setPictureBase64Data"/>

        <button v-on:click="navigateToAtms" type="button" class="btn btn-outline-danger">Tyhista</button>
        <button v-on:click="addAtmLocation" type="button" class="btn btn-outline-success">Salvesta</button>

      </div>

      <!--  COLUMN 3  -->
      <div class="col-3">
        <img :src="atmRequest.picture" class="img-thumbnail">

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
      message: '',
      atmRequest: {
        cityId: 0,
        locationName: '',
        numberOfAtms: 0,
        picture: '',
        transactionTypes: [
          {
            typeId: 0,
            typeName: '',
            isSelected: true
          }
        ]
      }

    }
  },
  methods: {

    navigateToAtms: function () {
      this.$router.push({name: 'atmsRoute'})
    },

    setTransactionTypes: function (transactionTypes) {
      this.atmRequest.transactionTypes = transactionTypes
    },

    setPictureBase64Data: function (pictureBase64Data) {
      this.atmRequest.picture = pictureBase64Data
    },

    atLeastOneTransactionTypeIsSelected: function () {
      let atLeastOneIsSelected = false;
      this.atmRequest.transactionTypes.forEach(transactionType => {
        if (transactionType.isSelected) {
          atLeastOneIsSelected = true
        }
      })
      return atLeastOneIsSelected;
    },

    allRequiredFieldsAreFilled: function () {
      console.log("OLEN SIIN")
      if (
          this.atmRequest.cityId > 0
          && this.atmRequest.locationName !== ''
          && this.atmRequest.numberOfAtms > 0
          && this.atLeastOneTransactionTypeIsSelected()
      ) {
        return true
      }
      return false;
    },

    postAtmLocation: function () {
      this.$http.post("/atm/location", this.atmRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      });
    },

    addAtmLocation: function () {
      // todo: kaivitame child componendis meetodi sendTransactionTypesToParent
      this.$refs.transactionTypes.sendTransactionTypesToParent()
      // string vaartuse teisendamine integeriks '10' = Number('10')  ->  10
      this.atmRequest.numberOfAtms = Number(this.atmRequest.numberOfAtms)


      // todo: kontrollime, kas koik vajalikud andmed on olemas
      if (this.allRequiredFieldsAreFilled()) {
        this.postAtmLocation();
      } else {
        this.message = 'Taida koik kohustuslikud valjad, vali ka vahemalt 1 teenus!'
      }


    },

    setCityId: function (cityId) {
      this.atmRequest.cityId = cityId
    }


  }
}
</script>
