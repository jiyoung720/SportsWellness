<template>
    <div class="detail-container">
        <MainHeader />
        <DetailBanner />
        <BreadcrumbDropdown />
        <component :is="currentComponent" />
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/layout/MainHeader.vue';
import DetailBanner from '@/components/details/DetailBanner.vue';
import BreadcrumbDropdown from '@/components/details/BreadcrumbDropdown.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import OrganizationPage from '@/components/details/OrganizationPage.vue';
import ExercisePhysiologyPage from '@/components/details/ExercisePhysiologyPage.vue';
import SeminarPage from '@/components/details/SeminarPage.vue';
import KineticsPage from '@/components/details/KineticsPage.vue';
import LocationPage from '@/components/details/LocationPage.vue';
    export default {
        name: 'DetailPage',
        components: {
            MainHeader,
            DetailBanner,
            BreadcrumbDropdown,
            OrganizationPage,
            ExercisePhysiologyPage,
            SeminarPage,
            KineticsPage,
            LocationPage,
            MainFooter,
            
        },
        computed: {
            currentComponent() {
                // 현재 URL의 section 값에 따라 컴포넌트 매칭
                const pageMap = {
                    'location': LocationPage,
                    'exercisephysiology':ExercisePhysiologyPage,
                    'seminar' : SeminarPage,
                    'kinetics': KineticsPage,
                    'organization': OrganizationPage

                };
                return pageMap[this.$route.params.section] || LocationPage; // 기본값: 인사말(임시로 location)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>