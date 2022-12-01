<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-9
import { ref, onMounted } from 'vue'
const p = ref(null)
onMounted(() => {
  p.value.textContent = '마운트 되었습니다.'
})
</script>
<template>
  <p ref="p">안녕</p>
</template>
