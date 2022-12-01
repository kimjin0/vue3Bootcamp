<script setup>
// https://v3-docs.vuejs-korea.org/examples/#handling-input
import { ref } from 'vue'

const message = ref('안녕 vue')
function reverseMessage() {
  // .value 속성을 통해 ref 값에 접근/변경합니다.
  message.value = message.value.split('').reverse().join('')
}
function notify() {
  alert('탐색이 금지 되었습니다.')
}
</script>
<template>
  <!--
    컴포지션 API 스타일의 경우,
    ref는 템플릿에서 자동으로 "언래핑"되므로
    템플릿 내에서 .value가 필요하지 않습니다.
  -->
  <h1>{{ message }}</h1>
  <!--
    메서드/함수에 바인딩합니다.
    @click 문법은 v-on:click의 줄임말입니다.
  -->
  <button @click="reverseMessage">메시지 뒤집기</button>

  <!-- 인라인 표현식 문장이 될 수도 있습니다 -->
  <button @click="message += '!'">추가하기</button>
  <!--
    Vue는 e.preventDefault() 및 e.stopPropagation()과 같은
    일반적인 작업에 대한 수식어를 제공합니다.
  -->
  <a href="https://vuejs.org" @click.prevent="notify">
    e.preventDefault()가 작동하는 링크
  </a>
</template>
<!-- <style scoped>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style> -->
