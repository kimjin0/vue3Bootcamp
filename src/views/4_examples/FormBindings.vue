<script setup>
import { ref } from 'vue'
const text = ref('수정해보세요')
const checked = ref(false)
const checkedNames = ref(['철수'])
const picked = ref('')
const selected = ref('')
const multiSelected = ref('[진달래]')
</script>
<template>
  <h2>텍스트 입력</h2>
  <input v-model="text" />{{ text }}
  <h2>체크박스</h2>
  <input type="checkbox" name="" id="checkbox" v-model="checked" />
  <label for="checkbox">체크됨 {{ checked }}</label>
  <h2>멀티 체크박스</h2>
  <!--
    여러 체크박스 값을 v-model을 사용하여
    하
    -->
  <input type="checkbox" name="" id="chulsoo" value="철수" v-model="checkedNames" />
  <label for="chulsoo">철수</label>
  <input type="checkbox" name="" id="yuri" value="유리" v-model="checkedNames" />
  <label for="yuri">유리</label>
  <p>체크된 이름 : <pre>{{ checkedNames }}</pre></p>
  <h2>라디오</h2>
  <input type="radio" name="" id="seoul" value="서울" v-model="picked">
  <label for="seoul">서울</label>
  <input type="radio" name="" id="busan" value="부산" v-model="picked">
  <label for="seoul">부산</label>
  <br><span>고른것 : {{  picked }}</span>
  <h2>선택</h2>
  <select name="" id="" v-model="selected">
    <option value="" disabled>하나를 선택 하세요</option>
    <option >가</option>
    <option >나</option>
  </select>
  <br><span>선택함 : {{  selected }}</span>
  <h2>복수 선택</h2>
  <select multiple sytle="width:200px" v-model="multiSelected">
    <option>무궁화</option>
    <option>진달래</option>
    <option>개나리</option>
  </select>
  <br><span>선택함 : {{ multiSelected }}</span>

</template>
