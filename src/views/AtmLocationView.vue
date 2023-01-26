<template>
  <div>
    <AlertSuccess :message="messageSuccess"/>
    <AlertDanger :message="messageError"/>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <!--  COLUMN 1  -->
      <div class="col-2">
        <CitiesDropdown ref="citiesDropdown" @emitSelectedCityIdEvent="setAtmRequestCityId"/>
      </div>

      <!--  COLUMN 2  -->
      <div class="col-3">
        <AtmLocationName ref="atmLocationName" @emitLocationNameEvent="setAtmRequestLocationName"/>
        <AtmQuantity ref="atmQuantity" @emitNumberOfAtmsEvent="setAtmRequestNumberOfAtms"/>
        <AtmTransactionTypes ref="atmTransactionTypes" @emitTransactionTypesEvent="setAtmRequestTransactionTypes"/>
        <ImageInput @emitBase64Event="setAtmRequestPicture"/>

        <button v-on:click="navigateToAtms" type="button" class="btn btn-outline-danger">Tühista</button>
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
import AtmTransactionTypes from "@/components/atm/AtmTransactionTypes.vue";
import CitiesDropdown from "@/components/CitiesDropdown.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import ImageInput from "@/components/ImageInput.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import AtmLocationName from "@/components/atm/AtmLocationName.vue";
import AtmQuantity from "@/components/atm/AtmQuantity.vue";

export default {
  name: "AtmLocationView",
  components: {
    AtmQuantity,
    AtmLocationName,
    AlertSuccess,
    ImageInput, AlertDanger, CitiesDropdown, AtmTransactionTypes
  },
  data: function () {
    return {
      isEdit: Boolean(this.$route.query.isEdit),
      locationId: this.$route.query.locationId,
      messageError: '',
      messageSuccess: '',

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

    getAtmLocation() {
      this.$http.get("/atm/location", {
            params: {
              locationId: this.locationId
            }
          }
      ).then(response => {
        this.atmRequest = response.data

        // väärtustame kõikide alamkomponentide väljad
        this.$refs.citiesDropdown.setSelectedCityId(this.atmRequest.cityId)
        this.$refs.atmLocationName.setLocationName(this.atmRequest.locationName)
        this.$refs.atmQuantity.setNumberOfAtms(this.atmRequest.numberOfAtms)
      }).catch(error => {
        console.log(error)
      })
    },

    setAtmRequestCityId: function (cityId) {
      this.atmRequest.cityId = cityId
    },

    setAtmRequestLocationName: function (locationName) {
      this.atmRequest.locationName = locationName
    },

    setAtmRequestNumberOfAtms: function (numberOfAtms) {
      this.atmRequest.numberOfAtms = numberOfAtms
    },

    setAtmRequestTransactionTypes: function (transactionTypes) {
      this.atmRequest.transactionTypes = transactionTypes
    },

    setAtmRequestPicture: function (pictureBase64Data) {
      this.atmRequest.picture = pictureBase64Data
    },

    navigateToAtms: function () {
      this.$router.push({name: 'atmsRoute'})
    },

    timeoutAndReloadPage: function (timeout) {
      setTimeout(() => {
        this.$router.go(0)
      }, timeout)
    },

    addAtmLocation: function () {
      this.messagesReset();
      this.callAtmRequestEmits();

      // kontrollime, etkas kõik vajalikud väljad on nõuetekohaselt täidetud
      if (this.allRequiredFieldsAreFilled()) {
        this.postAddAtmLocation();

        let timeOut = 3000

        this.timeoutAndReloadPage();
      } else {
        this.messageError = 'Täida kõik kohustuslikud väljad ning vali vähemalt 1 teenus!'
      }

    },

    messagesReset: function () {
      this.messageSuccess = ''
      this.messageError = ''
    },

    callAtmRequestEmits: function () {
      this.$refs.atmLocationName.emitLocationName()
      this.$refs.atmQuantity.emitNumberOfAtms()
      this.$refs.atmTransactionTypes.emitTransactionTypes()
    },

    atLeastOneTransactionTypeIsSelected: function () {
      let atLeastOneIsSelected = false

      this.atmRequest.transactionTypes.forEach(transactionType => {
        if (transactionType.isSelected) {
          atLeastOneIsSelected = true
        }
      })
      return atLeastOneIsSelected
    },

    allRequiredFieldsAreFilled: function () {
      return this.atmRequest.cityId > 0 &&
          this.atmRequest.locationName !== '' &&
          this.atmRequest.numberOfAtms > 0 &&
          this.atLeastOneTransactionTypeIsSelected();
    },

    postAddAtmLocation: function () {
      let preferExample = 'code=200'

      if (this.atmRequest.locationName === 'Rimi') {
        preferExample = 'code=403, example=403';
      }

      // saadame POST sõnumi
      this.$http.post("/atm/location", this.atmRequest, {
            headers: {
              Prefer: preferExample
            }
          }
      ).then(response => {
        this.messageSuccess = 'Uus ATM on edukalt lisatud'
        this.timeoutAndReloadPage(3000)
      }).catch(error => {
        this.messageError = error.response.data.errorMessage
      });
    }
  },

  beforeMount() {
    if (this.isEdit) {
      this.getAtmLocation()
    }
  }
}
</script>
