<template>
  <div class="input-group mb-3">
    <span class="input-group-text"
          :class="{'input-success' : Number(numberOfAtms) > 0}">Automaatide arv</span>
    <input v-model="numberOfAtms" type="number" min="0" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'AtmQuantity',
  data: function () {
    return {
      numberOfAtms: 0
    }
  },
  methods: {
    emitNumberOfAtms: function () {
      this.$emit('emitNumberOfAtmsEvent', Number(this.numberOfAtms))
    }
  }
}
</script>