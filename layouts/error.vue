<template>
  <div class="container flex flex-col text-center">
    <h1 v-if="error.statusCode === 404" class="text-xl font-bold mb-5">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link
      class="bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white border border-gray-800 font-semibold p-4 rounded"
      to="/"
    >
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
