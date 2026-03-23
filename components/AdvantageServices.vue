<script setup lang="ts">
import { ref } from 'vue'
import icon1 from '~/assets/image/advantageServices/image2-1.png'
import icon2 from '~/assets/image/advantageServices/image2-2.png'
import icon3 from '~/assets/image/advantageServices/image2-3.png'
import icon4 from '~/assets/image/advantageServices/image2-4.png'
// Add custom imports if any here...

const activeTab = ref(1)

const tabs = [
  { id: 1, num: '01', title: '关于美迪' },
  { id: 2, num: '02', title: '实战教学' },
  { id: 3, num: '03', title: '美迪创客' },
  { id: 4, num: '04', title: '免费复训' },
  { id: 5, num: '05', title: '科技赋能' }
]

const features = [
  '根据学习轨迹匹配课程',
  '根据学习轨迹匹配课程',
  '根据学习轨迹匹配课程',
  '根据学习轨迹匹配课程'
]

// Array for repetitive sub-images
const gridImages = [
  { src: icon1, alt: '所列图栏1' },
  { src: icon2, alt: '所列图栏2' },
  { src: icon3, alt: '所列图栏3' },
  { src: icon4, alt: '所列图栏4' }
]
</script>
<template>
  <div class="py-16 bg-[#0055b8] text-white font-sans">
    <div class="max-w-[1240px] mx-auto px-4">
      
      <!-- Section Title -->
      <div class="text-center mb-12 flex flex-col items-center">
        <h2 class="text-4xl font-bold tracking-wider mb-2">优势服务</h2>
        <p class="text-[13px] font-light tracking-[0.2em] mb-4 text-white/90 uppercase">ADVANTAGE SERVICES</p>
        <div class="relative w-48 h-px bg-white/30 flex justify-center items-center">
          <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      <!-- Custom Tabs (Scrollable on small screens) -->
      <div class="flex w-full gap-3 md:gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide" style="scrollbar-width: none; -ms-overflow-style: none;">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="relative flex-none min-w-[120px] md:flex-1 h-[50px] md:h-[60px] flex items-center justify-center rounded-[10px] text-sm md:text-base transition-all duration-300 bg-white"
          :class="activeTab === tab.id 
            ? 'text-[#0055b8] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.06)] z-10' 
            : 'text-gray-600 font-medium opacity-90 hover:opacity-100 hover:text-[#0055b8]'"
        >
          <div v-if="activeTab === tab.id" class="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#40c9ff] to-[#0055b8] rounded-b-[10px]"></div>
          <span class="text-gray-300 font-light mr-2 text-base md:text-lg">{{ tab.num }}</span>
          <span class="text-[14px] md:text-[17px] whitespace-nowrap">{{ tab.title }}</span>
        </button>
      </div>

      <!-- Content Panel -->
      <div class="bg-gradient-to-br from-[#f8fbff] to-[#eef5fc] text-gray-900 rounded-xl p-5 md:p-10 shadow-xl relative overflow-hidden">
        
        <div v-show="activeTab === 1" class="animate-fade-in">
          <!-- Header Inside Panel -->
          <div class="mb-6">
            <h3 class="text-[22px] font-bold mb-3 text-gray-800 tracking-wide">
              全程小班教学
            </h3>
            <div class="flex items-start text-sm text-gray-500">
              <div class="flex-shrink-0 mt-[3px] mr-2 w-[16px] h-[16px] rounded-full border border-[#0055b8] text-[#0055b8] flex items-center justify-center text-[10px]">
                企
              </div>
              <p class="leading-relaxed text-[15px]">导师1v1精准诊断店铺痛点，拆解流量矩阵搭建逻辑，实战演练爆款打造全流程，数据复盘优化转化路径，定制化提升电商运营效能！</p>
            </div>
          </div>

          <!-- 3 Column Images & List Layout -->
          <div class="flex flex-col lg:flex-row gap-4 h-auto lg:h-[320px]">
            
            <!-- Col 1: Main Image (Left) - White Border Padding -->
            <div class="flex-[4.5] bg-white p-[6px] rounded-xl shadow-sm min-h-[200px] lg:h-full">
              <div class="w-full h-full min-h-[188px] rounded-[8px] overflow-hidden relative group">
                <img src="~/assets/image/advantageServices/image1.png" alt="图文简述" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            <!-- Col 2: Grid Images (Middle) - White Border Padding -->
            <div class="flex-[3.5] grid grid-cols-2 grid-rows-2 gap-3 min-h-[250px] lg:h-full">
              <div v-for="(img, idx) in gridImages" :key="idx" class="bg-white p-[6px] rounded-xl shadow-sm min-h-[110px]">
                <div class="w-full h-full rounded-[8px] overflow-hidden relative group">
                  <img :src="img.src" :alt="img.alt" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>

            <!-- Col 3: Requirements / Features List (Right) - Inside White Card -->
            <div class="flex-[3] bg-white p-5 lg:p-6 rounded-xl shadow-sm flex flex-col justify-between gap-3 min-h-[220px] lg:h-full">
              <div 
                v-for="(feat, index) in features" 
                :key="index"
                class="flex-1 bg-[#f7f9fc] hover:bg-[#edf2f9] transition-colors rounded-[8px] px-5 flex items-center text-[14px] text-gray-700 cursor-default font-medium"
              >
                <span class="text-[#0055b8] font-black mr-3 text-lg leading-none mt-[-2px] tracking-tighter">»</span>
                {{ feat }}
              </div>
            </div>
            
          </div>
        </div>

        <!-- Other Tabs (Placeholders) -->
        <div v-show="activeTab === 2" class="h-[300px] flex items-center justify-center text-gray-400">实战教学内容</div>
        <div v-show="activeTab === 3" class="h-[300px] flex items-center justify-center text-gray-400">美迪创客内容</div>
        <div v-show="activeTab === 4" class="h-[300px] flex items-center justify-center text-gray-400">免费复训内容</div>
        <div v-show="activeTab === 5" class="h-[300px] flex items-center justify-center text-gray-400">科技赋能内容</div>

      </div>
    </div>
  </div>
</template>