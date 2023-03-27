<template>
  <div class="sort_bar_Container">
    <div class="sort_by_type">
      <a href="/" class="no_checked_sort" :class="{checked_sort: !typeOfSale}"
         @click.prevent="setTypeOfSale(null)">Все типы</a>
      <a href="/" class="no_checked_sort" :class="{checked_sort: typeOfSale === 'Разовая продажа'}"
         @click.prevent="setTypeOfSale('Разовая продажа')">Прямые продажи</a>
      <a href="/" class="no_checked_sort" :class="{checked_sort: typeOfSale === 'Аукцион'}"
         @click.prevent="setTypeOfSale('Аукцион')">Аукцион</a>
    </div>
    <my-input :model-value="nameSearch" @update:model-value="setNameSearch"/>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import MyInput from "@/Components/UI/MyInput.vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {useDebounce} from "@/hooks/useDebounce";

const store = useStore()

const route = useRoute()

const typeOfSale = computed(() => store.state.products.queryParams.typeOfSale)
const nameSearch = computed(() => store.state.products.nameSearch)

const fetchProducts = () => store.dispatch('products/fetchProducts')
const fetchDealProducts = () => store.dispatch('products/fetchDealProducts')
const getFromLocalStorage = () => store.dispatch('products/getFromLocalStorage')

const setTypeOfSale = (typeOfSale: string | null) => store.commit('products/setTypeOfSale', typeOfSale)

const {setNameSearch} = useDebounce()

watch(typeOfSale, () => {
  if (route.path === '/deals') {
    fetchDealProducts()
  } else if (route.path === '/favourite') {
    fetchProducts()
    fetchDealProducts()
  } else {
    fetchProducts()
  }
})

onMounted(getFromLocalStorage)

</script>

<style scoped>

.sort_bar_Container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.sort_by_type {
  background-color: #F4F5F9;
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 7px;
}

.no_checked_sort {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  color: #969DC3;
  text-decoration: none;
}

.checked_sort {
  color: #2D3B87;
}
</style>