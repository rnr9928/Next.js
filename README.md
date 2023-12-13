# Next.js를 이용한 간단한 CRUD 게시판 만들기

## 프로젝트 생성
```bash
npx create-next-app@latest .
```

## 프로젝트 실행
```bash
npm run dev
```

## 백엔드 설정
백엔드는 json-server로 간단하게 구현합니다.
```bash
npx json-server --port 9999 --watch db.json
```

## 폴더 구조
```
src\
  app\ (루트폴더)
    layout.js 
    page.js
    create  // 글 생성
    read    // 작성한 글 보여주기
    update  // 수정
    Control.js  // 삭제 버튼
```

## 컴포넌트 사용
- 사용자와 상호작용하는 기능은 **클라이언트 컴포넌트**를 사용합니다.
- 정보를 보여주는 기능은 **서버 컴포넌트**를 사용합니다.
- Next.js는 기본적으로 서버 컴포넌트를 사용합니다.
- useEffect, useState같은 클라이언트 컴포넌트를 사용하려면, 파일 맨위에 "use client"를 추가합니다.

## Link 태그 사용 이유
- `<a>` 태그를 사용하여 링크를 연결하면, 링크를 클릭했을 때 바뀌는 페이지 외의 변화가 없는 layout 부분들도 처음부터 끝까지 요청해서 다운로드를 받게됩니다.
- `<Link>` 태그를 사용하면, 이동하려는 페이지만 요청이 들어갑니다.
- 이미 들어간적이 있는 페이지면 다운로드 받지않고 바로 렌더링됩니다. (Single Page Application 특성)

## cache
- fetch 명령어를 사용하면, Next.js는 기본적으로 한번 가져온 정보를 저장합니다.

## 환경변수 설정
- `.env.local` 파일을 생성합니다. 
- ex)  API_URL=http://localhost:9999/
- fetch('http://localhost:9999/') -> fetch(process.env.API_URL)
- 이러한 형식은 보안상 문제로 서버 컴포넌트만 적용됩니다

- 클라이언트 컴포넌트에도 적용시키려면 앞에 `NEXT_PUBLIC`을 추가합니다. 
(예: fetch(process.env.NEXT_PUBLIC_API_URL))