<template>
  <div class="header_container">
    <div class="head_line"></div>
    <div class="nav_buttons">
      <my-button :class="{checked_page: $route.path === '/favourite'}" @click="$router.push('/favourite')"><BaseIcon name="like"/>Избранное</my-button>
      <my-button :class="{checked_page: $route.path === '/'}" @click="$router.push('/')"><BaseIcon name="stock"/>Склад</my-button>
      <my-button :class="{checked_page: $route.path === '/deals'}" @click="$router.push('/deals')"><BaseIcon name="bag"/>Сделки</my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "@/Components/UI/MyButton.vue";
import BaseIcon from "@/Components/UI/BaseIcon.vue";
</script>

<style scoped>
.header_container {
  margin-bottom: 100px;
}

.head_line {
  height: 41px;
  background-color: #E0E3EE;
  border-radius: 0 0 10px 10px;
  margin-bottom: 12px;
}

.nav_buttons {
  display: flex;
  column-gap: 5px;
  justify-content: flex-end;
}
.checked_page {
  background-color: #F4F5F9;
}
</style>