<template>
  <div class="stock_page_container">
    <product-item/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import ProductItem from "@/Components/ProductItem.vue";
export default defineComponent({
  components: {ProductItem}


})
</script>

<style scoped>
 .stock_page_container {
   display: flex;
   flex-direction: column;
   row-gap: 50px;
 }
</style>