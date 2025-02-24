<template>
    <div class="detail-container">
        <MainHeader />
        <DetailBanner />

        <component :is="currentComponent" />
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/layout/MainHeader.vue';
import DetailBanner from '@/components/details/DetailBanner.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import LocationPage from '@/components/details/LocationPage.vue';

    export default {
        name: 'DetailPage',
        components: {
            MainHeader,
            DetailBanner,
            LocationPage,    
            MainFooter,
            
        },
        computed: {
            currentComponent() {
                // 현재 URL의 section 값에 따라 컴포넌트 매칭
                const pageMap = {
                    'location': LocationPage,

                };
                return pageMap[this.$route.params.section] || LocationPage; // 기본값: 인사말(임시로 location)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>