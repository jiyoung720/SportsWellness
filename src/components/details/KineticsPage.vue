<template>
  <div class="exercisephysiology-content">
    <h1>운동역학</h1>
    <img src="@/assets/images/kinetics.png" alt="kinetics"  />
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
    height: 170vh;
    margin-top: 28vh;
}

.exercisephysiology-content h1 {
  position: relative;
  bottom: 10px;
  right: 575px;
  font-weight: 500;
  font-size: 35px;
  color: #3F3F3F;
}
img {
  width: 1275px;
  object-fit: cover; /* 이미지가 잘리지 않도록 조절 */
}

</style>