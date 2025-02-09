<template>
  <div class="register-container">
    <!-- 헤더 -->
    <MainHeader />

    <!-- 배경 이미지 -->
    <div class="background-container">
      <img src="@/assets/images/image5.svg" alt="Register Background" class="background-image" />
    </div>

    <!-- 회원가입 박스 -->
    <div class="register-box">
      <h2 class="title">회원가입</h2>

      <form @submit.prevent="handleRegister" class="register-form">
        <!-- 아이디 입력 -->
        <div class="form-group">
          <label for="username">아이디</label>
          <input
            id="username"
            type="text"
            v-model="formData.username"
            placeholder="아이디를 입력해주세요."
            required
          />
        </div>

        <!-- 비밀번호 입력 -->
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input
            id="password"
            type="password"
            v-model="formData.password"
            placeholder="비밀번호를 입력해주세요."
            required
          />
        </div>

        <!-- 비밀번호 확인 -->
        <div class="form-group">
          <label for="passwordConfirm">비밀번호 확인</label>
          <input
            id="passwordConfirm"
            type="password"
            v-model="formData.passwordConfirm"
            placeholder="비밀번호를 다시 입력해주세요."
            required
          />
        </div>

        <!-- 이름 입력 -->
        <div class="form-group">
          <label for="name">이름</label>
          <input
            id="name"
            type="text"
            v-model="formData.name"
            placeholder="이름을 입력해주세요."
            required
          />
        </div>

        <!-- 전화번호 입력 -->
        <div class="form-group">
          <label for="phone">전화번호</label>
          <input
            id="phone"
            type="text"
            v-model="formData.phone"
            placeholder="전화번호를 입력해주세요."
            required
          />
        </div>

        <!-- 이메일 입력 -->
        <div class="form-group">
          <label for="email">이메일</label>
          <input
            id="email"
            type="email"
            v-model="formData.email"
            placeholder="이메일을 입력해주세요."
            required
          />
        </div>

        <!-- 개인정보 동의 체크박스 -->
        <div class="checkbox-group">
          <input type="checkbox" id="privacy" v-model="formData.agree" required />
          <label for="privacy">(필수) 개인정보 수집이용 동의</label>
        </div>

        <!-- 가입 버튼 -->
        <button type="submit" class="register-btn">가입하기</button>
      </form>

      <!-- 로그인 페이지 이동 -->
      <div class="login-link">
        <span @click="goToLogin">로그인 하러가기</span>
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
        passwordConfirm: "",
        name: "",
        phone: "",
        email: "",
        agree: false,
      },
    };
  },
  methods: {
    handleRegister() {
      console.log("회원가입 시도:", this.formData);
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* 전체 컨테이너 */
.register-container {
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

/* 회원가입 박스 */
.register-box {
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
.register-form {
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

/* 개인정보 동의 체크박스 */
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

/* 가입 버튼 */
.register-btn {
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

.register-btn:hover {
  background: #d4d4d4;
}

/* 로그인 링크 */
.login-link {
  margin-top: 20px;
  font-size: 20px;
  color: #005871;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
}

.login-link:hover {
  color: #003f57;
}
</style>
