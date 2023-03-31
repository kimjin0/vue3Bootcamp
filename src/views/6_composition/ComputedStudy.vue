<template>
  <h1>이름을 검색할 수 있다.</h1>
  <input type="text" v-model="search" />
  <p>search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
</template>
<script>
import { ref, computed } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['kimjin0', 'pkimjin0q', 'gaius'])
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    return { names, search, matchingNames }
  }
}
</script>
