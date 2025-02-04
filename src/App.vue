<template>
  <div>
    <EliteHeader />
    <EliteBackground />
    <TabNavigation v-model:activeTab="activeTab" />
    <EliteContent :activeTab="activeTab" />
    <!-- <UserProfile /> -->

  </div>
</template>

<script setup>
import { ref } from 'vue';
import EliteHeader from './components/EliteHeader.vue';
import EliteBackground from './components/EliteBackground.vue';
import TabNavigation from './components/TabNavigation.vue';
import EliteContent from './components/EliteContent.vue';
// import UserProfile from './components/UserProfile.vue';

// ✅ Composition API 방식으로 activeTab 상태 관리
const activeTab = ref(0);
</script>

<style lang="scss" scoped>

</style>
