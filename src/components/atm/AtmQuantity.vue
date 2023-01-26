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
        <input :disabled="isView" v-model="numberOfAtms" v-on:change="emitNumberOfAtms" type="number" class="form-control">
      </div>
    </div>

  </div>
</template>
<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: 'AtmQuantity',
  components: {AlertDanger},

  props: {
    isView: Boolean
  },

  data: function () {
    return {
      message: '',
      numberOfAtms: 0
    }
  },

  methods: {
    emitNumberOfAtms: function () {
      this.$emit('emitNumberOfAtmsEvent', Number(this.numberOfAtms))
    },

    setAtmQuantity: function (numberOfAtms) {
      this.numberOfAtms = numberOfAtms
    }
  }

}
</script>