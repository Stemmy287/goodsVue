<template>
    <div class="sortBar">
      <div class="sortByType">
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

.sortBar {
  display: flex;
  justify-content: space-between;
}

.sortByType {
  background-color: #F4F5F9;
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 7px;
}

.sortByType a {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  color: #969DC3;
  text-decoration: none;
}
</style>