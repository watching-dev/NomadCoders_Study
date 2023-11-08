# airbnb-clone-frontend

23.10.25 시작

---

> 오랜만에 pull 받거나 뭔가 꼬여서 안된다 그러면 아래처럼 다시 해야함(순서 다시 수정)

> (아직 확실치 않은데 진짜 안되면) package.json, package-lock.json 삭제 후(이래도 안되면 tsconfig.json 까지 삭제)

> > (리액트 설치) -> npx create-react-app airbnb-clone-frontend --template=typescript

> > > (chakra-ui 설치) -> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

> > > > (react-router-dom 설치) -> npm i react-router-dom

> > > > > (아이콘 설치) -> npm install react-icons --save

> > > > > > npm run start

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
