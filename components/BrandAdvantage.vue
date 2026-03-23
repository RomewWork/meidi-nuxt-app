<script setup lang="ts">
import { ref } from 'vue'

import icon1 from '~/assets/image/brandAdvantager/image1.png'
import icon2 from '~/assets/image/brandAdvantager/image2.png'
import icon3 from '~/assets/image/brandAdvantager/image3.png'
import icon4 from '~/assets/image/brandAdvantager/image4.png'
import icon5 from '~/assets/image/brandAdvantager/image5.png'
import icon6 from '~/assets/image/brandAdvantager/image6.png'

const advantages = ref([
  { title: '关于美迪', desc: '12年电商大品牌', icon: icon1 },
  { title: '实战教学', desc: '真实案例和店铺', icon: icon2 },
  { title: '美迪创客', desc: '一站式学习平台', icon: icon3 },
  { title: '免费复训', desc: '5年免费复训学习', icon: icon4 },
  { title: '科技赋能', desc: '系统教学AI赋能', icon: icon5 },
  { title: '全国联校', desc: '全国10多家校区', icon: icon6 }
])
</script>

<template>
  <div class="w-full bg-gray-100 py-6">
    <div class="max-w-7xl mx-auto px-4">
      <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-4 sm:gap-y-6 xl:gap-y-0">
        <div v-for="(item, index) in advantages" :key="index" 
             class="flex items-center space-x-4 px-2 sm:px-4 py-2 relative"
             :class="{'xl:after:content-[\'\'] xl:after:absolute xl:after:right-0 xl:after:top-1/2 xl:after:-translate-y-1/2 xl:after:w-px xl:after:h-12 xl:after:bg-gray-100': index !== advantages.length - 1}">
          <div class="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
            <img :src="item.icon" :alt="item.title" class="w-full h-full object-contain text-blue-500" />
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-gray-800">{{ item.title }}</h3>
            <p class="text-xs text-gray-500 mt-0.5 sm:mt-1">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
