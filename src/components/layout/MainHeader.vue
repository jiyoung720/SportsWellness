<template>
    <header>
        <div class="logo"> 
            <img src="@/assets/images/yiu.png" alt="Logo" />
        </div>
        <nav>
            <ul>
                <MainDropdown title="스포츠ㆍ웰니스연구센터 소개" :items="labIntroItems" :navigateToPage="navigateToPage" />
                <MainDropdown title="스포츠ㆍ웰니스연구센터 연구실" :items="labEquipmentItems" :navigateToPage="navigateToPage" />
                <MainDropdown title="국민체력100" :items="fitnessItems" :navigateToPage="navigateToPage" />
                <MainDropdown title="엘리트 선수 관리 시스템" :items="eliteItems" :navigateToPage="navigateToPage" />
            </ul>
        </nav>
    </header>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainDropdown from './MainDropdown.vue';

export default {
    components: { MainDropdown },
    setup() {
        const router = useRouter();  // setup에서 useRouter() 호출
        const isLoggedIn = ref(true);  // 로그인 상태 관리

        // 드롭다운 아이템 클릭 시 호출되는 메소드
        const navigateToPage = (item) => {
            console.log(item);

            if (isLoggedIn.value) {
                // 로그인 상태에 따라 다르게 처리 (나중에 로그인 기능 구현 시 변경 필요)
                router.push(`/elite-player`);  // 임시로 /elite-player 페이지로 이동
            } else {
                router.push('/login');  // 로그인 안 되어 있으면 로그인 페이지로 이동
            }
        };

        return {
            labIntroItems: [
                '인사말',
                '주요 사업',
                '기관 연혁',
                '조직도 위원회',
                '위치 및 연락처',
            ],
            labEquipmentItems: [
                '운동생리학 & 생화학',
                '운동 역학',
                '세미나실 & 스터디룸',
            ],
            // fitnessItems: [
            //     '소개(헬스업)',
            //     '측정 항목',
            //     '측정 절차',
            //     '피드백',
            //     'Y-Fit 소프트',
            // ],
            eliteItems: [
                '체력 측정분석',
                '경기 기록',
            ],
            isLoggedIn,  // 로그인 상태
            navigateToPage,  // 메소드 반환
        };
    },
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0); /* 80% 불투명, 20% 투명 */
    padding: 0.8rem 11rem;
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
            padding-right: 20rem; /* 왼쪽으로 이동 */
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