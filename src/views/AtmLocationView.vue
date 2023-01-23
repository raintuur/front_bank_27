<template>
  <div>

  <div class="row justify-content-center">
<!--cloumn1-->
    <div class="col-2">
      <CitiesDropdown/>
    </div>
<!--column2-->
    <div class="col-2">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Asukoht</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Automaatide arv</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
      </div>
      <TransactionTypeCheckBox/>
    </div>

<!--    column 3 -->
    <div class="col-2">

    </div>
  </div>



  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/views/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";

export default {
  name: "AtmLocationView",
  components: {CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
    }
  },
  methods: {

  }
}
</script>
