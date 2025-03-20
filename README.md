## 프로젝트 소개
![image](https://github.com/user-attachments/assets/c99ba26b-2ee5-41c0-bbca-e8680a26c7b1)

리그오브레전드 API를 이용하여 챔피언, 아이템목록들을 보여주고, 챔피언과 아이템 종류의 상세설명을 제공하는 사이트입니다. 

Next.js의 4자리 렌더링 기법(SSG, SSR, ISR, CSR)을 사용하여 각각의 페이지를 구성하였습니다.
TypeScript를 통해 작성되었으며, Vercel을 이용하여 배포하였습니다.


[리그오브레전드 배포사이트 보러가기 ](https://league-of-legends-beta.vercel.app/)

## 프로젝트 서비스
홈 - **챔피언 목록**, **아이템 목록**, **로테이션 챔피언 목록** 페이지 바로가기를 제공합니다.
챔피언목록 - 리그오브레전드가 서비스하는 170종의 챔피언들을 소개하는 페이지입니다.
아이템목록 - 리그오브레전드에서 사용되는 아이템의 종류와 상세설명을 제공하는 페이지입니다.
로테이션  - 매주 무료로 사용할 수 있는 챔피언 리스트를 제공하는 페이지입니다.


## 프로젝트 기능 소개
- **Next.js의 App Routing**을 사용하여 라우트를 설정하였습니다.
- **4가지 렌더링 기법 SSG(홈), SSR(챔피언 디테일), ISR(챔피언목록), CSR(로테이션)** 를 활용 하여 각각의 페이지를 구성하였습니다.
- **Zustan**를 이용하여 다크모드의 theme변수를 로컬스토리지에 저장하여 페이지를 이탈하여도 테마설정이 변경되지 않도록 합니다.
- **TailwindCSS**를 사용하여 반응형 디자인을 적용하였습니다.
- **Route Handler, Server Action**을 활용하여 API호출 하는 방법을 적용하여 클라이언트에서 API 정보를 노출하지 않도록 합니다.
- **tanstackQuery**를 이용하여 클라이언트 컴포넌트에서 사용할 data를 prefetch 적용하여 UX를 개선하였습니다.

## 트러블슈팅 및 아쉬운 점

### global-error handling - 반응없는 retry 버튼과 "use client"
https://forevero3o.tistory.com/54

Next.js의 error.tsx와 global-error.tsx는 React의 Error Boundary를 기반으로 동작한다.
그런데 React의 Error Boundary는 서버에서 실행되지 않고, 오직 클라이언트에서만 동작한다.
React 공식 문서에서도 Error Boundary에 대해 이렇게 설명하고 있다.
Error boundaries do not catch errors for server components. (Error Boundary는 서버 컴포넌트에서 발생하는 에러를 잡지 못합니다.)
즉, Next.js에서 error.tsx와 global-error.tsx가 서버 컴포넌트(SC)라면, React의 Error Boundary가 작동하지 않기 때문에 정상적으로 에러를 감지할 수 없습니다.

#해결방법
global-error는 server component(layout, template)의 에러를 감지하지만 layout이 서버렌더링에서 error가 발생한 에러를 처리하려면 똑같은 Server component여야 한다

-----

### Dark-mode 구현하기 -  next-themes를 활용한 다크모드 구현
https://forevero3o.tistory.com/56

dark-mode를 처음에 라이브러리 없이 구현하려고 zustand를 선언해서 전역으로 관리하고 localstorage를 이용해 브라우저를 종료하거나
사이트에 포커스를 두지 않을때에도 모드 정보를 유지하기위해 설계했다. 하지만 localstorage 함수가 서버에서는 존재하지않아서 
서버컴포넌트가 pre-render할 때 문제가 발생했다.

#해결방법
이 문제를 해결하기 위해서 next-themes를 사용하여 상태변수가 아닌 className을 통해 다크모드를 구현할 수 있었다.


## 프로젝트 구조 
```
📦 
├─ 
├─ public
└─ src
   ├─ app
   │  ├─ api
   │  ├─ champions
   │  │  └─ [id]
   │  ├─ items
   │  │  └─ [id]
   │  ├─ layout.tsx
   │  ├─ page.tsx
   │  ├─ providers.tsx
   │  ├─ global-error.ts
   │  └─ rotation
   │     ├─ RotationList.tsx
   │     ├─ error.tsx
   │     └─ page.tsx
   ├─ components
   │  ├─ ErrorCustom.tsx
   │  ├─ Loading.tsx
   │  ├─ champions
   │  ├─ items
   │  └─ layout
   ├─ constants
   ├─ style
   │  └─ fonts
   ├─ types
   └─ utils
```
