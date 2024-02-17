<template>
  <!-- <Header text="Ini appvue"></Header> -->
  <Header @changeTitle="ubahText" :text="text"></Header>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      text: "ini appvue",
    };
  },
  methods: {
    ubahText(newText) {
      this.text = newText;
    },
  },
};
</script>

<style></style>
