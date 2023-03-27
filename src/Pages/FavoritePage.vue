<template>
  <div class="deals_page_container">
    <product-item v-for="product in favouritePageItem" :key="product.id" :product="product"/>
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

    const fetchProducts = () => store.dispatch('products/fetchProducts')
    const fetchDealProducts = () => store.dispatch('products/fetchDealProducts')

    const favouritePageItem = computed(() => store.getters["products/favouritePageItem"])

    onMounted(() => {
      fetchProducts()
      fetchDealProducts()
    })

    return {favouritePageItem}
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