<template>
  <div>

    <div class="input-group mb-3">
      <span class="input-group-text"
            :class="{'input-filled': (locationName !=='')}">Asukoht</span>
      <input :disabled="isView" v-model="locationName" v-on:change="emitLocationName" type="text" class="form-control">
    </div>

  </div>
</template>
<script>

export default {
  name: 'AtmLocationName',
  props: {
    isView: Boolean
  },


  data: function () {
    return {
      locationName: ''
    }
  },

  methods: {
    emitLocationName: function () {
      this.$emit('emitlocationNameEvent', this.locationName)
    },

    setLocationName: function (locationName) {
      this.locationName = locationName
    }
  }

}
</script>