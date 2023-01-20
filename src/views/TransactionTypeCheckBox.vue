<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        ???
      </label>
    </div>
  </div>

</template>
<script>
export default {
  name: 'TransactionTypeCheckBox',
  data: function () {
    return {
      transactionTypes: [
        {
          typeId: 1,
          typeName: '',
          isSelected: false
        }
      ]
    }
  },
  methods: {

  }
}
</script>
