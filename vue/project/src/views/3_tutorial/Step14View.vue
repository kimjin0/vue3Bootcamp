<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-14
import { ref } from 'vue'
import ChildComp from '@/components/Step14Child.vue'

const msg = ref('부모로부터 💚을 받았어요')
</script>
<template>
  <ChildComp>{{ msg }}</ChildComp>
</template>
