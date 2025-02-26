<template>
  <div class="seminar-content">
    <h1>세미나실 & 스터디룸</h1>
    <img src="@/assets/images/seminar-study.png" alt="Yongin Image"  />
    <div class="contact">
      <h3>연락처</h3>
      <p>031-8020-2653</p>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.seminar-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* 중앙 정렬 */
    justify-content: center;
    width: 100%;
    height: 90vh;
    margin-top: 35vh;
}

.seminar-content h1 {
  position: relative;
  bottom: 10px;
  right: 490px;
  font-weight: 500;
  font-size: 35px;
  color: #3F3F3F;
}

.contact {
  display: flex;
  align-items: center; /* 세로 정렬 */
  gap: 30px; /* 연락처와 전화번호 사이 간격 */
  transform: translate(100px,-70px);
  font-size: 15px;
  font-weight: 700;
}
.contact h3 {
 color: #262626;
}
.contact p {
  color: #3F3F3F;
}
img {
  width: 1275px;
  object-fit: cover; /* 이미지가 잘리지 않도록 조절 */
}
</style>