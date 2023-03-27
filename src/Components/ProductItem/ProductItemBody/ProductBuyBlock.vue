<template>
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
</template>

<script setup lang="ts">

// eslint-disable-next-line no-undef
import {useStore} from "vuex";
import BaseIcon from "@/Components/UI/BaseIcon.vue";
import MyButton from "@/Components/UI/MyButton.vue"
import {ProductDealType, ProductType, UpdateProductType} from "@/api/apiProducts";
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