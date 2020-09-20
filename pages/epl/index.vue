<template>
  <div class="text-center">
    <h1 class="text-xl font-bold text-gray-900">
      EPL Standings
    </h1>
    <table class="text-center w-full divide-y divide-gray-400">
      <thead class="flex text-gray-700 w-full">
        <tr class="flex w-full mb-1">
          <th class="p-2 w-1/6">
            #
          </th>
          <th class="p-2 w-2/6">
            Club
          </th>
          <th class="p-2 w-1/6">
            P
          </th>
          <th class="p-2 w-1/6">
            G
          D</th>
          <th class="p-2 w-1/6">
            P
          ts</th>
        </tr>
      </thead>
      <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
      <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-screen">
        <tr v-for="index in 20" :key="index" class="flex w-full mb-1">
          <td class="p-2 w-1/6">
            {{ index }}
          </td>
          <td class="text-left p-2 w-2/6">
            Liverpool
          </td>
          <td class="p-2 w-1/6">
            2
          </td>
          <td class="p-2 w-1/6">
            4
          </td>
          <td class="p-2 w-1/6">
            6
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'epl'
}
</script>

<style>
</style>
