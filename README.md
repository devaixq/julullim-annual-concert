# 2026 줄울림 정기공연

React + Vite 기반 모바일 셋리스트 및 가사 사이트.

```sh
npm ci
npm run dev
```

- 곡 제목, 원곡자, 가사, 공연자: `src/data/songs.js`
- 상단 포스터: `src/App.jsx`
- 메인 및 상세페이지 스타일: `src/App.css`, `src/index.css`
- 이미지: `public/`

여러 줄의 가사는 백틱으로 감싸서 입력합니다.

```js
lyrics: `첫 줄
다음 줄`,
```

빌드: `npm run build` (결과: `dist/`).
Vercel 빌드 설정은 `vercel.json`으로 관리합니다.
GitHub main 브랜치에 반영하면 연결된 Vercel 프로젝트가 자동 배포합니다.
