<template>
  <div class="stock_page_container">
    <product-item v-for="product in sortedProductsByName" :key="product.id" :product="product"/>
  </div>

</template>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import ProductItem from "@/Components/ProductItem.vue";
import {useStore} from "vuex";

    const store = useStore()

    const fetchProducts = () => store.dispatch('products/fetchProducts')

    const sortedProductsByName = computed(() => store.getters["products/sortedProductsByName"])

    onMounted(fetchProducts)

</script>

<style scoped>
 .stock_page_container {
   display: flex;
   flex-direction: column;
   row-gap: 50px;
 }
</style>