<script setup>
import { ref, watchEffect, computed } from 'vue'
const STORAGE_KEY = 'vue-todomvc'
const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed)
}
// 상태
const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const visibility = ref('all')
const editedTodo = ref()

// 파생된 상태(게산된 속성)
const filteredTodos = computed(() => filters[visibility.value](todos.value))

const remaining = computed(() => filters.active(todos.value).length)

// 라우팅 핸들링
window.addEventListener('hashchange', onHashChange)
onHashChange()

// 상태저장
watchEffect(() => {
  console.log('watch')
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
})

function toggleAll(e) {
  todos.value.forEach((todo) => (todo.completed = e.target.checked))
}

function addTodo(e) {
  const value = e.target.value.trim()
  if (value) {
    todos.value.push({
      id: Date.now,
      title: value,
      completed: false
    })
    e.target.value = ''
  }
}
function editTodo(todo) {
  console.log('editTodo')
  editedTodo.value = todo
}
function doneEdit(todo) {
  console.log('doneEdit')
  if (editedTodo.value) {
    editedTodo.value = null
    todo.title = todo.title.trim()
    if (!todo.title) removeTodo(todo)
  }
}
function removeTodo(todo) {
  console.log('removeTodo')
  //   todos.value = todos.value.filter((v) => v !== todo)
  todos.value.splice(todos.value.indexOf(todo), 1)
}

function removeCompleted() {
  todos.value = filters.active(todos.value)
}

function onHashChange() {
  const route = window.location.hash.replace(/#\/?/, '')
  if (filters[route]) {
    visibility.value = route
  } else {
    window.location.hash = ''
    visibility.value = 'all'
  }
}
</script>
<template>
  <p>할 일 Data => {{ filteredTodos }}</p>
  <section class="todoapp">
    <header class="header">
      <h1>해야 할 일</h1>
      <input class="new-todo" autofocus placeholder="무엇을 해야 하나요?" @keyup.enter="addTodo" />
    </header>
    <section class="main" v-show="todos.length">
      <input type="checkbox" id="toggle-all" class="toggle-all" @click="toggleAll" />
      <label for="toggle-all">모두 완료로 표시</label>
      <ul class="todo-list">
        <li v-for="todo in filteredTodos" :key="todo.id" class="todo" :class="{ completed: todo.completed, editing: todo === editedTodo }">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.title }}--{{ todo.completed }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
            v-if="todo === editedTodo"
            class="edit"
            type="text"
            v-model="todo.title"
            @vnode-mounted="({ el }) => el.focus()"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        <span>개 남음</span>
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibility === 'all' }">전체</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibility === 'active' }">해야할 일</a>
        </li>
        <li>
          <a href="#/completed" :class="{ selected: visibility === 'completed' }">완료된 일</a>
        </li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">완료된 것 삭제</button>
    </footer>
  </section>
</template>
<style>
@import 'https://unpkg.com/todomvc-app-css@2.4.1/index.css';
</style>
