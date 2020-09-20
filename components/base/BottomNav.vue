<template>
  <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
  <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-purple-800 shadow">
    <div id="tabs" class="flex justify-between">
      <nuxt-link to="/epl" class="w-full text-white focus:text-gray-200 text-white hover:text-gray-200 justify-center inline-block text-center pt-2 pb-1">
        <home-icon />
        <span class="tab tab-home block text-xs">Home</span>
      </nuxt-link>
      <nuxt-link to="/epl/fixtures" class="w-full text-white focus:text-gray-200 text-white hover:text-gray-200 justify-center inline-block text-center pt-2 pb-1">
        <fixtures-icon />
        <span class="tab tab-kategori block text-xs">Fixtures</span>
      </nuxt-link>
      <nuxt-link to="/epl/stats" class="w-full text-white focus:text-gray-200 text-white hover:text-gray-200 justify-center inline-block text-center pt-2 pb-1">
        <stats-icon />
        <span class="tab tab-explore block text-xs">Stats</span>
      </nuxt-link>
    </div>
  </section>
</template>
