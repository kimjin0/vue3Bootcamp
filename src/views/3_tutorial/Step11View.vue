<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-11
// https://v3-docs.vuejs-korea.org/tutorial/#step-12
import { ref } from 'vue'
import ChildComp from '@/components/Step11Child.vue'

const greeting = ref('어머니에게 ❤ 받았어요')
</script>
<template>
  <ChildComp :msg="greeting" />
</template>
