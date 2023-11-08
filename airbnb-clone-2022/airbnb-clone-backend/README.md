# airbnb-clone-backend

23.09.16 시작  
(이전 리포지토리 꼬여서 삭제 후 복원)

---

> 오랜만에 pull 받거나 뭔가 꼬여서 안된다 그러면 아래처럼 다시 해야함(순서 다시 수정)

> 깃에서 새로 받아서 다시 할때는 poetry.lock, pyproject.toml 삭제 후(db.sqlite3 있으면 이것도 삭제)

> > poetry init -> enter x4 -> 라이센스는 MIT -> enter -> no x2 -> 마지막은 yes

> > > (가상환경에 들어가서 장고 시작) -> poetry shell

> > > > poetry add django -> (장고 설치)

> > > > > (image를 가져오기 위해서 pillow 설치) -> poetry add pillow

> > > > > > (장고 레스트 프레임워크 사용) -> poetry add djangorestframework

> > > > > > > (토큰 사용) -> poetry add pyjwt

> > > > > > > > (.env 파일 읽는거 도와주기 위해) -> poetry add django-environ

> > > > > > > > > (서버에서 fetch 가능 하도록 하기 위해) -> poetry add django-cors-headers

> > > > > > > > > > (에러가 나고 admin 페이지에 접속 안될텐데 마이그레이션\_db의 state 변경 해야해서 그럼) -> control + c 로 서버 끄고 -> python manage.py migrate -> (만약 안된다면 마이그레이션, 디비 다 삭제하고) -> python manage.py makemigrations -> python manage.py migrate

> > > > > > > > > > > (admin 페이지 로그인 하려면 슈퍼 유저 만들어야함) -> python manage.py createsuperuser -> user name, email 그냥 엔터x2 -> 비밀번호는 그냥 123456 -> y

> > > > > > > > > > > > 이 순서로 해야 정상 작동함(물론 기존 파일과 다른점 있는지는 확인 해야함) / 데이터 베이스는 깃에 없으니 다시 슈퍼유저 만들어야 하는거고!

> > > > > > > > > > > > > (서버 시작 - poetry shell 로 가상환경에서 시작해야함) -> python manage.py runserver

---

`필요한 정보들 작성`

> +++

> ~~https://python-poetry.org/ 에서 가상환경인 poetry 설치 -->> (하지만 안됨.. // zsh: command not found: poetry // 인텔맥이라 안되나?)~~

> > 프로젝트 폴더로 들어와서 터미널에 brew install poetry 로 설치

> > > poetry init -> enter x4 -> 라이센스는 MIT -> enter -> no x2 -> 마지막은 yes

> > > > poetry add django -> (장고 설치)

> > > > > (가상환경에 들어가서 장고 시작) -> poetry shell

> > > > > > django-admin -> (으로 장고 시작)

> > > > > > > (가상환경 나가려면) -> exit

> > > > > > > > (장고 프로젝트 생성) -> django-admin startproject config . -> (현재 폴더에 장고 프로젝트 생성 / 마지막에 .(점) 있는것 확인!!)

> +++

> (서버 시작 - poetry shell 로 가상환경에서 시작해야함) -> python manage.py runserver

> > (에러가 나고 admin 페이지에 접속 안될텐데 마이그레이션\_db의 state 변경 해야해서 그럼) -> control + c 로 서버 끄고 -> python manage.py migrate

> > > (admin 페이지 로그인 하려면 슈퍼 유저 만들어야함) -> python manage.py createsuperuser -> user name, email 그냥 엔터x2 -> 비밀번호는 그냥 123456 -> y

> +++

> (애플리케이션 시작\_houses 이름의 앱 시작) -> python manage.py startapp houses

> > (모델 설정 후 앱에 모델 등록) -> config -> settings.py -> INSTALLED_APPS -> 모델명.apps.모델명Config 입력 후 저장하면 인식 됨

> > > (admin에 모델을 연동하면 마이그레이션이 필요함) -> python manage.py makemigrations

> > > > (마이그레이션\_이전에도 했었음) python manage.py migrate

> +++

> (비주얼 스튜디오 코드 extension) -> pylance 설치 (장고 자동으로 찾아줌)

> > (비주얼 스튜디오 코드 장고 에러 뜨는건 우하단에 Python 옆 버전 누르면 선택된 인터프리터 열리는데) -> poetry 환경 보일텐데 눌러서 연결 -> 에러 사라짐

