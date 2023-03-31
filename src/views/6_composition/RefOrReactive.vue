<template>
  <div class="name">
    <h1>Refs</h1>
    <p>{{ userOne.name }} - {{ userOne.age }} / {{ nameOne }}</p>
    <button @click="updateUserOne">update userOne</button>
    <h1>Reactive</h1>
    <label for="">* reactive는 객체만 반응형으로 만들 수 있음</label>
    <p>{{ userTwo.name }} - {{ userTwo.age }} / {{ nameTwo }}</p>
    <button @click="updateUserTwo">update userTwo</button>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    const userOne = ref({ name: 'kimjin0', age: 20 })
    const nameOne = ref('kimjin0') // ref는 객체, 문자열, 숫자 모두 가능
    const updateUserOne = () => {
      userOne.value.name = 'pkimjin0q'
      userOne.value.age = 40
      nameOne.value = 'pkimjin0q'
    }
    const userTwo = reactive({ name: 'kimjin0', age: 20 })
    let nameTwo = reactive('kimjin0') // reactive는 객체만 반응형으로 만들 수 있음
    const updateUserTwo = () => {
      userTwo.name = 'pkimjin0q'
      userTwo.age = 40
      nameTwo = 'pkimjin0q'
    }
    return { userOne, userTwo, nameOne, nameTwo, updateUserOne, updateUserTwo }
  }
}
</script>
