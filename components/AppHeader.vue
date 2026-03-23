<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const topNavItems = ['全国分校', '对外合作', '产业合作', '企业团培', '学习工具', '帮助中心']

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="bg-white relative z-50 shadow-sm w-full">
    <!-- Top Bar -->
    <div class="h-10 border-b border-gray-100 bg-[#f8f9fa] text-gray-500 flex items-center justify-between px-4 lg:px-8 text-xs">
      <div class="max-w-[1340px] mx-auto w-full flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <span>请选择您关注的项目：</span>
          <div class="flex items-center text-gray-700 cursor-pointer hover:text-blue-600 border px-2 py-1 rounded bg-white relative group">
            <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            选择项目
          </div>
        </div>
        <div class="flex items-center space-x-6">
           <svg class="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900 hidden sm:block" fill="currentColor" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
        </div>
      </div>
    </div>
    
    <!-- Main Header -->
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-[60px] md:h-[76px]">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center cursor-pointer h-full">
          <img class="h-8 md:h-10 w-auto" src="~/assets/image/logo.png" alt="美迪电商" />
          <span class="text-gray-400 text-xs md:text-sm pl-2 md:pl-4 hidden sm:block tracking-widest truncate">| 电商路 · 我们一起走！</span>
        </div>
        
        <!-- Mobile Menu Toggle Button -->
        <div class="flex md:hidden items-center">
            <button @click="toggleMobileMenu" type="button" class="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>

        <!-- Desktop Nav Dropdowns -->
        <nav class="hidden md:ml-6 md:flex md:space-x-4 lg:space-x-8 items-center h-full">
          <a-dropdown v-for="(item, index) in topNavItems" :key="index" :trigger="['hover']">
            <a class="group text-gray-700 hover:text-blue-600 cursor-pointer px-1 text-[13px] lg:text-[15px] flex items-center gap-1 font-medium whitespace-nowrap transition-colors duration-200" @click.prevent>
              {{ item }}
              <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1">
                  <a href="#">通用选项 1</a>
                </a-menu-item>
                <a-menu-item key="2">
                  <a href="#">通用选项 2</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </nav>
      </div>
      
      <!-- Mobile Menus Panel -->
      <div v-show="isMobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 z-40 shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a v-for="(item, index) in topNavItems" :key="index" href="#" class="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md border-b border-gray-50">
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
