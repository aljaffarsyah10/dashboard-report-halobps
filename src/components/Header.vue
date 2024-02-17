<template>
  <div>
    <!-- <h2>Hello world</h2> -->
    <h2>{{ text }}</h2>
    <button @click="changeText">Ubah Text</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Header",
  props: ["text"],
  data() {
    return {
      newText: "Ini adalah text dari header.vue",
    };
  },
  methods: {
    changeText() {
      this.$emit("changeTitle", this.newText);
    },
  },
  emits: ["changeTitle"],
};
</script>

<style scoped></style>
