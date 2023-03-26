<template>
  <div class="deals_page_container">
    <product-item v-for="product in favouritePageItem" :key="product.id" :product="product"/>
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
      fetchProducts: 'products/fetchProducts',
      fetchDealProducts: 'products/fetchDealProducts'
    }),
  },
  mounted() {
    this.fetchProducts()
    this.fetchDealProducts()
  },
  computed: {
    ...mapGetters({
      favouritePageItem: 'products/favouritePageItem',
    })
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