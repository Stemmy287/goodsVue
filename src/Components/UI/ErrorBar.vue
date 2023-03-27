<template>
  <div class="error_bar_container">
    {{ error }}
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const error = computed(() => store.state.app.isError)

const closeErrorBar = () => store.commit('app/setIsError', null)

setTimeout(() => {
  closeErrorBar()
}, 5000)

</script>

<style scoped>
.error_bar_container {
  display: flex;
  align-items: center;
  position: fixed;
  height: 50px;
  background-color: #800000;
  bottom: 5%;
  left: 3%;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: white;
  padding: 20px;
  border-radius: 10px;
}
</style>