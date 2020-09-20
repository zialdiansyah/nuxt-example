<template>
  <div class="container mx-auto flex justify-center h-screen">
    <div class="self-center">
      <nuxt-logo />
      <h1 class="text-4xl lg:text-6xl text-center my-4">
        nuxt-example
      </h1>
      <div class="flex flex-row justify-center">
        <nuxt-link
          to="/about"
          class="bg-transparent hover:bg-green-800 text-green-800 hover:text-white border border-green-800 font-semibold p-4 rounded items-center mr-4"
        >
          About
        </nuxt-link>
        <a
          href="https://github.com/zialdiansyah/nuxt-example"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white border border-gray-800 font-semibold p-4 rounded inline-flex items-center"
        >
          <github-logo />
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
