<template>
    <div class="sort_bar_Container">
      <div class="sort_by_type">
        <a href="/">Все типы</a>
        <a href="/">Прямые продажи</a>
        <a href="/">Аукцион</a>
      </div>
      <my-input/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MyInput from "@/Components/UI/MyInput.vue";

export default defineComponent({
  components: {MyInput}


})
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

.sort_by_type a {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  color: #969DC3;
  text-decoration: none;
}
</style>