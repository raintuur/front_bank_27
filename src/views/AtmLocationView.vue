<template>
  <div>

  <div class="row justify-content-center">
    <div class="col-2">

      <div class="form-check">
        <input class="form-check-input" type="checkbox">
        <label class="form-check-label">
          Default checkbox
        </label>
      </div>


    </div>
  </div>



  </div>
</template>

<script>
export default {
  name: "AtmLocationView",
  data: function () {
    return {
      transactionTypes: [
          {
            typeId: 1,
            typeName: '',
            isSelected: false
          },
        ]
    }
  },
  methods:
}
</script>
