# Cryto-tattoo 서비스 front단 코드입니다

[사이트 바로가기](cryto-tatto-front.vercel.app)

## 사용기술

1. styled-components
2. recoil

---

## 폴더구조

- assets : 이미지, 비디오, json 파일 등
- components : 페이지 구성 컴포넌트 관리
- pages : 페이지 단위의 컴포넌트 폴더로 구성
- styles : 글로벌 css
- services : 비즈니스 로직을 분리할 때 사용
- utils : 상수나 공통 함수
- hooks: 커스텀 훅
- recoil : recoil 전역(지역) state 관리

---

### atomic 디자인 패턴 일부 차용 => components에 적용

#### atom

- 최소 기능
- 복잡한 로직일 경우 atom으로 분리하여 관리

#### block

- atom 또는 style이 더해진 컴포넌트들이 합쳐져 사람이 기능으로 받아들일 수 있는 단계
- 기본 태그 사용 x => 위계를 맞추기 위함

#### template

- 데이터를 제외하고는 page를 다 구성한 단계

#### 커밋 유형

- FEAT : 새로운 기능의 추가
- FIX: 버그 수정
- DOCS: 문서 수정
- STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- REFACTOR: 코드 리펙토링
- TEST: 테스트 코트, 리펙토링 테스트 코드 추가
- CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

##### 주의사항

단순히 분리시키기 위해 컴포넌트의 기능을 알기 힘들게 하지 말것
내려주는 props나 컴포넌트의 이름, 함수로 그 컴포넌트의 기능을 확실히 알 수 있도록 해야한다.

---
