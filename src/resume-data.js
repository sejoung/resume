// 이력서 데이터 설정
// 이 파일을 수정하여 자신의 이력 정보를 입력하세요

export const RESUME_DATA = {
    // 기본 정보
    profile: {
        name: "김세중(Beni Kim)",
        title: "개발자",
        careerYears: 20,
        email: "sejoung@gmail.com",
        github: "github.com/sejoung",
        linkedin: "linkedin.com/in/sanaes",
        skills: ["JavaScript", "Java", "Kotlin", "Python", "AWS", "Docker", "Vue.js"]
    },

    // 체크포인트 - 게임에서 특정 위치에 도달했을 때 표시될 정보
    // worldX: 게임 월드에서의 X 위치 (픽셀)
    checkpoints: [
        {
            worldX: 500,
            type: "intro",
            icon: "👋",
            title: "소개",
            content: "" // 나중에 초기화됨
        },
        {
            worldX: 1200,
            type: "experience",
            icon: "💼",
            title: "주니어 개발자 시절",
            content: `
                <h3>주니어 개발자 (2019.03 - 2020.12)</h3>
                <p class="date">ABC 스타트업</p>
                <ul>
                    <li>웹 애플리케이션 프론트엔드 개발</li>
                    <li>React를 활용한 SPA 구축</li>
                    <li>RESTful API 연동 및 상태 관리</li>
                    <li>반응형 웹 디자인 구현</li>
                </ul>
                <h3>주요 성과</h3>
                <ul>
                    <li>사용자 대시보드 개발로 업무 효율 30% 향상</li>
                    <li>페이지 로딩 속도 50% 개선</li>
                </ul>
            `
        },
        {
            worldX: 2000,
            type: "experience",
            icon: "🚀",
            title: "중급 개발자로 성장",
            content: `
                <h3>미들 개발자 (2021.01 - 2022.06)</h3>
                <p class="date">XYZ 테크</p>
                <ul>
                    <li>팀 리딩 및 코드 리뷰</li>
                    <li>마이크로서비스 아키텍처 설계 참여</li>
                    <li>CI/CD 파이프라인 구축</li>
                    <li>신입 개발자 멘토링</li>
                </ul>
                <h3>주요 프로젝트</h3>
                <ul>
                    <li>전자상거래 플랫폼 리뉴얼 (React, Node.js)</li>
                    <li>실시간 채팅 시스템 구축 (WebSocket)</li>
                    <li>관리자 대시보드 개발 (Vue.js)</li>
                </ul>
            `
        },
        {
            worldX: 2800,
            type: "experience",
            icon: "⭐",
            title: "시니어 개발자",
            content: `
                <h3>시니어 개발자 (2022.07 - 현재)</h3>
                <p class="date">DEF Corporation</p>
                <ul>
                    <li>기술 스택 선정 및 아키텍처 설계</li>
                    <li>풀스택 개발 (프론트엔드 + 백엔드)</li>
                    <li>성능 최적화 및 보안 강화</li>
                    <li>애자일 방법론 도입 및 팀 프로세스 개선</li>
                </ul>
                <h3>주요 성과</h3>
                <ul>
                    <li>서비스 응답 속도 70% 개선</li>
                    <li>월간 활성 사용자 200% 증가</li>
                    <li>AWS 비용 40% 절감</li>
                </ul>
            `
        },
        {
            worldX: 3600,
            type: "skills",
            icon: "🛠️",
            title: "기술 스택",
            content: `
                <h3>프론트엔드</h3>
                <ul>
                    <li>JavaScript (ES6+), TypeScript</li>
                    <li>React, Vue.js, Next.js</li>
                    <li>HTML5, CSS3, SASS, Tailwind CSS</li>
                    <li>Webpack, Vite, Redux, Zustand</li>
                </ul>
                <h3>백엔드</h3>
                <ul>
                    <li>Node.js, Express, NestJS</li>
                    <li>Python, Django, FastAPI</li>
                    <li>RESTful API, GraphQL</li>
                    <li>PostgreSQL, MongoDB, Redis</li>
                </ul>
                <h3>DevOps & Tools</h3>
                <ul>
                    <li>AWS (EC2, S3, Lambda, RDS, CloudFront)</li>
                    <li>Docker, Kubernetes</li>
                    <li>Git, GitHub Actions, Jenkins</li>
                    <li>Nginx, Linux, VS Code</li>
                </ul>
            `
        },
        {
            worldX: 4400,
            type: "education",
            icon: "🎓",
            title: "교육 & 자격증",
            content: `
                <h3>학력</h3>
                <ul>
                    <li>OO대학교 컴퓨터공학과 졸업 (2015 - 2019)</li>
                    <li>학점: 4.0 / 4.5</li>
                    <li>우수 졸업생 표彰</li>
                </ul>
                <h3>자격증</h3>
                <ul>
                    <li>AWS Certified Solutions Architect - Associate</li>
                    <li>정보처리기사</li>
                    <li>SQLD (SQL Developer)</li>
                </ul>
                <h3>교육 & 수료</h3>
                <ul>
                    <li>풀스택 개발 부트캠프 수료 (2018)</li>
                    <li>알고리즘 고급 과정 수료</li>
                    <li>클라우드 아키텍처 전문가 과정</li>
                </ul>
            `
        },
        {
            worldX: 5200,
            type: "projects",
            icon: "🎨",
            title: "사이드 프로젝트",
            content: `
                <h3>개발자 커뮤니티 플랫폼</h3>
                <p class="date">2023.01 - 2023.06</p>
                <ul>
                    <li>기술 스택: React, Node.js, PostgreSQL, AWS</li>
                    <li>실시간 코드 공유 및 협업 기능</li>
                    <li>1,000+ 활성 사용자 확보</li>
                    <li>GitHub Stars: 500+</li>
                </ul>
                <h3>AI 기반 이력서 분석 도구</h3>
                <p class="date">2023.07 - 2023.12</p>
                <ul>
                    <li>기술 스택: Python, FastAPI, OpenAI API, React</li>
                    <li>이력서 자동 분석 및 피드백 제공</li>
                    <li>500+ 다운로드</li>
                </ul>
                <h3>오픈소스 기여</h3>
                <ul>
                    <li>React 공식 문서 한글 번역 참여</li>
                    <li>인기 UI 라이브러리 버그 수정 및 기능 추가</li>
                    <li>개발자 도구 오픈소스 프로젝트 메인테이너</li>
                </ul>
            `
        }
    ]
};

// profile 정보를 checkpoints에서도 사용할 수 있도록 수정
RESUME_DATA.checkpoints[0].content = `
    <h3>안녕하세요!</h3>
    <p><strong>${RESUME_DATA.profile.name}</strong>입니다.</p>
    <p>${RESUME_DATA.profile.title}로 ${RESUME_DATA.profile.careerYears}년간 일하고 있습니다.</p>
    <br>
    <p>📧 ${RESUME_DATA.profile.email}</p>
    <p>💻 ${RESUME_DATA.profile.github}</p>
    <p>🔗 ${RESUME_DATA.profile.linkedin}</p>
    <br>
    <p>게임을 진행하며 저의 이력을 탐험해보세요! 🎮</p>
`;
