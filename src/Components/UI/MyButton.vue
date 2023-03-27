<template>
  <button class="btn"><slot></slot></button>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .btn {
    height: 50px;
    width: 86px;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #2D3B87;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
  }
</style>