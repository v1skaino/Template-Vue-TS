<script setup lang="ts">
import useHome from "./useHome";

const {
  state: { label },
  handlers: { updateLabel, navigate },
} = useHome();
</script>

<template>
  <h1>{{ label }}</h1>
  <div class="flex">
    <button @click="updateLabel">Press here!</button>
    <button @click="navigate">Navigate to login -></button>
  </div>
</template>

<style scoped src="./styles.css" />
