<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-2
import { reactive, ref } from 'vue'
const message = ref('안녕~')
const user = reactive({
  id: 'kimjin0',
  name: '김진형'
})
// 컴포넌트 로직
</script>

<template>
  <h1>{{ message }}</h1>
  <p>{{ user.id }} / {{ user.name }}</p>
</template>
