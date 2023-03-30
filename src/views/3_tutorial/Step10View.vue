<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-10
import { ref, watch } from 'vue'
const todoId = ref(1)
const todoData = ref(null)
async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}
fetchData()
watch(todoId, fetchData)
</script>
<template>
  <p>할 일 id: {{ todoId }}</p>
  <button @click="todoId--">이전 할 일 가져오기</button>
  <button @click="todoId++">다음 할 일 가져오기</button>
  <p>로딩...</p>
  <pre>{{ todoData }}</pre>
</template>
