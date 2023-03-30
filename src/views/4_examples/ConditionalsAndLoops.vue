<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])
</script>
<template>
  <button @click="show = !show">목록전환</button>
  <button @click="list.push(list.length + 1)">숫자추가</button>
  <button @click="list.pop()">숫자제거</button>
  <ul v-if="show && list.length">
    <li v-for="(item, idx) of list" :key="idx">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">목록이 비어있지 않지만, 숨김처리 되었습니다.</p>
  <p v-else>목록이 비었습니다.</p>
</template>
