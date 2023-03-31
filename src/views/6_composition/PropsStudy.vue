<template>
  <div class="home">
    <h1>Props</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/composition/PostList.vue'
import { ref } from 'vue'
export default {
  home: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'welcome to vue3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!', id: 1 },
      { title: 'top 5 css tips', body: 'lorem ipsum', id: 2 }
    ])

    return { posts }
  }
}
</script>
