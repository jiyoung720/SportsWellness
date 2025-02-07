<template>
    <div>
        <MainHeader />
        <EliteBanner />
        <TabNavigation v-model:activeTab="activeTab" />
        <EliteContent :activeTab="activeTab" />
        <!-- <UserProfile /> -->

    </div>
</template>

<script setup>
import { ref } from 'vue';
import MainHeader from '../components/layout/MainHeader.vue';
import EliteBanner from '../components/elite/EliteBanner.vue';
import TabNavigation from '../components/elite/TabNavigation.vue';
import EliteContent from '../components/elite/EliteContent.vue';

// ✅ Composition API 방식으로 activeTab 상태 관리
const activeTab = ref(0);
</script>

<style lang="scss" scoped>

</style>