<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-4
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <!-- 이 버튼이 작동하도록 만들어 봅시다 -->
  <button @click="increment">숫자 세기: {{ count }}</button>
</template>
