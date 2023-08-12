<script setup lang="ts">
import useLogin from "./useLogin";

const {
  state: { label },
  handlers: { updateLabel, navigate },
} = useLogin();
</script>

<template>
  <h1>{{ label }}</h1>
  <div class="flex">
    <button @click="updateLabel">Press here!</button>
    <button @click="navigate">&lt;- Voltar</button>
  </div>
</template>

<style scoped src="./styles.css" />
