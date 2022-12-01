<template>
  <div>
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value="">==도시==</option>
      <option
        v-for="city in cityList"
        :value="city.cityCode"
        :key="city.cityCode"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        v-for="(dong, idx) in selectedDongList"
        :key="idx"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        v-for="(dong, idx) in dongList.filter(
          (dong) => dong.cityCode === selectedCity
        )"
        :key="idx"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '051', dongCode: '5', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '6', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '7', dongTitle: '부산 3동' },
        { cityCode: '064', dongCode: '8', dongTitle: '제주 1동' },
        { cityCode: '064', dongCode: '9', dongTitle: '제주 2동' },
        { cityCode: '064', dongCode: '10', dongTitle: '제주 3동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(e) {
      console.log(e.target.tagName)
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>