> > > (파이썬 자동 수정해주는 extension) Black formatter 라고 있는데, deprecated 됐다는 말이 있던데.., 우선 자동으로 설치 안내는 없었고 -> 검색하니까 뜨네(ms 꺼) -> 일단 설치해봄

> +++

> (장고의 user를 상속받는 우리만의 user 생성) -> python manage.py startapp users

> > (기존 계정을 만들었으면 데이터베이스, 마이그레이션 삭제 후) -> python manage.py makemigrations

> > (기존에 수정한 모델들이 다시 만들어지면) -> python manage.py migrate

> > > (데이터가 날라갔으니 이제 다시 슈퍼유저 추가) -> python manage.py createsuperuser

> +++

> (models.py 를 수정하면 마이그레이션을 해야함, 왜냐하면 파이썬 코드에 있는 모델 구조와 데이터 베이스의 구조를 동기화 해야하기 때문)

> > python manage.py makemigrations -> python manage.py migrate

> > > (default 값이 필요한 데이터 베이스가 있으면*기존에 사용자 데이터가 등록되어 있는데 새로운 column을 추가 하는 경우 처럼* 마이그레이션할때 에러를 보일것임, 해결: 1. 기존 값에 null을 넣을것이냐*boolean은 불가능 하니 null=True 처럼* 2. 코드 상에서 default 값을 지정해 줄것이냐\_default=False)

> > > > (fieldsets 는 tuple 로 되어 있어야 함)

> +++

> (image를 가져오기 위해서 pillow 설치) -> poetry add pillow

> +++

> (파이썬 코드로 데이터 베이스 다이렉트로 컨트롤) -> python manage.py shell -> (개발 하는것처럼 작성) -> from rooms.models import Room -> enter -> Room.Objects.all() -> (방 데이터 출력함)

> +++

> (장고 레스트 프레임워크 사용) -> poetry add djangorestframework

> +++

> PostMan 사용 방법

> 토큰 생성

> > post / http://127.0.0.1:8000/api/v1/users/token-login -> Body에 -> raw 선택 -> Json 선택 -> {"username":"admin", "password":"123"} 입력 -> Send -> Token 생성을 결과로 볼 수 있음 -> 복사

> 토큰으로 프로필 보기

> > get / http://127.0.0.1:8000/api/v1/users/me -> Header에 -> key 에 -> Authorization 입력 -> value 에 -> Token 입력하고 한칸 띄우고 위에서 복사한 토큰 붙여넣기 -> Token 989c365928277ec17367cfad1d2896ace95a09d2 -> Send -> 내 프로필을 결과로 볼 수 있음

> +++

> pyjwt 설치

> poetry add pyjwt

> +++

> django-environ 설치

> poetry add django-environ

> +++

> JWT 사용하려면 수동으로 구현보다는 Simple JWT, 토큰 인증을 사용하고 싶으면 django-rest-knox 추천

> +++

> .env에 SECRET_KEY 저장하고 config -> settings에서 SECRET_KEY = env("SECRET_KEY") 하면

> > runserver 튕기고 에러 뜸

> > 이럴때 .env 파일에서 SECRET_KEY="key" 처럼 = 사이에 스페이스가 없어야함

> > > 수정하고 다시 runserver 하면 정상 작동

> +++

> test 방법

> 기존 제공하는 테스트 보다 rest_framework 에서 제공하는 테스트 사용

> 함수 이름은 반드시 test 로 시작해야 테스트 가능

> python manage.py test

> +++

> test 폴더/파일 로 해서 작은 단위로 만들어 테스트 하는법

> tests 디렉토리 생성

> > \_\_init\_\_.py 생성(그래야 장고가 해당 디렉토리를 패키지로 인식함) -> \_ 에서 \ 지워야함

> > > test\_원하는 이름(앞에 꼭 먼저 test가 붙어야함, 안붙으면 장고가 해당 파일을 못찾음) -> test\_ 에서 \ 지워야함

> > > > 기존 tests.py 에서 작성하듯이 테스트 코드 작성

> > > > > 기존 tests.py 파일 삭제

> +++

> 서버에서 fetch할 수 있도록 허용해줘야 CORS(fetch 거부) 에러 해결 가능

> > poetry add django-cors-headers
