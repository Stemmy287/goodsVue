<template>
  <div class="stock_page_container">
    <product-item v-for="product in sortedProductsByName" :key="product.id" :product="product"/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import ProductItem from "@/Components/ProductItem.vue";
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  components: {
    ProductItem
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts'
    }),
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      sortedProductsByName: 'products/sortedProductsByName'
    })
  }
})
</script>

<style scoped>
 .stock_page_container {
   display: flex;
   flex-direction: column;
   row-gap: 50px;
 }
</style>