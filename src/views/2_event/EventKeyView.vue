<template>
  <div>
    <input
      type="search"
      name=""
      id=""
      v-model="searchText"
      @keyup="checkEnter($event)"
    />
    <input
      type="search"
      name=""
      id=""
      v-model="searchText"
      @keyup.enter="doSearch"
    />
    <button @click="doSearch">조회</button>
    <p>{{ searchText }}</p>
  </div>
</template>
<script>
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .stop - event.stopPropagation()
// .prevent - event.preventDefault() -> @click.prevent="doSearch"
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(e) {
      if (e.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
