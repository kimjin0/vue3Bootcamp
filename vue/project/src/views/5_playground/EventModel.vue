<script setup>
import { ref } from 'vue'
import CustomInput from '@/components/CustomInput.vue'

const title = ref('v-model 인자에 대한 예제')
</script>

<template>
  <h1>{{ title }}</h1>
  <CustomInput v-model:title="title" />
</template>
