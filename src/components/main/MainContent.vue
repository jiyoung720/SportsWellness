<template>
  <div class="SportsAndHealth">
    <a class="sports">SPORTS</a>
    <a class="health">HEALTH</a>
  </div>
  <div class="content">
    <h2>웰니스 연구센터란?</h2>
    <p>스포츠 데이터 기반 선수들의 경기력 향상과 대국민 건강증진의 싱크탱크</p>
  </div>

<div class="pictures">
    <img src="@/assets/images/mainimage1.png" alt="Yongin Image" class="mainPicture" />
    <img src="@/assets/images/mainimage2.png" alt="Yongin Image" class="mainPicture" />
    <img src="@/assets/images/mainimage3.png" alt="Yongin Image" class="mainPicture" />
  <div class="pictures_menu">
    <a class="pictures_menu1">경기력 향상</a>
    <a class="pictures_menu2">개인의 체력</a>
  <div class="pictures_menu3">
    <div class="first_row">국민 체력</div>
    <div class="second_row">건강 증진</div>
  </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style scoped>
.SportsAndHealth{
  color:#F3F3F3;
  font-size: 9rem;
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  position:relative;
  top:39vh;
}
.sports{
  transform: translate(0,-25%);
}
.health{
  transform:translate(0,286%) ;
}

.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  transform:translateY(-20%);
  margin-top: 17vh;
}
.content h2{
  font-size: 2rem;
  color:#005871 ;
  font-weight: bold;
}
.content p{
  font-size: 1rem;
  font-weight:bold;
  margin-top: -1vh;
}

.pictures{
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20vh;
  gap: 30px;
}

.mainPicture {
  width: 30%; /* 원하는 크기로 설정 */
  height: auto; /* 비율 유지 */
}

.pictures_menu{
  color: #ECECEC;
  display: flex;
  top:85%;
  position: absolute;
  font-weight: bold;
}

.pictures_menu1{
  transform: translateX(-540px);
}
.pictures_menu1::before{
  content: "";
  position: absolute;
  top: 0; /* 텍스트 위쪽에 위치 */
  margin-top: -15px;
  margin-left: 3px;
  width: 25px; /* 원하는 길이 */
  height: 2px; /* 선 두께 */
  background-color: white;
}
.pictures_menu2{
  transform: translateX(-130px); 
}
.pictures_menu2::before{
  content: "";
  position: absolute;
  top: 0; /* 텍스트 위쪽에 위치 */
  margin-top: -15px;
  margin-left: 3px;
  width: 25px; /* 원하는 길이 */
  height: 2px; /* 선 두께 */
  background-color: white;
}
.pictures_menu3{
  transform: translate(280px,-25px)
}
.second_row{
  margin-top: 5px;
}
.pictures_menu3::before{
  content: "";
  position: absolute;
  top: 0; /* 텍스트 위쪽에 위치 */
  margin-top: -15px;
  margin-left: 3px;
  width: 25px; /* 원하는 길이 */
  height: 2px; /* 선 두께 */
  background-color: white;
}

</style>