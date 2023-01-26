<template>
<div>

    <div class="input-group mb-3">
      <span class="input-group-text"
            :class="{'input-filled': (locationName !=='')}" >Asukoht</span>
      <input v-model="locationName" v-on:change="locationNameChangeEvent" type="text" class="form-control">
    </div>

</div>
</template>
<script>

export default {
  name: 'LocationName',
  components: {},


  data: function () {
    return {
      locationName: ''
    }
  },

  methods: {
    locationNameChangeEvent: function () {
      this.$emit('locationNameChangeEvent', this.locationName)
    }
  }

}
</script>