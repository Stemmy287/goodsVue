<template>
  <div class="productItem_container">
    <img class="img" :src="product.img" alt="photoProduct">
    <product-info :product-info-item="productInfoItem"/>
    <product-buy-block :product="product"/>
  </div>
</template>

<script setup lang="ts">
import {ProductDealType} from "@/api/apiProducts";
import {PropType} from "vue";
import ProductInfo from "@/Components/ProductItem/ProductItemBody/ProductInfo.vue";
import ProductBuyBlock from "@/Components/ProductItem/ProductItemBody/ProductBuyBlock.vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  product: {
    type: Object as PropType<ProductDealType>,
    required: true
  }
})

const productInfoItem = {
  typeOfSale: props.product.typeOfSale,
  title: props.product.title,
  geo: props.product.geo,
  salesMan: props.product.salesman,
  typeOfProduct: props.product.typeOfProduct,
  description: props.product.description
}
</script>

<style scoped>
.productItem_container {
  height: 366px;
  padding: 20px 25% 83px 20px;
  border-radius: 20px;
  border: 1px solid #E0E3EE;
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  position: relative;
}

.img {
  min-height: 256px;
  min-width: 256px;
  border-radius: 15px;
}

</style>