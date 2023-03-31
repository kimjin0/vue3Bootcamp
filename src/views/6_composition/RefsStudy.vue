<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    const p = ref(null)
    const name = 'kimjin0'
    const msg = 'Hello, ' + name
    const handleClick = () => {
      p.value.textContent = 'ref를 이용한 DOM 접근'
      console.log(p.value)
    }
    return { name, msg, p, handleClick }
  }
}
</script>
