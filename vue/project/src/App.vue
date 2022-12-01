<template>
  <!-- https://www.youtube.com/watch?v=b0ImUEsqaAA -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
-->
  <nav>
    <router-link to="/databinding/string">DatabindingString</router-link> | <router-link to="/databinding/html">DatabindingHtml</router-link> |
    <router-link to="/databinding/input">DatabindingInput</router-link> | <router-link to="/databinding/select">DatabindingSelect</router-link> |
    <router-link to="/databinding/check">DatabindingCheck</router-link> | <router-link to="/databinding/radio">DatabindingRadio</router-link> |
    <router-link to="/databinding/attr">DatabindingAttr</router-link> | <router-link to="/databinding/list">DataBindingListView</router-link> |
    <router-link to="/databinding/class">DataBindingClassView</router-link> |
    <router-link to="/databinding/style">DataBindingStyleView</router-link>
  </nav>
  <nav>
    <router-link to="/event/click">EventClickView</router-link> | <router-link to="/event/change">EventChangeView</router-link> |
    <router-link to="/event/key">EventKeyView</router-link>
  </nav>
  <nav>
    <router-link to="/3_tutorial/2">선언적 렌더링</router-link> | <router-link to="/3_tutorial/3">속성 바인딩</router-link> |
    <router-link to="/3_tutorial/4">이벤트 리스터</router-link> | <router-link to="/3_tutorial/5">form 바인딩</router-link> |
    <router-link to="/3_tutorial/6">조건부 렌더링</router-link> | <router-link to="/3_tutorial/7">리스트 렌더링</router-link> |
    <router-link to="/3_tutorial/8">계산된 속성</router-link> | <router-link to="/3_tutorial/9">수명주기와 템플릿 참조</router-link> |
    <router-link to="/3_tutorial/10">감시자</router-link> | <router-link to="/3_tutorial/11">컴포넌트 & Props</router-link> |
    <router-link to="/3_tutorial/13">컴포넌트 & Emits</router-link> |
    <router-link to="/3_tutorial/14">슬롯</router-link>
  </nav>
  <nav>
    <router-link to="/4_examples/HandingInput">사용자 입력 핸들링</router-link> |
    <router-link to="/4_examples/AttributeBindings">속성 바인딩</router-link> |
    <router-link to="/4_examples/ConditionalsAndLoops">조건문과 반복문</router-link> |
    <router-link to="/4_examples/FormBindings">form 바인딩</router-link> |
    <router-link to="/4_examples/SimpleComponent">단순한 컴포넌트</router-link> |
    <router-link to="/4_examples/FetchingData">데이터 가져오기</router-link> | <router-link to="/4_examples/TodoMVC">TodoMVC</router-link> |
  </nav>
  <nav>
    <router-link to="/5_playground/EventModel">v-model과 함께 사용하기</router-link> |
    <router-link to="/5_playground/ClassAndStyle">풀스루 속성</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
