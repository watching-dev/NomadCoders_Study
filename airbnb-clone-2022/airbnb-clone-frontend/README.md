# airbnb-clone-frontend

23.10.25 시작

---

> 오랜만에 pull 받거나 뭔가 꼬여서 안된다 그러면 아래처럼 다시 해야함(순서 다시 수정)

> package.json, package-lock.json, node_modules 폴더 삭제 후(이래도 안되면 tsconfig.json 까지 삭제)

> > 이건 아닌듯 ~~(리액트 설치) -> npx create-react-app airbnb-clone-frontend --template=typescript~~

> > > (chakra-ui 설치) -> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

> > > > (react-router-dom 설치) -> npm i react-router-dom

> > > > > (아이콘 설치) -> npm install react-icons --save

> > > > > > (axios 설치) -> npm i axios

> > > > > > > (react query 설치) -> npm i @tanstack/react-query -> 아래 5.8.2 먼저 설치

> > > > > > > (["rooms"], getRooms) 에러 나오면 4버전 설치 필요

> > > > > > > (패키지 설치 정보 / 버전 보기) -> npm ls

> > > > > > > (패키지 삭제) -> npm uninstall @tanstack/react-query

> > > > > > > > (Tanstack Devtools v4버전에서 설치 불가 5.8.2 버전 설치 필요) -> npm i @tanstack/react-query@^5.8.2

> > > > > > > > > (Tanstack Devtools 설치) -> npm i @tanstack/react-query-devtools

> > > > > > > > > > (react-scripts 설치) -> npm i -save react-scripts  
> > > > > > > > > > 아래는 무시함, 할 필요 없음 해도 똑같은거 계속 반복됨  
> > > > > > > > > > 8 vulnerabilities (2 moderate, 6 high)  
> > > > > > > > > > To address all issues, run:  
> > > > > > > > > > npm audit fix / 또는 (npm audit fix --force) 근데 무시, 할 필요 없음 해도 똑같은거 계속 반복됨

> > > > > > > > > > > (js-cookie 설치) -> npm i js-cookie

> > > > > > > > > > > (타입 관련 설치) -> npm i --save-dev @types/js-cookie

> > > > > > > > > > > > (서버 시작하면 나오는 에러 수정 설치) -> npm i --save-dev @types/react

> > > > > > > > > > > > (서버 시작하면 나오는 에러 수정 설치) -> npm i --save-dev @types/react-dom

> > > > > > > > > > > > package.json에서 dependencies 뒤에 아래 추가하고 저장

,  
"scripts": {  
"start": "react-scripts start"  
},  
"browserslist": {  
"production": [
">0.2%",
"not dead",
"not op_mini all"
],  
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]  
},

> > > > > > > > > > > > > (패키지 삭제) -> npm uninstall @tanstack/react-query

> > > > > > > > > > > > > > (4버전중 최신 버전 설치) -> npm install @tanstack/react-query@^4

> > > > > > > > > > > > > > > > npm run start

---

> +++

> 필요 사이트
> https://chakra-ui.com/getting-started

> https://velog.io/@j1min/Vscode-Prettier-%EC%A0%81%EC%9A%A9-%EC%95%88%EB%90%A8-%EA%B3%A0%EC%B9%98%EB%8A%94%EB%B2%95

> https://react-icons.github.io/react-icons

`필요한 정보들 작성`

> +++

> node -v 로 확인, 노드 설치되어 있어야 함(현재 20.7.0)

> > react 설치

> > > npx create-react-app airbnb-clone-frontend --template=typescript

> > > > y 엔터 -> 설치(좀 걸림) -> 폴더 다시 새로 생겨서 기존 폴더로 옮김

> +++

> 리액트 초기 세팅(삭제할거 삭제)

>

> > chakra-ui 설치

> > > npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

> > > > react-router-dom 설치

> > > > > npm i react-router-dom

> > > > > > npm run start

> +++

> 아이콘 설치

> > npm install react-icons --save

> +++

> Not Found 또는 file 어쩌고 런타임 에러 뜨는 분들은

> > http://127.0.0.1:8000/admin 에서 로그인, photos -> photo 추가 누른다음

> > > File 에 airbnb 이미지 주소넣고 잊지말고!! Room 선택!!

> +++

> Tanstack Query(react query) 설치

> > npm i @tanstack/react-query

> +++

> (["rooms"], getRooms) 에러 해결 방법

> 문제는 @tanstack/react-query 버전이 v5 라서 그런거

> 현재 (23.11.09) 에러 해결 안돼서 댓글에 되어 있는것 처럼 v4 설치 - 지금 최신 버전은 어제 published 된 latest:5.8.1 임

> > (패키지 설치 정보 / 버전 보기) -> npm ls

> > > (패키지 정보보기) -> npm view @tanstack/react-query 또는 npm show @tanstack/react-query

> > > > (패키지 삭제) -> npm uninstall @tanstack/react-query

> > > > > (4버전중 최신 버전 설치) -> npm install @tanstack/react-query@^4

> +++

> axios 설치(fetch 도와줌)

> > npm i axios

> +++

> Tanstack Devtools 설치(쿼리 시각화)

> > npm i @tanstack/react-query-devtools

> > > (Tanstack Devtools 4버전에서 설치 불가) -> npm i @tanstack/react-query@^5.8.2 버전 설치 필요

> > > > react-query 삭제하고 Tanstack Devtools 설치한다음 다시 react-query 삭제하고 4버전 설치

> > > > > 이렇게 안하면 에러

> +++

> js cookie 설치

> > npm i js-cookie

> > > (타입 관련 설치) -> npm i --save-dev @types/js-cookie
