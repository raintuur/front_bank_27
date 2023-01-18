<template>
  <div>

    <div class="row justify-content-center">
      <div class="col col-2">
        <input v-model="krantsNimi" class="form-control" placeholder="Krants" aria-label="First name">
      </div>
      <div class="col col-2">
        <input v-model="krantsiPoegNimi" class="form-control" placeholder="Krantsipoeg" aria-label="Last name">
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
      krantsNimi: 'Pontu',
      krantsiPoegNimi: 'Murdja'
    }
  },
  methods:{

  }
}
</script>
