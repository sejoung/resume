// Phaser 3 Interactive Resume Game
// 횡스크롤 이력서 게임

import Phaser from 'phaser';
import {RESUME_DATA} from './resume-data.js';

// ===== Preload Scene - 에셋 로딩 =====
class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: 'PreloadScene'});
    }

    preload() {
        // 로딩 화면 표시
        const loadingScreen = document.getElementById('loading-screen');
        const loadingProgress = document.getElementById('loading-progress');

        // 로딩 진행도 업데이트
        this.load.on('progress', (value) => {
            loadingProgress.style.width = (value * 100) + '%';
        });

        this.load.on('complete', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500);
        });

        // 배경 이미지 로드
        this.load.image('bg1', 'assets/background/background_layer_1.png');
        this.load.image('bg2', 'assets/background/background_layer_2.png');
        this.load.image('bg3', 'assets/background/background_layer_3.png');

        // 캐릭터 스프라이트 시트 로드 (448x392, 7x7 = 49 frames)
        this.load.spritesheet('character', 'assets/character/char_blue.png', {
            frameWidth: 56,  // 448 / 7
            frameHeight: 56  // 392 / 7
        });

        // 타일셋 로드 (바닥용) - spritesheet로 로드
        this.load.spritesheet('tileset', 'assets/oak_woods_tileset.png', {
            frameWidth: 24,
            frameHeight: 24
        });

        // 램프만 로드 (체크포인트용)
        this.load.image('1', 'assets/decorations/1.png');
        this.load.image('2', 'assets/decorations/2.png');
        this.load.image('3', 'assets/decorations/3.png');
        this.load.image('4', 'assets/decorations/4.png');
        this.load.image('5', 'assets/decorations/5.png');
        this.load.image('6', 'assets/decorations/6.png');
        this.load.image('7', 'assets/decorations/7.png');


    }

    create() {
        // 캐릭터 애니메이션 생성
        this.createAnimations();
        // 게임 씬으로 이동
        this.scene.start('GameScene');

    }

    createAnimations() {
        // 스프라이트 시트: 7x7 그리드 (448x392, 각 프레임 64x56)
        // Row 0 (0-6): Idle
        // Row 1 (7-13): Run
        // Row 2 (14-20): Jump

        // Idle 애니메이션 (첫 번째 행: 0-6)
        this.anims.create({
            key: 'idle',
            frames: [
                {key: 'character', frame: 0},
                {key: 'character', frame: 1},
                {key: 'character', frame: 2},
                {key: 'character', frame: 3},
                {key: 'character', frame: 4},
                {key: 'character', frame: 5}
            ],
            frameRate: 8,
            repeat: -1
        });

        // Run 애니메이션 (두 번째 행: 7-13)
        this.anims.create({
            key: 'run',
            frames: [
                {key: 'character', frame: 17},
                {key: 'character', frame: 18},
                {key: 'character', frame: 19},
                {key: 'character', frame: 20},
                {key: 'character', frame: 21},
                {key: 'character', frame: 22},
                {key: 'character', frame: 23},
                {key: 'character', frame: 24},
                {key: 'character', frame: 25},
            ],
            frameRate: 10,
            repeat: -1
        });

        // Jump 애니메이션 (세 번째 행: 14-20)
        this.anims.create({
            key: 'jump',
            frames: [
                {key: 'character', frame: 16},
                {key: 'character', frame: 17},
                {key: 'character', frame: 18},
                {key: 'character', frame: 19},
                {key: 'character', frame: 20}
            ],
            frameRate: 10,
            repeat: -1
        });
    }
}

