<template>
  <main>
    <h1>awdawd</h1>

    <Input
      label="firstname"
      :input-attributes="{
        placeholder: 'Enter your firstname...',
        type: 'text',
        autocomplete: 'given-name',
      }"
    >
      First-name
    </Input>
  </main>
</template>

<script setup lang="ts">
import Input from "./components/form/input/Input.vue";
</script>

<style lang="scss" scoped></style>