<script setup lang="ts">
const businesses = [
  { name: '电商培训', iconPath: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15H6.5a.5.5 0 0 0 0 1H20v1.5a.5.5 0 0 1-.5.5h-13A2.5 2.5 0 0 1 4 19.5Z M12 2v18' },
  { name: '就业培训', iconPath: 'M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M12 14v7 M8.46 6.46a8 8 0 0 0 0 11.08 M15.54 6.46a8 8 0 0 1 0 11.08 M5.64 3.64a12 12 0 0 0 0 16.72 M18.36 3.64a12 12 0 0 1 0 16.72' },
  { name: '企业内训', iconPath: 'M4 22V2h8v20 M12 6h8v16 M8 6v2h2V6H8z M8 10v2h2v-2H8z M8 14v2h2v-2H8z M16 10v2h2v-2h-2z M16 14v2h2v-2h-2z' },
  { name: '企业管理', iconPath: 'M12 11.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5 M15 12h-2 M18 12h-2 M20 15h-6l-1 2-2-4 2-4 1 2h6v4z' },
  { name: '师资培训', iconPath: 'M22 10l-10-5-10 5 10 5 10-5z M6 12v5c0 2 2 3 6 3s6-1 6-3v-5 M22 10v6' },
  { name: '职业考证', iconPath: 'M12 15l-3 2 1-4-3-2.5 4-.5 1-4 1 4 4 .5-3 2.5 1 4-3-2z M6 5h12v5.5 M6 5l2-3h8l2 3 M4 11l2 8h12l2-8' },
  { name: '直播基地', iconPath: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12z M4 22v-7 M11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M11 9v2' },
  { name: '软件开发', iconPath: 'M6 14a6 6 0 1 0 12 0 M12 2v4 M8 4l2 2 M16 4l-2 2 M9 10h.01 M15 10h.01' },
  { name: '电商托管', iconPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10' },
  { name: '项目外包', iconPath: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' }
]
</script>

<template>
  <div class="py-16 bg-[#f3f4f8] font-sans">
    <div class="max-w-[1240px] mx-auto px-4">
      
      <!-- Section Title -->
      <div class="text-center mb-16 flex flex-col items-center">
        <h2 class="text-4xl font-bold tracking-wider mb-2 text-gray-800">主营业务</h2>
        <p class="text-[13px] font-light tracking-[0.2em] mb-4 text-gray-400 uppercase">MAIN BUSINESS</p>
        <div class="relative w-48 h-px bg-gray-300 flex justify-center items-center">
          <div class="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <!-- Icon Grid -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-y-14 gap-x-6">
        <div 
          v-for="(biz, idx) in businesses" 
          :key="idx"
          class="flex flex-col items-center group cursor-pointer"
        >
          <!-- Blue Circle -->
          <div class="w-[100px] h-[100px] rounded-full bg-[#0062cc] flex items-center justify-center mb-5 transition-all duration-300 transform group-hover:-translate-y-2 shadow-[0_8px_20px_rgba(0,98,204,0.25)] relative">
            <!-- Icon Pointing Arrow equivalent (design flair) -->
            <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#0062cc]"></div>
            
            <svg class="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="biz.iconPath"></path>
            </svg>
          </div>
          
          <!-- Text -->
          <div class="flex items-center text-gray-800 text-[15px] font-medium tracking-wide">
            {{ biz.name }}
            <div class="ml-1.5 w-3.5 h-3.5 rounded-full border border-[#0062cc] text-[#0062cc] flex items-center justify-center opacity-80 group-hover:opacity-100">
              <svg class="w-2 h-2 ml-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>