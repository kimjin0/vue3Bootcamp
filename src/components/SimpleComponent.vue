<script setup>
defineProps({ todo: Object })
</script>
<template>
  <li>{{ todo.text }}</li>
</template>
