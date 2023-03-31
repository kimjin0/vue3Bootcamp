<template>
  <h1>watch & watchEffect.</h1>
  <h4>
    watch는 주로 소스 데이터의 변경을 감지하고 변경이 발생할 때마다 사용자 지정 함수를 실행하는 데 사용됩니다. watch는 인자로 데이터 소스와 콜백
    함수를 받으며, 콜백 함수는 이전 값과 새 값에 접근할 수 있습니다. watch는 느슨한 결합을 통해 더 세밀한 제어를 제공하며, 즉시 실행되지 않고 데이터가
    변경될 때만 실행됩니다.
  </h4>
  <h4>
    watchEffect는 함수를 인자로 받아 그 안에서 사용된 반응형 데이터를 자동으로 추적하고, 이러한 데이터 중 하나라도 변경되면 함수를 다시 실행합니다.
    watchEffect는 강력한 결합을 통해 즉시 실행되어 코드를 간단하게 유지할 수 있습니다. 변경된 이전 값과 새 값에 직접 접근할 수는 없습니다.
  </h4>
  <h4>
    요약하면, watch는 명시적으로 감시할 데이터 소스를 지정하고 변경에 대한 세밀한 제어를 제공하는 반면, watchEffect는 사용된 모든 반응형 데이터를
    자동으로 추적하며 간단한 상황에서 코드를 더 직관적으로 만듭니다. 선택 사항은 사용 사례와 필요한 제어 수준에 따라 달라집니다.
  </h4>
  <hr />
  <input type="text" v-model="search" placeholder="이름검색" />
  <input type="text" v-model="id" placeholder="아이디" />
  <p>search term - {{ search }}</p>
  <button @click="handleClick">stop watch</button>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
</template>
<script>
import { ref, computed, watch, watchEffect } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const id = ref('')
    const names = ref(['kimjin0', 'pkimjin0q', 'gaius'])
    const stopWatch = watch(search, () => {
      console.log('watch', search.value)
    })
    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect', search.value, id.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      // 이렇게 호출만 하면 실행되지 않는다.
      stopWatch()
      stopWatchEffect()
    }
    return { names, search, matchingNames, id, handleClick }
  }
}
</script>
