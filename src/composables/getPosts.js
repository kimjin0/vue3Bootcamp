import { ref } from 'vue'
const getPosts = () => {
  const posts = ref([])
  const load = () => {
    posts.value = [
      { title: 'welcome to vue3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!', id: 1 },
      { title: 'top 5 css tips', body: 'lorem ipsum', id: 2 }
    ]
  }
  // const posts = ref([
  //   { title: 'welcome to vue3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!', id: 1 },
  //   { title: 'top 5 css tips', body: 'lorem ipsum', id: 2 }
  // ])

  return { posts, load }
}

export default getPosts
