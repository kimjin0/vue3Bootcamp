<template>
  <div>
    <span>
      <input type="radio" id="html" value="HTML" v-model="favoriteLang" />
      <label for="html">HTML</label>
    </span>
    <span>
      <input type="radio" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">CSS</label>
    </span>
    <span>
      <input type="radio" id="js" value="JS" v-model="favoriteLang" />
      <label for="js">JavaScript</label>
    </span>
    <div>선택한 지역: {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
