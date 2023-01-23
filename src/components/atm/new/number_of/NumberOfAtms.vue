<template>
<div>

  <div v-if="Number(numberOfAtms) === 0">
    <NumberOfAtmsDefault :number-of-atms="numberOfAtms"/>
  </div>
  <div v-else-if="Number(numberOfAtms) < 0">
    <AlertDanger message="Negatiivne arv ei ole lubatud"/>
    <NumberOfAtmsDanger :number-of-atms="numberOfAtms"/>
  </div>
  <div v-else>
    <NumberOfAtmsSuccess :number-of-atms="numberOfAtms"/>
  </div>

</div>
</template>
<script>
import NumberOfAtmsDefault from "@/components/atm/new/number_of/NumberOfAtmsDefault.vue";
import NumberOfAtmsDanger from "@/components/atm/new/number_of/NumberOfAtmsDanger.vue";
import NumberOfAtmsSuccess from "@/components/atm/new/number_of/NumberOfAtmsSuccess.vue";

export default {
  name: 'NumberOfAtms',
  components: {NumberOfAtmsSuccess, NumberOfAtmsDanger, NumberOfAtmsDefault},
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