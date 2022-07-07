<template>
  <div id="app">
    <header class="bg-transparent absolute top-0 left-0 w-full ">
      <TheHeader />
    </header>

    <section  class="pt-24 pb-16 mx-40 ">
      <CreateArticle />
    </section>

    <section  class="bg-primary fixed">
      <TheFooter />
    </section>

  </div>
</template>

<script>
import CreateArticle from '~/components/CreateArticle.vue';
export default {
    name: "CreatePage",
    components: { CreateArticle }
}
</script>

