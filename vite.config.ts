import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  // server: {
  //   // proxy: {
  //   //   '/api.nftport.xyz': {
  //   //     target: 'http://api.nftport.xyz/v0',
  //   //     changeOrigin: true,
  //   //     secure: false,
  //   //     rewrite: (path) => path.replace(/^\/api.nftport.xyz/, ''),
  //   //   },
  //   // },
  // },
  plugins: [vue()],
})
