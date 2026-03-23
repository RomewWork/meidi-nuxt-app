<script setup lang="ts">
import { ref } from 'vue'
import teacherImg from '~/assets/image/teacher.png'

const scrollContainer = ref<HTMLElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    const scrollAmount = window.innerWidth > 768 ? 300 : 200 // Adjust scroll amount for smaller screens
    scrollContainer.value.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }
}

const teachers = [
  { id: 1, name: '美迪', title: '新媒体讲师', img: teacherImg },
  { id: 2, name: '美迪', title: '新媒体讲师', img: teacherImg },
  { id: 3, name: '美迪', title: '新媒体讲师', img: teacherImg },
  { id: 4, name: '美迪', title: '新媒体讲师', img: teacherImg },
  { id: 5, name: '美迪', title: '新媒体讲师', img: teacherImg },
  { id: 6, name: '美迪', title: '新媒体讲师', img: teacherImg }
]
</script>

<template>
  <div class="py-10 md:py-16 bg-[#eef1f5] font-sans">
    <div class="max-w-[1240px] mx-auto px-4 md:px-8 xl:px-4 relative">
      
      <!-- Section Title -->
      <div class="text-center mb-8 md:mb-12 flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider mb-1 md:mb-2 text-gray-800">师资团队</h2>
        <p class="text-[10px] md:text-[13px] font-light tracking-[0.2em] mb-3 md:mb-4 text-gray-400 uppercase">TEAM</p>
        <div class="relative w-32 md:w-48 h-px bg-gray-300 flex justify-center items-center">
          <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      <!-- Carousel Area -->
      <div class="relative group">
        <!-- Left Button (Hidden on very small screens, visible on md and up) -->
        <button 
          @click="scroll('left')" 
          class="hidden md:flex absolute -left-4 lg:-left-12 xl:-left-24 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur rounded-full items-center justify-center text-gray-500 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:scale-105 hover:text-gray-800 transition-all cursor-pointer opacity-0 group-hover:opacity-100 xl:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Scrollable Cards -->
        <div 
          ref="scrollContainer" 
          class="flex gap-3 md:gap-4 overflow-x-auto snap-x scrollbar-hide py-2 px-1 pb-4"
        >
          <div 
            v-for="t in teachers" 
            :key="t.id" 
            class="min-w-[180px] md:min-w-[210px] lg:min-w-[230px] flex-none bg-white rounded-xl shadow-sm overflow-hidden snap-center group-hover:shadow relative flex flex-col"
          >
            <!-- Photo & Button -->
            <div class="relative h-[200px] md:h-[230px] lg:h-[260px] bg-gray-100 overflow-hidden">
              <img :src="t.img" :alt="t.name" class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
            </div>

            <!-- Info -->
            <div class="px-4 md:px-5 py-3 md:py-4 flex items-end gap-2 border-t border-gray-50">
              <span class="font-bold text-base md:text-lg text-gray-900">{{ t.name }}</span>
              <span class="text-[12px] md:text-[13px] text-gray-400">{{ t.title }}</span>
            </div>
          </div>
        </div>

        <!-- Right Button (Hidden on very small screens, visible on md and up) -->
        <button 
          @click="scroll('right')" 
          class="hidden md:flex absolute -right-4 lg:-right-12 xl:-right-24 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur rounded-full items-center justify-center text-gray-500 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:scale-105 hover:text-gray-800 transition-all cursor-pointer opacity-0 group-hover:opacity-100 xl:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>