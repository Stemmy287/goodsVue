<template>
  <div class="stock_page_container">
    <product-item v-for="product in stockPageItems" :key="product.id" :product="product"/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import ProductItem from "@/Components/ProductItem.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default defineComponent({
  components: {
    ProductItem
  },
  methods: {
    ...mapMutations({
      setProducts: 'products/setProducts'
    }),
    ...mapActions({
      fetchProducts: 'products/fetchProducts'
    }),
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapState({
      products: (state: any) => state.products.products,
      queryParams: (state: any) => state.products.queryParams
    }),
    ...mapGetters({
      stockPageItems: 'products/stockPageItems',
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