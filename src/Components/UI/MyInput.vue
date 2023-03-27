<template>
  <div class="input_container">
    <input :value="modelValue" @input="updateInput" class="input" type="text">
    <div class="icon">
      <BaseIcon name="magnifier"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from "@/Components/UI/BaseIcon.vue";

// eslint-disable-next-line no-undef
defineProps({
  modelValue: String
})
// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue'])

const updateInput = (e: { currentTarget: { value: string } }) => emit('update:modelValue', e.currentTarget.value)

</script>

<style scoped>

.input_container {
  position: relative;
}

.input {
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  width: 274px;
  height: 41px;
  padding: 0 19px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  color: #2D3B87;
  outline: none;
  position: relative;
}

.icon {
  padding-top: 3px;
  height: 35px;
  width: 35px;
  background-color: #2D3B87;
  border-radius: 9px;
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>