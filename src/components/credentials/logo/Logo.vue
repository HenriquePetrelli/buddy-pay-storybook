<template>
  <img
    alt="Vue logo"
    class="logo"
    src="@/assets/logo.svg"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">

withDefaults(
  defineProps<{
    width: string;
    height: string;
  }>(),
  {}
);
</script>
