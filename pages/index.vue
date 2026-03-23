<template>
  <div class="meidi-home">
    <AppHeader />
    <main>
      <HeroBanner />
      <BrandAdvantage />
      <GroupDynamics />
      <MainBusiness />
      <LatestRecommendations />
      <TeacherTeam />
      <AdvantageServices />
      <BrandList />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Nuxt 3 会自动导入 ~/components 目录下的组件，无需手动 import
useHead({
  title: '美迪教育 - 首页',
  meta: [
    { name: 'description', content: '美迪教育官网首页' }
  ]
})
</script>

<style scoped>
.meidi-home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>