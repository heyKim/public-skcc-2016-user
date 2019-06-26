# Node Backend :sparkles:  

### 작업환경
* Nodejs LTS 버전 설치
* maria db 설치 (10.2.24)
  * 설치시 utf-8 encoding 체크박스 선택
  * maria db는 버전에 따라서 쿼리가 달라진다니깐 미리 맞추는게 좋을 듯ㅠ

### 작업내용
#### 완료 내용
* 로그인, 회원가입 기능 완료
* 공연장 리스트 보기 기능 초안 완료
#### To-do List
* 공연장 신청 기능

### API 호출 가이드
* 로그인
- URL: http://localhost:3005/login  
- Method: Post
- parameter: userId, userPassword 

* 회원가입
- URL: http://localhost:3005/user
- Method: Post
- parameter: userId, userPassword, userName, phoneNum 

* 공연장 리스트 조회
- URL: http://localhost:3005/concert
- Method: Get

* 특정 공연장 조회
- URL: http://localhost:3005/concert/:concertId
- Method: Get
- concertId를 get parameter로 주면되용 http://localhost:3005/concert/1요런식으로!
