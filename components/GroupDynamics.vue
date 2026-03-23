<script setup lang="ts">
import image2 from '~/assets/image/groupDynamics/image2.png'

const newsList = [
  {
    title: '芳村茶叶城直播基地揭牌仪式成功举行芳村茶叶城直播基地揭牌仪式成功举行...',
    date: '2024-08-30',
    company: '美迪电商集团',
    image: image2
  },
  {
    title: '深入探索产教融合新模式，打造校企合作...',
    date: '2024-08-25',
    company: '美迪电商集团',
    image: image2
  },
  {
    title: '电商直播人才孵化计划正式启动...',
    date: '2024-08-15',
    company: '美迪电商集团',
    image: image2
  }
]
</script>
<template>
  <div class="py-16 w-full" style="background-color: #0d5fb5;">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-2 tracking-wider">集团动态</h2>
        <p class="text-xs text-blue-200 tracking-[0.2em] uppercase">GROUP DYNAMICS</p>
        <div class="w-48 h-[1px] bg-blue-300 mx-auto mt-4 relative opacity-50">
          <div class="absolute w-2 h-2 rounded-full border border-blue-200 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left Column -->
        <div class="relative bg-white rounded-lg overflow-hidden flex flex-col shadow-lg transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
          <div class="h-[360px] w-full bg-blue-900 relative">
             <!-- Left Big Image -->
             <img src="~/assets/image/groupDynamics/image1.png" class="w-full h-full object-cover" alt="芳村茶叶" />
          </div>
          <!-- overlay card -->
          <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-lg p-6 shadow-xl">
            <h3 class="text-lg font-bold text-gray-900 mb-4 truncate">芳村茶叶城直播基地揭牌仪式成功举行</h3>
            <div class="text-xs text-gray-500 flex items-center justify-between">
              <span>2024-08-30</span>
              <span>美迪电商集团</span>
            </div>
          </div>
        </div>
        
        <!-- Right Column -->
        <div class="flex flex-col gap-4">
          <div v-for="(news, i) in newsList" :key="i" class="bg-white rounded-lg p-4 flex gap-5 items-center shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 border border-transparent hover:border-blue-100">
            <!-- Right Small Image -->
            <div class="flex-shrink-0 w-36 h-28 overflow-hidden rounded relative bg-gray-100">
              <img :src="news.image" class="w-full h-full object-cover" :alt="news.title" />
            </div>
            <div class="flex flex-col flex-grow h-full justify-between py-1 border-b border-dashed border-gray-100 pb-2">
              <h4 class="font-bold text-[15px] text-gray-800 mb-2 leading-relaxed line-clamp-2">{{ news.title }}</h4>
              <div class="flex justify-between items-center mt-4 text-xs text-gray-400">
                <span>{{ news.date }}</span>
                <span>{{ news.company }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>