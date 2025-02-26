<template>
  <div class="exercisephysiology-content">
    <h1>운동생리학 & 생화학</h1>
    <img src="@/assets/images/exercise-physiology.png" alt="exercise-physiology"  />
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
.exercisephysiology-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* 중앙 정렬 */
    justify-content: center;
    width: 100%;
    height: 200vh;
    margin-top: 28vh;
}

.exercisephysiology-content h1 {
  position: relative;
  bottom: 10px;
  right: 495px;
  font-weight: 500;
  font-size: 35px;
  color: #3F3F3F;
}
img {
  width: 1275px;
  object-fit: cover; /* 이미지가 잘리지 않도록 조절 */
}

</style>