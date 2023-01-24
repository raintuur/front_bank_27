<template>
  <div v-if="message != ''" class="alert alert-danger" role="alert">
    {{message}}
  </div>
</template>
<script>
export default {
  name: 'AlertSuccess',
  props: {
    message: {}
  }
}
</script>
