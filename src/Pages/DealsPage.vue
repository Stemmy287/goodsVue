<template>
  <div class="deals_page_container">
    <product-item v-for="product in sortedDealProductsByName" :key="product.id" :product="product"/>
    <pre-loader/>
    <no-items v-show="!sortedDealProductsByName.length && !isLoading"/>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import ProductItem from "@/Components/ProductItem.vue";
import PreLoader from "@/Components/UI/PreLoader.vue";
import {useStore} from "vuex";
import NoItems from "@/Components/UI/NoItems.vue";

const store = useStore()

const isLoading = computed(() => store.state.products.isLoading)

const fetchDealProducts = () => store.dispatch('products/fetchDealProducts')

const sortedDealProductsByName = computed(() => store.getters["products/sortedDealProductsByName"])

onMounted(fetchDealProducts)

</script>

<style scoped>
.deals_page_container {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
}
</style>