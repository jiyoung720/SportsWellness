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

      <!-- 학생 / 관리자 선택 버튼 -->
      <div class="role-selection">
        <button
          :class="['role-btn', { active: userRole === 'student' }]"
          @click="selectRole('student')"
        >
          학생
        </button>
        <button
          :class="['role-btn', { active: userRole === 'admin' }]"
          @click="selectRole('admin')"
        >
          관리자
        </button>
      </div>

      <form @submit.prevent="handleRegister" class="register-form">
        <!-- 아이디 입력 + 중복 확인 버튼 -->
        <div class="form-group username-group">
          <label for="username">아이디</label>
          <div class="input-group">
            <input
              id="username"
              type="text"
              v-model="formData.username"
              placeholder="아이디를 입력해주세요."
              required
            />
            <button type="button" class="check-btn" @click="checkUsernameAvailability">
              중복 확인
            </button>
          </div>
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

<!-- 비밀번호 확인 (라벨 제거하고, placeholder로 표시) -->
<div class="form-group">
  <input
    id="passwordConfirm"
    type="password"
    v-model="formData.passwordConfirm"
    placeholder="비밀번호 확인"
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
        <span @click="goToLogin">로그인 하러가기  →</span>
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
      userRole: null, // 'student' 또는 'admin' 저장
    };
  },
  methods: {
    handleRegister() {
      console.log("회원가입 시도:", this.formData);
    },
    goToLogin() {
      this.$router.push("/login");
    },
    selectRole(role) {
      this.userRole = role;
    },
    checkUsernameAvailability() {
      console.log("아이디 중복 확인 실행:", this.formData.username);
      alert("아이디 중복 확인 기능입니다.");
    },
  },
};
</script>



<style scoped>
/* 전체 컨테이너 */
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  width: 100%;
  min-height: 100vh;
  background: white;
  position: relative;
  
}

/* 배경 컨테이너 */
.background-container {
  width: 100vw;
  height: 150vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--BK, #262626); /* 기본 배경 */
}

/* 배경 이미지 */
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(7px);
  opacity: 0.8; /* 기본 투명도 적용 */
}

/* 어두운 오버레이 추가 */
.background-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 반투명 검은색 */
}




/* 회원가입 박스 */
.register-box {
  position: absolute;
  top: 10%; /* 중앙이 아니라 위쪽 정렬 */
  left: 50%;
  transform: translateX(-50%); /* 가로만 중앙 정렬 */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  /* 크기 조정 */
  width: 60%;
  max-width: 1190px;
  min-width: 320px;
  height: auto;
  min-height: 400px;
  max-height: none; /* 제한 없이 확장 가능하도록 설정 */
}

/* 스크롤 가능하게 조정 */
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh; /* 기본적으로 화면 전체를 덮도록 설정 */
  background: white;
  position: relative;
  overflow-y: auto; /* 스크롤 가능하게 설정 */
}





/* 입력 폼 */
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90vw;
  padding: 2rem;
}

/* 입력 필드 그룹 */
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 400px;
  margin-bottom: 20px;
}

/* 라벨 스타일 */
.form-group label {
  font-size: 1rem;
  font-weight: 600;
  color: #3f3f3f;
  margin-bottom: 100px;
  text-align: left;
  width: 100%;
}

/* 입력 필드 */
.form-group input {
  width: 100%;
  padding: 12px 24px;
  border: 2px solid #737373;
  border-radius: 8px;
  font-size: 1rem;
  text-align: left;
  box-sizing: border-box;
  margin-top: -5px;
}

/* 학생 / 관리자 선택 버튼 */
.role-selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 10px;
  margin-bottom: 20px;
}

/* 버튼 스타일 */
.role-btn {
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border: 2px solid #737373;
  border-radius: 6px;
  background: white;
  color: #737373;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
}

