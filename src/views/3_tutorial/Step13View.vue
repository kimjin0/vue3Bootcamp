<script setup>
// https://v3-docs.vuejs-korea.org/tutorial/#step-13
import { ref } from 'vue'
import ChildComp from '@/components/Step13Child.vue'
const childMsg = ref('아직 자식 컴포넌트로부터 아직 메세지를 받지 못했어요')
const some = ref('무엇을 줄꺼니?')
</script>
<template>
  <ChildComp @response="(msg) => (childMsg = msg)" @some-event="(msg) => (some = msg)" />
  <p>{{ childMsg }}</p>
  <p>{{ some }}</p>
</template>
