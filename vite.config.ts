import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Layouts from 'vite-plugin-vue-layouts'
import VueMacros from 'unplugin-vue-macros/vite'
// import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx() // 如果需要
      }
    }),

    VueDevTools(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    }),
    Components({
      // relative paths to the directory to search for components.
      // dirs: ['src/components']
      // 带上目录前缀
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'i' })]
    }),
    Icons({
      /* options */
      autoInstall: true
    }),
    Layouts({
      layoutsDirs: 'src/layouts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
