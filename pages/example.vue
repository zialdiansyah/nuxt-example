<template>
  <div class="container mx-auto flex flex-col justify-center h-screen">
    <div class="self-center">
      <h1 class="text-3xl text-center mb-2">
        Example
      </h1>
      <p class="text-large text center mb-5">Boilerplate to start you nuxt-tailwind project</p>
      <nuxt-link
        class="bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white border border-gray-800 font-semibold p-4 rounded"
        to="/yugioh"
      >
        Card
      </nuxt-link>
      <nuxt-link
        class="bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white border border-gray-800 font-semibold p-4 rounded"
        to="/epl"
      >
        Table
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
