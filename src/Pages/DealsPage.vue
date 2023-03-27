<template>
  <div class="deals_page_container">
    <product-item v-for="product in sortedDealProductsByName" :key="product.id" :product="product"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import ProductItem from "@/Components/ProductItem.vue";
import {useStore} from "vuex";

export default defineComponent({
  components: {
    ProductItem
  },

  setup() {

    const store = useStore()

    const fetchDealProducts = () => store.dispatch('products/fetchDealProducts')

    const sortedDealProductsByName = computed(() => store.getters["products/sortedDealProductsByName"])

    onMounted(fetchDealProducts)

    return {sortedDealProductsByName}
  }
})
</script>

<style scoped>
.deals_page_container {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
}
</style>