<!-- 이곳에서 엘리먼트의 속성에 상태를 반응형으로 바인딩합니다.
:title 문법은 v-bind:title의 줄임말입니다. -->

<script setup>
// https://v3-docs.vuejs-korea.org/examples/#attribute-bindings
import { ref } from 'vue'
const message = ref('Hello~')
const color = ref('green')
const isRed = ref(false)
function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}
function toggleRed() {
  isRed.value = !isRed.value
}
</script>
<template>
  <p>
    <span :title="message">
      동적으로 바인딩된 나의 title을 보려면 몇 초 동안 마우스를 올려놓으세요!
    </span>
  </p>

  <!--
  클래스 바인딩은 일반 문자열 외에도 객체 및 배열을 지원합니다.
  -->
  <p :style="{ color }" @click="toggleColor">
    이것은 녹색이어야 하며, 클릭 시 녹색과 파란색 사이를 전환합니다.
  </p>
  <!--
  클래스 바인딩은 일반 문자열 외에도 객체 및 배열을 지원합니다.
  -->
  <p :class="{ red: isRed }" @click="toggleRed">
    이것은 빨간색이어야 합니다... 하지만 전환하려면 저를 클릭하세요.
  </p>
</template>
<style scoped>
.red {
  color: red;
}
</style>
