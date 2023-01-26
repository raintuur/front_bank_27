<template>
  <div class="input-group mb-3">
     <span class="input-group-text" :class="{'input-success' : Number(numberOfAtms) > 0}">Automaatide arv</span>
              <input v-model="numberOfAtms" type="number" min="0" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'AtmQuantity',
  props: {
    isView: Boolean
  },
  data: function () {
    return {
      numberOfAtms: 0
    }
  },

  methods: {
    emitNumberOfAtms: function () {
      this.emit('emitNumberOfAtms', Number(this.numberOfAtms))
    },
    setNumberOfAtms(numberOfAtms) {
      this.numberOfAtms = numberOfAtms
    }
  }
}
</script>