<script setup lang="ts">
const buttons = [
  { text: '科研团队', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { text: '就业前景', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { text: '免费教程', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
]

const classes = [
  '【广州校区】淘宝电商美工班',
  '【广州校区】淘宝电商美工班',
  '【广州校区】淘宝电商美工班',
  '【广州校区】淘宝电商美工班',
  '【广州校区】淘宝电商美工班',
  '【广州校区】淘宝电商美工班'
]

const questions = [
  '我没基础能学会吗？',
  '学费是多少，有没有优惠活动？',
  '学完能就业吗，我怕找不到工作？',
  '没钱但想学设计，怎么办？',
  '课程实战性高吗，怕学了没效果？',
  '上课时间是怎么安排的？',
  '我想先去校区试听，要怎么坐车？',
  '学习过程有事暂停可以吗？'
]
</script>

<template>
  <div class="py-16 bg-[#0055b8] font-sans">
    <div class="max-w-[1240px] mx-auto px-4">
      
      <!-- Section Title -->
      <div class="text-center mb-10 flex flex-col items-center">
        <h2 class="text-4xl font-bold tracking-wider mb-2 text-white">最新推荐</h2>
        <p class="text-[13px] font-light tracking-[0.2em] mb-4 text-white/90 uppercase">LATEST RECOMMENDATIONS</p>
        <div class="relative w-48 h-px bg-white/30 flex justify-center items-center">
          <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      <!-- Main Content Card -->
      <div class="bg-white rounded-[16px] shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[480px]">
        
        <!-- Column 1: Banner Image -->
        <div class="w-full lg:w-[280px] h-[300px] lg:h-auto flex-shrink-0 bg-gray-900 border-r border-gray-100">
          <img src="~/assets/image/recommen/ss.png" alt="最新推荐" class="w-full h-full object-cover object-left-top" />
        </div>

        <!-- Column 2: Classes Info -->
        <div class="flex-1 p-6 lg:p-8 flex flex-col pt-7 pr-10 border-b lg:border-b-0 lg:border-r border-gray-100">
          
          <!-- Section 1: 热门班级推荐 -->
          <div class="mb-8">
            <h3 class="text-[18px] font-bold text-gray-800 mb-4 tracking-wide">热门班级推荐</h3>
            <div class="flex gap-4">
              <div v-for="i in 3" :key="i" class="flex-1 rounded-[8px] border border-gray-100/80 overflow-hidden bg-white shadow-sm transform hover:-translate-y-1 transition duration-300 cursor-pointer">
                <img src="~/assets/image/recommen/ai.png" :alt="`热门${i}`" class="w-full h-auto block object-contain hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          <!-- Section 2: 最新开班信息 -->
          <div class="flex-1 flex flex-col">
            <h3 class="text-[18px] font-bold text-gray-800 mb-3 tracking-wide">最新开班信息</h3>
            <ul class="space-y-4 mb-6 flex-1 pr-2">
              <li v-for="(cls, idx) in classes" :key="idx" class="flex items-center text-[14px]">
                <span class="text-gray-700 font-medium whitespace-nowrap">{{ cls }}</span>
                <!-- Dashed filler can be tricky, using flex auto margin -->
                <div class="flex-1 mx-4 border-b border-dashed border-gray-300 mt-2"></div>
                <span class="text-gray-400 font-mono text-[13px] mr-5">2026-05-08</span>
                <span class="text-gray-500 mr-2 text-[13px]">即将开班</span>
                <span class="text-red-500 text-[14px] leading-none">🔥</span>
              </li>
            </ul>

            <!-- Bottom Three Pills -->
            <div class="flex gap-3 h-[46px]">
              <div v-for="(btn, idx) in buttons" :key="idx" 
                   class="flex-1 flex items-center justify-center border border-gray-200 rounded-[8px] text-[14px] text-gray-600 font-medium hover:bg-[#f4f8ff] hover:border-[#0055b8] hover:text-[#0055b8] transition cursor-pointer">
                <!-- Wrapper for icon in a light blue circle -->
                <div class="w-[22px] h-[22px] bg-[#e6f0ff] rounded-full flex items-center justify-center mr-2 text-[#0055b8]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-[12px] w-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="btn.icon" />
                  </svg>
                </div>
                {{ btn.text }}
              </div>
            </div>
          </div>
        </div>

        <!-- Column 3: Q&A -->
        <div class="w-full lg:w-[320px] p-6 lg:p-8 flex flex-col pt-7 bg-white">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-[18px] font-bold text-gray-800 tracking-wide">问答</h3>
            <button class="flex items-center text-xs text-[#0055b8] border border-[#0055b8]/30 rounded-full px-3 py-1 hover:bg-[#f4f8ff] transition">
              <span class="bg-[#0055b8] text-white w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] mr-1 pb-[1px]">?</span>
              进问题咨询群
            </button>
          </div>
          
          <ul class="space-y-4 flex-1">
            <li v-for="(q, idx) in questions" :key="idx" class="flex items-start text-[14px] text-gray-700 hover:text-[#0055b8] cursor-pointer transition-colors group">
              <span class="flex-shrink-0 w-[18px] h-[18px] bg-[#0055b8] text-white rounded-[4px] flex items-center justify-center text-[11px] font-mono mr-2.5 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                {{ idx + 1 }}
              </span>
              <span class="leading-tight">{{ q }}</span>
            </li>
          </ul>

          <button class="w-full mt-6 bg-[#ff6b22] hover:bg-[#f05a11] text-white rounded-[8px] py-3.5 text-[15px] font-bold tracking-wider shadow-[0_4px_12px_rgba(255,107,34,0.3)] transition-all transform hover:-translate-y-[1px]">
            申请免费试听名额
          </button>
        </div>

      </div>
      
    </div>
  </div>
</template>