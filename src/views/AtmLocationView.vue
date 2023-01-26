<template>
  <div>
    <AlertDanger :message="messageError"/>
    <AlertSuccess :message="messageSuccess"/>
    <div class="row justify-content-center">

      <!-- COL 1   -->
      <div class="col-2">
        <CitiesDropdown ref="citiesDropdown" :is-view="isView" @emitSelectedCityIdEvent="setCityId"/>
      </div>

      <!--col 2-->
      <div class="col-3">
        <AtmLocationName ref="atmLocationName" :is-view="isView" @emitlocationNameEvent="setAtmRequestLocationName"/>
        <AtmQuantity ref="atmQuantity" :is-view="isView" @emitNumberOfAtmsEvent="setAtmRequestNumberOfAtms"/>
        <AtmTransactionTypes ref="transactionTypes" @emitTransactionTypes="setAtmRequestTransactionTypes"/>

        <image-input v-if="!isView" @emitBase64Event="emitBase64"/>


        <div>
          <button v-on:click="navigateToAtms" v-if="isView" type="button" class="btn btn-danger justify-content-end">Tagasi</button>
          <button v-on:click="navigateToAtms" v-if="!isView" type="button" class="btn btn-danger justify-content-end">Tühista</button>
          <button v-if="isAdd" v-on:click="addAtmLocation" type="button" class="btn btn-success justify-content-end">Lisa</button>
          <button v-if="isEdit" v-on:click="updateAtmLocation" type="button" class="btn btn-success justify-content-end">Muuda</button>
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
import AtmTransactionTypes from "@/components/atm/new/AtmTransactionTypes.vue";
import CitiesDropdown from "@/components/CitiesDropdown.vue";
import LocationName from "@/components/atm/new/location_name/LocationName.vue";
import NumberOfAtmsInput from "@/components/atm/AtmQuantity.vue";
import ImageInput from "@/components/ImageInput.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import {config} from "@fortawesome/fontawesome-svg-core";
import AtmLocationName from "@/components/atm/new/location_name/LocationName.vue";
import AtmQuantity from "@/components/atm/AtmQuantity.vue";

export default {
  name: "AtmLocationView",
  components: {
    AtmQuantity,
    AtmLocationName,
    AlertSuccess,
    AlertDanger, ImageInput, NumberOfAtmsInput, LocationName, CitiesDropdown, AtmTransactionTypes
  },

  data: function () {
    return {
      isView: Boolean(this.$route.query.isView),
      isAdd: Boolean(this.$route.query.isAdd),
      isEdit: Boolean(this.$route.query.isEdit),

      locationId: this.$route.query.locationId,
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
    emitBase64: function (pictureBase64Data) {
      this.atmRequest.picture = pictureBase64Data
    },

    callAtmRequestEmits: function () {
      this.$refs.citiesDropdown.emitSelectedCityId()
      this.$refs.transactionTypes.emitTransactionTypes()
      this.$refs.atmLocationName.emitLocationName()
      this.$refs.atmQuantity.emitNumberOfAtms()
      this.$refs.transactionTypes.emitTransactionTypes()
    },

    addAtmLocation: function () {
      this.messageReset()

      this.callAtmRequestEmits()

      // kontrollime ankeedi täitmist! (teeme eraldi meetodina :) )
      console.log("add atm loc")
      if (this.allRequiredFieldsFilled()) {
        this.postAtmLocation()

      } else {
        this.messageError = 'Palun täitke kõik vajalikud väljad'
      }
    },

    updateAtmLocation: function () {
      this.messageReset()

      this.callAtmRequestEmits()

      // kontrollime ankeedi täitmist! (teeme eraldi meetodina :) )
      console.log("add atm loc")
      if (this.allRequiredFieldsFilled()) {
        this.putAtmLocation()

      } else {
        this.messageError = 'Palun täitke kõik vajalikud väljad'
      }
    },

    putAtmLocation: function () {
      this.$http.put("/atm/location", this.atmRequest, {
            params: {
              locationId: this.locationId,
            }
          }
      ).then(response => {
        this.messageError = ''
        this.messageSuccess = 'ATM edukalt muudetud'
        this.timeoutAndReloadPage(1000)

      }).catch(error => {
        console.log(error)
      })
    },

    messageReset: function () {
      this.messageSuccess = ''
      this.messageError = ''
    },

    postAtmLocation: function () {
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
        this.timeoutAndReloadPage(1000)

      }).catch(error => {
        this.messageError = error.response.data.errorMessage
      })
    },

    timeoutAndReloadPage : function (timeOut) {
      setTimeout(() => {
        this.$router.go(0)
      }, timeOut);
    },


    allRequiredFieldsFilled: function () {
      console.log("olen siin")
      return (
          this.atmRequest.cityId > 0 &&
          this.atmRequest.locationName !== '' &&
          this.atmRequest.numberOfAtms > 0 &&
          this.atmRequest.transactionTypes.some(transactionType => transactionType.isSelected)
      )
    },

    setCityId: function (cityId) {
      this.atmRequest.cityId = cityId
    },

    setAtmRequestLocationName: function (locationName) {
      this.atmRequest.locationName = locationName
    },

    setAtmRequestNumberOfAtms: function (numberOfAtms) {
      this.atmRequest.numberOfAtms = Number(numberOfAtms)
    },

    setAtmRequestTransactionTypes: function (transactionTypesEmit) {
      this.atmRequest.transactionTypes = transactionTypesEmit
    },

    navigateToAtms: function () {
      this.$router.push({name: 'atmsRoute'})
    },

    getAtmLocation: function () {
      this.$http.get("/atm/location", {
            params: {
              locationId: this.locationId
            }
          }
      ).then(response => {
        this.atmRequest = response.data

        //  väärtustame kõigi alamkomponentide väljad
        this.$refs.citiesDropdown.setCityId(this.atmRequest.cityId)
        this.$refs.atmLocationName.setLocationName(this.atmRequest.locationName)
        this.$refs.atmQuantity.setAtmQuantity(this.atmRequest.numberOfAtms)
        this.$refs.transactionTypes.setTransactionTypes(this.atmRequest.transactionTypes)

      }).catch(error => {
        console.log(error)
      })
    },
  },

  beforeMount() {
    if (this.isEdit || this.isView) {
      this.getAtmLocation()
    }
  }

}
</script>

