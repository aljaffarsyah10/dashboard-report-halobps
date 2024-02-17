<template>
  <!-- <a v-bind:href="url">ksdnkgnfdgkfdnglad</a> -->
  <!-- <a :href="url">ksdnkgnfdgkfdnglad</a> -->
  <div>
    <!-- Semua elemen harus berada di dalam elemen root Vue -->
    <!-- <input type="text" v-model="nama" />
    {{ nama }} -->

    <!-- <div v-if="products.length"> -->
    <input type="text" v-model="cari" placeholder="Cari" />
    <ul>
      <!-- <li v-for="item in products" :key="item.id"> -->
      <li v-for="item in cariData" :key="item.id">
        <div>{{ item.title }} - {{ item.price }}</div>
      </li>
    </ul>

    <!-- </div> -->
    <!-- <div v-else> -->
    <!-- <p>No data found</p> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // url: "https://google.com",
      // nama: "",
      cari: "",
      products: [],
    };
  },
  // lifecycle hook
  // beforeCreate() {
  //   console.log("before create");
  // },
  created() {
    // console.log("create");
    this.products = [
      { id: 1, title: "Product 1", price: 3000 },
      { id: 2, title: "Product 2", price: 2000 },
      { id: 3, title: "Product 3", price: 4000 },
    ];
  },
  // beforeMount() {
  //   console.log("before mount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  computed: {
    cariData() {
      return this.products.filter((item) => {
        return item.title.match(this.cari);
      });
    },
  },
};
</script>

<style></style>
