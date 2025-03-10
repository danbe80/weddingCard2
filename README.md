✅ 개인적인 지인에게 선물로 만들어준 모바일 청첩장입니다. <br>
포폴에 사용할 수 있도록 청첩장 주인에게 허락 받아 올립니다.

# [모바일 청첩장](https://weddingcard-619e4.web.app)

# 1️⃣ 프로젝트 목표

- 모바일, 태블릿 환경에서 볼 수 있는 모바일 청첩장
- 언어 변경이 가능한 로컬라이징 기능 추가

# 2️⃣ 사용기술

<img src="https://img.shields.io/badge/vue 3.0-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white">

<img src="https://img.shields.io/badge/quasar-050A14?style=for-the-badge&logo=quasar&logoColor=white">

<img src="https://img.shields.io/badge/typscript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

<img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white">

### 주의사항

- 로컬라이징 설정(영어, 한글) - 글자 수 주의
- 반응형 모바일을 기준으로 제작 최대 사이즈 태블릿까지 적용
- 각 컴포넌트는 carousel기능으로 페이지를 넘김

---

## 페이지 주요 기능

### 메인 갤러리 전체 페이지

![Image](https://github.com/user-attachments/assets/4804b4c5-a572-47dc-838f-632e9d1b7157)

#### 1. 메인 첫 페이지

![Image](https://github.com/user-attachments/assets/c7bd7224-13e8-4acc-b4cc-0bb706630761)

메인 사진 carousel 기능, auto로 돌아가게 되어있습니다.

Quasar 에 있는 q-carousel를 사용했습니다.

<img width="403" alt="Image" src="https://github.com/user-attachments/assets/06f5af41-d4f3-408b-a5ca-4712e5ab1551" />

#### 2. 메인 두번째 페이지

<img width="402" alt="Image" src="https://github.com/user-attachments/assets/5cad1dfc-a80f-4ec9-9c2e-4cb7faa7e357" />

#### 3. 메인 세번째 페이지

<img width="402" alt="Image" src="https://github.com/user-attachments/assets/0f4fdaf7-d729-457e-a220-6908b461c7f8" />

#### 4. 메인 네번째 페이지

![Image](https://github.com/user-attachments/assets/1e4673fa-878e-438b-b423-50bea970dbde)

1. 이미지 클릭 시 이미지 확대 팝업
2. 이미지 확대 팝업 하단에 썸네일 스크롤 추가
3. 팝업에 carousel 기능 추가

---

### 예식정보 페이지

#### 1. 전체 기능

![Image](https://github.com/user-attachments/assets/ba6e80c0-52b0-49b3-81fd-c653a22b6fcd)

🍀 주요 기능 🍀

- 탭 슬라이드로 일부 정보 변환
- 주소 복사 기능과 각 지도 플랫폼으로 주소 연결
- 교통편 정보 팝업

#### 2. 오시는 길 탭 정보 기능

- clipboard API를 사용해 복사하기 기능 구현

**_ ❌ document.execCommand()는 더 이상 사용을 권장하지 않는다해서 clipboard API를 사용했습니다 ❌_**

**_ 권장하지 않는 이유는 브라우저마다 일관성 없이 생성되기 떄문이라고 합니다. _**

clipboard API를 지원하는 브라우저는 익스플로어 빼고 모든 브라우저에서 일부 기능을 제외하고 기본적으로 지원하고 있습니다.

이 프로젝트에서 사용한 writeText는 익스플로어 빼고 모든 브라우저에서 지원하고 있습니다.

- 주소 복사 기능
  <img width="595" alt="Image" src="https://github.com/user-attachments/assets/45267aa4-962c-48ca-b041-1c34183706b9" />

- 지도 플랫폼 주소로 이동 기능

정해진 특정 위치로 각 지도 플랫폼에서 위치를 띄워줍니다.

<img width="545" alt="Image" src="https://github.com/user-attachments/assets/7a82cbcd-b05a-4097-90a1-aaf820093dad" />

---

### 로컬라이징 - KR, EN

<img width="49%" height="350px" alt="Image" src="https://github.com/user-attachments/assets/982f555d-3a46-43c6-a694-84c78b843715" />
<img width="49%" height="350px" alt="Image" src="https://github.com/user-attachments/assets/36bede19-5341-4dda-9cbd-874a08195431" />

상단 버튼을 통해 손쉽게 언어 변경이 가능하다.

---

서버를 사용하지 않았고, **Firebase**를 통해 웹페이지 배포를 하였습니다
