<template>
  <div class="productItem_container">
    <img class="img"
         :src="product.img"
         alt="photoProduct">
    <div class="about_product">
      <div class="title_block">
        <span class="type_of_sale">{{ product.typeOfSale }}</span>
        <h2 class="title">{{ product.title }}</h2>
      </div>
      <div class="info">
        <div class="geo">
          <BaseIcon name="geo"/>
          {{ product.geo }}
        </div>
        <span class="sales_man">Продавец <b>{{ product.salesman }}</b></span>
        <div class="view_product">
          <span class="view">Вид товара</span>
          <span class="view_name">{{ product.typeOfProduct }}</span>
        </div>
        <p class="desc">{{ product.description }}</p>
      </div>
    </div>
    <div class="buy">
      <div class="price_info">
        <h3 class="price">{{ product.price }}</h3>
        <div class="price_for_count">
          <span>Количество</span>
          <p>{{ product.count }}</p>
        </div>
        <div class="price_for_count">
          <span>Стоимость за штуку</span>
          <p>{{ product.priceForItem }}</p>
        </div>
      </div>
      <div class="buy_buttons">
        <my-button v-if="$route.path === '/deals'"
                   class="pay"
                   :disabled="product.paid"
                   @click="updateDealProduct({data: {paid: true}, id: product.id})"
        >
          {{ product.paid ? 'Оплачено' : 'Оплатить' }}
        </my-button>
        <my-button v-else
                   class="push_deals_btn"
                   @click="createDealProduct(product)"
        >
          Добавить в сделки
        </my-button>
        <my-button class="no_liked_favourite_btn"
                   :class="{liked_favourite_btn: product.favorite}"
                   @click="onLikeClick">
          <BaseIcon :favourite="product.favorite" name="like"/>
        </my-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from "@/Components/UI/BaseIcon.vue";
import MyButton from "@/Components/UI/MyButton.vue";
import {ProductDealType, ProductType, UpdateProductType} from "@/api/apiProducts";
import {useStore} from "vuex";
import {PropType} from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  product: {
    type: Object as PropType<ProductDealType>,
    required: true
  }
})

const store = useStore()

const updateProduct = (payload: UpdateProductType) => store.dispatch('products/updateProduct', payload)
const updateDealProduct = (payload: UpdateProductType) => store.dispatch('products/updateDealProduct', payload)
const createDealProduct = (product: ProductType) => store.dispatch('products/createDealProduct', product)

const onLikeClick = () => {
  if (typeof props.product['paid'] !== "undefined") {
    updateDealProduct({data: {favorite: !props.product.favorite}, id: props.product.id})
  } else {
    updateProduct({data: {favorite: !props.product.favorite}, id: props.product.id})
  }
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

.buy {
  width: 25%;
  border-radius: 20px;
  border-left: 1px solid #E0E3EE;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.price_info {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.price {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #2D3B87;
}

.price_for_count {
  display: flex;
  justify-content: space-between;
}

.price_for_count span {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #969DC3;
}

.price_for_count p {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #2D3B87;
}

.buy_buttons {
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
}

.push_deals_btn {
  width: 80%;
  background-color: #F4F5F9;
  font-size: 15px;
}

.pay {
  width: 80%;
  font-size: 15px;
  color: #FFFFFF;
  background-color: #69C57F;
}

.pay:disabled {
  width: 80%;
  font-size: 15px;
  color: #969DC3;
  background-color: #FFF;
  border: 1px solid #E0E3EE;
  cursor: default;
}

.no_liked_favourite_btn {
  width: 20%;
  background-color: #F4F5F9;
  font-size: 15px;
}

.liked_favourite_btn {
  background-color: #2D3B87;
}

.liked_favourite_btn_icon path {
  background-color: mediumvioletred;
}

</style>