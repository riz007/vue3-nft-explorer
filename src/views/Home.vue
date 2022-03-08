<script setup lang="ts">
  import { ref } from 'vue'
  import { useNFTStore } from '../stores/nftStore'
  import Gallery from './Gallery.vue'
  const walletAddress = ref('')
  const nftAddress = ref('')
  const randomNumber = ref(Math.floor(Math.random() * 10) + 1)
  const nftStore = useNFTStore()
  const search = () => {
    nftStore.getNFTs(walletAddress.value)
  }
</script>

<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-10">
    <div class="flex flex-col">
      <img
        class="mx-auto mt-10"
        src="../assets/images/9.png"
        width="200"
        height="200"
      />
      <h1 class="text-5xl text-center text-white font-bold p-7">
        Vue 3 NFT Explorer
      </h1>
      <h3 class="text-white text-center text-2xl">
        Search NFTs of your choices
      </h3>
    </div>
    <div class="flex flex-wrap justify-center">
      <div class="pt-2">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Enter your wallet address"
          v-model="walletAddress"
        />
      </div>
      <div class="pt-2 ml-3">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Enter NFT Address (optional)"
          v-model="nftAddress"
        />
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <button
        @click="search"
        type="button"
        class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md w-96"
      >
        Search
      </button>
    </div>
  </div>
  <Gallery />
</template>

<style scoped></style>
