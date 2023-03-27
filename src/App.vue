<template>
  <div class="app_container">
    <header-item/>
    <div class="content">
      <sort-bar></sort-bar>
      <router-view></router-view>
    </div>
    <error-bar v-show="isError"/>
  </div>
</template>

<script setup lang="ts">
import HeaderItem from "@/Components/HeaderItem.vue";
import SortBar from "@/Components/SortBar.vue";
import ErrorBar from "@/Components/UI/ErrorBar.vue"
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()

const isError = computed(() => store.state.products.isError)

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app_container {
  padding: 0 300px;
  margin-bottom: 50px;
}

@media screen and (max-width: 1550px) {
  .app_container {
    padding: 0 150px;

  }
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
