<template>
  <div v-for="post in posts" :key="post.id">
    <PostOne :post="post" />
  </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import PostOne from '@/components/composition/PostOne.vue'
export default {
  props: ['posts'],
  components: { PostOne },
  setup(props) {
    onMounted(() => {
      console.log('PostList mounted')
    })
    onUnmounted(() => {
      console.log('PostList unmounted')
    })
    onUpdated(() => {
      console.log('PostList updated')
    })
  }
}
</script>
