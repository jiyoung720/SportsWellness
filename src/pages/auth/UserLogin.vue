<template>
  <div class="login-container">
    <!-- 헤더 -->
    <MainHeader />

    <!-- 배경 이미지 -->
    <div class="background-container">
      <img src="@/assets/images/image5.svg" alt="Login Background" class="background-image" />
    </div>

    <!-- 로그인 박스 -->
    <div class="login-box">
      <h2 class="title">로그인</h2>
      <form class="login-form">
        <div class="form-group">
          <label for="username">아이디</label>
          <input type="text" id="username" v-model="formData.username" placeholder="아이디를 입력해주세요." />
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input type="password" id="password" v-model="formData.password" placeholder="비밀번호를 입력해주세요." />
        </div>

        <div class="checkbox-group">
          <input type="checkbox" id="rememberMe" v-model="formData.rememberMe" />
          <label for="rememberMe">로그인 유지</label>
        </div>

        <button type="submit" class="login-btn">로그인</button>
      </form>

      <div class="register-link">
        <span @click="goToRegister">회원가입 하러가기</span>
      </div>
    </div>

    <!-- 푸터 -->
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      formData: {
        username: "",
        password: "",
        rememberMe: false,
      },
    };
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
/* 전체 컨테이너 */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: white;
}

/* 배경 이미지 컨테이너 */
.background-container {
  position: relative;
  width: 1920px;
  height: 1305.245px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* 배경 이미지 */
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 로그인 박스 */
.login-box {
  position: absolute;
  top: 20%;
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 36px;
  font-weight: 600;
  color: black;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* 입력 폼 */
.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 20px;
  font-weight: 600;
  color: #3f3f3f;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 12px 24px;
  border: 2px solid #737373;
  border-radius: 8px;
  font-size: 16px;
  color: #737373;
}

/* 로그인 유지 체크박스 */
.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.checkbox-group label {
  font-size: 16px;
  color: #3f3f3f;
}

/* 로그인 버튼 */
.login-btn {
  width: 100%;
  padding: 12px;
  background: #e6e6e6;
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #737373;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background: #d4d4d4;
}

/* 회원가입 링크 */
.register-link {
  margin-top: 20px;
  font-size: 20px;
  color: #005871;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
}

.register-link:hover {
  color: #003f57;
}
</style>
