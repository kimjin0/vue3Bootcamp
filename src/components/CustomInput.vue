<!-- https://v3-docs.vuejs-korea.org/guide/components/events.html#usage-with-v-model -->
<!-- <script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  <button @click="$emit('someEvent', 1)">클릭하기</button>
</template> -->

<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>
<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>
