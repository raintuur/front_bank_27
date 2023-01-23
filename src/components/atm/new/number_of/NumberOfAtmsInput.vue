<template>
<div>

  <AlertError :message="message"/>

  <div v-if="Number(numberOfAtms) == 0">
    <div class="input-group mb-3">
      <span class="input-group-text">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>

  <div v-else-if="Number(numberOfAtms) < 0" >

    <div class="input-group mb-3">
      <span class="input-group-text input-danger">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>

    <AlertDanger message="Negatiivne arv ei ole lubatud"/>


  </div>

  <div v-else>
    <div class="input-group mb-3">
      <span class="input-group-text input-filled">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>

</div>
</template>
<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import NumberOfAtmsDefault from "@/components/atm/new/number_of/NumberOfAtms.vue";
import NumberOfAtmsDanger from "@/components/atm/new/number_of/NumberOfAtmsDanger.vue";
import NumberOfAtmsSuccess from "@/components/atm/new/number_of/NumberOfAtmsSuccess.vue";

export default {
  name: 'NumberOfAtms',
  components: {NumberOfAtmsSuccess, NumberOfAtmsDanger, NumberOfAtmsDefault, AlertDanger, AlertError: AlertDanger},
  props: {
    numberOfAtms: {}
  },
  data: function () {
    return {
      message: ''
    }
  }
}
</script>