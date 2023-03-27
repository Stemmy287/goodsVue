<template>
  <div class="stock_page_container">
    <product-item v-for="product in sortedProductsByName" :key="product.id" :product="product"/>
    <pre-loader/>
    <no-items v-show="!sortedProductsByName.length && !isLoading"/>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import ProductItem from "@/Components/ProductItem/ProductItem.vue";
import {useStore} from "vuex";
import PreLoader from "@/Components/UI/PreLoader.vue";
import NoItems from "@/Components/UI/NoItems.vue";

const store = useStore()

const isLoading = computed(() => store.state.app.isLoading)

const fetchProducts = () => store.dispatch('products/fetchProducts')

const sortedProductsByName = computed(() => store.getters["products/sortedProductsByName"])

onMounted(fetchProducts)

</script>

<style scoped>
.stock_page_container {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  position: relative;
}
</style>