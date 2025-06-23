# TimeTree 랜딩 페이지 클론 프로젝트

이 프로젝트는 [Next.js](https://nextjs.org/)와 [TypeScript](https://www.typescriptlang.org/)를 사용하여 제작된 TimeTree 앱의 랜딩 페이지 클론입니다. UI 컴포넌트는 [shadcn/ui](https://ui.shadcn.com/)를 활용하였고, 배포는 [Vercel](https://vercel.com/)을 통해 진행되었습니다.

## 🚀 배포 주소

아래 링크를 통해 배포된 페이지를 확인할 수 있습니다.

**[https://timetree-landing-page.vercel.app/](https://timetree-landing-page.vercel.app/)**

## ✨ 주요 기능 및 사용 기술

*   **Next.js**: React 프레임워크를 기반으로 효율적인 서버 사이드 렌더링과 정적 사이트 생성을 지원합니다.
*   **TypeScript**: 정적 타입을 지원하여 코드의 안정성과 가독성을 높입니다.
*   **Tailwind CSS**: 유틸리티-우선 CSS 프레임워크를 사용하여 빠르고 일관된 디자인 시스템을 구축했습니다.
*   **shadcn/ui**: 재사용 가능한 UI 컴포넌트 라이브러리를 활용하여 UI를 구성했습니다.
*   **Vercel**: CLI를 통해 간편하게 프로젝트를 배포하고 관리합니다.

## 🏁 시작하기

먼저, 이 프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따라주세요.

```bash
# 1. 저장소를 복제합니다.
git clone https://github.com/mroreeyo/timetree-LandingPage.git

# 2. 프로젝트 폴더로 이동합니다.
cd timetree-LandingPage

# 3. 필요한 패키지를 설치합니다.
npm install

# 4. 개발 서버를 실행합니다.
npm run dev
```

이제 브라우저에서 `http://localhost:3000`으로 접속하여 결과물을 확인할 수 있습니다.

---

## 🤖 Cursor AI 활용해서 제작

이 프로젝트는 **Cursor AI 에이전트**와의 페어 프로그래밍을 통해 **약 1시간 30분** 만에 완성되었습니다. 아이디어 구상부터 코드 작성, 디버깅, 배포까지 전 과정에 AI를 활용하여 생산성을 극대화했습니다.

### 주요 사용 기능

- **Chat (채팅)**: 프로젝트의 전체적인 방향을 논의하고, 복잡한 작업을 지시하며, 에러 해결을 위한 디버깅을 진행하는 등 대부분의 작업을 채팅을 통해 수행했습니다.
- **File System Tools (`read_file`, `edit_file`)**: AI가 직접 프로젝트 파일을 읽고 분석하여 필요한 코드를 수정하거나 새로운 코드를 작성했습니다.
- **Terminal (`run_terminal_cmd`)**: `npm install`, `git` 명령어, `vercel` CLI 실행 등 터미널에서 필요한 모든 명령을 AI가 직접 실행하여 개발 환경을 설정하고 배포를 자동화했습니다.
- **Web Search (`web_search`)**: 프로젝트 초기 단계에서 TimeTree 앱의 기능과 브랜딩을 파악하기 위해 웹 검색을 활용했습니다.

### AI 가이드라인 설정 (`.cursorrules`)

프로젝트의 일관성을 유지하고 AI가 정해진 규칙 내에서 작업하도록 `.cursorrules` 파일을 작성하여 다음과 같은 가이드라인을 설정했습니다.

> - **ShadCN Components**: 모든 UI 컴포넌트는 `shadcn/ui`를 사용하고, 지정된 명령어로 설치해야 합니다.
> - **Icons**: 모든 아이콘은 `lucide-react`를 사용해야 합니다.
> - **Component Structure**: 컴포넌트는 정해진 디렉토리 구조에 맞게 위치해야 합니다.
> - **Best Practices**: TypeScript 타입을 반드시 정의하고, 재사용 가능한 컴포넌트로 설계해야 합니다.

### 요구사항 정의 (PRD) 및 프롬프팅 과정

별도의 PRD 문서 대신, 초기 프롬프트를 기반으로 대화를 통해 요구사항을 구체화하는 방식으로 프로젝트를 진행했습니다.

1.  **초기 프롬프트 (PRD)**: `"timetree 어플 랜딩페이지 개발해줘"` 라는 간단한 아이디어로 시작했습니다.
2.  **리서치 및 계획 수립**: AI가 웹 검색을 통해 TimeTree의 특징을 분석하고, 이를 바탕으로 랜딩 페이지의 구조(Hero, Features, Testimonials 등)를 설계했습니다.
3.  **점진적 구현**: 각 섹션별로 UI 구현을 지시하고, 필요한 shadcn/ui 컴포넌트 설치부터 코드 작성까지 AI가 모두 처리했습니다.
4.  **디버깅 및 리팩토링**: `next build` 시 발생한 ESLint 에러를 AI가 스스로 분석하고, 사용하지 않는 변수 제거 및 코드 수정을 통해 문제를 해결했습니다.
5.  **배포 및 문서화**: Vercel CLI 명령어를 통해 배포를 진행하고, 이 `README.md` 파일 역시 AI와의 대화를 통해 최종적으로 작성되었습니다.
