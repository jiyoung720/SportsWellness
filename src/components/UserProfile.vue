<template>
    <div class="user-profile">
        <img src="@/assets/profile.png" alt="프로필 이미지" class="profile-image" />
        <h2 class="user-name">{{ props.userName }}</h2> <!-- props를 직접 사용 -->
        <div class="user-details">
            <span class="category">종목</span> <span class="divider">|</span> <span class="sport">{{ props.sport }}</span>
        </div>
        <p class="user-info">키: {{ props.height }}cm</p>
        <p class="user-info">몸무게: {{ props.weight }}kg</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    userName: String,
    sport: String,
    height: Number,
    weight: Number
});
</script>

<style scoped>
.user-profile {
    position: relative;
    width: 15vw;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2vw;
}

.profile-image {
    width: 7vw;
    height: auto;
    aspect-ratio: 1 / 1; /* 정사각형 유지 */
    border-radius: 50%;
    object-fit: cover;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08));
}

.user-name {
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: #3F3F3F;
    text-align: center;
    margin-top: 1vw;
}

.user-details {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5vw;
    margin-bottom: 0.5vw;
    font-size: 1rem;
    font-weight: 600;
}

.category, .divider, .sport {
    color: #005871;
}

.divider {
    margin: 0 0.5vw;
}

.user-info {
    font-size: 1rem;
    font-weight: 600;
    color: #3F3F3F;
    text-align: center;
    margin-bottom: 0.2vw;
    line-height: 1;
    
}

.user-info:last-child {
    margin-bottom: 1.2vw; /* 마지막 요소인 경우만 아래 여백 추가 */
}
</style>
