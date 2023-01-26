<template>
  <div>
    <input type="file" v-on:change="handleImage" accept="image/x-png,image/jpeg">
  </div>
</template>

<script>
export default {
  name: 'ImageInput',
  data: function () {
    return {
      pictureDataBase64: String
    }
  },
  methods: {
    handleImage: function (event) {
      const selectedImage = event.target.files[0];
      this.sendBase64StringToParent(selectedImage);
    },

    sendBase64StringToParent: function (fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pictureDataBase64 = reader.result;
        this.$emit('sendBase64StringToParentEvent', this.pictureDataBase64)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    }
  }
}
</script>