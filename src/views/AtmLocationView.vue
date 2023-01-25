<template>
  <div>
    <AlertDanger :message="dangerMessage"/>
    <alertSuccess :message="successMessage"/>
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
          <input v-if="locationId = 0" v-model="atmRequest.locationName" type="text" class="form-control">
          <input v-else v-model="atmRequest.locationName" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" :class="{'input-success' : Number(atmRequest.numberOfAtms) > 0}">Automaatide arv</span>
          <input v-model="atmRequest.numberOfAtms" type="number" min="0" class="form-control">
        </div>


        <TransactionTypeCheckBox ref="transactionTypes"
                                 @transactionTypesUpdateEvent="setTransactionTypes
"/>


        <ImageInput @pictureInputSuccess="setPictureBase64Data"/>

        <button v-on:click="navigateToAtms" type="button" class="btn btn-outline-danger">Tühista</button>
        <button v-on:click="clearFields" type="button" class="btn btn-outline-secondary">Kustuta</button>
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
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: "AtmLocationView",
  props: {
    atmLocation: {},
  },
  components: {
    AlertSuccess,
    ImageInput, AlertDanger, NumberOfAtms, LocationName, CitiesDropdown, TransactionTypeCheckBox
  },
  data: function () {
    return {
      dangerMessage: '',
      successMessage: '',
      // alertCounter: 10,
      // SAADA ATMLOCATIONSTABELIST ANDMED KAASA KOOS NUPU VAJUTUSEGA
      // locationId: this.$route.query.locationId,

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
      },
      atmResponse: {
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

      let oneAtleastSelected = false

      this.atmRequest.transactionTypes.forEach(transactionType => {
        if (transactionType.isSelected) {
          oneAtleastSelected = true
        }
      })

      return oneAtleastSelected

    },


    allRequiredFieldsAreFilled: function () {
      return this.atmRequest.cityId > 0
          && this.atmRequest.locationName !== ''
          && this.atmRequest.numberOfAtms > 0
          && this.atLeastOneTransactionTypeIsSelected();
    },

    postAddAtmLocation: function () {
      let preferExpamle = 'code=200'
      if (this.atmRequest.locationName === 'Rimi') {
        preferExpamle = 'code=403, expample=403'
      }
      // saadame POST sõnumi
      this.$http.post("/atm/location", this.atmRequest, {
            headers: {
              Prefer: preferExpamle
            }

          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      });
    },


    addAtmLocation: function () {
      this.$refs.transactionTypes.sendTransactionTypesToParent()
      this.atmRequest.numberOfAtms = Number(this.atmRequest.numberOfAtms)

      // kontrollime, etkas kõik vajalikud väljad on nõuetekohaselt täidetud
      if (this.allRequiredFieldsAreFilled()) {
        this.postAddAtmLocation();
        // this.callSuccessAlert()
        this.successMessage = 'Asukoht lisatud!'
        this.clearFields()
        this.clearAlert()

      } else {


        this.dangerMessage = 'Täida kõik kohustuslikud väljad, vali ka vähemalt 1 teenus'
        this.clearFields()
        this.clearAlert()
      }

    },

    setCityId: function (cityId) {
      this.atmRequest.cityId = cityId
    },
    clearFields: function () {
      this.atmRequest.cityId = 0
      this.atmRequest.numberOfAtms = 0
      this.atmRequest.locationName = ''
      this.atmRequest.picture = ''
      this.atmRequest.transactionTypes.forEach(() => {
        this.atmRequest.transactionTypes.isSelected = false
      })

    },

    clearAlert: function () {

      setTimeout(() => this.successMessage = '', 10000)
      setTimeout(() => this.dangerMessage = '', 10000)
    },

    // callSuccessAlert: function () {
    //   for (let i = 10; i > 0; i--) {
    //     setTimeout(() => this.alertCounter = i, 1000)
    //     this.successMessage = 'Asukoht lisatud {{ this.alertCounter }}'
    //   }
    //
    // },
    // callDangerAlert: function () {
    //   for (let i = 10; i > 0; i--) {
    //     setTimeout(() => this.alertCounter = i, 1000)
    //     this.dangerMessage = 'Täida kõik kohustuslikud väljad, vali ka vähemalt 1 teenus {{ this.alertCounter }}'
    //   }
    //

  },
}
</script>
