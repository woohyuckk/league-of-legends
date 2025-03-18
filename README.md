## 프로젝트 소개
![image](https://github.com/user-attachments/assets/c99ba26b-2ee5-41c0-bbca-e8680a26c7b1)

리그오브레전드 API를 이용하여 챔피언, 아이템목록들을 보여주고, 챔피언과 아이템 종류의 상세설명을 제공하는 사이트입니다. 

Next.js의 4자리 렌더링 기법(SSG, SSR, ISR, CSR)을 사용하여 각각의 페이지를 구성하였습니다.
TypeScript를 통해 작성되었으며, Vercel을 이용하여 배포하였습니다.




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
- **Route Handler, Server Action**을 활용하여 API호출 하는 방법을 적용했습니다.

## 트러블슈팅 및 아쉬운 점


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
