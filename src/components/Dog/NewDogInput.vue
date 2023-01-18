<template>
  <div class="row justify-content-center">
    <!--   COLUM 1   -->
    <div class="col col-3">
      <input v-model="koer.krantsNimi" class="form-control" placeholder="Krants">
    </div>
    <!--   COLUM 2 classiga col   -->
    <div class="col col-3">
      <input v-model="koer.krantsiPoegNimi" class="form-control" placeholder="Krantsipoeg">
    </div>
    <div class="col col-3">
      <ImageInput v-on= $listeners />
    </div>
    <div class="col col-3">
      <button v-on:click="addDog" class="btn btn-warning">Lisa koer</button>
    </div>
  </div>
</template>
<script>
import ImageInput from "@/components/ImageInput.vue";

export default {
  name: 'NewDogInput',
  components: {ImageInput},
  props: {
    koer: {}
  },
  methods: {
    addDog: function () {
      this.$emit('clickAddDogEvent')
    }
  }
}
</script>