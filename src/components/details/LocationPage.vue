<template>
    <div class = "location-content">
        <h2 class="location-title">위치 및 연락처</h2>
        <div class = "location-map">
            <img src = "../../assets/images/map.png" alt = "location">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LocationPage',
    }
</script>

<style lang="scss" scoped>
.location-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110vh;
    margin-top: 30.5vh;
}

.location-title {
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 4vh;
    margin-right: 66.5%;
    color: #3F3F3F;
}

.location-map {
    width: 90%;
    height: 63.2%;
    display: flex;
    justify-content: center; /* 중앙 정렬 */
}
</style>