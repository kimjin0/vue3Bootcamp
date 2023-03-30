<template>
  <div>
    <h1>{{ userName }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'Data Binding String',
      message: '',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
.text-red {
  color: red;
}
</style>
