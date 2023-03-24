<template>
  <div class="app_container">
    <header-item/>
    <div class="content">
      <sort-bar></sort-bar>
      <router-view></router-view>
    </div>
  </div>

</template>

<script lang="ts">
import HeaderItem from "@/Components/HeaderItem.vue";
import SortBar from "@/Components/SortBar.vue";

export default {
  components: {HeaderItem, SortBar}
}
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

.content {
  display: flex;
  flex-direction: column;
}


</style>
