<template>
  <div>
    <div :class="{ 'text-end': hasError, active: isActive }">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'text-end']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}
.text-end {
  color: red;
}
</style>
