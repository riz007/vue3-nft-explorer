import axios from 'axios'
import { defineStore } from 'pinia'

export const useNFTStore = defineStore('NFTStore', {
  state: () => ({
    counter: 0,
    nftSearchResults: [],
  }),
  getters: {},
  actions: {
    async getNFTs(accountAddrs: string) {
      try {
        const searchResults = await axios.get(
          `${import.meta.env.VITE_ALCHEMY_API_URL}/${
            import.meta.env.VITE_ALCHEMY_API_KEY
          }/getNFTs?owner=${accountAddrs}`
        )
        console.log(searchResults.data)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