/* 선택된 버튼 */
.role-btn.active {
  border-radius: 8px;
  border: 2px solid var(--BK, #262626);
  background: var(--BK, #262626);
  color: white;
}




/* 아이디 입력 + 중복 확인 버튼 */
.username-group .input-group {
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 400px;
}

/* 입력 필드 */
.input-group input {
  flex: 1;
  width: 100%;
}

/* 중복 확인 버튼 */
.check-btn {
  padding: 10px;
  font-size: 14px;
  border: 2px solid #005871;
  border-radius: 6px;
  background: white;
  color: #005871;
  cursor: pointer;
  transition: 0.3s;
}

.check-btn:hover {
  background: #005871;
  color: white;
}

/* 비밀번호 입력 필드 스타일 */
.form-group input[type="password"] {
  width: 100%;
  padding: 12px 24px;
  border: 2px solid #737373;
  border-radius: 8px;
  font-size: 1rem;
  text-align: left;
  box-sizing: border-box;
}

/* 비밀번호 확인 입력 필드 (라벨 없이 placeholder로 표시) */
#passwordConfirm {
  width: 100%;
  padding: 12px 24px;
  border: 2px solid #737373;
  border-radius: 8px;
  font-size: 1rem;
  text-align: left;
  box-sizing: border-box;
}

/* 비밀번호 입력 필드와 비밀번호 확인 필드 간격 조정 */
#passwordConfirm {
  margin-top: -10px; /* 두 필드를 더 가깝게 배치 */
}

/* 공통 입력 필드 스타일 (전화번호 & 이메일) */
.form-group input[type="text"],
.form-group input[type="email"] {
  width: 100%;
  padding: 12px 24px;
  border: 2px solid #737373;
  border-radius: 8px;
  font-size: 1rem;
  text-align: left;
  box-sizing: border-box;
}

/* 전화번호 & 이메일 필드 라벨 스타일 */
.form-group label {
  font-size: 1rem;
  font-weight: 600;
  color: #3f3f3f;
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
}

/* 전화번호 & 이메일 필드 간격 조정 */
#phone {
  margin-bottom: 10px; /* 전화번호 필드 아래 여백 */
}

#email {
  margin-bottom: 15px; /* 이메일 필드 아래 여백 */
}




/* 개인정보 동의 체크박스 */
.checkbox-group {
  display: flex;
  align-items: center; /* 체크박스와 텍스트 정렬 */
  gap: 8px; /* 체크박스와 텍스트 사이 간격 */
  width: 100%; /* 입력 필드와 동일한 너비 유지 */
  max-width: 400px; /* 최대 너비 설정 */
  margin: 10px 0; /* 이메일 필드와 가입하기 버튼 사이 간격 조정 */
  color: var(--Gr-03, #3F3F3F);
  font-family: KoPubWorldDotum;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

/* 체크박스 스타일 */
.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #005871; /* 체크박스 색상 */
}

/* 체크박스 라벨 */
.checkbox-group label {
  cursor: pointer;
}

/* 이메일 필드 */
.form-group.email {
  margin-bottom: 10px; /* 이메일과 개인정보 동의 체크박스 사이 간격 */
}

/* 가입하기 버튼 */
.register-btn {
  margin-top: 30px; /* 개인정보 동의 체크박스와 가입하기 버튼 사이 간격 */
}


/* 가입 버튼 (로그인 버튼과 동일한 크기 적용) */
.register-btn {
  width: 100%;
  max-width: 400px;
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

/* "또는" 구분선 (로그인과 동일하게 적용) */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #737373;
  font-family: KoPubWorldDotum;
  text-align: center;
}

/* 구분선 좌우 라인 */
.divider::before,
.divider::after {
  content: "";
  flex-grow: 1;
  height: 1px;
  background: #ccc;
}

/* 구분선 가운데 텍스트 */
.divider span {
  padding: 0 10px;
  background: #fff;
}

/* 로그인 링크 (회원가입 박스 오른쪽 상단 배치) */
.login-link {
  position: absolute;
  top: 20px; /* 회원가입 박스 상단에서 간격 */
  right: 20px; /* 회원가입 박스 오른쪽에서 간격 */
  font-size: 16px;
  font-weight: 600;
  color: var(--Gr-02, #737373); /* 새로운 색상 적용 */
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

/* 호버 효과 */
.login-link:hover {
  color: #505050; /* 조금 더 어두운 색상으로 변경 */
}


.login-link:hover {
  background: #f0f0f0;
}


/* 📌 반응형 적용 */
@media (max-width: 1200px) {
  .register-box {
    width: 60%;
    max-width: 450px;
  }
}

@media (max-width: 992px) {
  .register-box {
    width: 70%;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .register-box {
    width: 80%;
    max-width: 350px;
    padding: 1.5rem;
  }

  .role-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .check-btn {
    padding: 8px;
    font-size: 12px;
  }

  .register-btn {
    font-size: 18px;
    padding: 10px;
  }

  .login-link {
    font-size: 18px;
  }
}
</style>
