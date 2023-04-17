<template>
  <div>
    <button @click="increaseCounter">Add 1</button>
    <p>{{ counter }}</p>

    <div @contextmenu.prevent="rightClick" class="eventRight">해당 영역에서 우클릭 이벤트 발생</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      counter: 0
    }
  },
  setup() {
    const rightClick = () => {
      alert('마우스 오른쪽 버튼을 클릭하셨습니다.')
    }

    return {
      rightClick
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increaseCounter() {
      this.counter++
    }
  }
}
</script>
<style scoped>
.eventRight {
  width: 300px;
  height: 300px;
  background-color: #f1f1f1;
  margin: 20px 0;
  text-align: center;
  line-height: 300px;
}
</style>
