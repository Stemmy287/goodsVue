<template>
  <div class="disable" v-show="isLoading"></div>
  <div class="loading" v-show="isLoading">.........</div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()

const isLoading = computed(() => store.state.app.isLoading)

</script>

<style scoped>
.disable {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: .1;
  border-radius: 20px;
}

.loading {
  position: fixed;
  font-family: 'Rubik', sans-serif;
  font-weight: 900;
  font-size: 50px;
  line-height: 100%;
  color: #2D3B87;
  top: 50%;
  left: 45%;
}
</style>