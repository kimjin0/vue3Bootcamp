<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @contextmenu.prevent="rightClick">마우스 우클릭</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const rightClick = () => {
      alert('마우스 오른쪽 버튼을 클릭하셨습니다.')
    }

    return {
      rightClick
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
