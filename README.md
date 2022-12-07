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
- UI 구현하기 (1206 완료)
- Todo 추가 하기 (1206 input이 하나이면 추가 가능 / 제목+내용 시 추가 X)
- Todo 삭제 하기 (1206 완료)
- Todo 완료 상태 변경하기 (완료 ↔ 진행중)
<br>
<br>

## Requirements
1. 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
2. Todo의 **isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료`** 로 조건부 렌더링 해주세요.
3. Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현합니다.
4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.
5. **컴포넌트 구조는 자유롭게 구현해보세요.**
    - 반복되는 컴포넌트를 찾아서, 직접 컴포넌트를 분리해보시고, 분리한 컴포넌트를 `README`에 작성합니다.


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

- 구조 분해 할당
배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
