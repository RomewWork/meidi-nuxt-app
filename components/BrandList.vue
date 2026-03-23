<script setup lang="ts">
import { ref } from 'vue'

// 模拟品牌数据
const brands = ref([
  { id: 1, name: '美迪电商', letter: 'MD' },
  { id: 2, name: '美迪教育', letter: 'MD' },
  { id: 3, name: '美迪科技', letter: 'MD' },
  { id: 4, name: '美迪优选', letter: 'MD' },
  { id: 5, name: '美迪乡村', letter: 'MD' },
  { id: 6, name: '美迪跨境', letter: 'MD' },
  { id: 7, name: '淘才子', letter: 'TZ' },
  { id: 8, name: '潮大师', letter: 'CD' },
  { id: 9, name: '易企达', letter: 'YQ' },
  { id: 10, name: '猫客电商', letter: 'MK' }
])
</script>

<template>
  <div class="py-16 bg-[#f7f8fa]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 模块标题 -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800 tracking-wide">旗下品牌</h2>
        <p class="text-gray-400 mt-2 uppercase tracking-widest text-xs">BRAND</p>
        <div class="w-8 h-1 bg-gray-300 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- 品牌网格 -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        <div v-for="brand in brands" :key="brand.id"
          class="bg-white h-[88px] rounded flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
          <div class="flex items-center gap-3">
            <span
              class="flex-shrink-0 w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black italic flex items-center justify-center text-[10px] shadow-inner">
              {{ brand.letter }}
            </span>
            <span class="text-[17px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors tracking-wide">
              {{ brand.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
