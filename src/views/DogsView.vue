<template>
  <div>
    <!--  ROW 1 see div mille sees col div-id  -->
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
        <button v-on:click="addDog" class="btn btn-warning">Lisa koer</button>
      </div>
    </div>


    <br>
    <img src="https://i.pinimg.com/564x/ef/35/a6/ef35a6daa94bed948fd3d5466457d55e--so-funny-funny-stuff.jpg">
  </div>
</template>

<script>
export default {
  name: 'DogsView',
  data: function () {
    return {
      koer:
        {
          krantsNimi: '',
          krantsiPoegNimi: ''
        },
      varjupaik: []
    }
  },
  methods:{
    addDog: function () {
      alert("Koer " + this.koer.krantsNimi + this.koer.krantsiPoegNimi +  " lisati süsteemi")
    }
  }
}
</script>
