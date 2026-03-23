<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const menuItems = [
  { title: "国内·电商", sub: "淘宝/拼多多/" },
  { title: "跨境·电商", sub: "亚马逊/TK/" },
  { title: "直播·电商", sub: "抖音/视频" },
  { title: "视觉·设计", sub: "美工设计/" },
  { title: "摄影·视频", sub: "摄影/短视" },
  { title: "人工·智能", sub: "AI/办公/设" },
  { title: "职业·考证", sub: "电子商务师/" },
];

const topNavs = [
  { name: "首页", active: true },
  { name: "品牌介绍" },
  { name: "电商培训" },
  { name: "电商孵化" },
  { name: "企业服务" },
  { name: "院校服务" },
  { name: "团队风采" },
  { name: "客户案例" },
  { name: "企业动态" },
  { name: "电商资讯" },
  { name: "联系我们" },
];

const features = ["全程实战课程", "爆款案例拆解", "直播答疑陪跑"];
</script>
<template>
  <div class="w-full">
    <!-- Top Navy blue Navigation Bar (Hidden on Mobile) -->
    <div class="w-full bg-[#1b5592] h-[50px] relative z-30 hidden lg:block">
      <div
        class="max-w-[1400px] mx-auto h-full flex justify-between items-center px-4 sm:px-6 lg:px-8"
      >
        <!-- Nav Links -->
        <nav class="flex h-full items-center overflow-x-hidden">
          <div
            v-for="(item, index) in topNavs"
            :key="index"
            class="relative h-full px-2 xl:px-4 flex flex-col justify-center items-center cursor-pointer group text-white hover:text-white/80 transition-colors"
          >
            <span class="text-[13px] xl:text-[15px] z-10 whitespace-nowrap">{{
              item.name
            }}</span>
            <div
              v-if="item.active"
              class="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M7 10c2.5 3.5 7.5 3.5 10 0"
                />
              </svg>
            </div>
            <!-- hover drop indicator -->
            <div
              v-if="!item.active"
              class="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                class="w-4 h-4 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M7 10c2.5 3.5 7.5 3.5 10 0"
                />
              </svg>
            </div>
          </div>
        </nav>

        <!-- Phone right -->
        <div class="flex items-center text-white h-full px-4 shrink-0">
          <svg
            class="w-4 h-4 xl:w-5 xl:h-5 mr-1 xl:mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
            />
          </svg>
          <span class="text-[14px] xl:text-[16px] font-bold">400-800-4439</span>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Button (Visible only on small screens) -->
    <div
      class="lg:hidden bg-[#1b5592] px-4 py-3 flex justify-between items-center z-30 relative"
    >
      <span class="text-white font-bold">导航菜单</span>
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="text-white hover:text-blue-200"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden bg-blue-900 absolute w-full z-40 shadow-xl"
    >
      <div class="flex flex-col px-4 py-2">
        <a
          v-for="(item, index) in topNavs"
          :key="index"
          href="#"
          class="py-3 border-b border-blue-800 text-white hover:text-blue-300 text-sm"
        >
          {{ item.name }}
        </a>
      </div>
    </div>

    <!-- Main Banner Content area -->
    <div
      class="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden bg-[#e6f4ff]"
    >
      <div class="absolute inset-0 z-0 flex items-center justify-center">
        <div class="w-full h-full relative">
          <!-- Main gradient background attempting to recreate the wave look -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#cceaff] via-[#e6f4ff] to-[#b3e0ff]"
          >
            <!-- Decorative curves/waves via CSS shapes -->
            <div
              class="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-blue-300/30 to-transparent opacity-50 clip-path-curve"
            ></div>
            <div
              class="absolute -bottom-[20%] left-[-10%] w-[50%] h-[100%] rounded-[100%] border-[2px] border-white/40 blur-[1px]"
            ></div>
            <div
              class="absolute top-[10%] right-[5%] w-[40%] h-[80%] rounded-[100%] border-[1px] border-blue-400/20 shadow-[inset_0_0_50px_rgba(0,100,255,0.1)]"
            ></div>
          </div>

          <div
            class="w-full max-w-[1400px] mx-auto h-full relative z-10 pointer-events-none"
          >
            <!-- Text Overlays mapping to UI layout with Responsive sizing and positioning -->
            <div
              class="text-center absolute top-1/2 transform -translate-y-1/2 pointer-events-auto w-[90%] left-[5%] lg:w-[600px] lg:left-[240px] xl:left-[280px] 2xl:left-[320px]"
            >
              <p
                class="text-gray-600 text-sm md:text-base lg:text-lg mb-1 md:mb-2 text-center lg:text-left bg-transparent flex items-center justify-center lg:justify-start"
              >
                零基础爆单秘籍
                <span class="w-10 h-0.5 bg-gray-400 ml-4 hidden"></span>
              </p>
              <h1
                class="whitespace-nowrap text-[42px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[84px] font-black text-[#0066ff] tracking-wider mb-4 sm:mb-6 text-center lg:text-left leading-none"
                style="
                  text-shadow:
                    2px 2px 0px white,
                    -1px -1px 0px white,
                    3px 3px 6px rgba(0, 0, 0, 0.1);
                "
              >
                抖音小店基础班
              </h1>

              <div
                class="bg-[#0073ff] text-white rounded-[4px] px-2 sm:px-6 lg:px-8 py-2 md:py-3 text-[12px] sm:text-[14px] lg:text-[17px] font-bold tracking-normal sm:tracking-widest flex items-center justify-center lg:justify-between mb-6 md:mb-8 shadow-[0_8px_15px_rgba(0,115,255,0.3)] hover:-translate-y-[2px] transition-all cursor-pointer w-full lg:w-auto"
              >
                <span
                  class="hidden lg:block w-[8%] h-[1px] bg-white opacity-80"
                ></span>
                <span>从选品上架到流量爆破，手把手教你开店赚钱！</span>
                <span
                  class="hidden lg:block w-[8%] h-[1px] bg-white opacity-80"
                ></span>
              </div>

              <div
                class="flex flex-wrap lg:flex-nowrap gap-2 md:gap-4 justify-center lg:justify-between mt-3 w-full lg:w-[95%]"
              >
                <span
                  v-for="feature in features"
                  :key="feature"
                  class="flex items-center text-[#1a5bb5] text-[12px] md:text-[14px] lg:text-[15px] font-medium bg-[#f0f8ff]/70 lg:bg-[#f0f8ff]/50 px-2 py-1 rounded"
                >
                  <div
                    class="bg-[#006aff] text-white rounded-[3px] w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mr-1 md:mr-2 text-[10px] md:text-xs"
                  >
                    ✓
                  </div>
                  {{ feature }}
                </span>
              </div>
            </div>

            <!-- Abstract Right Side 3D Element Placeholder (Hidden on smaller screens) -->
            <div
              class="hidden md:block absolute right-[-5%] lg:right-[0%] xl:right-[5%] top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] opacity-30 lg:opacity-100 pointer-events-auto"
            >
              <div
                class="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"
              ></div>
              <!-- Floating Elements -->
              <div
                class="absolute top-[20%] right-[15%] w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 shadow-xl transform rotate-12 rotate-y-12 floating-animation opacity-80 flex items-center justify-center backdrop-blur-sm border border-white/40"
              >
                <div
                  class="w-10 h-3 lg:w-16 lg:h-4 bg-white/60 rounded-full mb-2 lg:mb-4"
                ></div>
                <div
                  class="w-6 h-3 lg:w-10 lg:h-4 bg-white/40 rounded-full"
                ></div>
              </div>
              <div
                class="absolute bottom-[20%] left-[15%] w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-2xl opacity-90 border-[3px] lg:border-[4px] border-white/30 flex items-center justify-center floating-animation-delay"
              >
                <span
                  class="text-white text-[50px] lg:text-[80px] font-black italic shadow-sm"
                  style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2)"
                  >d</span
                >
              </div>
              <div
                class="absolute top-[10%] left-[35%] w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-yellow-300 shadow-lg floating-animation"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Left Navigation Menu (Hidden on mobile/tablet to save space, visible only on PC) -->
      <div class="hidden lg:flex max-w-[1400px] mx-auto h-full relative z-20">
        <div
          class="w-[180px] xl:w-[200px] bg-white h-full shadow-[5px_0_20px_rgba(0,0,0,0.08)] flex flex-col justify-between py-3 ml-4 lg:ml-8 rounded-tr-sm rounded-br-sm border-r border-t border-b border-gray-100/50"
        >
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="flex-1 flex items-center px-4 xl:px-6 hover:bg-[#f0f8ff] cursor-pointer group transition-all relative"
          >
            <div class="flex items-baseline gap-2 xl:gap-3 w-full">
              <span
                class="text-[14px] xl:text-[15px] font-bold text-gray-800 group-hover:text-[#006aff] transition-colors min-w-[70px] xl:min-w-[75px]"
                >{{ item.title }}</span
              >
              <span
                class="text-[11px] xl:text-[12px] text-gray-400 whitespace-nowrap overflow-hidden"
                >{{ item.sub }}</span
              >
            </div>
            <div
              class="absolute right-1 xl:right-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#006aff]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.floating-animation {
  animation: float 6s ease-in-out infinite;
}

.floating-animation-delay {
  animation: float 7s ease-in-out infinite 1s;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(2deg);
  }

  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
</style>
