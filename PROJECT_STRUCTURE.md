# 카공여지도 프로젝트 구조

## 기술 스택
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: (선택: SQLite + Prisma 또는 JSON 파일 기반 초기 MVP)
- **Map API**: 카카오맵 API
- **Deployment**: Vercel (권장)

## 폴더 구조

```
cafe-map/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 홈 페이지 (카페 목록 + 지도)
│   ├── cafe/
│   │   └── [id]/
│   │       └── page.tsx         # 카페 상세 페이지
│   └── api/
│       ├── cafes/
│       │   ├── route.ts         # 카페 목록 API
│       │   └── [id]/
│       │       └── route.ts    # 카페 상세 API
│       └── reviews/
│           └── route.ts         # 리뷰 작성 API
├── components/                   # 재사용 가능한 컴포넌트
│   ├── ui/                      # 기본 UI 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Filter.tsx
│   │   └── Tag.tsx
│   ├── cafe/
│   │   ├── CafeCard.tsx         # 카페 목록 카드
│   │   ├── CafeDetail.tsx       # 카페 상세 정보
│   │   └── CafeMap.tsx          # 지도 컴포넌트
│   └── review/
│       ├── ReviewForm.tsx       # 리뷰 작성 폼
│       └── ReviewList.tsx       # 리뷰 목록
├── lib/                          # 유틸리티 및 헬퍼 함수
│   ├── api/
│   │   └── kakao-map.ts         # 카카오맵 API 클라이언트
│   ├── data/
│   │   └── cafes.ts             # 초기 카페 데이터 (JSON)
│   └── utils/
│       ├── filters.ts            # 필터 로직
│       └── location.ts           # 위치 관련 유틸리티
├── types/                        # TypeScript 타입 정의
│   ├── cafe.ts                   # 카페 타입
│   └── review.ts                 # 리뷰 타입
├── public/                       # 정적 파일
│   └── data/
│       └── initial-cafes.json   # 초기 카페 데이터 (50개)
├── styles/                       # 글로벌 스타일
│   └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 필요한 라이브러리 목록

### 필수 라이브러리
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.2.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### 카카오맵 연동
```json
{
  "@types/kakao.maps.d.ts": "타입 정의 필요 (또는 직접 작성)"
}
```

### 데이터 관리 (MVP 단계)
- **옵션 1**: JSON 파일 기반 (가장 간단)
  - 추가 라이브러리 불필요
  - 파일 시스템 읽기/쓰기로 구현

- **옵션 2**: SQLite + Prisma (확장성 고려)
```json
{
  "prisma": "^5.0.0",
  "@prisma/client": "^5.0.0"
}
```

### 유틸리티 (선택)
```json
{
  "date-fns": "^2.30.0",           // 날짜/시간 포맷팅
  "clsx": "^2.0.0",                // className 유틸리티
  "zod": "^3.22.0"                 // 데이터 검증 (API 요청/응답)
}
```

## 주요 디렉토리 설명

### `/app`
- Next.js 14 App Router 기반 페이지 라우팅
- `page.tsx`: 각 라우트의 페이지 컴포넌트
- `api/`: API 라우트 핸들러

### `/components`
- 재사용 가능한 UI 컴포넌트
- `ui/`: 기본 UI 요소 (Button, Filter 등)
- `cafe/`: 카페 관련 컴포넌트
- `review/`: 리뷰 관련 컴포넌트

### `/lib`
- 비즈니스 로직 및 유틸리티 함수
- 외부 API 클라이언트
- 데이터 처리 로직

### `/types`
- TypeScript 타입 정의
- 공통으로 사용되는 인터페이스

## 초기 데이터 구조

### 카페 데이터 (50개)
- 위치: 강남, 홍대 지역
- 기본 정보: 이름, 주소, 좌표, 운영시간
- 특징: 콘센트 유무, 조용함 정도, 주차 가능 여부 등

### 리뷰 데이터 (100개)
- 태그 기반 리뷰
- 시간대별 혼잡 경향 정보

