<template>
  <div v-for="post in posts" :key="post.id">
    <PostOne :post="post" />
  </div>
</template>
<script>
import PostOne from '@/components/composition/PostOne.vue'
export default {
  props: ['posts'],
  components: { PostOne }
}
</script>
