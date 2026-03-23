<script setup lang="ts">
import { ref } from 'vue'

import copy1 from '~/assets/copy-1.png'
import copy2 from '~/assets/copy-2.png'
import copy3 from '~/assets/copy-3.png'
import copy4 from '~/assets/copy-4.png'
import copy5 from '~/assets/copy-5.png'

const linkGroups = ref([
  {
    title: '买家指南',
    links: ['如何购买', '搜索商品', '发票说明', '如何支付']
  },
  {
    title: '卖家指南',
    links: ['商家协议', '发布规则', '发货帮助', '收费标准']
  },
  {
    title: '安全交易',
    links: ['钓鱼防骗', '担保交易', '退款防骗', '消费维权']
  },
  {
    title: '新手上路',
    links: ['如何注册', '购物流程', '搜索帮助', '交易纠纷']
  },
  {
    title: '服务中心',
    links: ['认证中心', '账号安全', '投诉建议', '在线咨询']
  }
])

const trustBadges = [
  { src: copy1, alt: '红盾认证' },
  { src: copy2, alt: '营业执照' },
  { src: copy3, alt: '公安备案' },
  { src: copy4, alt: '实名认证' },
  { src: copy5, alt: '网站贴马' }
]
</script>

<template>
  <footer class="w-full font-sans">
    <!-- Top Dark Blue Section -->
    <div class="bg-[#0b3b9b] text-white pt-16 pb-12 relative overflow-hidden">
      <!-- 模拟背景地图 -->
      <div class="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
         <img src="https://via.placeholder.com/1200x400.png?text=World+Map+Background" class="w-full h-full object-cover" alt="map">
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-4">
          
          <!-- Contact Left -->
          <div class="flex-shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-48">
            <div class="font-bold text-base mb-4 tracking-widest">客服热线</div>
            <div class="bg-white p-2 rounded-md mb-4 w-28 h-28 shadow-lg">
              <img src="~/assets/enQR.png" alt="客服微信" class="w-full h-full object-cover">
            </div>
            <div class="text-2xl font-bold mb-1 font-arial">400-800-4459</div>
            <div class="text-[12px] text-blue-200 mb-6 font-light">周一至周日 09:30-23:30</div>
            <button class="bg-[#1e88ff] hover:bg-[#3498ff] transition-colors duration-300 px-8 py-2.5 rounded-full text-sm font-bold shadow-md cursor-pointer">
              在线咨询
            </button>
          </div>
          
          <!-- Navigation Links Center -->
          <div class="flex-grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-4 w-full mt-4 lg:mt-0 lg:px-12 text-center lg:text-left">
            <div v-for="(group, index) in linkGroups" :key="index">
              <h4 class="font-bold mb-6 text-[15px] tracking-wider relative inline-block text-white">
                {{ group.title }}
              </h4>
              <ul class="space-y-3 text-[13px] text-blue-200/80">
                <li v-for="(link, lIndex) in group.links" :key="lIndex">
                  <a href="#" class="hover:text-white transition-colors duration-300">{{ link }}</a>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Official Account Right -->
          <div class="flex-shrink-0 flex flex-col items-center text-center w-full lg:w-48 mt-4 lg:mt-0">
            <div class="font-bold text-base mb-4 tracking-widest">关注美迪教育公众号</div>
            <div class="bg-white p-2 rounded-md mb-3 w-32 h-32 shadow-lg">
              <img src="~/assets/mQR.png" alt="公众号微信" class="w-full h-full object-cover">
            </div>
            <div class="text-[13px] text-blue-200 font-light">微信扫码，立即关注</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom White Section -->
    <div class="bg-white py-6 border-t border-gray-100 text-[#666] text-[12px]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <!-- Links & Copyright -->
        <div class="text-center lg:text-left space-y-3">
          <div class="flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-2">
            <a href="#" class="hover:text-black transition">关于我们</a>
            <span class="text-gray-300">|</span>
            <a href="#" class="hover:text-black transition">广告合作</a>
            <span class="text-gray-300">|</span>
            <a href="#" class="hover:text-black transition">联系我们</a>
            <span class="text-gray-300">|</span>
            <a href="#" class="hover:text-black transition">网站地图</a>
            <span class="text-gray-300">|</span>
            <span>粤公网安备 44010402000660号</span>
          </div>
          <div class="text-gray-400">
            Copyright © 2005-2026 www.meidi.vip 广州美迪教育科技有限公司 版权所有 粤ICP备15034320号
          </div>
        </div>
        
        <!-- Trust Badges -->
        <div class="flex items-center gap-3 overflow-x-auto whitespace-nowrap pb-2 lg:pb-0">
          <img v-for="(badge, index) in trustBadges" :key="index" :src="badge.src" :alt="badge.alt" class="h-[30px] rounded border border-gray-100 hover:shadow-md transition">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
