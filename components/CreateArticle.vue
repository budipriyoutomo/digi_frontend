<template>
 <div class="container">
  <form @submit="store">
 <div  class="flex flex-wrap ">
                <div class="w-2/3">
                  <h3 class="text-lg font-semibold mb-5">Create a New Article</h3>
                      <label for="title" class="form-label inline-block mb-2 text-gray-700">Title</label>
                      <input
                        type="text"
                        class="
                          form-control
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          mb-2
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          alt="" id="title" name="title" v-model="data.title" placeholder="Title" >
                      <textarea  class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                rows="15" name="desc" id="desc" v-model="data.desc" placeholder="Write Your Story" ></textarea>
                </div>
                <div class="px-4 w-1/3">
                  <h3 class="text-lg font-semibold mb-5">Publication Detail</h3>
                    <div  class="mb-2">
                      <label for="title"  class="form-label inline-block mb-2 text-gray-700" >Short Description</label>
                      <textarea class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                mb-2
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="short_desc" id="short_desc" v-model="data.short_desc" placeholder="Write Your Story" rows="4"></textarea>
                    </div>
                    <div  class="mb-2">
                      <label for="thumbnail"  class="form-label inline-block mb-2 text-gray-700">Thumbnail</label>
                     <input class="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="image"  >
                    </div>
                    <div class="mb-2">
                      <label for="categories"  class="form-label inline-block mb-2 text-gray-700">Categories</label>
                      <select class="form-select appearance-none
                                      block
                                      w-full
                                      px-3
                                      py-1.5
                                      text-base
                                      font-normal
                                      text-gray-700
                                      bg-white bg-clip-padding bg-no-repeat
                                      border border-solid border-gray-300
                                      rounded
                                      transition
                                      ease-in-out
                                      mb-2
                                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Select Me"  >
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                    </div>
                    <div class="form-check form-switch mb-2">
                      <label class="form-check-label inline-block text-gray-800" for="publish"> Publish</label>
                      <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="publish" v-model="data.is_visible"  checked>
                    </div>
                    <button
                      type="submit"
                      class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    > Publish</button>

                </div>
        </div>
  </form>

      </div>
</template>

<script>
import Article from 'axios'

export default {
  data(){
    return {
      posts:[]
    }
  },
  mounted (){
    fetch('http://localhost:5000/article')
      .then(response => {
        response.json().then(posts => {
          this.posts = posts
        })
      })
  },
  methods: {
      async store(e) {
       e.preventDefault()
        await this.$axios.post('http://localhost:5000/article', {
          title:   this.data.title,
          short_desc: this.data.short_desc,
          desc: this.data.desc,
          image: this.data.image,
          categoriy_id: this.data.categoriy_id,
          is_visible: this.data.is_visible,
        })
    }
  },
}
</script>

<style>

</style>
