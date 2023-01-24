<template>
  <div>

    <div v-if="Number(numberOfAtms) < 0">
      <AlertDanger message="Ei saa olla negatiivne arv!"/>
    </div>

    <div>
      <div class="input-group mb-3">
        <span class="input-group-text"
              :class="{'input-filled': (Number(numberOfAtms) > 0), 'input-danger': (Number(numberOfAtms) < 0)}">
          Automaatide arv</span>
        <input v-model="numberOfAtms" v-on:change="numberOfAtmChangeEvent" type="number" class="form-control">
      </div>
    </div>

  </div>
</template>
<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: 'numberOfAtmsInput',
  components: {AlertDanger},



  data: function () {
    return {
      message: '',
      numberOfAtms: 0
    }
  },

  methods: {
    numberOfAtmChangeEvent: function () {
      this.$emit('numberOfAtmChangeEvent', this.numberOfAtms)
    }
  }

}
</script>