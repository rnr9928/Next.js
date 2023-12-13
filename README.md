Next를 이용한 간단한 CRUD 게시판 만들어보기


명령어 
npx create-next-app@latest .

실행 명령어
npm run dev

백엔드는 json-server로 간단하게 구현
명령어
npx json-server --port 9999 --watch db.json

.폴더구성
src\app (루트폴더)(layout.js , page.js)
create  글생성
read    작성한거 보여주기 
update 수정
Control.js 삭제버튼


----------------------------------------------------------------------------------------------------
'사용자와 상호작용하는 기능은 클라이언트 컴포넌트 사용'
'정보를 보여주는 기능은 서버 컴포넌트 사용'

next는 기본적으로 서버컴포넌트를 사용
useEffect, useState같은 클라이언트 컴포넌트를 사용하려면
맨위에 "use client" 추가
----------------------------------------------------------------------------------------------------


# Link태그를 사용하는 이유

a 태그를 사용하여 링크를 연결하면  
링크를 클릭했을때 바뀌는 페이지 외의 변화가 없는 layout 부분들도
처음부터 끝까지 요청해서 다운로드를 받게된다

link태그를 사용하면
이동하려는 페이지만 요청이 들어간다
이미 들어간적이 있는 페이지면 다운로드 받지않고 바로 렌더링 된다
=> Single Page Application이 된다

(지금 개발환경에서는 미리 데이터를 읽어오는 prefetch 기능이 작동하지 않는다
배포판에서 실행하면 잘 적용됨
)


# cache
fetch 명령어를 사용하게되면
next.js는 기본적으로 한번 가져온 정보를 저장함

# 환경변수 설정

.env.local 파일 생성
ex)  API_URL=http://localhost:9999/
fetch('http://localhost:9999/') -> fetch(process.env.API_URL)

주의

보안문제로 서버컴포넌트만 적용

클라이언트컴포넌트도 적용시킬려면 앞에 NEXT_PUBLIC 추가

fetch(process.env.NEXT_PUBLIC_API_URL)