// ===== Main Game Scene =====
class GameScene extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene'});
        this.gameStarted = false;
        this.isPaused = false;
        this.checkpointsReached = new Set();
        this.lastTriggerTime = 0;
    }

    create() {
        // 월드 설정
        this.worldWidth = 6000;
        this.worldHeight = 600;

        // 물리 월드 경계 설정
        this.physics.world.setBounds(0, 0, this.worldWidth, this.worldHeight);

        // 배경 레이어들 (패럴랙스)
        this.createParallaxBackgrounds();

        // 플랫폼 생성
        this.createPlatforms();

        // 장식 요소 배치
        this.createDecorations();

        // 플레이어 생성
        this.createPlayer();

        // 체크포인트 생성
        this.createCheckpoints();

        // 카메라 설정
        this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight);
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

        // 입력 설정
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = {
            space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            esc: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC),
            a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };

        // ESC 키로 일시정지
        this.keys.esc.on('down', () => {
            this.togglePause();
        });

        // 시작 화면 버튼 이벤트
        document.getElementById('start-button').addEventListener('click', () => {
            this.startGame();
        });

        // 패널 닫기 버튼
        document.getElementById('close-panel').addEventListener('click', () => {
            this.closePanel();
        });
    }

    createParallaxBackgrounds() {
        const bgHeight = this.scale.height;
        const bgScale = bgHeight / 180; // 원본 이미지 높이 180px

        // 3개의 배경 레이어 (패럴랙스 효과) - 반복해서 배치
        const repeatCount = Math.ceil(this.worldWidth / (320 * bgScale)) + 2;

        for (let i = 0; i < repeatCount; i++) {
            // 레이어 1 (가장 뒤)
            const bg1 = this.add.image(i * 320 * bgScale, 0, 'bg1');
            bg1.setOrigin(0, 0);
            bg1.setScale(bgScale);
            bg1.setScrollFactor(0.2);
            bg1.setDepth(-3);

            // 레이어 2 (중간)
            const bg2 = this.add.image(i * 320 * bgScale, 0, 'bg2');
            bg2.setOrigin(0, 0);
            bg2.setScale(bgScale);
            bg2.setScrollFactor(0.4);
            bg2.setDepth(-2);

            // 레이어 3 (앞)
            const bg3 = this.add.image(i * 320 * bgScale, 0, 'bg3');
            bg3.setOrigin(0, 0);
            bg3.setScale(bgScale);
            bg3.setScrollFactor(0.6);
            bg3.setDepth(-1);
        }
    }

    createPlatforms() {
        this.platforms = this.physics.add.staticGroup();

        const groundY = this.worldHeight - 100;
        const tileSize = 24;

        // 타일 아래 검은색 배경
        const blackGround = this.add.graphics();
        blackGround.fillStyle(0x000000, 1);
        blackGround.fillRect(0, groundY + tileSize, this.worldWidth, 200);
        blackGround.setDepth(-0.5);

        // 타일셋에서 개별 타일을 하나씩 배치
        // 바닥 타일 (프레임 0번 사용, 필요시 다른 프레임 번호로 변경 가능)
        const groundTileFrame = 1; // 타일셋에서 바닥에 적합한 타일 프레임 번호

        // 타일을 가로로 반복 배치
        for (let x = 0; x < this.worldWidth; x += tileSize) {
            // 여러 줄의 타일 배치 (더 두꺼운 바닥을 위해)
            for (let row = 0; row < 1; row++) {
                const tile = this.add.sprite(
                    x,
                    groundY + (row * tileSize),
                    'tileset',
                    groundTileFrame
                );
                tile.setOrigin(0, 0);
                tile.setDepth(0);
            }
        }

        // 물리 충돌용 투명 바닥
        const groundCollider = this.add.rectangle(
            this.worldWidth / 2,
            groundY,
            this.worldWidth,
            100,
            0x000000,
            0
        );
        groundCollider.setOrigin(0.5, 0);
        this.physics.add.existing(groundCollider, true);
        this.platforms.add(groundCollider);

        // 점프 플랫폼 제거됨 (바닥만 유지)
    }

    createDecorations() {
        // 장식물 제거됨 (램프만 체크포인트로 사용)
    }

    createPlayer() {
        const groundY = this.worldHeight - 100;

        this.player = this.physics.add.sprite(100, groundY - 50, 'character');
        this.player.setScale(0.8);
        this.player.setCollideWorldBounds(true);

        // 플레이어 물리 설정
        this.player.body.setSize(40, 50);
        this.player.body.setOffset(12, 6);
        this.player.setGravityY(800);

        // 플랫폼과 충돌 설정
        this.physics.add.collider(this.player, this.platforms);

        // 기본 애니메이션 재생
        this.player.play('idle');
    }

    createCheckpoints() {
        this.checkpoints = this.physics.add.group();

        const groundY = this.worldHeight - 100;

        RESUME_DATA.checkpoints.forEach((checkpoint, index) => {
            // 램프 이미지로 체크포인트 생성 (바닥에 붙임)

            const lamp = this.add.image(
                checkpoint.worldX,
                groundY,
                index + 1
            );
            lamp.setScale(1.2);
            lamp.setOrigin(0.5, 1);

            // 물리 바디 추가
            this.physics.add.existing(lamp);
            lamp.body.setAllowGravity(false);
            lamp.body.setImmovable(true);
            lamp.body.setSize(40, 60);

            // 데이터 저장
            lamp.setData('checkpoint', checkpoint);
            lamp.setData('index', index);
            lamp.setData('reached', false);

            this.checkpoints.add(lamp);

            // 램프가 빛나는 효과 (트윈 애니메이션)
            this.tweens.add({
                targets: lamp,
                alpha: 0.7,
                duration: 800,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        });

        // 플레이어와 체크포인트 충돌 감지
        this.physics.add.overlap(
            this.player,
            this.checkpoints,
            this.handleCheckpoint,
            null,
            this
        );
    }

    handleCheckpoint(player, checkpoint) {
        const currentTime = Date.now();
        const lastTriggerTime = this.lastTriggerTime;
        const cooldownTime = 3000; // 3초 쿨다운

        // 3초 쿨다운 체크
        if (currentTime - lastTriggerTime < cooldownTime) {
            return; // 쿨다운 중이면 무시
        }

        // 첫 방문인지 확인
        if (!checkpoint.getData('reached')) {
            checkpoint.setData('reached', true);

            // 램프 밝기를 낮춰서 방문했음을 표시
            checkpoint.setAlpha(0.5);

            const index = checkpoint.getData('index');
            this.checkpointsReached.add(index);
        }

        // 이력 패널 표시 (3초 쿨다운 후 재방문 시에만)
        const data = checkpoint.getData('checkpoint');
        this.showCheckpointPanel(data);
    }

    showCheckpointPanel(checkpointData) {
        const panel = document.getElementById('resume-panel');
        const icon = document.getElementById('panel-icon');
        const title = document.getElementById('panel-title');
        const body = document.getElementById('panel-body');

        icon.textContent = checkpointData.icon;
        title.textContent = checkpointData.title;
        body.innerHTML = checkpointData.content;

        panel.classList.remove('hidden');
        this.isPaused = true;
        this.physics.pause();
    }

    closePanel() {
        const panel = document.getElementById('resume-panel');
        panel.classList.add('hidden');
        this.isPaused = false;
        this.lastTriggerTime = Date.now();
        this.physics.resume();
    }

    startGame() {
        document.getElementById('start-screen').classList.add('hidden');
        this.gameStarted = true;
    }

    togglePause() {
        if (!this.gameStarted) return;

        this.isPaused = !this.isPaused;
        const pauseScreen = document.getElementById('pause-screen');

        if (this.isPaused) {
            pauseScreen.classList.remove('hidden');
            this.physics.pause();
        } else {
            pauseScreen.classList.add('hidden');
            this.physics.resume();
        }
    }

    update() {
        // 스페이스바: 패널이 열려있으면 닫고, 아니면 점프
        if (Phaser.Input.Keyboard.JustDown(this.keys.space)) {
            const panel = document.getElementById('resume-panel');
            if (!panel.classList.contains('hidden')) {
                // 패널이 열려있으면 닫기
                this.closePanel();
            } else if (this.player.body.touching.down) {
                // 패널이 닫혀있고 바닥에 있으면 점프
                this.player.setVelocityY(-400);
                this.player.play('jump', true);
            }
        }

        if (!this.gameStarted || this.isPaused) return;

        // 플레이어 이동
        if (this.cursors.left.isDown || this.keys.a.isDown) {
            this.player.setVelocityX(-200);
            this.player.setFlipX(true);

            if (this.player.body.touching.down) {
                this.player.play('run', true);
            }
        } else if (this.cursors.right.isDown || this.keys.d.isDown) {
            this.player.setVelocityX(200);
            this.player.setFlipX(false);

            if (this.player.body.touching.down) {
                this.player.play('run', true);
            }
        } else {
            this.player.setVelocityX(0);

            if (this.player.body.touching.down) {
                this.player.play('idle', true);
            }
        }


        // UI 업데이트
        this.updateUI();
    }

    updateUI() {
        const progressFill = document.getElementById('progress-fill');
        const checkpointCount = document.getElementById('checkpoint-count');

        const progress = (this.player.x / this.worldWidth) * 100;
        progressFill.style.width = Math.min(progress, 100) + '%';

        checkpointCount.textContent =
            `${this.checkpointsReached.size}/${RESUME_DATA.checkpoints.length}`;
    }
}

// ===== Phaser Game Configuration =====
const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'phaser-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    scene: [PreloadScene, GameScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#87CEEB'
};

// 게임 시작
const game = new Phaser.Game(config);
