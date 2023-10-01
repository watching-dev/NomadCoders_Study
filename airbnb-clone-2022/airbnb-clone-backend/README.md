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