<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-8
import { ref, computed } from 'vue'
let id = 0
const newTodo = ref('')
const count = ref(0)
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'HTML 배우기', done: false },
  { id: id++, text: 'JavaScript 배우기', done: false },
  { id: id++, text: 'Vue 배우기', done: false }
])
const filtredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((v) => !v.done) : todos.value
})
const cnt = computed(() => {
  return count.value
})
function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}
function removeTodo(todo) {
  todos.value = todos.value.filter((v) => v !== todo)
}
</script>
<template>
  카운트 : {{ cnt }}
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>할 일 추가</button>
  </form>
  <ul>
    <li v-for="todo in filtredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />

      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">x</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? '모두 보이기' : '완료된 항목 숨기기' }}
  </button>
  <br />
  <button @click="count++">카운트 증가</button>
  <button @click="count--">카운트 감소</button>
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>
