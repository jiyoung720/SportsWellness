<template>
    <div class="player-performance-list">
        <table>
            <thead>
                <tr>
                    <th>종목</th>
                    <th>이름</th>
                    <th>키</th>
                    <th>몸무게</th>
                    <th>|</th>
                    <th>패스 성공률</th>
                    <th>활동량</th>
                    <th>볼 터치 수</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(record, index) in records" :key="index" @click="selectRecord(index + 1)" class="clickable-row">
                    <td class="gray-text">{{ record.sport }}</td>
                    <td class="bold-text">{{ record.name }}</td>
                    <td>{{ record.height }}</td>
                    <td>{{ record.weight }}</td>
                    <td>|</td>
                    <td>{{ record.passSuccess }}</td>
                    <td>{{ record.activity }}</td>
                    <td>{{ record.ballTouches }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
// import { useRouter } from 'vue-router';

const emits = defineEmits(['select-record']); // ✅ 부모 컴포넌트로 이벤트 전달
// const router = useRouter();

const records = ref([
  { sport: '축구', name: '김태훈', height: 178, weight: 72, passSuccess: '82%', activity: '90%', ballTouches: '65' },
  { sport: '축구', name: '박성민', height: 182, weight: 76, passSuccess: '85%', activity: '87%', ballTouches: '70' },
  { sport: '축구', name: '이재욱', height: 175, weight: 68, passSuccess: '78%', activity: '92%', ballTouches: '58' },
  { sport: '축구', name: '정민수', height: 180, weight: 74, passSuccess: '88%', activity: '83%', ballTouches: '62' },
  { sport: '축구', name: '오승환', height: 177, weight: 70, passSuccess: '81%', activity: '85%', ballTouches: '55' },
]);

// ✅ 클릭 시 부모에게 ID 전달
const selectRecord = (recordId) => {
    emits('select-record', recordId);
};

</script>

<style scoped>
.player-performance-list {
  width: 100%;
  margin-top: 20px;
}

/* 호버 효과 추가 */
.clickable-row {
  cursor: pointer;
  transition: background-color 0.2s;
}

.clickable-row:hover {
  background-color: #E1F9FF !important;
  color: #005871 !important;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

th {
  background-color: #005871;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: left;
}

td {
  padding: 0.8rem 1.5rem;
  border-bottom: 2px solid #ECECEC;
  font-size: 0.9rem;
  color: #262626;
}

tbody tr:nth-child(odd) {
  background-color: #F4F4F4;
}

tbody tr:nth-child(even) {
  background-color: white;
}

.gray-text {
  color: #737373;
  font-weight: 500;
}

.bold-text {
  color: #262626;
  font-weight: bold;
}
</style>
