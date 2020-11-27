# ISBN만으로 빠르게 북서치하기

## Todo

- [x] Input 구현해서 ISBN 파싱하기
- [x] 국가자료종합목록(KOLIS NET) API 구현하기 --> https://nl.go.kr/kolisnet/index.do
  - [x] 필요데이터 (등록번호,ISBN, 제목, 저자, 출판사, 출판년도, 분류기호, 청구권차)
  - [x] API로 받아온 자료 관리하기 (저장) --> local storage 활용
  - [] 데이터 수정하기
  - [] 자동으로 재렌더링 하기 (useEffect 활용)
- [x] csv 파일로 자료 받기
- [] 스타일링하기

API ex) https://nl.go.kr/kolisnet/openApi/open.php?&collection_set=1&gubun1=ISBN&code1=9791195215713
