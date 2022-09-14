# ShoppingMallAPI

쇼핑몰 서비스 제공 API
<br><br>

## 📌 서비스 개요

- 본 서비스는 등급에 따른 유저가 상품을 입력/수정/조회/삭제할 수 있습니다.

  <br>

## 📌 요구사항 분석 및 구현

- 유저는 이용자와 관리자로 구분됩니다.
  - 관리자는 상품 및 결재, 주문을 입력/수정/삭제할 수 있습니다.
  - 이용자는 조회만 가능합니다. (회원가입, 결재, 주문을 할 수 없습니다.)
- 데이터베이스에는 회원관리, 상품관리, 결재관리, 주문내역등이 포함되어야 합니다.
- REST API에서 벗어난 Param 또는 요청 오류에 대한 응답처리를 해야합니다.
- 정보를 입력, 수정시에 데이터 형식의 유효성 검사를 수행합니다.

## 📌 DB 모델링

![store](https://user-images.githubusercontent.com/92367032/189810320-ea2ed977-2962-47aa-86f4-61bb46cee344.png)

## 📌 API 문서

https://app.swaggerhub.com/apis/ad105geppetto/ShoppingMallAPI/1.0.0

## 📌 적용 기술

- 사용언어 : Typescript
- 런타임 환경 : Node.js
- 프레임워크 : Express
- ORM : Sequelize
- 데이터베이스 : MySQL
  <br/> <br/>

## 📌 Commit Convention

- init : 초기화
- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
