<script setup>
import { ref } from 'vue'
import ListItem from '@/components/SimpleComponent.vue'
const id = ref(0)
const List = ref([
  { id: id.value++, text: '채소' },
  { id: id.value++, text: '치즈' },
  { id: id.value++, text: '인간이 먹을 수 있는 모든 것' }
])
</script>
<template>
  <ol>
    <ListItem v-for="item in List" :key="item.id" :todo="item"></ListItem>
  </ol>
</template>
