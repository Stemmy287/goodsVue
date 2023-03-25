<template>
  <div class="productItem_container">
    <img class="img"
         src="data:image/jpeg;base64,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"
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
        <my-button
            class="push_deals_btn"
            @click="updateProduct({data: {deal: true}, id: product.id})"
        >
          Добавить в сделки
        </my-button>
        <my-button class="no_liked_favourite_btn" :class="{liked_favourite_btn: product.favorite}"
                   @click="updateProduct({data: {favorite: !product.favorite}, id: product.id})">
          <BaseIcon :favourite="product.favorite" name="like"/>
        </my-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import BaseIcon from "@/Components/UI/BaseIcon.vue";
import MyButton from "@/Components/UI/MyButton.vue";
import {ProductType} from "@/api/apiProducts";
import {mapActions} from "vuex";

export default defineComponent({
  components: {BaseIcon, MyButton},
  props: {
    product: {
      type: Object as PropType<ProductType>,
      required: true
    }
  },
  methods: {
    ...mapActions({
      updateProduct: 'products/updateProduct'
    })
  }
})
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
  height: 256px;
  width: 256px;
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