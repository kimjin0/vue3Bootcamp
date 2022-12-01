<script setup>
import { ref, watchEffect } from 'vue'
const API_URL = 'https://api.github.com/repos/vuejs/core/commits?per_page=3&sha='
const branches = ['main', 'v2-compat']
const currentBranch = ref(branches[0])
const commits = ref(null)

function truncate(v) {
  const newline = v.indexOf('\n')
  return newline > 0 ? v.slice(0, newline) : v
}

function formatDate(v) {
  return v.replace(/T|Z/g, ' ')
}
watchEffect(async () => {
  // 이 이팩트는 즉시 실행되고
  // currentBranch.value가 변경될 때마다
  // 다시 실행됩니다.
  const url = `${API_URL}${currentBranch.value}`
  commits.value = await (await fetch(url)).json()
  console.log(url)
})
</script>
<template>
  <h1>Vue Core 최신 커밋</h1>
  <div v-for="(branch, idx) in branches" :key="idx">
    <input type="radio" name="branch" :value="branch" :id="branch" v-model="currentBranch" />
    <label :for="branch">{{ branch }}</label>
  </div>
  <p>vuejs/vue@{{ currentBranch }}</p>
  <ul>
    <li v-for="({ html_url, sha, author, commit }, idx) in commits" :key="idx">
      <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span
      ><br />
      by
      <span class="author">
        <a :href="author.url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at
      <span class="date">
        {{ formatDate(commit.author.date) }}
      </span>
      {{ commit.message }}
    </li>
  </ul>
</template>
<style scoped>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>
