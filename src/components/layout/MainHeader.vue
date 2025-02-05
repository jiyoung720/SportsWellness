<template>
    <header>
        <div class="logo">
            <img src="@/assets/images/yiu.png" alt="Logo" />
        </div>
        <nav>
            <ul>
                <MainDropdown title="연구소 소개" :items="labIntroItems" />
                <MainDropdown title="실험실 장비" :items="labEquipmentItems" />
                <MainDropdown title="국민체력100" :items="fitnessItems" />
                <MainDropdown title="엘리트 선수 관리 시스템" :items="eliteItems" />
            </ul>
        </nav>
    </header>
</template>

<script>
import MainDropdown from './MainDropdown.vue';

export default {
    components: { MainDropdown },
    data() {
        return {
            labIntroItems: [
                '인사말',
                '주요 사업',
                '기관 연혁',
                '조직도 위원회',
                '위치 및 연락처',
            ],
            labEquipmentItems: [
                '운동 생리학',
                '운동 생화학',
                '운동 역학',
                '체육 측정 평가',
                '세미나실',
                '스터디룸',
                '주요 장비',
            ],
            fitnessItems: [
                '소개(헬스업)',
                '측정 항목',
                '측정 절차',
                '피드백',
                'Y-Fit 소프트',
            ],
            eliteItems: [
                '체력 측정분석',
                'AI 동작분석',
                'AI 경기력분석',
                'DASH 소프트',
            ],
        };
    },
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8); /* 70% 불투명, 30% 투명 */
    padding: 0.8rem 13rem;
    width: 100%;
    height: 6%; /* 높이 6% */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    .logo img{
        height: 30px; /* 로고 높이 */
        width: auto; /* 너비 자동 조정 */
    }

    nav {
        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            padding-right: 24rem; /* 왼쪽으로 이동 */
        }

        li {
            color: #ffffff; /* 기본 색상 흰색 */

            &:hover {
                color: #72BDD6; /* 마우스를 올렸을 때 색상 변경 */
            }
        }
    }
}
</style>