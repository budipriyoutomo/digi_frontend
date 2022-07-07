<template>
  <div id="app">
    <header class=" top-0 left-0 w-full ">
      <TheHeader />
    </header>

    <section  class="pt-24 pb-16 md:mx-10 ">
      <div class="container">
        <div  class="flex flex-wrap md:mx-20">
                <div v-for="n in 10" :key="n" class="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-5">
                        <img src="https://source.unsplash.com/360x200?library" alt="Programming" class="w-full" >
                        <div class="py-8 px-6">
                            <a href="#" class="block mb-3 font-semibold text-md text-dark hover:text-primary truncate"><h4>Library Monitoring System </h4></a>
                            <p class="mb-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, pariatur.</p>
                            <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-3 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
        </div>
      </div>

    </section>

    <section id="footer" class="bg-primary">
      <TheFooter />
    </section>

  </div>
</template>

<script>
export default {
    name: "ArticlePage",
}
</script>
