<template>
  <div class="bg-gray-900">
    <h1 class="text-center text-white text-md lg:text-lg py-2">Yu-Gi-Oh! Cards Info</h1>
    <div class="container flex flex-wrap mx-auto">
      <div v-for="card in cards" :key="card.id" class="w-1/2 lg:w-1/3 p-2">
        <div class="bg-white rounded overflow-hidden">
          <img :src="card.card_images[0].image_url" alt="Sunset in the mountains">
          <div class="px-2 lg:px-6 py-4">
            <div class="font-semibold text-xs lg:text-base mb-2 text-grey-400 text-center">
              {{ card.name }}
            </div>
          </div>
          <div class="px-2 lg:px-6 pb-2">
            <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs lg:text-base font-semibold text-gray-700 mr-2 mb-2">{{ card.type }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex flex-row justify-end mx-auto py-3 px-2">
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" v-if="meta.previous_page !== undefined" @click="getCards(meta.previous_page)">prev</button>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2" v-if="meta.next_page !== undefined" @click="getCards(meta.next_page)">next</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=6&offset=0',
      cards: [],
      meta: {}
    }
  },
  created () {
    this.getCards(this.url)
  },
  methods: {
    async getCards (url) {
      const { data, meta } = await this.$axios.$get(url)
      this.cards = data
      this.meta = meta
    }
  }
}
</script>

<style>

</style>
