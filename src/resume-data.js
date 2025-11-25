// 이력서 데이터 설정
// 이 파일을 수정하여 자신의 이력 정보를 입력하세요

export const RESUME_DATA = {
    // 기본 정보
    profile: {
        name: "Beni Kim(김세중)",
        title: "Tech Lead / Senior Full-Stack Developer",
        careerYears: 20,
        email: "sejoung@gmail.com",
        github: "github.com/sejoung",
        linkedin: "linkedin.com/in/sanaes",
        skills: ["JavaScript", "Java", "Kotlin", "Python", "AWS", "Docker", "GenAI"]
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
            icon: "🧪",
            title: "기술 스택 전환의 시작",
            content: `
                    <h3>Stable Diffusion WebUI → ComfyUI 전환</h3>
                    <p class="date">초기 탐색 단계</p>
                    <ul>
                        <li>Stable Diffusion Web UI 기반의 실험 환경 구축</li>
                        <li>프로덕션에 적합한 ComfyUI로 기술 스택 전환</li>
                        <li>작가 지원용 AI 파이프라인을 위한 구조 재정비</li>
                        <li>유연하고 모듈화된 워크플로우 확보</li>
                    </ul>
                    <h3>전환의 의미</h3>
                    <ul>
                        <li>테크팀 성장의 첫 전환점 형성</li>
                        <li>프로덕션 품질을 위한 준비 단계 완성</li>
                    </ul>
                `
        },
        {
            worldX: 2000,
            type: "experience",
            icon: "🤖",
            title: "수백 개 모델 학습",
            content: `
                <h3>작가 맞춤형 AI 모델 개발</h3>
                <p class="date">프로덕션 최적화를 위한 집중 학습 단계</p>
                <ul>
                    <li>작가 개별 스타일에 맞춘 대규모 파인튜닝</li>
                    <li>수백 개 이상의 모델 실험 및 반복 학습</li>
                    <li>최종 결과물 품질 극대화를 위한 데이터 설계</li>
                    <li>사내 표준 모델/실험 프로세스 구축</li>
                </ul>
                <h3>주요 성과</h3>
                <ul>
                    <li>현재 서비스 품질의 기반 확립</li>
                    <li>재현 가능한 고품질 이미지 생성 파이프라인 완성</li>
                </ul>
            `
        },
        {
            worldX: 2800,
            type: "experience",
            icon: "🏁",
            title: "딥테크 TIPS 도전",
            content: `
               <h3>TIPS R&D 자금 확보 시도</h3>
                <p class="date">초기 R&D 강화 단계</p>
                <ul>
                    <li>사내 기술 고도화를 위한 DeepTech TIPS 지원</li>
                    <li>기술성/혁신성 중심의 상세 과제 제출</li>
                    <li>심사 과정에서 '보류' 판정</li>
                </ul>
                <h3>의미와 배움</h3>
                <ul>
                    <li>첫 공식적인 R&D 평가 경험 축적</li>
                    <li>프로덕션과 연구 관점의 부족한 지점 재정비</li>
                </ul>
            `
        },
        {
            worldX: 3600,
            type: "experience",
            icon: "🔍",
            title: "AWS와의 운명적 만남",
            content: `
                    <h3>뜻밖의 기회 발견</h3>
                    <p class="date">Thomas의 AWS 행사 참여</p>
                    <ul>
                        <li>DeepTech TIPS 보류 이후 새로운 기회를 탐색</li>
                        <li>AWS 행사에서 Generative AI Accelerator 정보 파악</li>
                        <li>글로벌 프로그램의 잠재력 확인</li>
                    </ul>
                    <h3>전환점</h3>
                    <ul>
                        <li>국내 중심에서 글로벌 중심으로 시야 확장</li>
                        <li>팀 내부에 새로운 도전 의지 발생</li>
                    </ul>
            `
        },
        {
            worldX: 4400,
            type: "experience",
            icon: "🚀",
            title: "AWS Generative AI Accelerator 선정",
            content: `
                    <h3>글로벌 80팀 중 당당히 선발</h3>
                    <p class="date">AWS 글로벌 프로그램 참여</p>
                    <ul>
                        <li>치열한 심사 경쟁을 뚫고 최종 선정</li>
                        <li>프로덕션 기술력·비전·실행력을 글로벌에서 인정</li>
                        <li>전 세계 AI 기업들과 협업·멘토링 기회 확보</li>
                    </ul>
                    <h3>직접 경험한 글로벌 무대</h3>
                    <ul>
                        <li>샌프란시스코, 시애틀, 라스베이거스, LA 방문</li>
                        <li>글로벌 테크 기업·VC·파트너와의 교류</li>
                    </ul>
            `
        },
        {
            worldX: 5200,
            type: "experience",
            icon: "🏗️",
            title: "REALDRAW 테크팀의 현재",
            content: `
                    <h3>작가 중심 AI 프로세스 정착</h3>
                    <p class="date">수많은 시행착오의 결과</p>
                    <ul>
                        <li>작가/작품 맞춤형 AI 생성 파이프라인 구축</li>
                        <li>수백 건의 파인튜닝 실험을 통한 품질 보증 체계화</li>
                        <li>데이터 설계 → 모델 학습 → 검수 → 릴리즈 프로세스 확립</li>
                    </ul>

                    <h3>문화적 성장</h3>
                    <ul>
                        <li>적극적 코드 리뷰 문화 정착</li>
                        <li>직군 간 장애물 없이 협업하는 구조 형성</li>
                        <li>'계몽이 아닌 전염'을 지향하는 주도적 학습</li>
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
    <p>게임을 진행하며 저와 지금까지의 리얼드로우에서 이력을 탐험해보세요! 🎮</p>
`;
