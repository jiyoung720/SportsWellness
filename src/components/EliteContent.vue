<template>
    <div class="elite-content">
        <div class="content-wrapper">
            <UserProfile 
                userName="홍길동 (남자)"
                sport="축구"
                height="180"
                weight="80" 
            />
            <div class="main-content">
                <div class="main-title">
                    <h2>{{ pageTitle }}</h2>
                </div>
                <div class="content-area">
                    <p>현재 입력된 기록이 없습니다. 내 기록 추가를 통해 몸 상태를 기록해 보세요!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import UserProfile from './UserProfile.vue';

const props = defineProps({
  activeTab: Number, // 부모(App.vue)에서 내려받는 activeTab 값
});

const pageTitles = ['체력측정분석', 'AI 동작분석', 'AI 경기력분석', 'DASH 소프트'];

const pageTitle = computed(() => pageTitles[props.activeTab]);
</script>

<style scoped>
.elite-content {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 30%;
    left: 0;
    background: #F4F4F4;
    overflow: hidden; /* 내용이 넘칠 경우 스크롤바 표시 */
    z-index: -1;
}

/* 프로필과 메인 컨텐츠를 감싸는 레이아웃 */
.content-wrapper {
    display: flex;
    gap: 40px;
    width: 87.5%;
    /* max-width: 1300px; */
}

.user-profile {
    flex: 0 0 150px; /* 고정된 너비 */
    margin-top: 18vh; /* 화면 높이의 18%만큼 아래로 이동 */
}


/* 메인 컨텐츠 (오른쪽 배치) */
.main-content {
    flex: 1; /* 남은 공간 모두 차지 */
    margin-top: 18vh;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* 타이틀 스타일 */
.main-title {
    padding-bottom: 10px;
    border-bottom: 2px solid #ddd; /* 구분선 추가 */
    margin-bottom: 20px;
}

.main-title h2 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin: 0;
}

/* 콘텐츠 스타일 */
.content-area {
    font-size: 16px;
    color: #666;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
}
</style>

