<template>
  <div v-if="message != ''" data="callSuccessAlert" class="alert alert-danger" role="alert">
    {{message}} + {{counterMessage}} {{alertCounter}}
  </div>
</template>
<script>
export default {
  name: 'AlertDanger',
  props: {
    message: {},

  },
  data: function () {
    return {
      alertCounter: 10,
      counterMessage: 'Notification closes in: '
    }
  },
  methods: {
    callSuccessAlert: function (i) {
        setTimeout(() => {this.alertCounter = i}, 1000)
    },
    loopAlert: function () {
      for (let i = 10; i > 0; i--) {
        this.callSuccessAlert(i)
      }
    }
  },
  mounted() {
    this.loopAlert()
  }
}
</script>