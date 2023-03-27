<template>
  <div class="about_product">
    <div class="title_block">
      <span class="type_of_sale">{{ productInfoItem.typeOfSale }}</span>
      <h2 class="title">{{ productInfoItem.title }}</h2>
    </div>
    <div class="info">
      <div class="geo">
        <BaseIcon name="geo"/>
        {{ productInfoItem.geo }}
      </div>
      <span class="sales_man">Продавец <b>{{ productInfoItem.salesMan }}</b></span>
      <div class="view_product">
        <span class="view">Вид товара</span>
        <span class="view_name">{{ productInfoItem.typeOfProduct }}</span>
      </div>
      <p class="desc">{{ productInfoItem.description }}</p>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from  "@/Components/UI/BaseIcon.vue"

defineProps({
  productInfoItem: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.about_product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title_block {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.type_of_sale {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #969DC3;
}

.title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 125%;
  color: #2D3B87;
}

.info {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.geo {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #616CA5;
  background-color: #F4F5F9;
  height: 23px;
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 245px;
}

.sales_man {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #969DC3;
}

.sales_man b {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #2D3B87;;
}

.view_product {
  display: flex;
  flex-direction: column;
  background-color: #F4F5F9;
  width: 129px;
  row-gap: 7px;
  padding: 10px;
  border-radius: 10px;
}

.view {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #969DC3;
}

.view_name {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #616CA5;
}

.desc {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  color: #2D3B87;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>