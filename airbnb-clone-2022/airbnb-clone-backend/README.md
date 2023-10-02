# airbnb-clone-backend
23.09.16 시작  
(이전 리포지토리 꼬여서 삭제 후 복원)

***

`필요한 정보들 작성`

> https://python-poetry.org/ 에서 가상환경인 poetry 설치 -->> (하지만 안됨.. // zsh: command not found: poetry // 인텔맥이라 안되나?)

>> 프로젝트 폴더로 들어와서 터미널에 brew install poetry 로 설치

>>> poetry init -> enter x4 -> 라이센스는 MIT -> enter -> no x2 -> 마지막은 yes

>>>> poetry add django -> (장고 설치)

>>>>> (가상환경에 들어가서 장고 시작) -> poetry shell

>>>>>> django-admin -> (으로 장고 시작)

>>>>>>> (가상환경 나가려면) -> exit

>>>>>>>> (장고 프로젝트 생성) -> django-admin startproject config . -> (현재 폴더에 장고 프로젝트 생성 / 마지막에 .(점) 있는것 확인!!)

***

> (서버 시작 - poetry shell 로 가상환경에서 시작해야함) -> python manage.py runserver

>> (에러가 나고 admin 페이지에 접속 안될텐데 마이그레이션_db의 state 변경 해야해서 그럼) -> control + c 로 서버 끄고 -> python manage.py migrate

>>> (admin 페이지 로그인 하려면 슈퍼 유저 만들어야함) -> python manage.py createsuperuser -> user name, email 그냥 엔터x2 -> 비밀번호는 그냥 123456 -> y

***

> (애플리케이션 시작_houses 이름의 앱 시작) -> python manage.py startapp houses

>> (모델 설정 후 앱에 모델 등록) -> config -> settings.py -> INSTALLED_APPS -> 모델명.apps.모델명Config 입력 후 저장하면 인식 됨

>>> (admin에 모델을 연동하면 마이그레이션이 필요함) -> python manage.py makemigrations

>>>> (마이그레이션_이전에도 했었음) python manage.py migrate

***

> (비주얼 스튜디오 코드 extension) -> pylance 설치 (장고 자동으로 찾아줌)

>> (비주얼 스튜디오 코드 장고 에러 뜨는건 우하단에 Python 옆 버전 누르면 선택된 인터프리터 열리는데) -> poetry 환경 보일텐데 눌러서 연결 -> 에러 사라짐

>>> (파이썬 자동 수정해주는 extension) Black formatter 라고 있는데, deprecated 됐다는 말이 있던데.., 우선 자동으로 설치 안내는 없었고 -> 검색하니까 뜨네(ms 꺼) -> 일단 설치해봄