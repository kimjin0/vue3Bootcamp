<template>
  <!-- https://www.youtube.com/watch?v=b0ImUEsqaAA -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
-->
  <div class="catogory">
    <button :class="{ active: examGb == 'data' }" @click="showExam('data')">DataBinding</button>
    <button :class="{ active: examGb == 'event' }" @click="showExam('event')">Event</button>
    <button :class="{ active: examGb == 'binding' }" @click="showExam('binding')">Tutorial</button>
    <button :class="{ active: examGb == 'exam' }" @click="showExam('exam')">간단한예제</button>
    <button :class="{ active: examGb == 'ref' }" @click="showExam('ref')">Composition</button>
  </div>
  <nav v-if="examGb == 'data'">
    <router-link to="/databinding/string">String</router-link> | <router-link to="/databinding/html">Html</router-link> |
    <router-link to="/databinding/input">Input</router-link> | <router-link to="/databinding/select">Select</router-link> |
    <router-link to="/databinding/check">Check</router-link> | <router-link to="/databinding/radio">Radio</router-link> |
    <router-link to="/databinding/attr">Attr</router-link> | <router-link to="/databinding/list">ListView</router-link> |
    <router-link to="/databinding/class">ClassView</router-link> |
    <router-link to="/databinding/style">StyleView</router-link>
  </nav>
  <nav v-if="examGb == 'event'">
    <router-link to="/event/click">EventClickView</router-link> | <router-link to="/event/change">EventChangeView</router-link> |
    <router-link to="/event/key">EventKeyView</router-link>
  </nav>
  <nav v-if="examGb == 'binding'">
    <router-link to="/3_tutorial/2">선언적 렌더링</router-link> | <router-link to="/3_tutorial/3">속성 바인딩</router-link> |
    <router-link to="/3_tutorial/4">이벤트 리스터</router-link> | <router-link to="/3_tutorial/5">form 바인딩</router-link> |
    <router-link to="/3_tutorial/6">조건부 렌더링</router-link> | <router-link to="/3_tutorial/7">리스트 렌더링</router-link> |
    <router-link to="/3_tutorial/8">계산된 속성</router-link> | <router-link to="/3_tutorial/9">수명주기와 템플릿 참조</router-link> |
    <router-link to="/3_tutorial/10">감시자</router-link> | <router-link to="/3_tutorial/11">컴포넌트 & Props</router-link> |
    <router-link to="/3_tutorial/13">컴포넌트 & Emits</router-link> |
    <router-link to="/3_tutorial/14">슬롯</router-link>
  </nav>
  <nav v-if="examGb == 'exam'">
    <router-link to="/4_examples/HandingInput">사용자 입력 핸들링</router-link> |
    <router-link to="/4_examples/AttributeBindings">속성 바인딩</router-link> |
    <router-link to="/4_examples/ConditionalsAndLoops">조건문과 반복문</router-link> |
    <router-link to="/4_examples/FormBindings">form 바인딩</router-link> |
    <router-link to="/4_examples/SimpleComponent">단순한 컴포넌트</router-link> |
    <router-link to="/4_examples/FetchingData">데이터 가져오기</router-link> | <router-link to="/4_examples/TodoMVC">TodoMVC</router-link> |
  </nav>
  <nav v-if="examGb == 'exam'">
    <router-link to="/5_playground/EventModel">v-model과 함께 사용하기</router-link> |
    <router-link to="/5_playground/ClassAndStyle">풀스루 속성</router-link>
  </nav>
  <nav v-if="examGb == 'ref'">
    <router-link to="/6_composition/RefsStudy">ref 관하여</router-link> |
    <router-link to="/6_composition/RefOrReactive">Refs vs Reactive</router-link> |
    <router-link to="/6_composition/ComputedStudy">Computed</router-link> |
    <router-link to="/6_composition/WatchEffect">Watch & WatchEffect</router-link> |
    <router-link to="/6_composition/PropsStudy">Props & Lifecycle hooks</router-link>
  </nav>
  <router-view />
</template>
<script setup>
import { ref } from 'vue'
const examGb = ref('data')
function showExam(exam) {
  examGb.value = exam
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.catogory {
  margin-left: 30px;
  margin-bottom: 10px;
  /* padding: 10px; */
  /* background: #0faf87; */
}
.catogory button {
  width: 100px;
  background: #42b983;
  border-radius: 4px;
  padding: 8px 0;
  text-align: center;
  color: white;
  cursor: pointer;
  /* padding: 8px 16px; */
  margin: 5px;
}
.active {
  background: #444 !important;
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
