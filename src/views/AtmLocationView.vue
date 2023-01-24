<template>
  <div>
    <AlertDanger :message="messageError"/>
    <AlertSuccess :message="messageSuccess"/>
    <div class="row justify-content-center">

      <!-- COL 1   -->
      <div class="col-2">
        <CitiesDropdown @citiesDropdownOnChangeEvent="setCityId"/>
      </div>

      <!--col 2-->
      <div class="col-3">
        <LocationName @locationNameChangeEvent="setLocationName"/>
        <numberOfAtmsInput @numberOfAtmChangeEvent="setNumberOfAtms"/>
        <div>
          <TransactionTypeCheckbox ref="transactionTypesRef" @transactionTypesUpdateEvent="setTransactionTypes"/>
        </div>
        <div>
          <image-input @pictureInputSuccess="setPictureBase64Data"/>
        </div>


        <div>
          <button v-on:click="navigateToAtms" type="button" class="btn btn-danger justify-content-end">Tühista</button>
          <button v-on:click="addAtmLocation" type="button" class="btn btn-success justify-content-end">Lisa</button>
        </div>
      </div>

      <!--col 3-->
      <div class="col-3">
        <img :src=atmRequest.picture class="img-thumbnail" alt="...">
      </div>

    </div>

  </div>
</template>

<script>
import TransactionTypeCheckbox from "@/components/atm/new/TransactionTypeCheckbox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import LocationName from "@/components/atm/new/location_name/LocationName.vue";
import NumberOfAtmsInput from "@/components/atm/new/numberOf/NumberOfAtmsInput.vue";
import ImageInput from "@/components/ImageInput.vue";
import atmsView from "@/views/AtmsView.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import {config} from "@fortawesome/fontawesome-svg-core";

export default {
  name: "AtmLocationView",
  components: {
    AlertSuccess,
    AlertDanger, ImageInput, NumberOfAtmsInput, LocationName, CitiesDropdown, TransactionTypeCheckbox},

  data: function () {
    return {

      messageError: '',
      messageSuccess: '',

      locationName: '',
      numberOfAtms: 0,

      atmRequest: {
        cityId: 0,
        locationName: '',
        numberOfAtms: 0,
        picture: '',
        transactionTypes: [
          {
            typeId: 0,
            typeName: '',
            isSelected: false
          }
        ]
      }

    }
  },

  methods: {
    setPictureBase64Data: function (pictureBase64Data) {
      this.atmRequest.picture = pictureBase64Data
    },

    addAtmLocation: function () {
      this.$refs.transactionTypesRef.sendTransactionTypesToParent()

      // kontrollime ankeedi täitmist! (teeme eraldi meetodina :) )
      console.log("add atm loc")
      if (this.allRequiredFieldsFilled()) {
        this.postAddAtmLocation()
      } else {
        this.messageError = 'Palun täitke kõik vajalikud väljad'
      }
    },

    postAddAtmLocation: function () {
      let preferExample = 'code=200'
      if (this.atmRequest.locationName === 'Rimi') {
        preferExample = 'code=403, example=403'
      }

      this.$http.post("/atm/location", this.atmRequest, {
        headers: {
          Prefer: preferExample
        }
      }).then(response => {
        this.messageError = ''
        this.messageSuccess = 'Uus ATM edukalt lisatud'
        setTimeout(() => {
          this.$router.go(0)
        }, 700);

      }).catch(error => {
        this.messageError = error.response.data.errorMessage
      })
    },

    atLeastOneTransactionTypeSelected: function () {
      let atLeastOneSelected = false
      this.atmRequest.transactionTypes.forEach(element => {
            if (element.isSelected) {
              console.log('checkbox return true')
              atLeastOneSelected = true
            }
          }
      )
      return atLeastOneSelected
    },

    allRequiredFieldsFilled: function () {
      console.log("olen siin")
      return (
          this.atmRequest.cityId > 0 &&
          this.atmRequest.locationName !== '' &&
          this.atmRequest.numberOfAtms > 0 &&
          this.atLeastOneTransactionTypeSelected()
      )
    },

    setCityId: function (cityId) {
      this.atmRequest.cityId = cityId
    },

    setLocationName: function (locationName) {
      this.atmRequest.locationName = locationName
    },

    setNumberOfAtms: function (numberOfAtms) {
      this.atmRequest.numberOfAtms = Number(numberOfAtms)
    },

    setTransactionTypes: function (transactionTypesEmit) {
      this.atmRequest.transactionTypes = transactionTypesEmit
    },

    navigateToAtms: function () {
      this.$router.push({name: 'atmsRoute'})
    },

  }
}
</script>

