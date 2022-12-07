# React로 TodoList 만들기
### 2022.12.05 ~
- React로 TodoList 만들기
- 내일배움캠프 4기 리액트 입문과정 개인 과제
<br>
<br>

## 사용한 기술 스택  
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<br>
<br>

## Features
1. todo 추가하기
	- 제목/내용 입력 후 [추가하기] 버튼 클릭하면 추가
	- todo 추가 후 제목/내용 input은 다시 빈 값으로 바뀌도록 구성
2. todo 삭제하기
	- 삭제 버튼 클릭하면 todo 삭제
3. todo 완료-진행중 상태변경하기
	- 완료-취소 버튼 toggle : isDone 상태가 true이면 label=취소 / false이면 label=완료
4. Working 이면 위쪽 / Done 이면 아래쪽에 위치
5. Layout 최대 넓이 1200px / 최소 넓이 800px (전체 화면 가운데 정렬)
6. 분리한 컴포넌트를 ReadMe에 정리
<br>
<br>

## Error Log
1. Todo 추가 시, 제목+내용 input 내용이 list에 나오지 않는 오류 발생
![화면 캡처 2022-12-07 102008](https://user-images.githubusercontent.com/95006849/206065033-b48c44e1-4ec9-4560-bb63-3e4bed8b33bc.png)
<br>event.target : target 속성은 이벤트가 발생한 대상 객체를 가리킨다
<br>=> e.target을 존재하지 않는 속성을 넣어서 아예 작동이 되지 않았다. (value_title은 내가 멋대로 만들어냈기 때문에 event가 발생하지 않는다.
<br>=> event.target & 구조 분해 할당에 대한 부족한 이해 때문에 발생한 오류 (해결 완료!)

- 이벤트 발생 과정
1. 지정된 event target(html 요소)에
2. 지정된 event type이 발생하면
3. 지정된 event handler가 실행된다

- 구조 분해 할당 : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
<br>
2. 완료 버튼 클릭 시, 아무일도 일어나지 않는 오류 발생 <br>
- 조건문 추가하지 않아서 생기는 오류였다. <br>

```javascript
<button className="done" onClick={() => onToggle(id)}>
          {check ? <>취소</> : <>완료</>}
 </button>
```
