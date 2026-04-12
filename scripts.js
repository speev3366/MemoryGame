const app = document.getElementById('app');
const themeSelector = document.getElementById('themeSelector');
const countSelector = document.getElementById('countSelector');
const modeSelector = document.getElementById('modeSelector');
const player1NameInput = document.getElementById('player1NameInput');
const player2NameInput = document.getElementById('player2NameInput');
const player1NameField = document.getElementById('player1NameField');
const player2NameField = document.getElementById('player2NameField');
const difficultySelector = document.getElementById('difficultySelector');
const startButton = document.getElementById('startButton');
const newRoundButton = document.getElementById('newRoundButton');
const exitGameButton = document.getElementById('exitGameButton');
const playAgainButton = document.getElementById('playAgainButton');
const mainMenuButton = document.getElementById('mainMenuButton');
const statusBanner = document.getElementById('statusBanner');
const gameBoard = document.getElementById('gameBoard');
const boardFrame = document.querySelector('.board-frame');
const emptyState = document.getElementById('emptyState');
const selectedThemeChip = document.getElementById('selectedThemeChip');
const gameModeChip = document.getElementById('gameModeChip');
const cardCountChip = document.getElementById('cardCountChip');
const pairsLeftChip = document.getElementById('pairsLeftChip');
const turnTimerChip = document.getElementById('turnTimerChip');
const turnChip = document.getElementById('turnChip');
const resultModal = document.getElementById('resultModal');
const resultTitle = document.getElementById('resultTitle');
const resultSummary = document.getElementById('resultSummary');
const resultPlayer1Name = document.getElementById('resultPlayer1Name');
const resultPlayer2Name = document.getElementById('resultPlayer2Name');
const resultPlayer1Score = document.getElementById('resultPlayer1Score');
const resultPlayer2Score = document.getElementById('resultPlayer2Score');
const resultRematchStatus = document.getElementById('resultRematchStatus');

const authPanel = document.getElementById('authPanel');
const authBackdrop = document.getElementById('authBackdrop');
const authStatusText = document.getElementById('authStatusText');
const backendChip = document.getElementById('backendChip');
const sessionChip = document.getElementById('sessionChip');
const profileButton = document.getElementById('profileButton');
const profileButtonTitle = document.getElementById('profileButtonTitle');
const profileButtonSubtext = document.getElementById('profileButtonSubtext');
const closeAuthPanelButton = document.getElementById('closeAuthPanelButton');
const closeOnlineLobbyButton = document.getElementById('closeOnlineLobbyButton');
const continueGuestButton = document.getElementById('continueGuestButton');
const guestBanner = document.getElementById('guestBanner');
const guestPreview = document.getElementById('guestPreview');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const registerUsername = document.getElementById('registerUsername');
const registerFirstName = document.getElementById('registerFirstName');
const registerLastName = document.getElementById('registerLastName');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const logoutButton = document.getElementById('logoutButton');
const rememberMeCheckbox = document.getElementById('rememberMeCheckbox');
const onlineLobby = document.getElementById('onlineLobby');
const createRoomButton = document.getElementById('createRoomButton');
const joinRoomInput = document.getElementById('joinRoomInput');
const joinRoomButton = document.getElementById('joinRoomButton');
const leaveRoomButton = document.getElementById('leaveRoomButton');
const startOnlineButton = document.getElementById('startOnlineButton');
const roomCodeChip = document.getElementById('roomCodeChip');
const roomStatusChip = document.getElementById('roomStatusChip');
const roomPlayersChip = document.getElementById('roomPlayersChip');
const onlineTurnChip = document.getElementById('onlineTurnChip');
const roomAccessSelector = document.getElementById('roomAccessSelector');
const onlineThemeSelector = document.getElementById('onlineThemeSelector');
const onlineCountSelector = document.getElementById('onlineCountSelector');
const onlineLobbyFeedback = document.getElementById('onlineLobbyFeedback');
const lobbyCreateGrid = document.getElementById('lobbyCreateGrid');
const onlineMatchGrid = document.getElementById('onlineMatchGrid');
const lobbyJoinCreateRow = document.getElementById('lobbyJoinCreateRow');
const roomActionRow = document.getElementById('roomActionRow');
if (onlineLobby && app && onlineLobby.parentElement !== app) app.appendChild(onlineLobby);
const roomPasswordField = document.getElementById('roomPasswordField');
const roomPasswordInput = document.getElementById('roomPasswordInput');
const roomPasswordError = document.getElementById('roomPasswordError');
const joinPasswordRow = document.getElementById('joinPasswordRow');
const joinPasswordField = document.getElementById('joinPasswordField');
const joinPasswordInput = document.getElementById('joinPasswordInput');
const joinPasswordError = document.getElementById('joinPasswordError');
const joinPasswordConfirmButton = document.getElementById('joinPasswordConfirmButton');
const inviteCard = document.getElementById('inviteCard');
const inviteLinkInput = document.getElementById('inviteLinkInput');
const copyInviteButton = document.getElementById('copyInviteButton');
const inviteJoinBanner = document.getElementById('inviteJoinBanner');
const inviteJoinText = document.getElementById('inviteJoinText');
const joinInviteButton = document.getElementById('joinInviteButton');
const openProfileFromInviteButton = document.getElementById('openProfileFromInviteButton');
const continueInviteGuestButton = document.getElementById('continueInviteGuestButton');
const inviteGuestNameField = document.getElementById('inviteGuestNameField');
const inviteGuestNameInput = document.getElementById('inviteGuestNameInput');
const inviteGuestNameError = document.getElementById('inviteGuestNameError');
const inviteLanding = document.getElementById('inviteLanding');
const inviteLandingTitle = document.getElementById('inviteLandingTitle');
const inviteLandingText = document.getElementById('inviteLandingText');
const inviteLandingMeta = document.getElementById('inviteLandingMeta');
const closeInviteLandingButton = document.getElementById('closeInviteLandingButton');
const inviteLandingGuestField = document.getElementById('inviteLandingGuestField');
const inviteLandingGuestInput = document.getElementById('inviteLandingGuestInput');
const inviteLandingGuestError = document.getElementById('inviteLandingGuestError');
const inviteLandingLoginButton = document.getElementById('inviteLandingLoginButton');
const inviteLandingGuestButton = document.getElementById('inviteLandingGuestButton');
const inviteLandingJoinButton = document.getElementById('inviteLandingJoinButton');
const refreshRoomsButton = document.getElementById('refreshRoomsButton');
const roomList = document.getElementById('roomList');
const roomListFeedback = document.getElementById('roomListFeedback');

const loginEmailField = document.getElementById('loginEmailField');
const loginPasswordField = document.getElementById('loginPasswordField');
const registerUsernameField = document.getElementById('registerUsernameField');
const registerFirstNameField = document.getElementById('registerFirstNameField');
const registerLastNameField = document.getElementById('registerLastNameField');
const registerEmailField = document.getElementById('registerEmailField');
const registerPasswordField = document.getElementById('registerPasswordField');
const joinRoomField = document.getElementById('joinRoomField');

const loginEmailError = document.getElementById('loginEmailError');
const loginPasswordError = document.getElementById('loginPasswordError');
const registerUsernameError = document.getElementById('registerUsernameError');
const registerFirstNameError = document.getElementById('registerFirstNameError');
const registerLastNameError = document.getElementById('registerLastNameError');
const registerEmailError = document.getElementById('registerEmailError');
const registerPasswordError = document.getElementById('registerPasswordError');
const joinRoomError = document.getElementById('joinRoomError');
const loginFeedback = document.getElementById('loginFeedback');
const registerFeedback = document.getElementById('registerFeedback');

const profilePanel = document.getElementById('profilePanel');
const refreshHistoryButton = document.getElementById('refreshHistoryButton');
const profileLogoutButton = document.getElementById('profileLogoutButton');
const profileFullName = document.getElementById('profileFullName');
const profileUsername = document.getElementById('profileUsername');
const profileEmail = document.getElementById('profileEmail');
const profileCreatedAt = document.getElementById('profileCreatedAt');
const profileTotalGames = document.getElementById('profileTotalGames');
const profileWinRate = document.getElementById('profileWinRate');
const profileWins = document.getElementById('profileWins');
const profileModeBreakdown = document.getElementById('profileModeBreakdown');
const profileActiveRoom = document.getElementById('profileActiveRoom');
const profileActiveRoomText = document.getElementById('profileActiveRoomText');
const resumeRoomButton = document.getElementById('resumeRoomButton');
const historyCountChip = document.getElementById('historyCountChip');
const historyFeedback = document.getElementById('historyFeedback');
const matchHistoryList = document.getElementById('matchHistoryList');

const playerPanels = {
  1: document.getElementById('player1Panel'),
  2: document.getElementById('player2Panel')
};

const scoreEls = {
  1: document.getElementById('player1Score'),
  2: document.getElementById('player2Score')
};

const subtextEls = {
  1: document.getElementById('player1Subtext'),
  2: document.getElementById('player2Subtext')
};

const turnEls = {
  1: document.getElementById('player1Turn'),
  2: document.getElementById('player2Turn')
};

const nameEls = {
  1: document.getElementById('player1NameLabel'),
  2: document.getElementById('player2NameLabel')
};

const COUNT_OPTIONS = [20, 30, 40];
const ROOM_ACCESS_OPTIONS = {
  public: { name: 'Свободно', badge: 'Open', description: 'Видима стая в лобито без парола.' },
  password: { name: 'С парола', badge: 'Lock', description: 'Видима в лобито, но влизането иска парола.' },
  invite: { name: 'С линк', badge: 'Invite', description: 'Скрита стая, достъпна само чрез покана.' }
};

const MODE_OPTIONS = {
  local: {
    name: 'Локално',
    description: 'Двама играчи на един компютър без регистрация.',
    badge: '2P'
  },
  computer: {
    name: 'Срещу компютър',
    description: 'Играй сам срещу AI с 3 нива на трудност.',
    badge: 'AI'
  },
  online: {
    name: 'Онлайн',
    description: 'Онлайн игра срещу други играчи.',
    badge: 'Realtime'
  }
};

const AI_OPTIONS = {
  easy: { name: 'Лесно', chance: 0.25, badge: '25%' },
  medium: { name: 'Средно', chance: 0.5, badge: '50%' },
  hard: { name: 'Трудно', chance: 0.75, badge: '75%' }
};

const THEMES = {
  sport: {
    name: 'Спорт',
    icon: '🏆',
    description: 'Футбол, тенис, бягане, ски и още.',
    palette: {
      bg1: '#06151b',
      bg2: '#0d3b2f',
      bg3: '#05131a',
      accent: '#1ee59b',
      accent2: '#0ea5e9',
      glow: 'rgba(30, 229, 155, 0.26)'
    },
    items: [
      { key: 'football', label: 'Футбол' },
      { key: 'basketball', label: 'Баскетбол' },
      { key: 'tennis', label: 'Тенис' },
      { key: 'boxing', label: 'Бокс' },
      { key: 'volleyball', label: 'Волейбол' },
      { key: 'baseball', label: 'Бейзбол' },
      { key: 'cycling', label: 'Колоездене' },
      { key: 'helmet', label: 'Каска' },
      { key: 'dumbbell', label: 'Дъмбел' },
      { key: 'trophy', label: 'Трофей' },
      { key: 'running', label: 'Бягане' },
      { key: 'swimming', label: 'Плуване' },
      { key: 'skiing', label: 'Ски' },
      { key: 'skate', label: 'Скейт' },
      { key: 'racket', label: 'Ракета' },
      { key: 'whistle', label: 'Съдийска свирка' },
      { key: 'goal', label: 'Врата' },
      { key: 'medal', label: 'Медал' },
      { key: 'cup', label: 'Купа' },
      { key: 'tabletennis', label: 'Тенис на маса' }
    ]
  },
  countries: {
    name: 'Държави',
    icon: '🌍',
    description: 'Флагове на държави от Европа, Азия и Америка.',
    palette: {
      bg1: '#1d1208',
      bg2: '#4a1e16',
      bg3: '#120c09',
      accent: '#ff9d3f',
      accent2: '#ff5b77',
      glow: 'rgba(255, 157, 63, 0.25)'
    },
    items: [
      { key: 'bulgaria', label: 'България' },
      { key: 'germany', label: 'Германия' },
      { key: 'france', label: 'Франция' },
      { key: 'italy', label: 'Италия' },
      { key: 'japan', label: 'Япония' },
      { key: 'brazil', label: 'Бразилия' },
      { key: 'greece', label: 'Гърция' },
      { key: 'spain', label: 'Испания' },
      { key: 'usa', label: 'САЩ' },
      { key: 'sweden', label: 'Швеция' },
      { key: 'uk', label: 'Великобритания' },
      { key: 'canada', label: 'Канада' },
      { key: 'romania', label: 'Румъния' },
      { key: 'portugal', label: 'Португалия' },
      { key: 'argentina', label: 'Аржентина' },
      { key: 'turkey', label: 'Турция' },
      { key: 'ukraine', label: 'Украйна' },
      { key: 'norway', label: 'Норвегия' },
      { key: 'netherlands', label: 'Нидерландия' },
      { key: 'china', label: 'Китай' }
    ]
  },
  soldiers: {
    name: 'Войници',
    icon: '🛡️',
    description: 'Отбранителна техника, екипировка и тактически символи.',
    palette: {
      bg1: '#11160b',
      bg2: '#2d371d',
      bg3: '#0b0d08',
      accent: '#c7f36a',
      accent2: '#f59e0b',
      glow: 'rgba(199, 243, 106, 0.25)'
    },
    items: [
      { key: 'helmet', label: 'Каска' },
      { key: 'tank', label: 'Танк' },
      { key: 'drone', label: 'Дрон' },
      { key: 'binoculars', label: 'Бинокъл' },
      { key: 'radio', label: 'Радиостанция' },
      { key: 'medic', label: 'Медик' },
      { key: 'shield', label: 'Щит' },
      { key: 'boots', label: 'Ботуши' },
      { key: 'medal', label: 'Медал' },
      { key: 'goggles', label: 'Очила' },
      { key: 'submarine', label: 'Подводница' },
      { key: 'jet', label: 'Изтребител' },
      { key: 'compass', label: 'Компас' },
      { key: 'watchtower', label: 'Наблюдателна кула' },
      { key: 'parachute', label: 'Парашут' },
      { key: 'ammo', label: 'Боеприпаси' },
      { key: 'map', label: 'Карта' },
      { key: 'nightvision', label: 'Нощно виждане' },
      { key: 'case', label: 'Оръжеен куфар' },
      { key: 'star', label: 'Звезда' }
    ]
  },
  brands: {
    name: 'Марки',
    icon: '✨',
    description: 'Разпознаваеми марки и емблематични символи.',
    palette: {
      bg1: '#160912',
      bg2: '#381030',
      bg3: '#0f0a14',
      accent: '#ff5ea9',
      accent2: '#8b5cf6',
      glow: 'rgba(255, 94, 169, 0.25)'
    },
    items: [
      { key: 'apple', label: 'Apple' },
      { key: 'nike', label: 'Nike' },
      { key: 'bmw', label: 'BMW' },
      { key: 'lego', label: 'LEGO' },
      { key: 'tesla', label: 'Tesla' },
      { key: 'pepsi', label: 'Pepsi' },
      { key: 'adidas', label: 'Adidas' },
      { key: 'amazon', label: 'Amazon' },
      { key: 'microsoft', label: 'Microsoft' },
      { key: 'shell', label: 'Shell' },
      { key: 'google', label: 'Google' },
      { key: 'spotify', label: 'Spotify' },
      { key: 'youtube', label: 'YouTube' },
      { key: 'starbucks', label: 'Starbucks' },
      { key: 'intel', label: 'Intel' },
      { key: 'toyota', label: 'Toyota' },
      { key: 'nasa', label: 'NASA' },
      { key: 'gucci', label: 'Gucci' },
      { key: 'playstation', label: 'PlayStation' },
      { key: 'mcdonalds', label: 'McDonald's' }
    ]
  },
  music: {
    name: 'Музика',
    icon: '🎵',
    description: 'Инструменти и музикални символи.',
    palette: {
      bg1: '#140b1d',
      bg2: '#45205f',
      bg3: '#0c0811',
      accent: '#a855f7',
      accent2: '#f472b6',
      glow: 'rgba(168, 85, 247, 0.24)'
    },
    items: [
      { key: 'piano', label: 'Пиано' },
      { key: 'guitar', label: 'Китара' },
      { key: 'violin', label: 'Цигулка' },
      { key: 'drums', label: 'Барабани' },
      { key: 'trumpet', label: 'Тромпет' },
      { key: 'saxophone', label: 'Саксофон' },
      { key: 'flute', label: 'Флейта' },
      { key: 'accordion', label: 'Акордеон' },
      { key: 'microphone', label: 'Микрофон' },
      { key: 'headphones', label: 'Слушалки' },
      { key: 'speaker', label: 'Колона' },
      { key: 'vinyl', label: 'Плоча' },
      { key: 'sheetmusic', label: 'Ноти' },
      { key: 'harp', label: 'Арфа' },
      { key: 'clarinet', label: 'Кларинет' },
      { key: 'tambourine', label: 'Тамбурин' },
      { key: 'cello', label: 'Виолончело' },
      { key: 'bagpipe', label: 'Гайда' },
      { key: 'tupan', label: 'Тъпан' },
      { key: 'kaval', label: 'Кавал' }
    ]
  },
  landmarks: {
    name: 'Забележителности',
    icon: '🏛️',
    description: 'Известни български места и паметници.',
    palette: {
      bg1: '#0f1321',
      bg2: '#174b70',
      bg3: '#09101a',
      accent: '#38bdf8',
      accent2: '#f59e0b',
      glow: 'rgba(56, 189, 248, 0.24)'
    },
    items: [
      { key: 'tsarevets', label: 'Царевец' },
      { key: 'madara', label: 'Мадарски конник' },
      { key: 'rila', label: 'Рилски манастир' },
      { key: 'shipka', label: 'Шипка' },
      { key: 'belogradchik', label: 'Белоградчишки скали' },
      { key: 'alnevsky', label: 'Ал. Невски' },
      { key: 'oldplovdiv', label: 'Старият Пловдив' },
      { key: 'nesebar', label: 'Несебър' },
      { key: 'asensfortress', label: 'Асенова крепост' },
      { key: 'bachkovo', label: 'Бачковски манастир' },
      { key: 'devetashka', label: 'Деветашка пещера' },
      { key: 'krushuna', label: 'Крушунски водопади' },
      { key: 'stoneforest', label: 'Побити камъни' },
      { key: 'perperikon', label: 'Перперикон' },
      { key: 'etara', label: 'Етъра' },
      { key: 'kapetobridge', label: 'Покрит мост' },
      { key: 'rozensky', label: 'Роженски манастир' },
      { key: 'sevenrila', label: 'Седемте рилски езера' },
      { key: 'boyana', label: 'Боянска църква' },
      { key: 'svetiivan', label: 'о-в Св. Иван' }
    ]
  },
  history: {
    name: 'Българска история',
    icon: '📜',
    description: 'Личности, символи и събития от българската история.',
    palette: {
      bg1: '#1c1208',
      bg2: '#6b3415',
      bg3: '#110c08',
      accent: '#f59e0b',
      accent2: '#ef4444',
      glow: 'rgba(245, 158, 11, 0.26)'
    },
    items: [
      { key: 'levski', label: 'Васил Левски' },
      { key: 'botev', label: 'Христо Ботев' },
      { key: 'paisii', label: 'Паисий' },
      { key: 'asparuh', label: 'Хан Аспарух' },
      { key: 'kubrat', label: 'Кан Кубрат' },
      { key: 'krum', label: 'Хан Крум' },
      { key: 'simeon', label: 'Симеон Велики' },
      { key: 'samuil', label: 'Цар Самуил' },
      { key: 'kaloyan', label: 'Цар Калоян' },
      { key: 'paisii_book', label: 'История славянобългарска' },
      { key: 'shipka_epic', label: 'Шипченска епопея' },
      { key: 'april_uprising', label: 'Априлско въстание' },
      { key: 'liberation', label: 'Освобождение' },
      { key: 'constitution', label: 'Търновска конституция' },
      { key: 'cyrillic', label: 'Кирилица' },
      { key: 'pliska', label: 'Плиска' },
      { key: 'preslav', label: 'Преслав' },
      { key: 'ohrid', label: 'Охридска школа' },
      { key: 'rayna', label: 'Райна Княгиня' },
      { key: 'opalchenie', label: 'Опълчение' }
    ]
  },
  animals: {
    name: 'Животни',
    icon: '🦁',
    description: 'Диви, домашни и морски животни.',
    palette: {
      bg1: '#08170d',
      bg2: '#1d6a35',
      bg3: '#07100a',
      accent: '#22c55e',
      accent2: '#84cc16',
      glow: 'rgba(34, 197, 94, 0.24)'
    },
    items: [
      { key: 'lion', label: 'Лъв' },
      { key: 'tiger', label: 'Тигър' },
      { key: 'bear', label: 'Мечка' },
      { key: 'wolf', label: 'Вълк' },
      { key: 'fox', label: 'Лисица' },
      { key: 'owl', label: 'Бухал' },
      { key: 'eagle', label: 'Орел' },
      { key: 'deer', label: 'Елен' },
      { key: 'horse', label: 'Кон' },
      { key: 'dog', label: 'Куче' },
      { key: 'cat', label: 'Котка' },
      { key: 'rabbit', label: 'Заек' },
      { key: 'dolphin', label: 'Делфин' },
      { key: 'turtle', label: 'Костенурка' },
      { key: 'penguin', label: 'Пингвин' },
      { key: 'parrot', label: 'Папагал' },
      { key: 'butterfly', label: 'Пеперуда' },
      { key: 'bee', label: 'Пчела' },
      { key: 'frog', label: 'Жаба' },
      { key: 'elephant', label: 'Слон' }
    ]
  }
};

const BOARD_LAYOUTS = {
  20: [[5, 4], [4, 5], [6, 4], [4, 6]],
  30: [[6, 5], [5, 6], [10, 3], [3, 10]],
  40: [[8, 5], [5, 8], [10, 4], [4, 10]]
};

const ASSET_CACHE = {};
const ONLINE_INACTIVITY_LIMIT_MS = 15 * 60 * 1000;
const ONLINE_WAITING_ROOM_LIMIT_MS = 30 * 60 * 1000;
const ONLINE_AUTO_FINISH_WINNER_SLOT = -1;
const ONLINE_WAITING_RESTORE_WITH_GUEST_MS = 10 * 60 * 1000;
const ONLINE_WAITING_RESTORE_EMPTY_MS = 10 * 60 * 1000;

const state = {
  selectedTheme: 'sport',
  selectedCardCount: 20,
  playMode: 'local',
  aiDifficulty: 'medium',
  playerNames: { 1: 'Играч 1', 2: 'Играч 2' },
  started: false,
  currentPlayer: 1,
  scores: { 1: 0, 2: 0 },
  flipped: [],
  lockBoard: false,
  matchedPairs: 0,
  totalPairs: 0,
  gameOver: false,
  auth: {
    client: null,
    enabled: false,
    user: null,
    profile: null,
    history: [],
    historyLoaded: false,
    rememberMe: localStorage.getItem('memory_duel_remember_me') !== '0'
  },
  guest: {
    active: false,
    name1: '',
    name2: ''
  },
  ui: {
    profileOpen: false,
    pendingProtectedRoomId: null,
    inviteToken: null,
    onlinePreviewVisible: false,
    onlineLobbyOpen: false,
    pendingOnlineIntent: false,
    pendingInviteAutoJoin: false,
    persistentNotice: '',
    logoutBusy: false
  },
  online: {
    room: null,
    channel: null,
    pendingTimeout: null,
    publicRooms: [],
    accessType: 'public',
    selectedTheme: 'sport',
    selectedCardCount: 20,
    invitePreview: null,
    invitePreviewLoaded: false,
    refreshBusy: false,
    autoFinishing: false,
    joinBusy: false,
    createBusy: false,
    startBusy: false,
    flipBusy: false,
    lastRefreshAt: 0,
    refreshBusyAt: 0,
    lastTimeoutKey: null,
    syncInterval: null,
    refreshMisses: 0,
    inviteAutoJoinAttemptedToken: null,
    inviteAutoJoinBusy: false,
    preferredRoomId: sessionStorage.getItem('memory_duel_preferred_room_id') || null,
    playingGraceUntil: 0,
    allowPlayingBurstUntil: 0,
    lastGuestWaitingBurstKey: null,
    suppressLobbyUntil: 0,
    actionBusyUntil: 0,
    roomFetchInflight: null,
    roomFetchInflightId: null,
    lobbyFetchInflight: null,
    activeRoomInflight: null,
    authSyncQueued: false,
    rematchBusy: false,
    lastRematchAutoKey: null,
    roomFetchCache: new Map()
  },
  timers: {
    interval: null,
    localTurnStartedAt: null,
    durationMs: 30000
  },
  aiTurnTimeout: null
};

let lastRenderedOnlineTheme = null;
let lastRenderedOnlineCount = null;

function shuffle(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}


function sanitizeName(value, fallback) {
  const normalized = (value || '').replace(/\s+/g, ' ').trim();
  return normalized.slice(0, 18) || fallback;
}

function randomDigits(length = 6) {
  let output = '';
  for (let i = 0; i < length; i += 1) output += Math.floor(Math.random() * 10);
  return output;
}

function createGuestName() {
  return `GuestMemory${randomDigits(6)}`;
}

function isAnonymousUser(user = state.auth.user) {
  if (!user) return false;
  return Boolean(user.is_anonymous || user.app_metadata?.provider === 'anonymous' || user.app_metadata?.providers?.includes?.('anonymous'));
}

function isRealAccountUser(user = state.auth.user) {
  return Boolean(user && !isAnonymousUser(user));
}

function canUseOnlineLobby() {
  return isRealAccountUser();
}

async function withTimeout(promise, ms = 12000, label = 'Операцията') {
  let timeoutId;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timeoutId = window.setTimeout(() => reject(new Error(`${label} отне твърде дълго.`)), ms);
      })
    ]);
  } finally {
    if (timeoutId) window.clearTimeout(timeoutId);
  }
}

function withAbortSignal(builder, signal) {
  if (builder && typeof builder.abortSignal === 'function') return builder.abortSignal(signal);
  return builder;
}

async function runSupabaseTimed(factory, ms = 12000, label = 'Операцията') {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  let timeoutId = null;
  try {
    if (controller) {
      timeoutId = window.setTimeout(() => controller.abort(), ms);
      return await factory(controller.signal);
    }
    return await withTimeout(factory(null), ms, label);
  } catch (error) {
    if (error?.name === 'AbortError') throw new Error(`${label} отне твърде дълго.`);
    throw error;
  } finally {
    if (timeoutId) window.clearTimeout(timeoutId);
  }
}


function delay(ms = 0) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function suppressBackgroundOnlineTraffic(ms = 2500) {
  const until = Date.now() + ms;
  state.online.actionBusyUntil = Math.max(state.online.actionBusyUntil || 0, until);
  state.online.suspendRefreshUntil = Math.max(state.online.suspendRefreshUntil || 0, until);
  state.online.suppressLobbyUntil = Math.max(state.online.suppressLobbyUntil || 0, until);
}

function setCachedRoom(room) {
  if (!room?.id) return room || null;
  state.online.roomFetchCache.set(room.id, { room, at: Date.now() });
  return room;
}

function getCachedRoom(roomId, maxAgeMs = 0) {
  if (!roomId) return null;
  const cached = state.online.roomFetchCache.get(roomId);
  if (!cached) return null;
  if (maxAgeMs > 0 && Date.now() - cached.at > maxAgeMs) return null;
  return cached.room || null;
}

async function copyTextValue(value, successMessage = 'Копирано.') {
  if (!value) return false;
  try {
    await navigator.clipboard.writeText(value);
    updateHud(successMessage);
    return true;
  } catch (error) {
    try {
      const helper = document.createElement('textarea');
      helper.value = value;
      helper.setAttribute('readonly', 'readonly');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      document.body.removeChild(helper);
      updateHud(successMessage);
      return true;
    } catch (fallbackError) {
      console.warn('Copy failed', fallbackError);
      return false;
    }
  }
}

function removeOnlineChannel(channel = state.online.channel) {
  if (!channel || !state.auth.client) return;
  try {
    const result = state.auth.client.removeChannel(channel);
    if (result && typeof result.catch === 'function') result.catch((error) => console.warn('Channel removal failed', error));
  } catch (error) {
    console.warn('Channel removal failed', error);
  }
}

function persistPreferredRoomId(roomId) {
  try {
    if (roomId) sessionStorage.setItem('memory_duel_preferred_room_id', roomId);
    else sessionStorage.removeItem('memory_duel_preferred_room_id');
  } catch (error) {
    console.warn('Preferred room persistence failed', error);
  }
}

function setPreferredRoomId(roomId) {
  state.online.preferredRoomId = roomId || null;
  persistPreferredRoomId(state.online.preferredRoomId);
}

function clearPreferredRoomId() {
  setPreferredRoomId(null);
}

function clearOnlineRoomLocalState() {
  state.online.room = null;
  clearPreferredRoomId();
  if (state.online.channel && state.auth.client) {
    removeOnlineChannel(state.online.channel);
  }
  state.online.channel = null;
  if (state.online.pendingTimeout) {
    clearTimeout(state.online.pendingTimeout);
    state.online.pendingTimeout = null;
  }
  state.online.lastGuestWaitingBurstKey = null;
  state.online.allowPlayingBurstUntil = 0;
}

function ensureOnlineSyncLoop() {
  if (state.online.syncInterval) return;
  state.online.syncInterval = window.setInterval(() => {
    if (!state.auth.user || !state.auth.client) return;
    if (!(state.online.room || state.ui.onlineLobbyOpen || state.playMode === 'online' || state.ui.inviteToken)) return;
    refreshOnlineState(false).catch((error) => console.warn('online sync tick failed', error));
  }, 1000);
}


function persistGuestState() {
  localStorage.setItem('memory_duel_guest_state', JSON.stringify(state.guest));
}

function loadGuestState() {
  try {
    const raw = JSON.parse(localStorage.getItem('memory_duel_guest_state') || '{}');
    if (raw && typeof raw === 'object') {
      state.guest.active = Boolean(raw.active);
      state.guest.name1 = sanitizeName(raw.name1, '');
      state.guest.name2 = sanitizeName(raw.name2, '');
    }
  } catch (error) {
    console.warn('Guest state could not be loaded', error);
  }
}

function ensureGuestNames(force = false) {
  if (!state.guest.active && !force) return;
  state.guest.active = true;
  if (!state.guest.name1 || force) state.guest.name1 = createGuestName();
  if (!isComputerMode() && (!state.guest.name2 || force)) state.guest.name2 = createGuestName();
  if (!player1NameInput.value.trim() || force) player1NameInput.value = state.guest.name1;
  if (!isComputerMode() && (!player2NameInput.value.trim() || force)) player2NameInput.value = state.guest.name2;
  persistGuestState();
}

function continueAsGuest(force = false) {
  ensureGuestNames(force);
  refreshPlayerNames();
  updatePlayerPanels();
  updateAuthUi();
  state.ui.onlinePreviewVisible = false;
  state.ui.onlineLobbyOpen = false;
  app.classList.remove('online-lobby-mode');
  if (state.playMode === 'online') state.playMode = 'local';
  renderModeSelector();
  updateHud('Локалният гост режим е активен. Гостите не се пазят в базата и не могат да отварят онлайн стаи.');
  toggleProfilePanel(false);
}

function clearGuestState() {
  state.guest = { active: false, name1: '', name2: '' };
  localStorage.removeItem('memory_duel_guest_state');
}

function getAdaptiveAuthStorage() {
  return {
    getItem(key) {
      return sessionStorage.getItem(key) || localStorage.getItem(key);
    },
    setItem(key, value) {
      const remember = Boolean(state.auth.rememberMe);
      if (remember) {
        localStorage.setItem(key, value);
        sessionStorage.removeItem(key);
      } else {
        sessionStorage.setItem(key, value);
        localStorage.removeItem(key);
      }
    },
    removeItem(key) {
      sessionStorage.removeItem(key);
      localStorage.removeItem(key);
    }
  };
}

function syncRememberMeUi() {
  if (rememberMeCheckbox) rememberMeCheckbox.checked = Boolean(state.auth.rememberMe);
}

function getInviteUrl(token) {
  if (!token) return '';
  const url = new URL(window.location.href);
  url.searchParams.set('invite', token);
  return url.toString();
}

function normalizeRpcSingle(data) {
  if (Array.isArray(data)) return data[0] || null;
  return data || null;
}

function isValidOnlineTheme(value) {
  return Boolean(value && THEMES[value]);
}

function isValidOnlineCount(value) {
  return COUNT_OPTIONS.includes(Number(value));
}

async function fetchRoomById(roomId, options = {}) {
  if (!state.auth.client || !roomId) return null;
  const { force = false, timeoutMs = 15000 } = options;
  if (!force) {
    const cached = getCachedRoom(roomId, 500);
    if (cached) return cached;
    if (state.online.roomFetchInflight && state.online.roomFetchInflightId === roomId) {
      try {
        return await state.online.roomFetchInflight;
      } catch (error) {
        return null;
      }
    }
  }

  const request = (async () => {
    try {
      const { data, error } = await runSupabaseTimed((signal) => withAbortSignal(
        state.auth.client.from('rooms').select('*').eq('id', roomId).maybeSingle(),
        signal
      ), timeoutMs, 'Опресняването на стаята');
      if (error) return null;
      return setCachedRoom(data || null);
    } catch (error) {
      console.warn('fetchRoomById failed', error);
      return getCachedRoom(roomId, 2500) || null;
    }
  })();

  state.online.roomFetchInflight = request;
  state.online.roomFetchInflightId = roomId;
  try {
    return await request;
  } finally {
    if (state.online.roomFetchInflight === request) {
      state.online.roomFetchInflight = null;
      state.online.roomFetchInflightId = null;
    }
  }
}

function getRoomActivityTime(room) {
  if (!room) return 0;
  const candidate = room.status === 'playing'
    ? (room.turn_started_at || room.updated_at || room.created_at || null)
    : (room.updated_at || room.created_at || room.turn_started_at || null);
  if (!candidate) return 0;
  const value = new Date(candidate).getTime();
  return Number.isFinite(value) ? value : 0;
}

function getRoomFreshnessTime(room) {
  if (!room) return 0;
  const candidates = [room.updated_at, room.turn_started_at, room.created_at]
    .map((value) => new Date(value || 0).getTime())
    .filter((value) => Number.isFinite(value) && value > 0);
  return candidates.length ? Math.max(...candidates) : 0;
}

function roomSnapshotKey(room) {
  if (!room) return '';
  return [
    room.id || '',
    room.status || '',
    room.host_user_id || '',
    room.guest_user_id || '',
    room.current_player_slot || 0,
    getRoomFreshnessTime(room),
    Array.isArray(room.flipped_indices) ? room.flipped_indices.join(',') : '',
    Array.isArray(room.matched_indices) ? room.matched_indices.length : 0,
    JSON.stringify(room.scores || {}),
    Array.isArray(room.deck) ? room.deck.length : 0,
    room.lock_board ? '1' : '0',
    room.winner_slot ?? '',
    room.rematch_host_ready ? '1' : '0',
    room.rematch_guest_ready ? '1' : '0',
    room.rematch_nonce ?? 0
  ].join('|');
}

function hasMeaningfulRoomChange(current, incoming) {
  if (!current || !incoming) return true;
  return roomSnapshotKey(current) !== roomSnapshotKey(incoming);
}

async function rpcCall(name, args = {}, timeoutMs = 10000, label = 'Операцията') {
  if (!state.auth.client) throw new Error('Няма активна Supabase връзка.');
  const response = await runSupabaseTimed((signal) => withAbortSignal(state.auth.client.rpc(name, args), signal), timeoutMs, label);
  if (response.error) throw new Error(response.error.message || `${label} се провали.`);
  return response.data;
}


function shouldIgnoreIncomingRoom(current, incoming) {
  if (!current || !incoming || current.id !== incoming.id) return false;

  if (current.status === 'playing' && incoming.status === 'waiting') {
    const currentDeckSize = Array.isArray(current.deck) ? current.deck.length : 0;
    const incomingDeckSize = Array.isArray(incoming.deck) ? incoming.deck.length : 0;
    const currentTime = Math.max(getRoomFreshnessTime(current), getRoomActivityTime(current));
    const incomingTime = Math.max(getRoomFreshnessTime(incoming), getRoomActivityTime(incoming));
    const withinPlayingGrace = Date.now() < (state.online.playingGraceUntil || 0);
    if (currentDeckSize > 0) return true;
    if (withinPlayingGrace) return true;
    if (incomingDeckSize === 0 && incomingTime && currentTime && incomingTime <= currentTime + 10000) return true;
  }

  if (current.status === 'finished' && incoming.status !== 'finished') {
    const currentTime = Math.max(getRoomFreshnessTime(current), getRoomActivityTime(current));
    const incomingTime = Math.max(getRoomFreshnessTime(incoming), getRoomActivityTime(incoming));
    if (incomingTime && currentTime && incomingTime <= currentTime + 1500) return true;
  }

  return false;
}

function adoptIncomingRoom(incoming) {
  if (!incoming) return false;
  const current = state.online.room;
  if (current && !hasMeaningfulRoomChange(current, incoming)) return false;
  if (shouldIgnoreIncomingRoom(current, incoming)) return false;
  state.online.room = incoming;
  state.online.refreshMisses = 0;
  setCachedRoom(incoming);
  setPreferredRoomId(incoming.id);
  clearInviteContextIfRoomClaimed(incoming);
  return true;
}

function isRoomInactive(room) {
  return Boolean(room && room.status === 'playing' && getRoomActivityTime(room) && (Date.now() - getRoomActivityTime(room) >= ONLINE_INACTIVITY_LIMIT_MS));
}

function isWaitingRoomExpired(room) {
  return Boolean(
    room
    && room.status === 'waiting'
    && !room.guest_user_id
    && getRoomActivityTime(room)
    && (Date.now() - getRoomActivityTime(room) >= ONLINE_WAITING_ROOM_LIMIT_MS)
  );
}

function shouldAutoRestoreWaitingRoom(room) {
  if (!room || room.status !== 'waiting') return false;
  const activity = getRoomActivityTime(room);
  if (!activity) return false;
  const age = Date.now() - activity;
  return room.guest_user_id
    ? age <= ONLINE_WAITING_RESTORE_WITH_GUEST_MS
    : age <= ONLINE_WAITING_RESTORE_EMPTY_MS;
}

function shouldAutoOpenOnlineAfterAuth() {
  if (isAnonymousUser()) {
    return Boolean(state.ui.inviteToken || state.ui.pendingInviteAutoJoin || state.online.room);
  }
  return Boolean(
    state.ui.inviteToken
    || state.ui.pendingOnlineIntent
    || state.ui.pendingInviteAutoJoin
    || state.ui.onlineLobbyOpen
    || (state.online.room && state.online.room.status === 'playing')
  );
}

function queuePersistentNotice(message = '') {
  state.ui.persistentNotice = message || '';
}

async function autoFinishRoomForInactivity(room, options = {}) {
  if (!state.auth.client || !room?.id) return null;
  if (state.online.autoFinishing) return null;
  const { keepLocalState = true } = options;
  if (room.status === 'finished' && Number(room.winner_slot) === ONLINE_AUTO_FINISH_WINNER_SLOT) return room;
  if (!isRoomInactive(room) && room.status !== 'finished') return null;

  state.online.autoFinishing = true;
  try {
    let data = room;
    if (room.status !== 'finished') {
      const response = await state.auth.client
        .from('rooms')
        .update({
          status: 'finished',
          winner_slot: ONLINE_AUTO_FINISH_WINNER_SLOT,
          lock_board: false,
          flipped_indices: []
        })
        .eq('id', room.id)
        .eq('status', 'playing')
        .select()
        .maybeSingle();
      if (response.error) return null;
      data = response.data || (await fetchRoomById(room.id)) || room;
    }

    if (!keepLocalState) {
      queuePersistentNotice('Предишната онлайн игра беше приключена автоматично поради липса на активност над 15 минути.');
      if (state.online.room?.id === room.id) state.online.room = null;
      return data;
    }

    state.online.room = data;
    syncFromOnlineRoom();
    return data;
  } finally {
    state.online.autoFinishing = false;
  }
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDateTime(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat('bg-BG', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

function getAuthRedirectUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

function getTurnDurationMs() {
  return state.timers.durationMs;
}

function getOnlineTurnAnchor(room = state.online.room) {
  if (!room) return null;
  const turnAnchor = room.turn_started_at || null;
  if (turnAnchor && !Number.isNaN(new Date(turnAnchor).getTime())) return turnAnchor;
  return room.updated_at || room.created_at || null;
}

function getNowIso() {
  return new Date().toISOString();
}

function scheduleOnlineRefreshBurst(delays = [0, 600], options = {}) {
  if (!state.auth.client || !state.auth.user) return;
  const { allowDuringPlaying = false } = options;
  state.online.refreshBurstTimers = state.online.refreshBurstTimers || [];
  state.online.refreshBurstTimers.forEach((id) => clearTimeout(id));
  state.online.refreshBurstTimers = [];
  if (allowDuringPlaying) state.online.allowPlayingBurstUntil = Date.now() + 2500;
  delays.slice(0, 2).forEach((delayMs) => {
    const id = window.setTimeout(() => {
      const isPlaying = state.online.room?.status === 'playing';
      if (isPlaying && !allowDuringPlaying && Date.now() > (state.online.allowPlayingBurstUntil || 0)) return;
      refreshOnlineState(true).catch((error) => console.warn('burst refresh failed', error));
    }, delayMs);
    state.online.refreshBurstTimers.push(id);
  });
}

async function forceUiResync(options = {}) {
  if (!state.auth.client) {
    updateAuthUi();
    return;
  }
  const roomId = options.roomId || state.online.room?.id || state.online.preferredRoomId || null;
  let changed = false;
  if (state.auth.user && roomId) {
    const fresh = await fetchRoomById(roomId);
    if (fresh) {
      changed = adoptIncomingRoom(fresh) || changed;
      if (!state.online.channel || state.online.subscribedRoomId !== fresh.id) {
        Promise.resolve().then(() => subscribeToRoom(fresh.id)).catch((error) => console.warn('forceUiResync subscribe failed', error));
      }
    }
  }
  if (state.auth.user && !state.online.room) {
    const active = await loadMyActiveRoom();
    if (active) {
      changed = true;
      if (!state.online.channel || state.online.subscribedRoomId !== active.id) {
        Promise.resolve().then(() => subscribeToRoom(active.id)).catch((error) => console.warn('forceUiResync subscribe failed', error));
      }
    }
  }
  if (state.auth.user && canUseOnlineLobby()) {
    loadLobbyRooms().catch((error) => console.warn('forceUiResync lobby failed', error));
  }
  if (state.online.room && state.online.room.status === 'playing') {
    state.playMode = 'online';
    state.ui.onlineLobbyOpen = false;
  }
  if (changed && state.online.room) syncFromOnlineRoom();
  updateAuthUi();
  renderModeSelector();
  renderInviteLanding();
}

function scheduleHardUiSync(delays = [0, 400, 1200], options = {}) {
  (state.online.hardSyncTimers || []).forEach((id) => clearTimeout(id));
  state.online.hardSyncTimers = [];
  delays.forEach((delayMs) => {
    const id = window.setTimeout(() => {
      forceUiResync(options).catch((error) => console.warn('hard UI sync failed', error));
    }, delayMs);
    state.online.hardSyncTimers.push(id);
  });
}


async function confirmRoomState(roomId, predicate, timeoutMs = 12000, intervalMs = 350) {
  const startedAt = Date.now();
  let lastRoom = null;
  while (Date.now() - startedAt < timeoutMs) {
    const fresh = await fetchRoomById(roomId);
    if (fresh) {
      lastRoom = fresh;
      const adopted = adoptIncomingRoom(fresh);
      if (adopted) syncFromOnlineRoom();
      if (!state.online.channel || state.online.subscribedRoomId !== fresh.id) {
        Promise.resolve().then(() => subscribeToRoom(fresh.id)).catch((error) => console.warn('confirmRoomState subscribe failed', error));
      }
      if (predicate(fresh)) return fresh;
    }
    await delay(intervalMs);
  }
  return lastRoom;
}

function trackAsync(promise) {
  const tracker = { done: false, value: null, error: null };
  Promise.resolve(promise)
    .then((value) => {
      tracker.value = value;
      return value;
    })
    .catch((error) => {
      tracker.error = error;
      return null;
    })
    .finally(() => {
      tracker.done = true;
    });
  return tracker;
}

async function waitForTrackedRoom(tracker, poller, predicate, timeoutMs = 12000, intervalMs = 250) {
  const startedAt = Date.now();
  let lastRoom = null;
  while (Date.now() - startedAt < timeoutMs) {
    if (tracker?.value) {
      lastRoom = tracker.value;
      if (!predicate || predicate(lastRoom)) return lastRoom;
    }
    if (poller) {
      try {
        const candidate = await poller();
        if (candidate) {
          lastRoom = candidate;
          if (!predicate || predicate(candidate)) return candidate;
        }
      } catch (error) {
        console.warn('waitForTrackedRoom poll failed', error);
      }
    }
    await delay(intervalMs);
  }
  if (tracker?.value) return tracker.value;
  return lastRoom;
}


function getTurnRemainingMs() {
  const onlineTurnAnchor = getOnlineTurnAnchor();
  if (state.playMode === 'online' && state.online.room?.status === 'playing' && onlineTurnAnchor) {
    return Math.max(0, getTurnDurationMs() - (Date.now() - new Date(onlineTurnAnchor).getTime()));
  }
  if (state.started && state.playMode !== 'online' && !state.gameOver && state.timers.localTurnStartedAt) {
    if (isComputerMode() && state.currentPlayer === 2) return null;
    return Math.max(0, getTurnDurationMs() - (Date.now() - state.timers.localTurnStartedAt));
  }
  return null;
}

function setLocalTurnStart() {
  state.timers.localTurnStartedAt = Date.now();
  state.online.lastTimeoutKey = null;
  updateTurnTimerChip();
}

function clearTurnStart() {
  state.timers.localTurnStartedAt = null;
  state.online.lastTimeoutKey = null;
  updateTurnTimerChip();
}

function updateTurnTimerChip() {
  if (!turnTimerChip) return;
  const remaining = getTurnRemainingMs();
  if (remaining === null) {
    turnTimerChip.textContent = `Таймер: ${Math.round(getTurnDurationMs() / 1000)}s`;
    turnTimerChip.classList.remove('danger');
    return;
  }
  const seconds = Math.ceil(remaining / 1000);
  turnTimerChip.textContent = `Таймер: ${seconds}s`;
  turnTimerChip.classList.toggle('danger', seconds <= 3);
}

function ensureTurnLoop() {
  if (state.timers.interval) return;
  state.timers.interval = setInterval(async () => {
    updateTurnTimerChip();
    const onlineTurnAnchor = getOnlineTurnAnchor();
    if (state.playMode === 'online' && state.online.room?.status === 'playing' && onlineTurnAnchor) {
      const remaining = getTurnRemainingMs();
      if (remaining === 0 && !state.online.room.lock_board) {
        const key = `${state.online.room.id}:${state.online.room.current_player_slot}:${onlineTurnAnchor}`;
        if (state.online.lastTimeoutKey !== key) {
          const handled = await handleOnlineTurnTimeout();
          if (handled) state.online.lastTimeoutKey = key;
        }
      }
    } else if (state.started && state.playMode !== 'online' && !state.gameOver && state.timers.localTurnStartedAt) {
      const remaining = getTurnRemainingMs();
      if (remaining === 0) {
        handleLocalTurnTimeout();
      }
    }
  }, 250);
}

async function refreshOnlineState(force = false) {
  if (!state.auth.client || !state.auth.user) return;
  const now = Date.now();
  if (state.online.refreshBusy) return;
  const currentRoom = state.online.room;
  const inPlaying = currentRoom?.status === 'playing';
  const isMutating = Boolean(state.online.startBusy || state.online.joinBusy || state.online.createBusy || state.online.flipBusy);
  const minGap = inPlaying ? 900 : (currentRoom ? 900 : 1500);
  if (!force && now - (state.online.lastRefreshAt || 0) < minGap) return;
  if ((inPlaying || isMutating) && now < (state.online.suspendRefreshUntil || 0) && !force) return;
  if (isMutating && !force) return;
  state.online.refreshBusy = true;
  state.online.lastRefreshAt = now;
  try {
    if (currentRoom?.id) {
      const fresh = await fetchRoomById(currentRoom.id);
      if (fresh) {
        state.online.refreshMisses = 0;
        if (currentRoom.status === 'playing' && fresh.status === 'waiting') {
          const currentFresh = getRoomFreshnessTime(currentRoom);
          const incomingFresh = getRoomFreshnessTime(fresh);
          if (incomingFresh <= currentFresh + 60000) return;
        }
        const previousGuest = currentRoom.guest_user_id || null;
        const adopted = adoptIncomingRoom(fresh);
        if (adopted) {
          if (currentRoom.status === 'waiting' && !previousGuest && fresh.guest_user_id && myRoomSlot() === 1) {
            const guestLabel = sanitizeName(fresh.guest_name || 'Гост', 'Гост');
            showFeedback(onlineLobbyFeedback, `Играч ${guestLabel} се присъедини. Вече можеш да натиснеш „Старт онлайн“.`, 'success');
            updateHud(`Играч ${guestLabel} се присъедини към стаята. Натисни „Старт онлайн“.`);
          }
          syncFromOnlineRoom();
        }
      } else {
        state.online.refreshMisses = (state.online.refreshMisses || 0) + 1;
        if (currentRoom.status === 'playing' && state.online.refreshMisses < 25) return;
        if (currentRoom.status === 'waiting' && state.online.refreshMisses < 4) return;
        clearOnlineRoomLocalState();
        if (state.playMode === 'online') {
          resetRoundState();
          updateHud('Онлайн стаята вече не съществува или е приключила.');
        }
      }
    } else if (state.online.preferredRoomId || state.ui.onlineLobbyOpen || state.ui.pendingInviteAutoJoin) {
      const active = await loadMyActiveRoom();
      if (active) {
        adoptIncomingRoom(active);
        syncFromOnlineRoom();
      }
    }

    if (state.ui.onlineLobbyOpen && canUseOnlineLobby() && Date.now() >= (state.online.suppressLobbyUntil || 0) && !state.online.startBusy && !state.online.joinBusy && !state.online.createBusy && !state.online.flipBusy) {
      await loadLobbyRooms();
    }
  } finally {
    state.online.refreshBusy = false;
  }
}

function getOtherSlot(slot) {
  return slot === 1 ? 2 : 1;
}

function handleLocalTurnTimeout() {
  if (!state.started || state.gameOver || state.playMode === 'online') return;
  if (isComputerMode() && state.currentPlayer === 2) return;
  const nextPlayer = getOtherSlot(state.currentPlayer);
  state.lockBoard = true;
  state.flipped.forEach((card) => card.classList.remove('flip'));
  state.flipped = [];
  state.currentPlayer = nextPlayer;
  state.lockBoard = false;
  setLocalTurnStart();
  updatePlayerPanels();
  updateHud(`Времето изтече. Ходът преминава към ${getPlayerName(state.currentPlayer)}.`);
  if (isComputerTurn()) queueComputerTurn(450);
}

async function handleOnlineTurnTimeout() {
  const room = state.online.room;
  const slot = myRoomSlot();
  if (!room || room.status !== 'playing' || room.lock_board) return false;
  if (!slot || slot !== room.current_player_slot) return false;
  const updated = normalizeRpcSingle(await rpcCall('pass_turn_if_expired', { p_room_id: room.id }, 8000, 'Смяната на хода'));
  if (!updated) {
    state.online.lastTimeoutKey = null;
    return false;
  }
  adoptIncomingRoom(updated);
  syncFromOnlineRoom();
  scheduleHardUiSync([0, 300, 900], { roomId: updated.id || room.id });
  updateHud(`Времето за ход изтече. Ред е на ${getPlayerName(updated.current_player_slot || getOtherSlot(room.current_player_slot || 1))}.`);
  return true;
}

function setFieldError(field, errorEl, message = '') {
  if (!field || !errorEl) return;
  field.classList.toggle('has-error', Boolean(message));
  errorEl.textContent = message;
}

function clearAllValidation() {
  [
    [loginEmailField, loginEmailError],
    [loginPasswordField, loginPasswordError],
    [registerUsernameField, registerUsernameError],
    [registerFirstNameField, registerFirstNameError],
    [registerLastNameField, registerLastNameError],
    [registerEmailField, registerEmailError],
    [registerPasswordField, registerPasswordError],
    [joinRoomField, joinRoomError],
    [roomPasswordField, roomPasswordError],
    [joinPasswordField, joinPasswordError]
  ].forEach(([field, errorEl]) => setFieldError(field, errorEl, ''));
}

function showFeedback(target, message = '', type = '') {
  if (!target) return;
  target.textContent = message;
  target.classList.remove('is-error', 'is-success');
  if (type) target.classList.add(type === 'error' ? 'is-error' : 'is-success');
}

function friendlyAuthError(error) {
  const code = String(error?.code || '').toLowerCase();
  const message = String(error?.message || 'Неочаквана грешка.');
  const normalized = message.toLowerCase();

  if (code === 'anonymous_provider_disabled') return 'Не бяха подадени валидни данни за регистрация. Попълни всички полета и опитай отново.';
  if (code === 'email_exists') return 'Вече има профил с този имейл.';
  if (code === 'email_address_invalid') return 'Имейлът не е валиден.';
  if (code === 'weak_password') return 'Паролата е твърде слаба.';
  if (code === 'validation_failed') return 'Провери полетата и опитай отново.';
  if (normalized.includes('invalid login credentials')) return 'Невалиден имейл/username или парола.';
  if (normalized.includes('email not confirmed')) return 'Потвърди имейла си и опитай отново.';
  if (normalized.includes('user already registered')) return 'Вече има профил с този имейл.';
  if (normalized.includes('password should be at least')) return 'Паролата е твърде кратка.';
  if (normalized.includes('duplicate key value')) return 'Това потребителско име вече се използва.';
  if (normalized.includes('anonymous sign-ins are disabled')) return 'Регистрацията е подала невалидни или празни данни. Обнови страницата и попълни полетата наново.';
  if (normalized.includes('network')) return 'Проблем с връзката. Опитай отново.';
  return message;
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateName(value) {
  return /^[\p{L}][\p{L}\s'-]{1,23}$/u.test(value);
}

function validateUsername(value) {
  return /^[a-zA-Z0-9_]{3,24}$/.test(value);
}

function validatePassword(value) {
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);
}

function toggleProfilePanel(force) {
  if (app.classList.contains('game-mode')) {
    state.ui.profileOpen = false;
  authBackdrop?.classList.add('hidden');
  app.classList.remove('auth-open');
  } else {
    state.ui.profileOpen = typeof force === 'boolean' ? force : !state.ui.profileOpen;
  }

  authPanel.classList.toggle('hidden', !state.ui.profileOpen);
  authBackdrop?.classList.toggle('hidden', !state.ui.profileOpen);
  profileButton?.setAttribute('aria-expanded', state.ui.profileOpen ? 'true' : 'false');
  app.classList.toggle('auth-open', state.ui.profileOpen);
}



function setOnlineLobbyOpen(force) {
  const canOpenForInvite = Boolean(state.ui.inviteToken) && !state.started;
  const open = Boolean(force) && isOnlineMode() && (Boolean(state.auth.user) || canOpenForInvite) && !state.started;
  state.ui.onlineLobbyOpen = open;
  app.classList.toggle('online-lobby-mode', open);
  document.body.classList.toggle('lobby-open', open);
  onlineLobby.classList.toggle('hidden', !open);
  if (open) {
    if (!isValidOnlineTheme(state.online.selectedTheme)) {
      state.online.selectedTheme = isValidOnlineTheme(state.selectedTheme) ? state.selectedTheme : null;
    }
    if (!isValidOnlineCount(state.online.selectedCardCount)) {
      state.online.selectedCardCount = isValidOnlineCount(state.selectedCardCount) ? Number(state.selectedCardCount) : 20;
    }
    state.online.accessType = ROOM_ACCESS_OPTIONS[state.online.accessType] ? state.online.accessType : 'public';
    renderRoomAccessSelector();
    renderOnlineThemeSelector(true);
    renderOnlineCountSelector(true);
    toggleProfilePanel(false);
    window.scrollTo(0, 0);
    const hasRoom = Boolean(state.online.room);
    showFeedback(
      onlineLobbyFeedback,
      hasRoom
        ? 'Стаята е активна. Изчакай втория играч или натисни „Старт онлайн“, когато и двамата сте вътре.'
        : 'Избери тип стая, тема и брой карти, после създай стаята.',
      hasRoom ? 'success' : ''
    );
    refreshOnlineState(true);
  }
}


function exitOnlineLobby() {
  state.ui.onlineLobbyOpen = false;
  app.classList.remove('online-lobby-mode');
  document.body.classList.remove('lobby-open');
  onlineLobby.classList.add('hidden');
  if (state.playMode === 'online' && !state.started) {
    state.playMode = 'local';
    renderModeSelector();
    updatePlayerInputUi();
    updatePlayerPanels();
    updateAuthUi();
    updateHud('Върна се към началния екран.');
  }
}

function openProfileFromPreview() {
  state.ui.onlinePreviewVisible = true;
  state.ui.pendingOnlineIntent = true;
  renderModeSelector();
  toggleProfilePanel(true);
  updateHud('Онлайн режимът иска профил. Влез, регистрирай се или продължи локално като гост.');
}

function setRoomAccess(accessType) {
  state.online.accessType = ROOM_ACCESS_OPTIONS[accessType] ? accessType : 'public';
  renderRoomAccessSelector();
  roomPasswordField.classList.toggle('hidden', state.online.accessType !== 'password');
  if (state.online.accessType !== 'password') {
    roomPasswordInput.value = '';
    setFieldError(roomPasswordField, roomPasswordError, '');
  }
}

function isInvitePreviewMode() {
  const previewId = state.online.invitePreview?.id || null;
  if (!state.ui.inviteToken || !previewId) return false;
  return !state.online.room || state.online.room.id !== previewId;
}

function getInvitePreviewRoomSummary() {
  const preview = state.online.invitePreview;
  if (!preview) return '';
  return `${preview.host_name || 'Домакин'} • ${THEMES[preview.selected_theme]?.name || preview.selected_theme} • ${preview.selected_card_count} карти.`;
}

function renderRoomAccessSelector() {
  roomAccessSelector.innerHTML = Object.entries(ROOM_ACCESS_OPTIONS).map(([key, option]) => `
    <button class="room-access-option ${state.online.accessType === key ? 'selected' : ''}" data-access="${key}" type="button">
      <span>${option.badge}</span>
      <strong>${option.name}</strong>
    </button>
  `).join('');

  roomAccessSelector.querySelectorAll('.room-access-option').forEach((button) => {
    button.addEventListener('click', () => setRoomAccess(button.dataset.access));
  });
}

function renderRoomList() {
  if (!roomList) return;

  if (isInvitePreviewMode() && state.online.invitePreview) {
    const preview = state.online.invitePreview;
    const inviteStateText = preview.status === 'playing'
      ? '▶ Играта вече е започнала.'
      : preview.has_guest
        ? '👥 В стаята вече има двама играчи. Изчакай поканата да се освободи.'
        : '🔗 Това е поканената стая. Избери вход с профил или като гост.';
    roomList.innerHTML = `
      <article class="room-row room-row-own">
        <div class="room-row-top">
          <div class="room-row-main">
            <div class="room-row-title">Поканена стая • ${escapeHtml(preview.host_name || 'Домакин')}</div>
            <div class="room-row-meta room-code-line">Код ${escapeHtml(preview.code)} <button class="room-code-copy-btn" type="button" data-room-code="${escapeHtml(preview.code)}" aria-label="Копирай кода ${escapeHtml(preview.code)}" title="Копирай кода">📋</button> • ${escapeHtml(THEMES[preview.selected_theme]?.name || preview.selected_theme)} • ${preview.selected_card_count} карти</div>
          </div>
          <span class="room-state-pill invite">С линк</span>
        </div>
        <div class="room-row-bottom">
          <div class="room-row-meta">${inviteStateText}</div>
        </div>
      </article>
    `;
    showFeedback(
      roomListFeedback,
      preview.status === 'waiting' ? 'Поканата е заредена. Избери как да влезеш в стаята.' : 'Тази покана вече не е в waiting режим.',
      preview.status === 'waiting' ? 'success' : 'error'
    );
    return;
  }

  if (!state.auth.user) {
    roomList.innerHTML = '';
    showFeedback(roomListFeedback, 'Влез в профила си, за да виждаш отворените онлайн стаи.', '');
    return;
  }

  const ownRoom = state.online.room && ['waiting', 'playing'].includes(state.online.room.status)
    ? state.online.room
    : null;
  const rooms = [...state.online.publicRooms];
  const cards = [];

  if (ownRoom) {
    const slot = myRoomSlot();
    const amHost = slot === 1;
    const ownRoomHint = ownRoom.status === 'playing'
      ? (amHost ? '▶ Онлайн мачът е активен. Играта вече е стартирала.' : '▶ Онлайн мачът е активен. Изчакай своя ред и започвайте.')
      : ownRoom.guest_user_id
        ? (amHost ? '👥 Вторият играч е влязъл. Можеш да натиснеш „Старт онлайн“.' : '👥 Влезе в стаята. Изчакай домакинът да натисне „Старт онлайн“.')
        : (ownRoom.access_type === 'invite' ? '🔗 Стаята е с invite линк. Изпрати поканата на конкретния опонент.' : '⌛ Стаята чака втори играч.');
    const roomTitle = amHost ? `Твоята стая • ${escapeHtml(ownRoom.host_name || 'Домакин')}` : `Стая на ${escapeHtml(ownRoom.host_name || 'Домакин')}`;
    const ownRoomButtonLabel = ownRoom.status === 'playing'
      ? 'Активна игра'
      : amHost
        ? (ownRoom.access_type === 'invite' ? 'С покана' : 'Домакин')
        : 'Чака старт';
    cards.push(`
      <article class="room-row room-row-own">
        <div class="room-row-top">
          <div>
            <div class="room-row-title">${roomTitle}</div>
            <div class="room-row-meta room-code-line">Код ${escapeHtml(ownRoom.code)} <button class="room-code-copy-btn" type="button" data-room-code="${escapeHtml(ownRoom.code)}" aria-label="Копирай кода ${escapeHtml(ownRoom.code)}" title="Копирай кода">📋</button> • ${escapeHtml(THEMES[ownRoom.selected_theme]?.name || ownRoom.selected_theme)} • ${ownRoom.selected_card_count} карти</div>
          </div>
          <span class="room-state-pill ${ownRoom.access_type || 'public'}">${ROOM_ACCESS_OPTIONS[ownRoom.access_type || 'public']?.name || 'Свободно'}</span>
        </div>
        <div class="room-row-bottom">
          <div class="room-row-meta">${ownRoomHint}</div>
          <button class="btn btn-secondary btn-small" type="button" disabled>${ownRoomButtonLabel}</button>
        </div>
      </article>
    `);
  }

  if (rooms.length) {
    cards.push(...rooms.map((room) => `
      <article class="room-row">
        <div class="room-row-top">
          <div>
            <div class="room-row-title">${escapeHtml(room.host_name || 'Домакин')}</div>
            <div class="room-row-meta room-code-line">Код ${escapeHtml(room.code)} <button class="room-code-copy-btn" type="button" data-room-code="${escapeHtml(room.code)}" aria-label="Копирай кода ${escapeHtml(room.code)}" title="Копирай кода">📋</button> • ${escapeHtml(THEMES[room.selected_theme]?.name || room.selected_theme)} • ${room.selected_card_count} карти</div>
          </div>
          <span class="room-state-pill ${room.access_type || 'public'}">${ROOM_ACCESS_OPTIONS[room.access_type || 'public']?.name || 'Свободно'}</span>
        </div>
        <div class="room-row-bottom">
          <div class="room-row-meta">${room.access_type === 'password' ? '🔐 Изисква парола' : room.access_type === 'invite' ? '🔗 Само с линк' : '🌐 Отворена за всеки'} • Създадена ${formatDateTime(room.created_at)}</div>
          <button class="btn btn-secondary btn-small room-join-btn" data-room-id="${room.id}" data-access="${room.access_type || 'public'}" data-code="${room.code}" type="button">${room.access_type === 'password' ? 'Въведи парола' : 'Влез'}</button>
        </div>
      </article>
    `));
  }

  if (!cards.length) {
    roomList.innerHTML = '';
    showFeedback(roomListFeedback, 'В момента няма свободни стаи. Създай първата.', '');
    return;
  }

  if (ownRoom && rooms.length) {
    showFeedback(roomListFeedback, `Твоята стая е активна. Освен нея има още ${rooms.length} свободни стаи.`, 'success');
  } else if (ownRoom) {
    showFeedback(roomListFeedback, 'Твоята стая е активна и чака втори играч.', 'success');
  } else {
    showFeedback(roomListFeedback, `Намерени са ${rooms.length} свободни стаи.`, 'success');
  }

  roomList.innerHTML = cards.join('');
  roomList.querySelectorAll('.room-join-btn').forEach((button) => {
    button.addEventListener('click', () => handleListedRoomJoin(button.dataset.roomId, button.dataset.access, button.dataset.code));
  });
  roomList.querySelectorAll('.room-code-copy-btn').forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const code = button.dataset.roomCode || '';
      const copied = await copyTextValue(code, `Кодът ${code} е копиран.`);
      if (copied) {
        button.classList.add('copied');
        window.setTimeout(() => button.classList.remove('copied'), 1200);
      }
    });
  });
}

function updateProfileLauncher() {
  const hasSession = Boolean(state.auth.user);
  const loggedIn = isRealAccountUser();
  const anonymous = Boolean(hasSession && isAnonymousUser());
  const sessionLabel = loggedIn ? getDisplayName() : (anonymous ? 'Гост' : (state.guest.active ? state.guest.name1 || 'Гост' : 'Вход / регистрация'));
  profileButtonTitle.textContent = loggedIn ? sessionLabel : 'Профил';
  profileButtonSubtext.textContent = loggedIn ? 'Онлайн активен' : (anonymous ? 'Гост по покана' : (state.guest.active ? 'Гост режим (локален)' : 'Отключи онлайн режим'));
  profileButton.classList.toggle('logged', loggedIn);
}

function resolveInviteTokenFromUrl() {
  const params = new URLSearchParams(window.location.search);
  state.ui.inviteToken = params.get('invite') || null;
}

function clearInviteTokenFromUrl() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has('invite')) return;
  url.searchParams.delete('invite');
  window.history.replaceState({}, '', url.toString());
}

function clearInviteContext() {
  state.ui.inviteToken = null;
  state.online.invitePreview = null;
  state.online.invitePreviewLoaded = false;
  clearInviteTokenFromUrl();
  renderInviteLanding();
}

function clearInviteContextIfRoomClaimed(room = state.online.room) {
  if (!state.ui.inviteToken || !room) return false;
  if (room.invite_token && room.invite_token === state.ui.inviteToken) {
    clearInviteContext();
    return true;
  }
  return false;
}

function shouldShowInviteLinkCard() {
  const room = state.online.room;
  return Boolean(room && room.access_type === 'invite' && state.online.accessType === 'invite');
}

function isSameInviteRoom(room = state.online.room, preview = state.online.invitePreview) {
  if (!state.ui.inviteToken || !room) return false;
  if (room.invite_token && room.invite_token === state.ui.inviteToken) return true;
  return Boolean(preview && room.id === preview.id);
}

function shouldShowInviteLanding() {
  if (!state.ui.inviteToken || state.started) return false;
  return !isSameInviteRoom();
}

function isWaitingGuestView(room = state.online.room) {
  return Boolean(
    room
    && room.status === 'waiting'
    && state.auth.user
    && room.guest_user_id === state.auth.user.id
    && room.host_user_id !== state.auth.user.id
  );
}

function getInviteGuestInput() {
  if (inviteLanding && !inviteLanding.classList.contains('hidden')) return inviteLandingGuestInput;
  return inviteGuestNameInput;
}

function renderInviteLanding() {
  if (!inviteLanding) return;
  const show = shouldShowInviteLanding();
  inviteLanding.classList.toggle('hidden', !show);
  if (!show) return;

  const preview = state.online.invitePreview;
  const previewLoaded = state.online.invitePreviewLoaded;
  const loggedIn = Boolean(state.auth.user);
  const validPreview = Boolean(preview);
  const conflictMessage = getInviteConflictMessage();
  const titleName = preview?.host_name || 'домакин';
  const themeName = preview?.selected_theme ? (THEMES[preview.selected_theme]?.name || preview.selected_theme) : '—';
  const countText = preview?.selected_card_count ? `${preview.selected_card_count} карти` : '—';

  inviteLandingTitle.textContent = validPreview
    ? `${titleName} те кани на онлайн двубой`
    : 'Онлайн покана';

  inviteLandingText.textContent = conflictMessage
    ? `${conflictMessage} Можеш да влезеш с профил или да се присъединиш като гост само за тази покана.`
    : validPreview
      ? 'Това е директна покана за конкретна стая. Избери дали да влезеш с профил или като гост с еднократен псевдоним.'
      : (previewLoaded
          ? 'Не успяхме да заредим детайлите за поканата, но можеш да продължиш с профил или като гост.'
          : 'Подготвяме поканата. Можеш да въведеш псевдоним и да продължиш веднага.');

  inviteLandingMeta.innerHTML = validPreview
    ? `
      <span class="meta-chip">Домакин: ${escapeHtml(titleName)}</span>
      <span class="meta-chip">Тема: ${escapeHtml(themeName)}</span>
      <span class="meta-chip">${escapeHtml(countText)}</span>
      <span class="meta-chip">Код: ${escapeHtml(preview.code || '—')}</span>
    `
    : `
      <span class="meta-chip">Покана по линк</span>
      <span class="meta-chip">Токен: ${escapeHtml(String(state.ui.inviteToken || '').slice(0, 8))}…</span>
      <span class="meta-chip">Статус: ${previewLoaded ? 'готово' : 'зареждане'}</span>
    `;

  const canShowGuestFlow = Boolean(state.ui.inviteToken);

  inviteLandingGuestField.classList.toggle('hidden', !canShowGuestFlow);
  inviteLandingGuestButton.classList.toggle('hidden', !canShowGuestFlow);
  inviteLandingLoginButton.classList.remove('hidden');
  inviteLandingJoinButton.classList.add('hidden');
  inviteLandingLoginButton.textContent = 'Влез в профил';
  inviteLandingGuestButton.textContent = 'Присъедини се като гост';

  if (canShowGuestFlow && !inviteLandingGuestInput.value.trim()) inviteLandingGuestInput.value = createGuestName();
  inviteLandingGuestButton.disabled = state.online.joinBusy || state.online.inviteAutoJoinBusy;
  inviteLandingLoginButton.disabled = state.online.joinBusy || state.online.inviteAutoJoinBusy;
}

function getInviteConflictMessage() {
  const room = state.online.room;
  const preview = state.online.invitePreview;
  const user = state.auth.user;
  if (!state.ui.inviteToken || !preview || !room || !user) return '';
  if (room.id === preview.id) return '';
  if (room.invite_token && room.invite_token === state.ui.inviteToken) return '';
  if (!['waiting', 'playing'].includes(room.status)) return '';
  const belongsToUser = room.host_user_id === user.id || room.guest_user_id === user.id;
  if (!belongsToUser) return '';
  return 'Имаш друга активна стая. Затвори я, преди да използваш тази покана.';
}

function getLoginValues() {
  return {
    identifier: loginEmail.value.trim(),
    password: loginPassword.value
  };
}

function getRegisterValues() {
  return {
    username: registerUsername.value.trim(),
    firstName: registerFirstName.value.trim(),
    lastName: registerLastName.value.trim(),
    email: registerEmail.value.trim(),
    password: registerPassword.value
  };
}

function focusFirstInvalidField(pairs) {
  const found = pairs.find(([field]) => field?.classList?.contains('has-error'));
  const input = found?.[0]?.querySelector?.('input');
  if (input) input.focus();
}

function validateLoginForm() {
  clearAllValidation();
  let valid = true;
  const { identifier, password } = getLoginValues();
  const normalizedIdentifier = identifier.trim();

  if (!normalizedIdentifier) {
    setFieldError(loginEmailField, loginEmailError, 'Въведи имейл или username.');
    valid = false;
  } else {
    const usernameCandidate = normalizedIdentifier.startsWith('@') ? normalizedIdentifier.slice(1) : normalizedIdentifier;
    const looksLikeEmail = normalizedIdentifier.includes('@');
    if (looksLikeEmail && !validateEmail(normalizedIdentifier)) {
      setFieldError(loginEmailField, loginEmailError, 'Имейлът не е валиден.');
      valid = false;
    } else if (!looksLikeEmail && !validateUsername(usernameCandidate)) {
      setFieldError(loginEmailField, loginEmailError, 'Username-ът трябва да е 3–24 символа: букви, цифри или _.');
      valid = false;
    }
  }

  if (!password) {
    setFieldError(loginPasswordField, loginPasswordError, 'Въведи парола.');
    valid = false;
  }

  return valid;
}

async function resolveLoginEmail(identifier) {
  const normalizedIdentifier = String(identifier || '').trim();
  if (!normalizedIdentifier) return { email: '', error: 'Въведи имейл или username.' };
  if (validateEmail(normalizedIdentifier)) {
    return { email: normalizedIdentifier.toLowerCase(), mode: 'email' };
  }

  const username = normalizedIdentifier.startsWith('@') ? normalizedIdentifier.slice(1) : normalizedIdentifier;
  if (!validateUsername(username)) {
    return { email: '', error: 'Username-ът трябва да е 3–24 символа: букви, цифри или _.' };
  }
  if (!state.auth.client) {
    return { email: '', error: 'Няма активна Supabase връзка.' };
  }

  let { data, error } = await state.auth.client
    .from('profiles')
    .select('email, username')
    .eq('username', username)
    .maybeSingle();

  if (!data && !error) {
    const fallback = await state.auth.client
      .from('profiles')
      .select('email, username')
      .ilike('username', username)
      .limit(2);
    if (!fallback.error && Array.isArray(fallback.data) && fallback.data.length === 1) {
      data = fallback.data[0];
    } else if (fallback.error) {
      error = fallback.error;
    }
  }

  if (error) {
    return { email: '', error: 'Не успях да намеря профил за този username.' };
  }
  if (!data?.email) {
    return { email: '', error: 'Няма профил с този username или профилът няма имейл за вход.' };
  }

  return { email: data.email, mode: 'username', matchedUsername: data.username || username };
}

async function restoreOnlineSessionAfterAuth() {
  await loadInvitePreview();

  const shouldSeekActiveRoom = Boolean(
    state.ui.pendingOnlineIntent
    || state.online.preferredRoomId
    || state.playMode === 'online'
    || state.ui.onlineLobbyOpen
  );

  if (shouldSeekActiveRoom) {
    const activeRoom = await loadMyActiveRoom();
    if (activeRoom) {
      state.playMode = 'online';
      renderModeSelector();
      await subscribeToRoom(activeRoom.id);
      if (activeRoom.status === 'waiting') setOnlineLobbyOpen(true);
      syncFromOnlineRoom();
    }
  }

  if (state.ui.inviteToken) {
    renderInviteLanding();
    if (state.auth.user && state.ui.pendingInviteAutoJoin) {
      Promise.resolve().then(() => attemptInviteAutoJoinLoggedUser()).catch((error) => console.warn('Invite auto join failed', error));
    }
  }

  if (state.ui.onlineLobbyOpen && canUseOnlineLobby()) {
    await loadLobbyRooms();
  }
  state.ui.pendingOnlineIntent = false;
}

function validateRegisterForm() {
  clearAllValidation();
  let valid = true;
  const { username, firstName, lastName, email, password } = getRegisterValues();

  if (!username) {
    setFieldError(registerUsernameField, registerUsernameError, 'Въведи потребителско име.');
    valid = false;
  } else if (!validateUsername(username)) {
    setFieldError(registerUsernameField, registerUsernameError, 'Използвай 3–24 символа: букви, цифри или _.');
    valid = false;
  }

  if (!firstName) {
    setFieldError(registerFirstNameField, registerFirstNameError, 'Въведи име.');
    valid = false;
  } else if (!validateName(firstName)) {
    setFieldError(registerFirstNameField, registerFirstNameError, 'Името трябва да е 2–24 букви.');
    valid = false;
  }

  if (!lastName) {
    setFieldError(registerLastNameField, registerLastNameError, 'Въведи фамилия.');
    valid = false;
  } else if (!validateName(lastName)) {
    setFieldError(registerLastNameField, registerLastNameError, 'Фамилията трябва да е 2–24 букви.');
    valid = false;
  }

  if (!email) {
    setFieldError(registerEmailField, registerEmailError, 'Въведи имейл.');
    valid = false;
  } else if (!validateEmail(email)) {
    setFieldError(registerEmailField, registerEmailError, 'Имейлът не е валиден.');
    valid = false;
  }

  if (!password) {
    setFieldError(registerPasswordField, registerPasswordError, 'Въведи парола.');
    valid = false;
  } else if (!validatePassword(password)) {
    setFieldError(registerPasswordField, registerPasswordError, 'Минимум 8 символа, поне 1 буква и 1 цифра.');
    valid = false;
  }

  return valid;
}

function validateJoinRoomCode() {
  setFieldError(joinRoomField, joinRoomError, '');
  const code = joinRoomInput.value.trim().toUpperCase();
  if (!code) {
    setFieldError(joinRoomField, joinRoomError, 'Въведи код на стая.');
    return false;
  }
  if (!/^[A-Z0-9]{6}$/.test(code)) {
    setFieldError(joinRoomField, joinRoomError, 'Кодът трябва да е 6 символа.');
    return false;
  }
  return true;
}

function getPlayerStatsFromHistory(userId) {
  const history = state.auth.history || [];
  const totalGames = history.length;
  const wins = history.filter((match) => match.winner_user_id === userId).length;
  const onlineGames = history.filter((match) => match.mode === 'online').length;
  const computerGames = history.filter((match) => match.mode === 'computer').length;
  const localGames = history.filter((match) => match.mode === 'local').length;
  return {
    totalGames,
    wins,
    winRate: totalGames ? Math.round((wins / totalGames) * 100) : 0,
    onlineGames,
    computerGames,
    localGames
  };
}

function renderProfilePanel() {
  const loggedIn = Boolean(state.auth.user);
  const visible = loggedIn;
  profilePanel.classList.toggle('hidden', !visible);
  if (!loggedIn) {
    profileActiveRoom?.classList.add('hidden');
    matchHistoryList.innerHTML = '';
    historyCountChip.textContent = '0 мача';
    showFeedback(historyFeedback, 'Историята ще се появи след първия завършен мач с активен профил.', '');
    return;
  }
  if (!visible) return;

  const profile = state.auth.profile || {};
  profileFullName.textContent = profile.full_name || profile.username || state.auth.user.email || '—';
  profileUsername.textContent = profile.username ? `@${profile.username}` : '@—';
  profileEmail.textContent = profile.email || state.auth.user.email || '—';
  profileCreatedAt.textContent = `Създаден профил: ${formatDateTime(profile.created_at || state.auth.user.created_at)}`;

  const activeRoom = state.online.room;
  if (activeRoom && ['waiting', 'playing'].includes(activeRoom.status)) {
    profileActiveRoom?.classList.remove('hidden');
    profileActiveRoomText.textContent = activeRoom.status === 'playing'
      ? `Има активен онлайн мач: ${THEMES[activeRoom.selected_theme]?.name || activeRoom.selected_theme} • ${activeRoom.selected_card_count} карти • код ${activeRoom.code}.`
      : `Има активна waiting стая: ${THEMES[activeRoom.selected_theme]?.name || activeRoom.selected_theme} • ${activeRoom.selected_card_count} карти • код ${activeRoom.code}.`;
  } else {
    profileActiveRoom?.classList.add('hidden');
  }

  const stats = getPlayerStatsFromHistory(state.auth.user.id);
  profileTotalGames.textContent = String(stats.totalGames);
  profileWinRate.textContent = `Победи: ${stats.winRate}%`;
  profileWins.textContent = String(stats.wins);
  profileModeBreakdown.textContent = `Онлайн ${stats.onlineGames} • AI ${stats.computerGames} • Локално ${stats.localGames}`;
  historyCountChip.textContent = `${stats.totalGames} ${stats.totalGames === 1 ? 'мач' : 'мача'}`;

  if (!state.auth.historyLoaded) {
    matchHistoryList.innerHTML = '';
    if (!historyFeedback.textContent) {
      showFeedback(historyFeedback, 'Зареждаме историята на мачовете...', '');
    }
    return;
  }

  if (!state.auth.history.length) {
    matchHistoryList.innerHTML = '';
    if (!historyFeedback.classList.contains('is-error')) {
      showFeedback(historyFeedback, 'Все още няма записани мачове за този профил.', '');
    }
    return;
  }

  if (!historyFeedback.classList.contains('is-error')) {
    showFeedback(historyFeedback, `Показани са последните ${state.auth.history.length} мача.`, 'success');
  }
  matchHistoryList.innerHTML = state.auth.history.map((match) => {
    const amPlayer1 = match.player1_user_id === state.auth.user.id;
    const myScore = amPlayer1 ? match.player1_score : match.player2_score;
    const opponentScore = amPlayer1 ? match.player2_score : match.player1_score;
    const opponentName = amPlayer1 ? match.player2_name : match.player1_name;
    const autoFinished = Number(match.winner_slot) === ONLINE_AUTO_FINISH_WINNER_SLOT;
    const resultClass = autoFinished ? 'draw' : (match.winner_user_id === state.auth.user.id ? 'win' : (match.winner_slot === 0 || match.winner_user_id === null ? 'draw' : 'loss'));
    const resultText = autoFinished ? 'Прекратена' : (resultClass === 'win' ? 'Победа' : (resultClass === 'loss' ? 'Загуба' : 'Равенство'));
    const modeText = match.mode === 'online' ? 'Онлайн' : match.mode === 'computer' ? 'Срещу компютър' : 'Локално';
    const themeName = THEMES[match.theme_key]?.name || match.theme_key;
    return `
      <article class="match-history-item">
        <div class="match-history-top">
          <div>
            <div class="match-history-title">${escapeHtml(modeText)} • ${escapeHtml(themeName)}</div>
            <div class="match-history-subtitle">Срещу ${escapeHtml(opponentName || 'Играч 2')}</div>
          </div>
          <span class="result-tag ${resultClass}">${resultText}</span>
        </div>
        <div class="match-history-bottom">
          <div class="match-history-meta">Резултат: ${myScore} : ${opponentScore} • ${match.card_count} карти</div>
          <div class="match-history-meta">${formatDateTime(match.finished_at || match.created_at)}</div>
        </div>
      </article>`;
  }).join('');
}

async function loadMatchHistory() {
  if (!state.auth.client || !state.auth.user) {
    state.auth.history = [];
    state.auth.historyLoaded = false;
    renderProfilePanel();
    return;
  }

  state.auth.historyLoaded = false;
  showFeedback(historyFeedback, 'Зареждаме историята на мачовете...', '');
  renderProfilePanel();

  const { data, error } = await state.auth.client
    .from('match_history')
    .select('*')
    .or(`player1_user_id.eq.${state.auth.user.id},player2_user_id.eq.${state.auth.user.id},created_by.eq.${state.auth.user.id}`)
    .order('finished_at', { ascending: false })
    .limit(20);

  if (error) {
    state.auth.history = [];
    state.auth.historyLoaded = false;
    renderProfilePanel();
    showFeedback(historyFeedback, 'Таблицата за история още не е налична. Пусни новия SQL migration файл.', 'error');
    return;
  }

  state.auth.history = data || [];
  state.auth.historyLoaded = true;
  renderProfilePanel();
  renderInviteLanding();
}

async function saveMatchToHistory(source) {
  if (!state.auth.client || !state.auth.user) return;

  const payload = {
    created_by: state.auth.user.id,
    room_id: source.room_id || null,
    mode: source.mode,
    theme_key: source.theme_key,
    card_count: source.card_count,
    player1_user_id: source.player1_user_id || null,
    player1_name: source.player1_name,
    player2_user_id: source.player2_user_id || null,
    player2_name: source.player2_name,
    player1_score: source.player1_score,
    player2_score: source.player2_score,
    winner_slot: source.winner_slot,
    winner_user_id: source.winner_user_id || null,
    finished_at: new Date().toISOString()
  };

  const query = state.auth.client.from('match_history');
  let result;
  if (source.room_id) {
    result = await query.upsert(payload, { onConflict: 'room_id' });
  } else {
    result = await query.insert(payload);
  }

  if (result.error) {
    console.error('History save failed', result.error);
    showFeedback(historyFeedback, 'Мачът приключи, но записът в историята не успя.', 'error');
    return;
  }

  await loadMatchHistory();
}

function getPlayerName(player) {
  return state.playerNames[player];
}

function isComputerMode() {
  return state.playMode === 'computer';
}

function isOnlineMode() {
  return state.playMode === 'online';
}

function hasActiveOnlineRoom() {
  return Boolean(state.online.room && ['waiting', 'playing'].includes(state.online.room.status));
}

function canReplaceOwnWaitingRoom() {
  const room = state.online.room;
  return Boolean(
    room
    && room.status === 'waiting'
    && !room.guest_user_id
    && state.auth.user
    && room.host_user_id === state.auth.user.id
  );
}

function returnToMainMenu(message = '') {
  queuePersistentNotice('');
  resetRoundState();
  if (state.playMode === 'online') {
    if (state.online.room?.status === 'finished') {
      if (state.online.channel && state.auth.client) state.auth.client.removeChannel(state.online.channel);
      state.online.channel = null;
      clearOnlineRoomLocalState();
    }
    state.ui.onlineLobbyOpen = false;
    app.classList.remove('online-lobby-mode');
    onlineLobby.classList.add('hidden');
    document.body.classList.remove('lobby-open');
    updateAuthUi();
  }
  updateHud(message || 'Върна се в началното меню.');
}

function isComputerTurn() {
  return isComputerMode() && state.currentPlayer === 2;
}

function getModeDisplayName() {
  return isComputerMode() ? `${MODE_OPTIONS.computer.name} (${AI_OPTIONS[state.aiDifficulty].name})` : MODE_OPTIONS[state.playMode].name;
}

function updatePlayerInputUi() {
  const computerMode = isComputerMode();
  const onlineMode = isOnlineMode();
  player2NameField.classList.toggle('hidden-field', computerMode || onlineMode);
  player2NameInput.disabled = computerMode || onlineMode;
  if (computerMode) {
    player2NameInput.value = 'Компютър';
    player2NameInput.placeholder = 'Компютър';
  } else if (onlineMode) {
    player2NameInput.placeholder = 'Ще се попълни от стаята';
  } else if (!player2NameInput.value.trim()) {
    player2NameInput.placeholder = 'Играч 2';
  }
  difficultySelector.classList.toggle('hidden', !computerMode);
}

function refreshPlayerNames() {
  if (!state.auth.user && state.guest.active) ensureGuestNames(false);

  state.playerNames[1] = sanitizeName(player1NameInput.value, state.guest.active ? state.guest.name1 || 'Играч 1' : 'Играч 1');
  state.playerNames[2] = isComputerMode() ? 'Компютър' : sanitizeName(player2NameInput.value, state.guest.active ? state.guest.name2 || 'Играч 2' : 'Играч 2');

  if (state.playMode === 'online' && state.online.room) {
    state.playerNames[1] = sanitizeName(state.online.room.host_name || state.playerNames[1], 'Играч 1');
    state.playerNames[2] = sanitizeName(state.online.room.guest_name || state.playerNames[2], 'Играч 2');
  }

  nameEls[1].textContent = state.playerNames[1];
  nameEls[2].textContent = state.playerNames[2];
}

function getModeName() {
  return getModeDisplayName();
}

function setAppMode(mode) {
  app.classList.toggle('setup-mode', mode === 'setup');
  app.classList.toggle('game-mode', mode === 'game');
  app.classList.remove('auth-open');
  authBackdrop?.classList.add('hidden');
  profileButton.classList.toggle('hidden', mode === 'game');
  exitGameButton?.classList.toggle('hidden', mode !== 'game');
  if (mode === 'game') {
    toggleProfilePanel(false);
    setOnlineLobbyOpen(false);
  }
  newRoundButton.textContent = 'Смени тема';
}


function getGapForCount(count) {
  if (count >= 40) return window.innerWidth <= 820 ? 4 : 6;
  if (count >= 30) return window.innerWidth <= 820 ? 5 : 7;
  return window.innerWidth <= 820 ? 6 : 8;
}

function chooseBoardLayout(totalCards, availableWidth, availableHeight) {
  const candidates = BOARD_LAYOUTS[totalCards] || [[5, 4]];
  const gap = getGapForCount(totalCards);
  let best = { columns: candidates[0][0], rows: candidates[0][1], gap, size: 0 };

  candidates.forEach(([columns, rows]) => {
    const sizeFromWidth = (availableWidth - gap * (columns - 1)) / columns;
    const sizeFromHeight = (availableHeight - gap * (rows - 1)) / rows;
    const size = Math.floor(Math.min(sizeFromWidth, sizeFromHeight));
    if (size > best.size) {
      best = { columns, rows, gap, size };
    }
  });

  return best;
}

function resizeBoardFit() {
  if (!state.started || !gameBoard.classList.contains('active')) return;

  const frameStyles = window.getComputedStyle(boardFrame);
  const boardStyles = window.getComputedStyle(gameBoard);
  const paddingX = parseFloat(frameStyles.paddingLeft) + parseFloat(frameStyles.paddingRight) + parseFloat(boardStyles.paddingLeft) + parseFloat(boardStyles.paddingRight);
  const paddingY = parseFloat(frameStyles.paddingTop) + parseFloat(frameStyles.paddingBottom) + parseFloat(boardStyles.paddingTop) + parseFloat(boardStyles.paddingBottom);
  const availableWidth = Math.max(boardFrame.clientWidth - paddingX, 320);
  const availableHeight = Math.max(boardFrame.clientHeight - paddingY, 320);

  const { columns, rows, gap, size } = chooseBoardLayout(state.selectedCardCount, availableWidth, availableHeight);
  const cardSize = Math.max(52, Math.floor(size * 0.998));
  const boardWidth = cardSize * columns + gap * (columns - 1);
  const boardHeight = cardSize * rows + gap * (rows - 1);

  gameBoard.style.setProperty('--card-width', `${cardSize}px`);
  gameBoard.style.setProperty('--card-height', `${cardSize}px`);
  gameBoard.style.gap = `${gap}px`;
  gameBoard.style.gridTemplateColumns = `repeat(${columns}, ${cardSize}px)`;
  gameBoard.style.gridTemplateRows = `repeat(${rows}, ${cardSize}px)`;
  gameBoard.style.width = `${boardWidth}px`;
  gameBoard.style.height = `${boardHeight}px`;
}

function applyThemePalette(themeKey) {
  const theme = THEMES[themeKey];
  if (!theme) return;

  const root = document.documentElement;
  root.style.setProperty('--bg-1', theme.palette.bg1);
  root.style.setProperty('--bg-2', theme.palette.bg2);
  root.style.setProperty('--bg-3', theme.palette.bg3);
  root.style.setProperty('--accent', theme.palette.accent);
  root.style.setProperty('--accent-2', theme.palette.accent2);
  root.style.setProperty('--card-glow', theme.palette.glow);
}


function bindUiPress(target, handler) {
  if (!target || typeof handler !== 'function') return;
  let touchTriggered = false;
  target.addEventListener('touchend', (event) => {
    touchTriggered = true;
    event.preventDefault();
    handler();
    window.setTimeout(() => {
      touchTriggered = false;
    }, 320);
  }, { passive: false });
  target.addEventListener('click', (event) => {
    event.preventDefault();
    if (touchTriggered) return;
    handler();
  });
}

function renderThemeSelector() {
  themeSelector.innerHTML = Object.entries(THEMES)
    .map(([key, theme]) => `
      <button class="theme-card ${state.selectedTheme === key ? 'selected' : ''}" data-theme="${key}" type="button">
        <div class="theme-icon">${theme.icon}</div>
        <h3>${theme.name}</h3>
        <p>${theme.description}</p>
      </button>
    `)
    .join('');

  document.querySelectorAll('.theme-card').forEach((button) => {
    bindUiPress(button, () => selectTheme(button.dataset.theme));
  });
  renderOnlineThemeSelector();
}

function renderCountSelector() {
  countSelector.innerHTML = COUNT_OPTIONS
    .map((count) => `
      <button class="count-option ${state.selectedCardCount === count ? 'selected' : ''}" data-count="${count}" type="button">
        <strong>${count}</strong> карти
      </button>
    `)
    .join('');

  document.querySelectorAll('.count-option').forEach((button) => {
    bindUiPress(button, () => selectCardCount(Number(button.dataset.count)));
  });
  renderOnlineCountSelector();
}



function renderOnlineThemeSelector(force = false) {
  if (!onlineThemeSelector) return;
  const selected = isValidOnlineTheme(state.online.selectedTheme) ? state.online.selectedTheme : 'sport';
  state.online.selectedTheme = selected;
  if (!force && lastRenderedOnlineTheme === selected && onlineThemeSelector.children.length === Object.keys(THEMES).length) return;
  lastRenderedOnlineTheme = selected;
  onlineThemeSelector.innerHTML = Object.entries(THEMES)
    .map(([key, theme]) => `
      <button class="online-theme-option ${selected === key ? 'selected' : ''}" data-online-theme="${key}" type="button">
        <span>${theme.icon}</span>
        <strong>${theme.name}</strong>
      </button>
    `)
    .join('');

  onlineThemeSelector.querySelectorAll('[data-online-theme]').forEach((button) => {
    bindUiPress(button, () => selectOnlineTheme(button.dataset.onlineTheme));
  });
}

function renderOnlineCountSelector(force = false) {
  if (!onlineCountSelector) return;
  const selected = isValidOnlineCount(state.online.selectedCardCount) ? Number(state.online.selectedCardCount) : 20;
  state.online.selectedCardCount = selected;
  if (!force && lastRenderedOnlineCount === selected && onlineCountSelector.children.length === COUNT_OPTIONS.length) return;
  lastRenderedOnlineCount = selected;
  onlineCountSelector.innerHTML = COUNT_OPTIONS
    .map((count) => `
      <button class="online-count-option ${selected === count ? 'selected' : ''}" data-online-count="${count}" type="button">
        ${count} карти
      </button>
    `)
    .join('');

  onlineCountSelector.querySelectorAll('[data-online-count]').forEach((button) => {
    bindUiPress(button, () => selectOnlineCardCount(Number(button.dataset.onlineCount)));
  });
}

function renderModeSelector() {
  const onlineUnlocked = canUseOnlineLobby() || Boolean(isAnonymousUser() && state.online.room);
  modeSelector.innerHTML = Object.entries(MODE_OPTIONS)
    .map(([key, mode]) => {
      const locked = key === 'online' && !onlineUnlocked;
      const showPreview = locked && state.ui.onlinePreviewVisible && !state.ui.inviteToken;
      return `
      <button class="mode-option ${state.playMode === key ? 'selected' : ''} ${locked ? 'locked' : ''}" data-mode="${key}" type="button">
        <span class="mode-badge">${mode.badge}</span>
        <strong>${mode.name}</strong>
        <p>${mode.description}</p>
        ${locked && !state.ui.inviteToken ? `<div class="mode-preview ${showPreview ? '' : 'hidden'}"><p>Тази опция изисква регистрация.</p><span class="mode-preview-link" data-open-profile="true" role="button" tabindex="0">Вход</span></div>` : ''}
      </button>
    `;
    })
    .join('');

  document.querySelectorAll('.mode-option').forEach((button) => {
    button.addEventListener('click', (event) => {
      const requested = button.dataset.mode;
      if (event.target.closest('[data-open-profile="true"]')) {
        event.preventDefault();
        event.stopPropagation();
        openProfileFromPreview();
        return;
      }
      if (requested === 'online' && !state.auth.user) {
        state.ui.onlinePreviewVisible = true;
        renderModeSelector();
        updateHud('Онлайн режимът е заключен. Влез в профила от линка в картата или продължи локално като гост.');
        return;
      }
      selectPlayMode(requested);
    });
  });
  document.querySelectorAll('.mode-preview-link').forEach((link) => {
    link.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProfileFromPreview();
      }
    });
  });
}

function renderDifficultySelector() {
  difficultySelector.innerHTML = Object.entries(AI_OPTIONS)
    .map(([key, option]) => `
      <button class="difficulty-option ${state.aiDifficulty === key ? 'selected' : ''}" data-difficulty="${key}" type="button">
        <strong>${option.name}</strong> • ${option.badge}
      </button>
    `)
    .join('');

  document.querySelectorAll('.difficulty-option').forEach((button) => {
    button.addEventListener('click', () => selectAiDifficulty(button.dataset.difficulty));
  });
}

function selectAiDifficulty(level) {
  state.aiDifficulty = AI_OPTIONS[level] ? level : 'medium';
  renderDifficultySelector();
  updateHud();
}

function updateHud(message) {
  const themeName = state.selectedTheme ? THEMES[state.selectedTheme].name : 'няма';
  selectedThemeChip.textContent = `Тема: ${themeName}`;
  gameModeChip.textContent = `Режим: ${getModeName()}`;
  cardCountChip.textContent = `Карти: ${state.selectedCardCount}`;
  pairsLeftChip.textContent = `Оставащи двойки: ${Math.max(state.totalPairs - state.matchedPairs, 0)}`;
  turnChip.textContent = state.gameOver ? 'Рундът приключи' : `Ред: ${getPlayerName(state.currentPlayer)}`;

  if (message) {
    queuePersistentNotice('');
    statusBanner.textContent = message;
    return;
  }

  if (state.ui.persistentNotice) {
    statusBanner.textContent = state.ui.persistentNotice;
    return;
  }

  if (!state.selectedTheme) {
    statusBanner.textContent = 'Въведи име, избери режим, тема и брой карти. Онлайн режимът се отключва от профила горе вдясно.';
  } else if (!state.started) {
    if (state.playMode === 'online') {
      statusBanner.textContent = state.auth.enabled ? `Онлайн режим: избери тема и брой карти, създай стая, присъедини се от waiting room-а или използвай invite линк.` : 'Онлайн режимът изисква Supabase конфигурация в supabase-config.js.';
    } else if (isComputerMode()) {
      statusBanner.textContent = `Играч: ${getPlayerName(1)} • Срещу: Компютър • Трудност: ${AI_OPTIONS[state.aiDifficulty].name} • Тема: ${THEMES[state.selectedTheme].name} • ${state.selectedCardCount} карти.`;
    } else {
      statusBanner.textContent = `Играч 1: ${getPlayerName(1)} • Играч 2: ${getPlayerName(2)} • Тема: ${THEMES[state.selectedTheme].name} • ${state.selectedCardCount} карти.`;
    }
  } else {
    statusBanner.textContent = `Тема: ${THEMES[state.selectedTheme].name} • Режим: ${getModeName()} • Карти: ${state.selectedCardCount} • Остават ${state.totalPairs - state.matchedPairs} двойки.`;
  }
}


function selectOnlineTheme(themeKey) {
  state.online.selectedTheme = isValidOnlineTheme(themeKey) ? themeKey : 'sport';
  state.selectedTheme = state.online.selectedTheme;
  applyThemePalette(state.online.selectedTheme);
  renderOnlineThemeSelector(true);
  renderThemeSelector();
  updateHud();
  showFeedback(onlineLobbyFeedback, '', '');
}

function selectOnlineCardCount(count) {
  state.online.selectedCardCount = isValidOnlineCount(count) ? Number(count) : 20;
  state.selectedCardCount = state.online.selectedCardCount;
  renderOnlineCountSelector(true);
  renderCountSelector();
  updateHud();
  showFeedback(onlineLobbyFeedback, '', '');
}

function selectTheme(themeKey) {
  state.selectedTheme = themeKey;
  applyThemePalette(themeKey);
  startButton.disabled = false;
  updateHud();
  renderThemeSelector();
}

function selectPlayMode(modeKey) {
  if (modeKey === 'online' && !state.auth.user) {
    state.ui.onlinePreviewVisible = true;
    renderModeSelector();
    updateHud('Онлайн режимът е активен само за влезли потребители.');
    return;
  }

  state.playMode = MODE_OPTIONS[modeKey] ? modeKey : 'local';
  if (!isOnlineMode()) {
    state.ui.onlineLobbyOpen = false;
    app.classList.remove('online-lobby-mode');
    onlineLobby.classList.add('hidden');
  } else {
    state.ui.onlinePreviewVisible = false;
  }
  if (!state.auth.user && state.playMode !== 'online' && state.guest.active) {
    ensureGuestNames(false);
  }
  renderModeSelector();
  renderDifficultySelector();
  updatePlayerInputUi();
  refreshPlayerNames();
  updatePlayerPanels();
  updateAuthUi();
  if (isOnlineMode() && state.auth.user) {
    if (!state.ui.inviteToken) {
      state.online.accessType = 'public';
    }
    setOnlineLobbyOpen(true);
    updateHud('Онлайн лобито е отворено. Тук създаваш или намираш стая.');
  } else {
    updateHud();
  }
}

function selectCardCount(count) {
  state.selectedCardCount = count;
  renderCountSelector();
  updateHud();
}


function iconSport(key) {
  const commonStroke = 'stroke="#ffffff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  const metallicStroke = 'stroke="#dbe7f5" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"';

  switch (key) {
    case 'football':
      return `
        <defs>
          <radialGradient id="__ID__-fb-shell" cx="36%" cy="28%" r="72%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="62%" stop-color="#f8fafc"/>
            <stop offset="100%" stop-color="#d0d7e2"/>
          </radialGradient>
          <radialGradient id="__ID__-fb-shade" cx="62%" cy="72%" r="58%">
            <stop offset="0%" stop-color="rgba(15,23,42,0)"/>
            <stop offset="100%" stop-color="rgba(15,23,42,0.28)"/>
          </radialGradient>
          <filter id="__ID__-fb-drop" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#07111d" flood-opacity="0.28"/>
          </filter>
        </defs>
        <g filter="url(#__ID__-fb-drop)">
          <circle cx="210" cy="170" r="104" fill="url(#__ID__-fb-shell)"/>
          <circle cx="210" cy="170" r="104" fill="url(#__ID__-fb-shade)"/>
          <ellipse cx="175" cy="122" rx="52" ry="28" fill="rgba(255,255,255,0.72)"/>
          <polygon points="210,118 243,142 231,180 189,180 177,142" fill="#1f2937"/>
          <path d="M177 142l-42-24M243 142l42-24M189 180l-20 40M231 180l20 40M135 196l36-4M285 196l-36-4" stroke="#1f2937" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M135 118c18 16 40 26 68 29M285 118c-18 16-40 26-68 29M168 220c24-10 51-15 84-15" stroke="#64748b" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.38"/>
          <circle cx="210" cy="170" r="104" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="5"/>
        </g>
      `;
    case 'basketball':
      return `
        <defs>
          <radialGradient id="__ID__-bb-base" cx="34%" cy="30%" r="74%">
            <stop offset="0%" stop-color="#ffb161"/>
            <stop offset="48%" stop-color="#ff8d2a"/>
            <stop offset="100%" stop-color="#c85a0b"/>
          </radialGradient>
          <filter id="__ID__-bb-drop" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#07111d" flood-opacity="0.24"/>
          </filter>
        </defs>
        <g filter="url(#__ID__-bb-drop)">
          <circle cx="210" cy="170" r="100" fill="url(#__ID__-bb-base)"/>
          <ellipse cx="174" cy="122" rx="50" ry="24" fill="rgba(255,255,255,0.24)"/>
          <path d="M110 170h200M210 70c38 24 58 61 58 100s-20 76-58 100M210 70c-38 24-58 61-58 100s20 76 58 100" stroke="#5b2300" stroke-width="12" fill="none"/>
          <path d="M132 106c28 18 48 40 60 64M288 106c-28 18-48 40-60 64" stroke="#5b2300" stroke-width="10" fill="none"/>
          <circle cx="210" cy="170" r="100" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="4"/>
        </g>
      `;
    case 'tennis':
      return `
        <defs>
          <radialGradient id="__ID__-tn-base" cx="34%" cy="30%" r="72%">
            <stop offset="0%" stop-color="#f6ff8b"/>
            <stop offset="56%" stop-color="#d7f24a"/>
            <stop offset="100%" stop-color="#95bb16"/>
          </radialGradient>
          <filter id="__ID__-tn-drop" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#07111d" flood-opacity="0.24"/>
          </filter>
        </defs>
        <g filter="url(#__ID__-tn-drop)">
          <circle cx="210" cy="170" r="98" fill="url(#__ID__-tn-base)"/>
          <ellipse cx="172" cy="124" rx="48" ry="23" fill="rgba(255,255,255,0.22)"/>
          <path d="M142 92c36 34 54 74 54 120M278 92c-36 34-54 74-54 120" stroke="#fffdf4" stroke-width="13" fill="none" stroke-linecap="round"/>
          <circle cx="210" cy="170" r="98" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="4"/>
        </g>
      `;
    case 'boxing':
      return `
        <defs>
          <linearGradient id="__ID__-bx-left" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ff8a7b"/>
            <stop offset="65%" stop-color="#ea4335"/>
            <stop offset="100%" stop-color="#991b1b"/>
          </linearGradient>
          <linearGradient id="__ID__-bx-right" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ff7067"/>
            <stop offset="62%" stop-color="#dc2626"/>
            <stop offset="100%" stop-color="#7f1d1d"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,6)">
          <path d="M128 136c0-30 22-52 54-52h32c14 0 26 11 26 25v30h30c20 0 36 16 36 36v30c0 26-21 47-47 47H170c-24 0-42-18-42-42v-74z" fill="url(#__ID__-bx-left)"/>
          <path d="M205 106c0-12 10-22 22-22h26c14 0 25 11 25 25v48h-73z" fill="url(#__ID__-bx-right)"/>
          <path d="M156 174h140" stroke="rgba(255,255,255,0.82)" stroke-width="9" stroke-linecap="round"/>
          <path d="M146 154c14-18 34-27 61-28M250 118c13 7 22 19 27 35" stroke="rgba(255,255,255,0.36)" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M154 214c20 16 42 23 76 23h43" stroke="rgba(0,0,0,0.15)" stroke-width="8" fill="none" stroke-linecap="round"/>
        </g>
      `;
    case 'volleyball':
      return `
        <defs>
          <radialGradient id="__ID__-vb-base" cx="34%" cy="28%" r="76%">
            <stop offset="0%" stop-color="#fff59a"/>
            <stop offset="32%" stop-color="#ffe44d"/>
            <stop offset="33%" stop-color="#2d57df"/>
            <stop offset="100%" stop-color="#1837a8"/>
          </radialGradient>
          <filter id="__ID__-vb-drop" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#07111d" flood-opacity="0.26"/>
          </filter>
        </defs>
        <g filter="url(#__ID__-vb-drop)">
          <circle cx="210" cy="170" r="104" fill="url(#__ID__-vb-base)"/>
          <ellipse cx="172" cy="118" rx="50" ry="25" fill="rgba(255,255,255,0.28)"/>
          <path d="M120 132c52-34 108-41 166-20" stroke="#ffe24b" stroke-width="38" fill="none" stroke-linecap="round"/>
          <path d="M146 246c12-54 42-94 88-122" stroke="#ffe24b" stroke-width="32" fill="none" stroke-linecap="round"/>
          <path d="M256 258c-8-43-28-79-57-106" stroke="#ffe24b" stroke-width="32" fill="none" stroke-linecap="round"/>
          <path d="M128 104c38 20 71 53 96 99" stroke="#2847ba" stroke-width="24" fill="none" stroke-linecap="round" opacity="0.85"/>
          <path d="M256 102c-22 39-31 84-27 133" stroke="#2847ba" stroke-width="24" fill="none" stroke-linecap="round" opacity="0.85"/>
          <path d="M116 194c46-10 91-11 137-1" stroke="#2847ba" stroke-width="22" fill="none" stroke-linecap="round" opacity="0.85"/>
          <circle cx="210" cy="170" r="104" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="5"/>
        </g>
      `;
    case 'baseball':
      return `
        <defs>
          <radialGradient id="__ID__-bs-base" cx="36%" cy="28%" r="74%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="72%" stop-color="#fffaf5"/>
            <stop offset="100%" stop-color="#ded6ce"/>
          </radialGradient>
        </defs>
        <circle cx="210" cy="170" r="96" fill="url(#__ID__-bs-base)"/>
        <ellipse cx="176" cy="124" rx="42" ry="20" fill="rgba(255,255,255,0.55)"/>
        <path d="M154 100c-20 25-30 52-30 82s10 57 30 82" stroke="#cf2e2e" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M266 100c20 25 30 52 30 82s-10 57-30 82" stroke="#cf2e2e" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M143 122c11 7 17 17 19 29M143 155c11 7 17 17 19 29M143 188c11 7 17 17 19 29" stroke="#cf2e2e" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M277 122c-11 7-17 17-19 29M277 155c-11 7-17 17-19 29M277 188c-11 7-17 17-19 29" stroke="#cf2e2e" stroke-width="5" fill="none" stroke-linecap="round"/>
      `;
    case 'cycling':
      return `
        <defs>
          <linearGradient id="__ID__-cy-frame" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6de3ff"/>
            <stop offset="100%" stop-color="#2563eb"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,10)">
          <circle cx="136" cy="220" r="48" fill="none" stroke="#dbe7f5" stroke-width="10"/>
          <circle cx="284" cy="220" r="48" fill="none" stroke="#dbe7f5" stroke-width="10"/>
          <path d="M136 220l62-76 40 0M198 144l34 76M176 220h108M198 144l-30 76" stroke="url(#__ID__-cy-frame)" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M232 144h24M167 145l-18-18" stroke="#dbe7f5" stroke-width="8" fill="none" stroke-linecap="round"/>
          <circle cx="198" cy="118" r="15" fill="#f8fafc"/>
          <path d="M198 133l20 30M188 148l-25 28" stroke="#f8fafc" stroke-width="10" fill="none" stroke-linecap="round"/>
        </g>
      `;
    case 'helmet':
      return `
        <defs>
          <linearGradient id="__ID__-hl-shell" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="65%" stop-color="#eef4fb"/>
            <stop offset="100%" stop-color="#cfd8e5"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,6)">
          <path d="M100 192c0-72 50-118 122-118 71 0 118 42 118 104 0 28-18 48-45 48H140c-24 0-40-15-40-34z" fill="url(#__ID__-hl-shell)"/>
          <path d="M286 130h58v38h-58z" fill="#ff5570"/>
          <path d="M140 170h132" stroke="#cfd9e8" stroke-width="14" stroke-linecap="round"/>
          <path d="M149 225c10 25 26 41 60 41" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round"/>
          <path d="M138 134c24-27 60-40 107-38" stroke="rgba(255,255,255,0.7)" stroke-width="7" fill="none" stroke-linecap="round"/>
        </g>
      `;
    case 'dumbbell':
      return `
        <defs>
          <linearGradient id="__ID__-db-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f8fbff"/>
            <stop offset="50%" stop-color="#cfd7e3"/>
            <stop offset="100%" stop-color="#7b8798"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,4)">
          <rect x="142" y="165" width="136" height="20" rx="10" fill="url(#__ID__-db-metal)"/>
          <rect x="118" y="136" width="20" height="78" rx="7" fill="#d6deea"/>
          <rect x="92" y="120" width="20" height="110" rx="7" fill="#b8c2d1"/>
          <rect x="280" y="136" width="20" height="78" rx="7" fill="#d6deea"/>
          <rect x="306" y="120" width="20" height="110" rx="7" fill="#b8c2d1"/>
          <path d="M142 168h136" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="round"/>
        </g>
      `;
    case 'trophy':
      return `
        <defs>
          <linearGradient id="__ID__-tr-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff2a8"/>
            <stop offset="45%" stop-color="#ffd25e"/>
            <stop offset="100%" stop-color="#cb8e17"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,4)">
          <path d="M152 98h116v34c0 40-24 72-58 82-34-10-58-42-58-82V98z" fill="url(#__ID__-tr-gold)"/>
          <path d="M152 110h-26c0 42 18 68 51 78M268 110h26c0 42-18 68-51 78" stroke="#f4bf42" stroke-width="14" fill="none" stroke-linecap="round"/>
          <rect x="188" y="214" width="44" height="54" rx="12" fill="#d79a26"/>
          <rect x="154" y="260" width="112" height="24" rx="12" fill="#b9761d"/>
          <ellipse cx="192" cy="132" rx="34" ry="16" fill="rgba(255,255,255,0.35)"/>
        </g>
      `;
    case 'running':
      return `
        <defs>
          <linearGradient id="__ID__-rn-shoe" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#7dd3fc"/>
            <stop offset="55%" stop-color="#3b82f6"/>
            <stop offset="100%" stop-color="#1d4ed8"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,8)">
          <path d="M116 216c18-14 31-32 39-54l18-49 45 26-12 44 34 25c18 13 38 21 60 25l36 6c10 2 17 11 17 22v8H121c-17 0-30-13-30-30 0-9 4-18 11-23l14-10z" fill="url(#__ID__-rn-shoe)"/>
          <path d="M168 150h54M160 171h58M152 192h62" stroke="#c9efff" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M108 268h238" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round" opacity="0.55"/>
        </g>
      `;
    case 'swimming':
      return `
        <defs>
          <linearGradient id="__ID__-sw-water" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#8be8ff"/>
            <stop offset="100%" stop-color="#1d9bf0"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,6)">
          <path d="M126 166c0-18 14-32 32-32h34c10 0 19 4 25 11l12 14h22c18 0 32 14 32 32v28c0 18-14 32-32 32h-84c-18 0-32-14-32-32v-53z" fill="#f8fafc" opacity="0.95"/>
          <circle cx="165" cy="190" r="28" fill="none" stroke="#94a3b8" stroke-width="10"/>
          <circle cx="246" cy="190" r="28" fill="none" stroke="#94a3b8" stroke-width="10"/>
          <path d="M95 260c26-16 52-16 78 0 26 16 52 16 78 0 26-16 52-16 78 0" stroke="url(#__ID__-sw-water)" stroke-width="14" fill="none" stroke-linecap="round"/>
          <path d="M116 286c26-16 52-16 78 0 26 16 52 16 78 0 26-16 52-16 78 0" stroke="rgba(255,255,255,0.65)" stroke-width="8" fill="none" stroke-linecap="round"/>
        </g>
      `;
    case 'skiing':
      return `
        <defs>
          <linearGradient id="__ID__-sk-ski" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f8fafc"/>
            <stop offset="100%" stop-color="#c7d2e0"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,4)">
          <path d="M136 268c24-48 49-96 76-144" stroke="url(#__ID__-sk-ski)" stroke-width="12" fill="none" stroke-linecap="round"/>
          <path d="M214 268c24-48 49-96 76-144" stroke="url(#__ID__-sk-ski)" stroke-width="12" fill="none" stroke-linecap="round"/>
          <path d="M126 282h180" stroke="#ffffff" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.6"/>
          <path d="M168 126l-10 120M256 126l10 120" stroke="#f8fafc" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M158 126h20M246 126h20" stroke="#f8fafc" stroke-width="8" fill="none" stroke-linecap="round"/>
        </g>
      `;
    case 'skate':
      return `
        <defs>
          <linearGradient id="__ID__-skate-board" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#d7e2ef"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,12)">
          <rect x="106" y="164" width="208" height="36" rx="18" fill="url(#__ID__-skate-board)"/>
          <circle cx="152" cy="226" r="22" fill="#10253f"/>
          <circle cx="268" cy="226" r="22" fill="#10253f"/>
          <path d="M136 162l18-28M284 162l-18-28" ${commonStroke}/>
          <path d="M126 182h168" stroke="rgba(255,255,255,0.55)" stroke-width="5"/>
        </g>
      `;
    case 'racket':
      return `
        <defs>
          <linearGradient id="__ID__-rk-frame" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#eff6ff"/>
            <stop offset="100%" stop-color="#d6e3f3"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,4)">
          <ellipse cx="196" cy="136" rx="72" ry="92" fill="none" stroke="url(#__ID__-rk-frame)" stroke-width="16"/>
          <path d="M160 76v122M196 52v170M232 76v122M126 108h140M126 144h140M132 180h128" stroke="#dfe8f3" stroke-width="6"/>
          <rect x="232" y="216" width="30" height="120" rx="14" fill="#eff6ff" transform="rotate(-32 247 276)"/>
          <circle cx="292" cy="222" r="22" fill="#d8f354" stroke="#bdd230" stroke-width="6"/>
          <path d="M280 206c8 8 8 24 0 32M304 206c-8 8-8 24 0 32" stroke="#fffef3" stroke-width="4" fill="none"/>
        </g>
      `;
    case 'whistle':
      return `
        <defs>
          <linearGradient id="__ID__-wh-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f8fbff"/>
            <stop offset="48%" stop-color="#d9e4f0"/>
            <stop offset="100%" stop-color="#8e9aad"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,8)">
          <path d="M118 176c0-29 23-52 52-52h58c45 0 82 37 82 82s-37 82-82 82c-31 0-57-26-57-57 0-24 18-42 42-42 20 0 35 15 35 35" fill="url(#__ID__-wh-body)"/>
          <circle cx="232" cy="206" r="18" fill="#ffffff" opacity="0.9"/>
          <path d="M148 150c18-11 36-16 55-15" stroke="rgba(255,255,255,0.72)" stroke-width="7" fill="none" stroke-linecap="round"/>
        </g>
      `;
    case 'goal':
      return `
        <g transform="translate(0,10)">
          <path d="M116 258V112h184v146" ${commonStroke}/>
          <path d="M150 258V146h150v112" stroke="#e7f0fb" stroke-width="10" fill="none"/>
          <path d="M116 112l34 34M300 112l-34 34M150 146l150 112" stroke="#dbe7f5" stroke-width="8" fill="none"/>
          <circle cx="244" cy="226" r="32" fill="#ffffff" stroke="#1f2937" stroke-width="6"/>
          <polygon points="244,212 254,219 250,231 238,231 234,219" fill="#111827"/>
        </g>
      `;
    case 'medal':
      return `
        <defs>
          <linearGradient id="__ID__-md-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff5be"/>
            <stop offset="50%" stop-color="#ffd75b"/>
            <stop offset="100%" stop-color="#e0a924"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,4)">
          <path d="M154 70h44l22 70h-48z" fill="#2563eb"/>
          <path d="M220 70h46l-22 70h-48z" fill="#ef4444"/>
          <circle cx="210" cy="204" r="64" fill="url(#__ID__-md-gold)"/>
          <polygon points="210,164 224,192 256,197 232,219 238,250 210,235 182,250 188,219 164,197 196,192" fill="#fff7c7"/>
          <ellipse cx="188" cy="174" rx="28" ry="13" fill="rgba(255,255,255,0.42)"/>
        </g>
      `;
    case 'cup':
      return `
        <defs>
          <linearGradient id="__ID__-cp-silver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="52%" stop-color="#dce5f1"/>
            <stop offset="100%" stop-color="#9aa6b8"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,6)">
          <path d="M142 124h136v34c0 42-28 76-68 84-40-8-68-42-68-84v-34z" fill="url(#__ID__-cp-silver)"/>
          <path d="M142 136h-26c0 36 14 58 42 68M278 136h26c0 36-14 58-42 68" stroke="#dfe8f3" stroke-width="12" fill="none" stroke-linecap="round"/>
          <rect x="192" y="242" width="36" height="54" rx="12" fill="#d1d9e6"/>
          <rect x="154" y="286" width="112" height="22" rx="11" fill="#bcc7d6"/>
          <ellipse cx="190" cy="154" rx="30" ry="14" fill="rgba(255,255,255,0.4)"/>
        </g>
      `;
    case 'tabletennis':
      return `
        <defs>
          <linearGradient id="__ID__-tt-pad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ff7a73"/>
            <stop offset="58%" stop-color="#ef4444"/>
            <stop offset="100%" stop-color="#b91c1c"/>
          </linearGradient>
        </defs>
        <g transform="translate(0,6)">
          <circle cx="282" cy="118" r="22" fill="#ffffff" opacity="0.96"/>
          <ellipse cx="192" cy="154" rx="82" ry="62" fill="url(#__ID__-tt-pad)" transform="rotate(20 192 154)"/>
          <ellipse cx="196" cy="150" rx="66" ry="48" fill="rgba(255,255,255,0.08)" transform="rotate(20 196 150)"/>
          <rect x="198" y="204" width="28" height="108" rx="12" fill="#deb887" transform="rotate(24 212 258)"/>
          <path d="M150 118c25-13 54-14 86-5" stroke="rgba(255,255,255,0.28)" stroke-width="8" fill="none" stroke-linecap="round" transform="rotate(20 192 154)"/>
        </g>
      `;
    default:
      return `<circle cx="210" cy="176" r="88" fill="#ffffff"/>`;
  }
}

function iconSoldier(key) {
  const commonStroke = 'stroke="#f8f6eb" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  const defs = `
    <defs>
      <linearGradient id="__ID__-mil-olive" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#dce5c2"/>
        <stop offset="55%" stop-color="#99ab68"/>
        <stop offset="100%" stop-color="#5f6d38"/>
      </linearGradient>
      <linearGradient id="__ID__-mil-olive-dark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#91a264"/>
        <stop offset="100%" stop-color="#3f4c25"/>
      </linearGradient>
      <linearGradient id="__ID__-mil-metal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f5f3e8"/>
        <stop offset="55%" stop-color="#cdd6ca"/>
        <stop offset="100%" stop-color="#7f8c7a"/>
      </linearGradient>
      <linearGradient id="__ID__-mil-brown" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#b98f64"/>
        <stop offset="100%" stop-color="#5f4126"/>
      </linearGradient>
      <filter id="__ID__-mil-drop" x="-35%" y="-35%" width="170%" height="170%">
        <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#04090d" flood-opacity="0.30"/>
      </filter>
    </defs>
  `;
  const wrap = (inner) => `${defs}<g filter="url(#__ID__-mil-drop)">${inner}</g>`;

  switch (key) {
    case 'helmet':
      return wrap(`
        <path d="M102 187c0-64 48-106 108-106 59 0 108 38 108 96 0 28-22 49-50 49H144c-24 0-42-15-42-39z" fill="url(#__ID__-mil-olive)"/>
        <path d="M136 136c30-28 64-42 116-38 18 2 35 8 51 18" stroke="rgba(255,255,255,0.20)" stroke-width="12" fill="none" stroke-linecap="round"/>
        <path d="M144 176h130" stroke="#6d774a" stroke-width="15" stroke-linecap="round"/>
        <path d="M116 198c12 18 28 28 52 28" stroke="#3d4924" stroke-width="10" fill="none" stroke-linecap="round"/>
      `);
    case 'tank':
      return wrap(`
        <rect x="92" y="182" width="226" height="48" rx="20" fill="url(#__ID__-mil-olive-dark)"/>
        <rect x="142" y="138" width="104" height="52" rx="18" fill="url(#__ID__-mil-olive)"/>
        <path d="M234 150h88c8 0 14 6 14 14s-6 14-14 14h-88z" fill="#dfe7c8"/>
        <path d="M102 184c42-22 84-31 128-26" stroke="rgba(255,255,255,0.16)" stroke-width="10" fill="none" stroke-linecap="round"/>
        <g fill="#354022">
          <circle cx="138" cy="230" r="18"/><circle cx="190" cy="230" r="18"/><circle cx="242" cy="230" r="18"/><circle cx="294" cy="230" r="18"/>
        </g>
        <g fill="#768455">
          <circle cx="138" cy="230" r="8"/><circle cx="190" cy="230" r="8"/><circle cx="242" cy="230" r="8"/><circle cx="294" cy="230" r="8"/>
        </g>
      `);
    case 'drone':
      return wrap(`
        <circle cx="210" cy="185" r="30" fill="url(#__ID__-mil-metal)"/>
        <path d="M210 185L138 124M210 185l72-61M210 185l-72 61M210 185l72 61" stroke="#dfe7d2" stroke-width="14" fill="none" stroke-linecap="round"/>
        <g fill="url(#__ID__-mil-olive)">
          <circle cx="122" cy="110" r="24"/><circle cx="298" cy="110" r="24"/><circle cx="122" cy="260" r="24"/><circle cx="298" cy="260" r="24"/>
        </g>
        <g stroke="#425033" stroke-width="8" fill="none" stroke-linecap="round">
          <path d="M102 110h40M278 110h40M102 260h40M278 260h40"/>
        </g>
      `);
    case 'binoculars':
      return wrap(`
        <rect x="116" y="120" width="68" height="112" rx="30" fill="url(#__ID__-mil-metal)"/>
        <rect x="236" y="120" width="68" height="112" rx="30" fill="url(#__ID__-mil-metal)"/>
        <rect x="168" y="108" width="84" height="42" rx="18" fill="url(#__ID__-mil-olive)"/>
        <circle cx="150" cy="218" r="38" fill="#2f3828"/>
        <circle cx="270" cy="218" r="38" fill="#2f3828"/>
        <circle cx="150" cy="218" r="22" fill="#78a3b1" opacity="0.55"/>
        <circle cx="270" cy="218" r="22" fill="#78a3b1" opacity="0.55"/>
      `);
    case 'radio':
      return wrap(`
        <rect x="132" y="92" width="156" height="188" rx="28" fill="url(#__ID__-mil-olive)"/>
        <rect x="154" y="122" width="112" height="76" rx="14" fill="#1e2c2a"/>
        <rect x="164" y="132" width="92" height="22" rx="8" fill="#8fd0a2" opacity="0.55"/>
        <circle cx="182" cy="234" r="18" fill="#728050"/>
        <circle cx="238" cy="234" r="28" fill="#728050"/>
        <path d="M210 92V50" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
        <path d="M194 72c14 4 22 14 26 30" stroke="rgba(255,255,255,0.22)" stroke-width="8" fill="none" stroke-linecap="round"/>
      `);
    case 'medic':
      return wrap(`
        <rect x="124" y="98" width="172" height="164" rx="32" fill="url(#__ID__-mil-metal)"/>
        <rect x="190" y="122" width="40" height="116" rx="10" fill="#ef4444"/>
        <rect x="152" y="160" width="116" height="40" rx="10" fill="#ef4444"/>
        <rect x="162" y="74" width="96" height="34" rx="16" fill="#d8c3ab"/>
        <path d="M146 120c28-14 70-18 118-8" stroke="rgba(255,255,255,0.20)" stroke-width="10" fill="none" stroke-linecap="round"/>
      `);
    case 'shield':
      return wrap(`
        <path d="M210 74l100 36v60c0 72-42 118-100 154-58-36-100-82-100-154v-60l100-36z" fill="url(#__ID__-mil-metal)"/>
        <path d="M210 106v180M132 168h156" stroke="#76815c" stroke-width="16"/>
        <path d="M210 84c22 12 44 18 66 22" stroke="rgba(255,255,255,0.20)" stroke-width="10" fill="none" stroke-linecap="round"/>
      `);
    case 'boots':
      return wrap(`
        <path d="M104 214h92c18 0 32 15 32 33v17H104c-16 0-28-12-28-28v-6c0-9 8-16 28-16z" fill="url(#__ID__-mil-brown)"/>
        <path d="M216 214h92c18 0 32 15 32 33v17H216c-16 0-28-12-28-28v-6c0-9 8-16 28-16z" fill="#7d5635"/>
        <path d="M170 214v-64h38v64M282 214v-64h38v64" stroke="#d8c49e" stroke-width="12" stroke-linecap="round"/>
        <path d="M122 238h82M234 238h82" stroke="rgba(255,255,255,0.14)" stroke-width="8" stroke-linecap="round"/>
      `);
    case 'medal':
      return wrap(`
        <path d="M152 72h44l18 60h-44z" fill="#ef4444"/>
        <path d="M224 72h44l-18 60h-44z" fill="#2563eb"/>
        <circle cx="210" cy="196" r="64" fill="#f3c54c"/>
        <circle cx="210" cy="196" r="54" fill="url(#__ID__-mil-metal)" opacity="0.35"/>
        <polygon points="210,152 224,184 258,187 232,210 240,244 210,226 180,244 188,210 162,187 196,184" fill="#fff2b3"/>
      `);
    case 'goggles':
      return wrap(`
        <rect x="104" y="144" width="90" height="72" rx="26" fill="url(#__ID__-mil-metal)"/>
        <rect x="226" y="144" width="90" height="72" rx="26" fill="url(#__ID__-mil-metal)"/>
        <rect x="188" y="166" width="44" height="28" rx="14" fill="#d7dcc7"/>
        <path d="M78 176h28M314 176h28" stroke="#f8f6eb" stroke-width="14" stroke-linecap="round"/>
        <rect x="122" y="160" width="54" height="40" rx="14" fill="#46503b"/>
        <rect x="244" y="160" width="54" height="40" rx="14" fill="#46503b"/>
        <rect x="130" y="168" width="38" height="24" rx="10" fill="#88b38c" opacity="0.35"/>
        <rect x="252" y="168" width="38" height="24" rx="10" fill="#88b38c" opacity="0.35"/>
      `);
    case 'submarine':
      return wrap(`
        <path d="M98 212c0-42 34-76 76-76h92c34 0 64 18 80 46v30H98z" fill="url(#__ID__-mil-olive)"/>
        <rect x="188" y="108" width="54" height="34" rx="12" fill="#d6dfb7"/>
        <g fill="#425033"><circle cx="148" cy="212" r="16"/><circle cx="212" cy="212" r="16"/><circle cx="276" cy="212" r="16"/></g>
        <path d="M320 196h34" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
        <path d="M122 170c54-20 114-24 172-8" stroke="rgba(255,255,255,0.14)" stroke-width="10" fill="none" stroke-linecap="round"/>
      `);
    case 'jet':
      return wrap(`
        <path d="M74 194l118-34 96-82 30 6-52 90 48 14-14 20-66-8-34 44-20-2 8-40-84 18z" fill="url(#__ID__-mil-metal)"/>
        <path d="M182 158l64-34" stroke="rgba(255,255,255,0.22)" stroke-width="10" stroke-linecap="round"/>
      `);
    case 'compass':
      return wrap(`
        <circle cx="210" cy="176" r="104" fill="url(#__ID__-mil-metal)"/>
        <circle cx="210" cy="176" r="72" fill="#46503b"/>
        <polygon points="210,92 240,176 210,260 180,176" fill="#f8f6eb"/>
        <polygon points="210,116 228,176 210,236 192,176" fill="#ef4444"/>
        <circle cx="210" cy="176" r="16" fill="#f8f6eb"/>
        <circle cx="210" cy="176" r="92" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="6"/>
      `);
    case 'watchtower':
      return wrap(`
        <rect x="148" y="92" width="124" height="52" rx="12" fill="url(#__ID__-mil-metal)"/>
        <path d="M162 144l-30 128M258 144l30 128M188 144l-18 128M232 144l18 128" ${commonStroke}/>
        <path d="M120 272h180" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
        <path d="M148 120h124" stroke="rgba(255,255,255,0.20)" stroke-width="8" stroke-linecap="round"/>
      `);
    case 'parachute':
      return wrap(`
        <path d="M102 154c18-58 64-92 108-92s90 34 108 92H102z" fill="url(#__ID__-mil-metal)"/>
        <path d="M136 154l34 74M210 154v94M284 154l-34 74" ${commonStroke}/>
        <circle cx="210" cy="278" r="18" fill="#f8f6eb"/>
        <path d="M210 296v34M210 314l-26 34M210 314l26 34" ${commonStroke}/>
      `);
    case 'ammo':
      return wrap(`
        <rect x="122" y="128" width="54" height="132" rx="18" fill="#d9c282"/>
        <rect x="184" y="108" width="54" height="152" rx="18" fill="#e7d59c"/>
        <rect x="246" y="142" width="54" height="118" rx="18" fill="#d9c282"/>
        <path d="M149 128l-8-26h16zM211 108l-8-26h16zM273 142l-8-26h16z" fill="#f8f6eb"/>
        <path d="M136 156h26M198 138h26M260 168h26" stroke="rgba(255,255,255,0.20)" stroke-width="8" stroke-linecap="round"/>
      `);
    case 'map':
      return wrap(`
        <path d="M92 120l76-24 84 28 76-24v180l-76 24-84-28-76 24z" fill="url(#__ID__-mil-metal)"/>
        <path d="M168 96v180M252 124v180" stroke="#77825a" stroke-width="12"/>
        <path d="M118 170c24-20 46-26 72-18 18 6 28 14 48 12 18-2 28-10 52-24" stroke="#ef4444" stroke-width="10" fill="none" stroke-linecap="round"/>
        <path d="M116 122c30 12 62 14 98 10" stroke="rgba(255,255,255,0.20)" stroke-width="10" fill="none" stroke-linecap="round"/>
      `);
    case 'nightvision':
      return wrap(`
        <rect x="106" y="144" width="90" height="72" rx="24" fill="url(#__ID__-mil-olive)"/>
        <rect x="224" y="144" width="90" height="72" rx="24" fill="url(#__ID__-mil-olive)"/>
        <rect x="184" y="112" width="52" height="28" rx="10" fill="#e3ecd0"/>
        <circle cx="150" cy="180" r="26" fill="#57ff79" opacity="0.55"/>
        <circle cx="270" cy="180" r="26" fill="#57ff79" opacity="0.55"/>
        <path d="M106 182h-24M314 182h24" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
      `);
    case 'case':
      return wrap(`
        <rect x="108" y="126" width="204" height="144" rx="24" fill="url(#__ID__-mil-olive-dark)"/>
        <rect x="178" y="96" width="64" height="28" rx="12" fill="#dfe7d2"/>
        <rect x="138" y="160" width="144" height="20" rx="10" fill="#dfe7d2"/>
        <rect x="184" y="188" width="52" height="18" rx="9" fill="#dfe7d2"/>
        <path d="M126 144h168" stroke="rgba(255,255,255,0.16)" stroke-width="10" stroke-linecap="round"/>
      `);
    case 'star':
      return wrap(`
        <polygon points="210,74 246,150 330,160 268,216 286,298 210,256 134,298 152,216 90,160 174,150" fill="#f0d36f"/>
        <polygon points="210,98 236,154 296,162 250,204 264,262 210,232 156,262 170,204 124,162 184,154" fill="#fff3b3" opacity="0.5"/>
      `);
    default:
      return wrap(`<circle cx="210" cy="176" r="88" fill="url(#__ID__-mil-metal)"/>`);
  }
}

function iconBrand(key) {
  const badge = (inner, options = {}) => {
    const { shape = 'circle', base = '#121826', ring = 'rgba(255,255,255,0.32)', accent = 'rgba(91,192,255,0.32)' } = options;
    const shell = shape === 'rect'
      ? `<rect x="92" y="88" width="236" height="176" rx="42" fill="url(#__ID__-brand-shell)"/><rect x="104" y="100" width="212" height="152" rx="34" fill="rgba(255,255,255,0.06)"/><rect x="92" y="88" width="236" height="176" rx="42" fill="none" stroke="${ring}" stroke-width="4"/>`
      : `<circle cx="210" cy="176" r="108" fill="url(#__ID__-brand-shell)"/><circle cx="210" cy="176" r="92" fill="rgba(255,255,255,0.05)"/><circle cx="210" cy="176" r="108" fill="none" stroke="${ring}" stroke-width="4"/>`;
    return `
      <defs>
        <radialGradient id="__ID__-brand-shell" cx="34%" cy="28%" r="74%">
          <stop offset="0%" stop-color="#2a3449"/>
          <stop offset="58%" stop-color="${base}"/>
          <stop offset="100%" stop-color="#060b14"/>
        </radialGradient>
        <filter id="__ID__-brand-drop" x="-35%" y="-35%" width="170%" height="170%">
          <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#030711" flood-opacity="0.30"/>
        </filter>
      </defs>
      <g filter="url(#__ID__-brand-drop)">
        ${shell}
        <ellipse cx="170" cy="116" rx="78" ry="34" fill="rgba(255,255,255,0.16)"/>
        <ellipse cx="210" cy="264" rx="84" ry="14" fill="${accent}" opacity="0.55"/>
        ${inner}
      </g>
    `;
  };

  switch (key) {
    case 'apple':
      return badge(`
        <path d="M236 86c11-17 14-29 13-41-16 1-34 12-43 25-8 11-14 25-12 39 17 2 31-8 42-23z" fill="#ffffff"/>
        <path d="M272 136c-13-22-32-32-50-32-21 0-30 10-44 10-15 0-25-10-45-10-34 0-69 28-69 80 0 32 11 66 27 89 14 20 29 42 50 42 19 0 26-12 49-12 24 0 29 12 49 12 22 0 36-20 50-40 11-17 16-30 24-49-52-21-59-93-12-130-10-15-18-25-29-36z" fill="#ffffff" transform="translate(0,-12) scale(0.82) translate(46,30)"/>
      `, { base: '#0e121a' });
    case 'nike':
      return badge(`<path d="M102 222c67-15 140-66 216-120-31 59-91 138-185 150-28 4-42-5-31-30z" fill="#ffffff"/>`, { shape: 'rect', base: '#0e131b' });
    case 'bmw':
      return badge(`
        <circle cx="210" cy="176" r="74" fill="#ffffff"/>
        <circle cx="210" cy="176" r="58" fill="#111827"/>
        <path d="M210 118A58 58 0 0 1 268 176H210z" fill="#5bc0ff"/>
        <path d="M152 176A58 58 0 0 1 210 118v58z" fill="#ffffff"/>
        <path d="M210 234A58 58 0 0 1 152 176h58z" fill="#5bc0ff"/>
        <path d="M268 176A58 58 0 0 1 210 234v-58z" fill="#ffffff"/>
        <circle cx="210" cy="176" r="34" fill="#111827"/>
      `, { base: '#0e1319' });
    case 'lego':
      return badge(`
        <rect x="126" y="118" width="168" height="110" rx="24" fill="#ef4444"/>
        <rect x="142" y="102" width="28" height="24" rx="10" fill="#ffd166"/><rect x="182" y="102" width="28" height="24" rx="10" fill="#ffd166"/><rect x="222" y="102" width="28" height="24" rx="10" fill="#ffd166"/><rect x="262" y="102" width="28" height="24" rx="10" fill="#ffd166"/>
        <text x="210" y="191" text-anchor="middle" font-size="48" font-weight="900" fill="#ffffff" font-family="Arial, sans-serif">LEGO</text>
      `, { shape: 'rect', base: '#3c0f12', accent: 'rgba(239,68,68,0.38)' });
    case 'tesla':
      return badge(`
        <path d="M110 108c26-14 61-22 100-22s74 8 100 22c-8 9-20 15-34 18-17-9-40-13-66-13s-49 4-66 13c-14-3-26-9-34-18z" fill="#ffffff"/>
        <path d="M195 116h30l-14 140h-2z" fill="#ffffff"/>
        <path d="M150 146c17-11 38-16 60-16s43 5 60 16" stroke="#ffffff" stroke-width="14" fill="none" stroke-linecap="round"/>
      `, { base: '#2c1116', accent: 'rgba(239,68,68,0.28)' });
    case 'pepsi':
      return badge(`
        <circle cx="210" cy="176" r="84" fill="#ffffff"/>
        <path d="M126 176c0-40 39-72 84-72 35 0 64 13 77 36-14-8-31-13-52-13-47 0-84 22-109 49z" fill="#ef4444"/>
        <path d="M130 192c26-28 61-45 107-45 21 0 38 3 53 10-5 36-40 74-78 84-37 10-73 1-99-24 17 2 35 0 51-8 22-10 39-17 51-19-33 0-59 1-85 0z" fill="#2563eb"/>
      `, { base: '#101827' });
    case 'adidas':
      return badge(`
        <path d="M120 230l46-82 30 16-36 66z" fill="#ffffff"/>
        <path d="M176 230l40-72 30 16-30 56z" fill="#ffffff"/>
        <path d="M230 230l32-58 28 16-22 42z" fill="#ffffff"/>
      `, { shape: 'rect', base: '#10151f' });
    case 'amazon':
      return badge(`
        <text x="192" y="178" text-anchor="middle" font-size="142" font-weight="800" fill="#ffffff" font-family="Arial, sans-serif">a</text>
        <path d="M142 226c30 18 102 18 136-4" stroke="#ffb703" stroke-width="14" fill="none" stroke-linecap="round"/>
        <path d="M266 214l22 4-11 20" fill="none" stroke="#ffb703" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      `, { base: '#131922', accent: 'rgba(255,183,3,0.26)' });
    case 'microsoft':
      return badge(`
        <rect x="132" y="118" width="64" height="64" rx="12" fill="#f25022"/>
        <rect x="224" y="118" width="64" height="64" rx="12" fill="#7fba00"/>
        <rect x="132" y="210" width="64" height="64" rx="12" fill="#00a4ef"/>
        <rect x="224" y="210" width="64" height="64" rx="12" fill="#ffb900"/>
      `, { shape: 'rect', base: '#16202d' });
    case 'shell':
      return badge(`
        <path d="M210 96c68 0 114 52 114 114H96c0-62 46-114 114-114z" fill="#ffd54f"/>
        <path d="M210 104v98M146 122l28 78M274 122l-28 78M118 158h184M142 190h136" stroke="#ef4444" stroke-width="12" stroke-linecap="round"/>
      `, { base: '#2a1415', accent: 'rgba(255,213,79,0.28)' });
    case 'google':
      return badge(`
        <text x="210" y="212" text-anchor="middle" font-size="92" font-weight="800" fill="#ffffff" font-family="Arial, sans-serif">G</text>
        <path d="M236 126c-12-8-26-12-44-12-40 0-72 28-72 62s32 62 72 62c32 0 56-14 66-38h-66" stroke="#4285F4" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M136 188c4 18 16 32 34 42" stroke="#34A853" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M164 118c14-10 30-16 50-16" stroke="#EA4335" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M258 182h46" stroke="#FBBC05" stroke-width="18" fill="none" stroke-linecap="round"/>
      `, { base: '#111827' });
    case 'spotify':
      return badge(`
        <circle cx="210" cy="176" r="90" fill="#1ed760"/>
        <path d="M146 152c44-12 88-8 132 12M154 188c34-10 68-7 102 8M162 222c26-6 49-4 74 6" stroke="#0d1117" stroke-width="16" fill="none" stroke-linecap="round"/>
      `, { base: '#07140e', accent: 'rgba(30,215,96,0.30)' });
    case 'youtube':
      return badge(`
        <rect x="116" y="122" width="188" height="108" rx="30" fill="#ff3030"/>
        <polygon points="192,144 192,208 248,176" fill="#ffffff"/>
      `, { shape: 'rect', base: '#2a1215', accent: 'rgba(255,48,48,0.28)' });
    case 'starbucks':
      return badge(`
        <circle cx="210" cy="176" r="88" fill="#0f9d58"/>
        <circle cx="210" cy="176" r="60" fill="#ffffff"/>
        <path d="M210 124c18 0 34 16 34 34 0 7-2 14-7 20 5 7 9 16 9 26 0 20-16 36-36 36s-36-16-36-36c0-10 4-19 9-26-5-6-7-13-7-20 0-18 16-34 34-34z" fill="#0f9d58"/>
        <path d="M168 126l14-20M252 126l-14-20" stroke="#0f9d58" stroke-width="10" stroke-linecap="round"/>
      `, { base: '#0c1713', accent: 'rgba(15,157,88,0.28)' });
    case 'intel':
      return badge(`
        <ellipse cx="210" cy="176" rx="104" ry="72" fill="none" stroke="#5bc0ff" stroke-width="12"/>
        <text x="210" y="196" text-anchor="middle" font-size="68" font-weight="800" fill="#ffffff" font-family="Arial, sans-serif">intel</text>
      `, { shape: 'rect', base: '#0d1a28', accent: 'rgba(91,192,255,0.28)' });
    case 'toyota':
      return badge(`
        <ellipse cx="210" cy="176" rx="108" ry="80" fill="none" stroke="#ffffff" stroke-width="12"/>
        <ellipse cx="210" cy="176" rx="34" ry="64" fill="none" stroke="#ffffff" stroke-width="12"/>
        <ellipse cx="210" cy="176" rx="78" ry="34" fill="none" stroke="#ffffff" stroke-width="12"/>
      `, { base: '#11161f' });
    case 'nasa':
      return badge(`
        <circle cx="210" cy="176" r="90" fill="#1d4ed8"/>
        <text x="210" y="196" text-anchor="middle" font-size="64" font-weight="900" fill="#ffffff" font-family="Arial, sans-serif">NASA</text>
        <path d="M130 220c50-38 98-52 160-44" stroke="#ef4444" stroke-width="10" fill="none" stroke-linecap="round"/>
      `, { base: '#09111e', accent: 'rgba(29,78,216,0.28)' });
    case 'gucci':
      return badge(`
        <text x="182" y="212" text-anchor="middle" font-size="98" font-weight="700" fill="#ffffff" font-family="Georgia, serif">G</text>
        <text x="240" y="212" text-anchor="middle" font-size="98" font-weight="700" fill="#ffffff" font-family="Georgia, serif">G</text>
      `, { shape: 'rect', base: '#1b1420', accent: 'rgba(255,255,255,0.14)' });
    case 'playstation':
      return badge(`
        <path d="M176 92c34 6 60 28 60 58v118c0 14-10 24-24 24-12 0-24-6-36-18V92z" fill="#ffffff"/>
        <path d="M198 188l102-32c12-4 24 4 24 16 0 8-6 16-16 20l-104 38c-14 4-28-6-28-20 0-10 8-18 22-22z" fill="#ffffff"/>
        <path d="M118 242l54 20 46-16-52-20z" fill="#5bc0ff"/>
      `, { shape: 'rect', base: '#131b2a' });
    case 'mcdonalds':
      return badge(`
        <path d="M126 272c0-92 20-154 52-154 16 0 28 16 32 42 4-26 16-42 32-42 32 0 52 62 52 154h-32c0-66-8-104-20-104-8 0-16 18-20 46h-24c-4-28-12-46-20-46-12 0-20 38-20 104z" fill="#ffd166"/>
      `, { base: '#2a1911', accent: 'rgba(255,209,102,0.26)' });
    default:
      return badge(`<circle cx="210" cy="176" r="88" fill="#ffffff"/>`);
  }
}

function flagMarkup(key) {
  switch (key) {
    case 'bulgaria':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>
        <rect x="54" y="142" width="312" height="68" fill="#2ca24c"/>
        <rect x="54" y="210" width="312" height="68" fill="#d44848"/>
      `;
    case 'germany':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#111111"/>
        <rect x="54" y="142" width="312" height="68" fill="#d62828"/>
        <rect x="54" y="210" width="312" height="68" fill="#ffcc33"/>
      `;
    case 'france':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>
        <rect x="54" y="74" width="104" height="204" rx="24" fill="#1d4ed8"/>
        <rect x="262" y="74" width="104" height="204" rx="24" fill="#ef4444"/>
      `;
    case 'italy':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>
        <rect x="54" y="74" width="104" height="204" rx="24" fill="#22c55e"/>
        <rect x="262" y="74" width="104" height="204" rx="24" fill="#ef4444"/>
      `;
    case 'japan':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>
        <circle cx="210" cy="176" r="54" fill="#ef4444"/>
      `;
    case 'brazil':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#18984a"/>
        <polygon points="210,100 324,176 210,252 96,176" fill="#ffd23f"/>
        <circle cx="210" cy="176" r="46" fill="#1d4ed8"/>
        <path d="M170 182c28-18 55-21 80-10" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round"/>
      `;
    case 'greece':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#2c63d6"/>
        <rect x="54" y="98" width="312" height="18" fill="#ffffff"/>
        <rect x="54" y="134" width="312" height="18" fill="#ffffff"/>
        <rect x="54" y="170" width="312" height="18" fill="#ffffff"/>
        <rect x="54" y="206" width="312" height="18" fill="#ffffff"/>
        <rect x="54" y="242" width="312" height="18" fill="#ffffff"/>
        <rect x="54" y="74" width="122" height="122" fill="#2c63d6"/>
        <rect x="102" y="74" width="26" height="122" fill="#ffffff"/>
        <rect x="54" y="122" width="122" height="26" fill="#ffffff"/>
      `;
    case 'spain':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#c71f37"/>
        <rect x="54" y="126" width="312" height="100" fill="#f4c430"/>
        <rect x="112" y="148" width="28" height="56" rx="8" fill="#b42828"/>
      `;
    case 'usa':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>
        <g fill="#ef4444">
          <rect x="54" y="74" width="312" height="16"/>
          <rect x="54" y="106" width="312" height="16"/>
          <rect x="54" y="138" width="312" height="16"/>
          <rect x="54" y="170" width="312" height="16"/>
          <rect x="54" y="202" width="312" height="16"/>
          <rect x="54" y="234" width="312" height="16"/>
          <rect x="54" y="266" width="312" height="12"/>
        </g>
        <rect x="54" y="74" width="140" height="110" rx="24" fill="#2346a0"/>
        <g fill="#ffffff">
          <circle cx="84" cy="96" r="5"/><circle cx="114" cy="96" r="5"/><circle cx="144" cy="96" r="5"/><circle cx="174" cy="96" r="5"/>
          <circle cx="99" cy="122" r="5"/><circle cx="129" cy="122" r="5"/><circle cx="159" cy="122" r="5"/>
          <circle cx="84" cy="148" r="5"/><circle cx="114" cy="148" r="5"/><circle cx="144" cy="148" r="5"/><circle cx="174" cy="148" r="5"/>
        </g>
      `;
    case 'sweden':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#2563eb"/>
        <rect x="134" y="74" width="34" height="204" fill="#ffd23f"/>
        <rect x="54" y="154" width="312" height="34" fill="#ffd23f"/>
      `;
    case 'uk':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#1e3a8a"/>
        <path d="M54 74l312 204M366 74L54 278" stroke="#ffffff" stroke-width="38"/>
        <path d="M54 74l312 204M366 74L54 278" stroke="#ef4444" stroke-width="18"/>
        <rect x="184" y="74" width="52" height="204" fill="#ffffff"/>
        <rect x="54" y="150" width="312" height="52" fill="#ffffff"/>
        <rect x="194" y="74" width="32" height="204" fill="#ef4444"/>
        <rect x="54" y="160" width="312" height="32" fill="#ef4444"/>
      `;
    case 'canada':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>
        <rect x="54" y="74" width="72" height="204" rx="24" fill="#ef4444"/>
        <rect x="294" y="74" width="72" height="204" rx="24" fill="#ef4444"/>
        <path d="M210 112l16 32 36-4-22 24 16 20-26 2 4 34-24-18-24 18 4-34-26-2 16-20-22-24 36 4z" fill="#ef4444"/>
      `;
    case 'romania':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#facc15"/>
        <rect x="54" y="74" width="104" height="204" rx="24" fill="#1d4ed8"/>
        <rect x="262" y="74" width="104" height="204" rx="24" fill="#ef4444"/>
      `;
    case 'portugal':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ef4444"/>
        <rect x="54" y="74" width="126" height="204" rx="24" fill="#15803d"/>
        <circle cx="180" cy="176" r="34" fill="#facc15"/>
        <circle cx="180" cy="176" r="18" fill="#ffffff"/>
      `;
    case 'argentina':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>
        <rect x="54" y="74" width="312" height="52" fill="#5bc0ff"/>
        <rect x="54" y="226" width="312" height="52" fill="#5bc0ff"/>
        <circle cx="210" cy="176" r="24" fill="#facc15"/>
      `;
    case 'turkey':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#d62828"/>
        <circle cx="176" cy="176" r="50" fill="#ffffff"/>
        <circle cx="190" cy="176" r="40" fill="#d62828"/>
        <polygon points="254,144 262,168 287,168 267,183 274,207 254,192 234,207 241,183 221,168 246,168" fill="#ffffff"/>
      `;
    case 'ukraine':
      return `
        <rect x="54" y="74" width="312" height="102" rx="24" fill="#2563eb"/>
        <rect x="54" y="176" width="312" height="102" rx="24" fill="#facc15"/>
      `;
    case 'norway':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#d62828"/>
        <rect x="128" y="74" width="54" height="204" fill="#ffffff"/>
        <rect x="54" y="148" width="312" height="54" fill="#ffffff"/>
        <rect x="140" y="74" width="30" height="204" fill="#1d4ed8"/>
        <rect x="54" y="160" width="312" height="30" fill="#1d4ed8"/>
      `;
    case 'netherlands':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#ef4444"/>
        <rect x="54" y="142" width="312" height="68" fill="#ffffff"/>
        <rect x="54" y="210" width="312" height="68" fill="#1d4ed8"/>
      `;
    case 'china':
      return `
        <rect x="54" y="74" width="312" height="204" rx="24" fill="#d62828"/>
        <polygon points="110,106 118,130 144,130 122,146 130,170 110,154 90,170 98,146 76,130 102,130" fill="#facc15"/>
        <circle cx="168" cy="112" r="8" fill="#facc15"/>
        <circle cx="188" cy="138" r="8" fill="#facc15"/>
        <circle cx="188" cy="170" r="8" fill="#facc15"/>
        <circle cx="166" cy="194" r="8" fill="#facc15"/>
      `;
    default:
      return `<rect x="54" y="74" width="312" height="204" rx="24" fill="#ffffff"/>`;
  }
}


function realisticFlagMarkup(key) {
  return `
    <defs>
      <filter id="__ID__-flag-drop" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="14" stdDeviation="10" flood-color="#07111d" flood-opacity="0.24"/>
      </filter>
      <clipPath id="__ID__-flag-clip">
        <rect x="54" y="74" width="312" height="204" rx="24"/>
      </clipPath>
      <linearGradient id="__ID__-flag-sheen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.28)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </linearGradient>
    </defs>
    <g filter="url(#__ID__-flag-drop)">
      ${flagMarkup(key)}
      <g clip-path="url(#__ID__-flag-clip)">
        <path d="M38 98c56 22 118 26 184 10s116-18 168-4v38c-58-18-112-16-176 0s-122 12-176-8z" fill="url(#__ID__-flag-sheen)" opacity="0.85"/>
        <path d="M42 164c54 18 110 18 168 4 64-16 122-16 180 6v42c-58-20-116-20-178-4-62 14-120 12-170-4z" fill="rgba(255,255,255,0.12)"/>
        <path d="M36 226c58 18 118 20 184 8s118-14 170-2v30c-56-18-112-18-176-6-66 12-124 10-178-8z" fill="rgba(0,0,0,0.08)"/>
      </g>
      <rect x="54" y="74" width="312" height="204" rx="24" fill="none" stroke="rgba(255,255,255,0.26)" stroke-width="3"/>
    </g>
  `;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildRasterFrontMarkup(themeKey, item) {
  const palette = THEMES[themeKey].palette;
  const folderMap = {
    sport: 'sport',
    brands: 'brands',
    soldiers: 'defense'
  };
  const folder = folderMap[themeKey] || themeKey;
  const version = '831';
  return `
    <div class="raster-front raster-front-${themeKey}" style="--accent:${palette.accent};--accent2:${palette.accent2};--theme-bg1:${palette.bg1};--theme-bg2:${palette.bg2};--theme-glow:${palette.glow};">
      <div class="raster-front__art-panel">
        <img class="raster-front__image" src="assets/${folder}/${item.key}.webp?v=${version}" alt="${escapeHtml(item.label)}" draggable="false" loading="eager" />
      </div>
      <div class="raster-front__label">${escapeHtml(item.label)}</div>
    </div>
  `;
}

function getItemMonogram(label) {
  const words = String(label || '').trim().split(/\s+/).filter(Boolean);
  if (!words.length) return 'MD';
  if (words.length >= 2) return `${words[0][0] || ''}${words[1][0] || ''}`.toUpperCase();
  return words[0].slice(0, 2).toUpperCase();
}

function buildMonogramFrontMarkup(themeKey, item) {
  const palette = THEMES[themeKey].palette;
  const monogram = escapeHtml(getItemMonogram(item.label));
  const motifs = {
    music: `
      <g transform="translate(124 84)">
        <circle cx="84" cy="84" r="84" fill="rgba(255,255,255,0.20)"/>
        <path d="M116 28v96c0 18-14 32-32 32s-32-14-32-32 14-32 32-32c6 0 12 2 16 4V46l74-18v78c0 18-14 32-32 32s-32-14-32-32 14-32 32-32c6 0 12 2 16 4V28z" fill="rgba(255,255,255,0.92)"/>
      </g>`,
    landmarks: `
      <g transform="translate(90 92)">
        <rect x="40" y="88" width="160" height="72" rx="16" fill="rgba(255,255,255,0.92)"/>
        <rect x="58" y="52" width="28" height="108" rx="12" fill="rgba(255,255,255,0.92)"/>
        <rect x="154" y="36" width="30" height="124" rx="12" fill="rgba(255,255,255,0.92)"/>
        <path d="M24 152h192" stroke="rgba(255,255,255,0.92)" stroke-width="16" stroke-linecap="round"/>
        <path d="M56 60l22-34 20 34M150 42l20-34 20 34" fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      </g>`,
    history: `
      <g transform="translate(104 74)">
        <path d="M106 10c34 0 68 12 68 12v70c0 52-30 96-68 124-38-28-68-72-68-124V22s34-12 68-12z" fill="rgba(255,255,255,0.92)"/>
        <path d="M74 30h64l8 22-20 12v18H86V64L66 52z" fill="${palette.accent2}" opacity="0.9"/>
        <path d="M68 110h76M84 128h44" stroke="${palette.bg1}" stroke-width="12" stroke-linecap="round"/>
      </g>`,
    animals: `
      <g transform="translate(112 84)">
        <ellipse cx="98" cy="118" rx="72" ry="56" fill="rgba(255,255,255,0.92)"/>
        <circle cx="44" cy="64" r="24" fill="rgba(255,255,255,0.92)"/>
        <circle cx="86" cy="38" r="24" fill="rgba(255,255,255,0.92)"/>
        <circle cx="128" cy="38" r="24" fill="rgba(255,255,255,0.92)"/>
        <circle cx="170" cy="64" r="24" fill="rgba(255,255,255,0.92)"/>
      </g>`
  };
  const inner = `
    <g>
      <circle cx="210" cy="170" r="112" fill="rgba(255,255,255,0.10)"/>
      ${motifs[themeKey] || motifs.music}
      <rect x="126" y="118" width="168" height="104" rx="30" fill="rgba(9,18,34,0.26)"/>
      <text x="210" y="184" text-anchor="middle" font-size="60" font-weight="900" fill="#ffffff" font-family="Inter, Arial, sans-serif">${monogram}</text>
    </g>
  `;
  return cardFrame({
    palette,
    label: item.label,
    inner,
    idSeed: `__ID__-${themeKey}-${item.key}`
  });
}

function cardFrame({ palette, label, inner, fullBleed = false, idSeed = '__ID__' }) {
  const footerY = fullBleed ? 298 : 300;
  const bgId = `${idSeed}-bg`;
  const shadowId = `${idSeed}-shadow`;
  const stageId = `${idSeed}-stage`;
  const artGlowId = `${idSeed}-art-glow`;

  return `
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="${bgId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.accent}"/>
          <stop offset="100%" stop-color="${palette.accent2}"/>
        </linearGradient>
        <linearGradient id="${stageId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.16)"/>
          <stop offset="100%" stop-color="rgba(7,13,26,0.20)"/>
        </linearGradient>
        <radialGradient id="${artGlowId}" cx="50%" cy="38%" r="58%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.24)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
        <filter id="${shadowId}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="rgba(0,0,0,0.28)"/>
        </filter>
      </defs>
      <rect x="8" y="8" width="404" height="404" rx="36" fill="rgba(255,255,255,0.10)"/>
      <rect x="16" y="16" width="388" height="388" rx="32" fill="url(#${bgId})"/>
      <circle cx="320" cy="98" r="82" fill="rgba(255,255,255,0.14)"/>
      <circle cx="100" cy="332" r="100" fill="rgba(255,255,255,0.08)"/>
      ${fullBleed ? `<rect x="44" y="58" width="332" height="228" rx="30" fill="#ffffff" filter="url(#${shadowId})"/>` : `
        <rect x="46" y="62" width="328" height="222" rx="30" fill="rgba(8,15,30,0.18)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
        <ellipse cx="210" cy="272" rx="112" ry="22" fill="rgba(0,0,0,0.24)"/>
        <ellipse cx="210" cy="138" rx="132" ry="88" fill="url(#${artGlowId})"/>
        <rect x="58" y="76" width="304" height="188" rx="28" fill="url(#${stageId})" opacity="0.55"/>
      `}
      <g>${inner}</g>
      <rect x="42" y="${footerY}" width="336" height="78" rx="24" fill="rgba(9,18,34,0.30)"/>
      <text x="210" y="${footerY + 48}" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff" font-family="Inter, Arial, sans-serif">${label}</text>
      <rect x="16" y="16" width="388" height="388" rx="32" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
    </svg>
  `;
}

function buildFrontMarkup(themeKey, item) {
  const palette = THEMES[themeKey].palette;

  if (themeKey === 'countries') {
    return cardFrame({
      palette,
      label: item.label,
      fullBleed: true,
      inner: realisticFlagMarkup(item.key),
      idSeed: `__ID__-${themeKey}-${item.key}`
    });
  }

  if (themeKey === 'sport' || themeKey === 'brands' || themeKey === 'soldiers') {
    return buildRasterFrontMarkup(themeKey, item);
  }

  if (themeKey === 'music' || themeKey === 'landmarks' || themeKey === 'history' || themeKey === 'animals') {
    return buildMonogramFrontMarkup(themeKey, item);
  }

  return cardFrame({
    palette,
    label: item.label,
    inner: iconSoldier(item.key),
    idSeed: `__ID__-${themeKey}-${item.key}`
  });
}

function buildBackMarkup(themeKey) {
  const theme = THEMES[themeKey];
  return `
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="__ID__-back-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${theme.palette.accent}"/>
          <stop offset="100%" stop-color="${theme.palette.accent2}"/>
        </linearGradient>
      </defs>
      <rect x="12" y="12" width="396" height="396" rx="34" fill="url(#__ID__-back-bg)"/>
      <rect x="28" y="28" width="364" height="364" rx="30" fill="rgba(10,17,34,0.16)" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
      <g opacity="0.2" fill="none" stroke="#ffffff" stroke-width="12">
        <circle cx="210" cy="210" r="116"/>
        <circle cx="210" cy="210" r="72"/>
        <path d="M94 210h232M210 94v232"/>
      </g>
      <circle cx="210" cy="190" r="54" fill="rgba(255,255,255,0.92)"/>
      <text x="210" y="204" text-anchor="middle" font-size="54" font-weight="900" fill="${theme.palette.bg1}" font-family="Inter, Arial, sans-serif">M</text>
      <text x="210" y="276" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff" font-family="Inter, Arial, sans-serif">${theme.name}</text>
    </svg>
  `;
}

function getThemeAssets(themeKey) {
  if (!ASSET_CACHE[themeKey]) {
    ASSET_CACHE[themeKey] = {
      backMarkup: buildBackMarkup(themeKey),
      fronts: Object.fromEntries(THEMES[themeKey].items.map((item) => [item.key, buildFrontMarkup(themeKey, item)]))
    };
  }

  return ASSET_CACHE[themeKey];
}

function createDeck(themeKey) {
  const theme = THEMES[themeKey];
  const assets = getThemeAssets(themeKey);
  const pairCount = state.selectedCardCount / 2;
  const selectedItems = shuffle(theme.items).slice(0, pairCount);

  const cards = selectedItems.flatMap((item) => {
    const template = {
      pairId: item.key,
      label: item.label,
      frontMarkup: assets.fronts[item.key],
      backMarkup: assets.backMarkup
    };

    return [
      { ...template, uid: `${item.key}-a` },
      { ...template, uid: `${item.key}-b` }
    ];
  });

  return shuffle(cards);
}

function createSerializedDeck(themeKey, cardCount = state.selectedCardCount) {
  const theme = THEMES[themeKey];
  const pairCount = cardCount / 2;
  const selectedItems = shuffle(theme.items).slice(0, pairCount);
  const cards = selectedItems.flatMap((item) => ([
    { pairId: item.key, label: item.label, uid: `${item.key}-a-${Math.random().toString(36).slice(2, 7)}` },
    { pairId: item.key, label: item.label, uid: `${item.key}-b-${Math.random().toString(36).slice(2, 7)}` }
  ]));
  return shuffle(cards);
}

function buildBoard(themeKey, serializedDeck = null) {
  const deck = (serializedDeck || createDeck(themeKey)).map((card) => {
    if (card.frontMarkup) return card;
    const assets = getThemeAssets(themeKey);
    return {
      ...card,
      frontMarkup: assets.fronts[card.pairId],
      backMarkup: assets.backMarkup
    };
  });

  state.totalPairs = deck.length / 2;
  state.matchedPairs = state.playMode === 'online' && state.online.room ? ((state.online.room.matched_indices || []).length / 2) : 0;
  updateHud();

  gameBoard.innerHTML = deck
    .map((card, index) => `
      <article class="memory-card" data-index="${index}" data-pair-id="${card.pairId}" data-uid="${card.uid}" aria-label="${card.label}" tabindex="0">
        <div class="card-inner">
          <div class="card-face back">${card.backMarkup.replaceAll('__ID__', card.uid + '-back')}</div>
          <div class="card-face front">${card.frontMarkup.replaceAll('__ID__', card.uid + '-front')}</div>
        </div>
      </article>
    `)
    .join('');

  gameBoard.querySelectorAll('.memory-card').forEach((card) => {
    card.addEventListener('click', () => flipCard(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        flipCard(card);
      }
    });
  });

  if (state.playMode === 'online' && state.online.room) {
    applyOnlineBoardState();
  }
}

function resetScores() {
  state.scores[1] = 0;
  state.scores[2] = 0;
  scoreEls[1].textContent = '0';
  scoreEls[2].textContent = '0';
}

function updatePlayerPanels() {
  refreshPlayerNames();

  [1, 2].forEach((player) => {
    const isActive = !state.gameOver && state.currentPlayer === player;
    playerPanels[player].classList.toggle('active', isActive);
    turnEls[player].classList.toggle('active', isActive);
    turnEls[player].textContent = state.gameOver ? 'Финал' : (isActive ? 'На ход' : 'Изчаква');
    scoreEls[player].textContent = state.scores[player];
  });

  if (state.gameOver) {
    subtextEls[1].textContent = state.scores[1] >= state.scores[2] ? 'Финален резултат записан' : 'Опитай реванш';
    subtextEls[2].textContent = state.scores[2] >= state.scores[1] ? 'Финален резултат записан' : 'Опитай реванш';
    return;
  }

  if (!state.started) {
    if (state.playMode === 'online') {
      subtextEls[1].textContent = 'Онлайн изборът е подготвен';
      subtextEls[2].textContent = 'Чака втори играч';
    } else if (isComputerMode()) {
      subtextEls[1].textContent = 'Готов да предизвика AI';
      subtextEls[2].textContent = `${AI_OPTIONS[state.aiDifficulty].name} • ${Math.round(AI_OPTIONS[state.aiDifficulty].chance * 100)}% шанс`;
    } else {
      subtextEls[1].textContent = 'Готов за игра';
      subtextEls[2].textContent = 'Ще атакува след грешка';
    }
    return;
  }

  if (isComputerMode()) {
    subtextEls[1].textContent = state.currentPlayer === 1 ? 'Твоят ред да намериш двойка' : 'Изчаква хода на компютъра';
    subtextEls[2].textContent = state.currentPlayer === 2 ? `AI мисли • ${AI_OPTIONS[state.aiDifficulty].name}` : 'Чака твоя грешка';
    return;
  }

  subtextEls[1].textContent = state.currentPlayer === 1 ? 'Твоят ред да намериш двойка' : 'Чака следващ шанс';
  subtextEls[2].textContent = state.currentPlayer === 2 ? 'Твоят ред да намериш двойка' : 'Чака следващ шанс';
}

function resetRoundState() {
  state.started = false;
  state.currentPlayer = 1;
  state.flipped = [];
  state.lockBoard = false;
  state.matchedPairs = 0;
  state.totalPairs = 0;
  state.gameOver = false;
  clearTurnStart();
  if (state.online.pendingTimeout) {
    clearTimeout(state.online.pendingTimeout);
    state.online.pendingTimeout = null;
  }
  if (state.aiTurnTimeout) {
    clearTimeout(state.aiTurnTimeout);
    state.aiTurnTimeout = null;
  }
  resetScores();
  updatePlayerPanels();
  gameBoard.classList.remove('active');
  gameBoard.innerHTML = '';
  gameBoard.removeAttribute('style');
  emptyState.classList.remove('hidden');
  resultModal.classList.add('hidden');
  setResultRematchStatus('', '');
  updateResultActionButtons();
  setAppMode('setup');
  startButton.disabled = !state.selectedTheme || state.playMode === 'online';
  renderThemeSelector();
  renderCountSelector();
  renderModeSelector();
  renderDifficultySelector();
  updatePlayerPanels();
  updateAuthUi();
  updateHud();
}

function startGame() {
  if (!state.selectedTheme) return;
  if (state.playMode === 'online') {
    updateHud('За онлайн режим използвай панела „Онлайн стая“ и бутона „Старт онлайн“.');
    return;
  }

  state.started = true;
  state.gameOver = false;
  state.currentPlayer = 1;
  state.flipped = [];
  state.lockBoard = false;
  resetScores();
  updatePlayerPanels();
  buildBoard(state.selectedTheme);
  setLocalTurnStart();
  emptyState.classList.add('hidden');
  gameBoard.classList.add('active');
  setAppMode('game');
  updateHud(isComputerMode()
    ? `Играта започна. ${getPlayerName(1)} започва срещу компютъра на ${AI_OPTIONS[state.aiDifficulty].name}.`
    : `Играта започна. ${getPlayerName(1)} е на ход. Карти: ${state.selectedCardCount}.`);
  resultModal.classList.add('hidden');
  setResultRematchStatus('', '');
  updateResultActionButtons();
  requestAnimationFrame(() => requestAnimationFrame(resizeBoardFit));
}

function getAvailableComputerCards() {
  return [...gameBoard.querySelectorAll('.memory-card')].filter((card) => !card.classList.contains('matched'));
}

function chooseComputerMove() {
  const available = getAvailableComputerCards();
  if (available.length < 2) return [];

  if (Math.random() < AI_OPTIONS[state.aiDifficulty].chance) {
    const groups = available.reduce((acc, card) => {
      acc[card.dataset.pairId] = acc[card.dataset.pairId] || [];
      acc[card.dataset.pairId].push(card);
      return acc;
    }, {});
    const exactPairs = Object.values(groups).filter((items) => items.length >= 2);
    if (exactPairs.length) {
      const pair = exactPairs[Math.floor(Math.random() * exactPairs.length)];
      return pair.slice(0, 2);
    }
  }

  const shuffled = shuffle(available);
  return shuffled.slice(0, 2);
}

function queueComputerTurn(delay = 620) {
  if (!isComputerTurn() || !state.started || state.gameOver) return;
  if (state.aiTurnTimeout) clearTimeout(state.aiTurnTimeout);
  state.aiTurnTimeout = setTimeout(() => {
    state.aiTurnTimeout = null;
    runComputerTurn();
  }, delay);
}

function runComputerTurn() {
  if (!isComputerTurn() || !state.started || state.gameOver) return;
  const [first, second] = chooseComputerMove();
  if (!first || !second) return;

  state.lockBoard = true;
  updatePlayerPanels();
  updateHud(`Компютърът мисли... (${AI_OPTIONS[state.aiDifficulty].name})`);

  state.aiTurnTimeout = setTimeout(() => {
    first.classList.add('flip');
    state.flipped = [first];

    state.aiTurnTimeout = setTimeout(() => {
      second.classList.add('flip');
      state.flipped = [first, second];
      state.lockBoard = false;

      if (first.dataset.pairId === second.dataset.pairId) {
        handleMatch(first, second);
      } else {
        handleMiss(first, second);
      }
    }, 540);
  }, 380);
}

function flipCard(card) {
  if (state.playMode === 'online' && state.online.room?.status === 'playing') {
    handleOnlineFlip(card);
    return;
  }

  if (!state.started || state.lockBoard || isComputerTurn()) return;
  if (state.flipped.includes(card)) return;
  if (card.classList.contains('matched')) return;

  card.classList.add('flip');
  state.flipped.push(card);

  if (state.flipped.length < 2) return;

  const [first, second] = state.flipped;
  const isMatch = first.dataset.pairId === second.dataset.pairId;

  if (isMatch) {
    handleMatch(first, second);
  } else {
    handleMiss(first, second);
  }
}

function handleMatch(first, second) {
  first.classList.add('matched');
  second.classList.add('matched');
  state.scores[state.currentPlayer] += 1;
  state.matchedPairs += 1;
  scoreEls[state.currentPlayer].textContent = state.scores[state.currentPlayer];
  subtextEls[state.currentPlayer].textContent = 'Точна двойка! Играеш отново';
  state.flipped = [];
  updateHud(`${getPlayerName(state.currentPlayer)} позна двойка и получава точка.`);

  if (state.matchedPairs === state.totalPairs) {
    endGame();
    return;
  }

  setLocalTurnStart();
  updatePlayerPanels();
  if (isComputerTurn()) {
    queueComputerTurn(720);
  }
}

function handleMiss(first, second) {
  state.lockBoard = true;
  const nextPlayer = state.currentPlayer === 1 ? 2 : 1;
  updateHud(`Няма съвпадение. Ходът преминава към ${getPlayerName(nextPlayer)}.`);

  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');
    state.flipped = [];
    state.lockBoard = false;
    state.currentPlayer = nextPlayer;
    setLocalTurnStart();
    updatePlayerPanels();
    updateHud(isComputerTurn()
      ? `Ред е на ${getPlayerName(state.currentPlayer)}.`
      : `Ред е на ${getPlayerName(state.currentPlayer)}. Намери следващата двойка.`);
    if (isComputerTurn()) {
      queueComputerTurn(700);
    }
  }, 760);
}

function setResultSummaryContent({
  title,
  summary,
  player1Name,
  player2Name,
  player1Score,
  player2Score,
  rematchMessage = '',
  rematchTone = ''
}) {
  resultTitle.textContent = title;
  resultSummary.textContent = summary;
  resultPlayer1Name.textContent = player1Name;
  resultPlayer2Name.textContent = player2Name;
  resultPlayer1Score.textContent = String(player1Score);
  resultPlayer2Score.textContent = String(player2Score);
  setResultRematchStatus(rematchMessage, rematchTone);
}

function setResultRematchStatus(message = '', tone = '') {
  if (!resultRematchStatus) return;
  resultRematchStatus.textContent = message || '';
  resultRematchStatus.classList.toggle('hidden', !message);
  resultRematchStatus.classList.toggle('info', tone === 'info');
  resultRematchStatus.classList.toggle('success', tone === 'success');
}

function getOnlineRematchFlags(room = state.online.room) {
  return {
    hostReady: Boolean(room?.rematch_host_ready),
    guestReady: Boolean(room?.rematch_guest_ready)
  };
}

function getOnlineRematchStatus(room = state.online.room) {
  const slot = myRoomSlot();
  const { hostReady, guestReady } = getOnlineRematchFlags(room);
  const bothReady = hostReady && guestReady;
  const myReady = slot === 1 ? hostReady : slot === 2 ? guestReady : false;

  if (bothReady) {
    return { text: 'И двамата играчи потвърдиха реванш. Подготвяме новата игра...', tone: 'success', myReady, bothReady };
  }
  if (myReady) {
    return { text: 'Ти потвърди реванш. Изчаква се и другият играч.', tone: 'info', myReady, bothReady };
  }
  return { text: 'Натисни „Реванш“, за да заявиш нова онлайн игра.', tone: '', myReady, bothReady };
}

function updateResultActionButtons() {
  if (state.playMode === 'online' && state.online.room?.status === 'finished') {
    const rematch = getOnlineRematchStatus(state.online.room);
    playAgainButton.textContent = rematch.bothReady ? 'Подготвяме реванш...' : (rematch.myReady ? 'Реванш заявен' : 'Реванш');
    playAgainButton.disabled = Boolean(state.online.rematchBusy || rematch.bothReady || (rematch.myReady && !rematch.bothReady));
    setResultRematchStatus(rematch.text, rematch.tone);
    return;
  }
  playAgainButton.textContent = 'Играй пак';
  playAgainButton.disabled = false;
  setResultRematchStatus('', '');
}

async function maybeAutoStartOnlineRematch(room = state.online.room) {
  if (!room || room.status !== 'finished' || state.online.rematchBusy) return;
  if (!state.auth.user || room.host_user_id !== state.auth.user.id) return;
  const { hostReady, guestReady } = getOnlineRematchFlags(room);
  if (!(hostReady && guestReady)) return;
  const key = `${room.id}:${room.rematch_nonce || 0}:${hostReady ? '1' : '0'}:${guestReady ? '1' : '0'}`;
  if (state.online.lastRematchAutoKey === key) return;
  state.online.lastRematchAutoKey = key;
  await startOnlineRematchRound(room);
}

async function startOnlineRematchRound(room = state.online.room) {
  if (!room || room.status !== 'finished') return null;
  if (!state.auth.user || room.host_user_id !== state.auth.user.id) return null;
  if (state.online.rematchBusy) return null;

  state.online.rematchBusy = true;
  updateResultActionButtons();
  suppressBackgroundOnlineTraffic(4500);
  try {
    const deck = createSerializedDeck(room.selected_theme, room.selected_card_count);
    const rematchNonce = Number(room.rematch_nonce || 0) + 1;
    const updated = await updateRoomDirect(
      {
        status: 'playing',
        deck,
        scores: { '1': 0, '2': 0 },
        current_player_slot: 1,
        flipped_indices: [],
        matched_indices: [],
        lock_board: false,
        winner_slot: null,
        turn_started_at: getNowIso(),
        rematch_host_ready: false,
        rematch_guest_ready: false,
        rematch_nonce: rematchNonce
      },
      {
        expectedRoom: room,
        roomId: room.id,
        timeoutMs: 12000,
        label: 'Стартирането на реванша'
      }
    );
    if (!updated || updated.status !== 'playing') throw new Error('Не успях да стартирам реванша.');
    adoptIncomingRoom(updated);
    state.online.lastRematchAutoKey = null;
    resultModal.classList.add('hidden');
    syncFromOnlineRoom();
    scheduleHardUiSync([0, 350, 900], { roomId: updated.id });
    updateHud('Реваншът стартира. Успех!');
    return updated;
  } catch (error) {
    state.online.lastRematchAutoKey = null;
    updateHud(error?.message || 'Не успях да стартирам реванша.');
    throw error;
  } finally {
    state.online.rematchBusy = false;
    updateResultActionButtons();
    if (myRoomSlot() === 1 && state.online.room?.status === 'finished') {
      Promise.resolve().then(() => maybeAutoStartOnlineRematch(state.online.room)).catch((error) => console.warn('Auto rematch after start attempt failed', error));
    }
  }
}

async function requestOnlineRematch() {
  const room = state.online.room;
  const slot = myRoomSlot();
  if (!room || room.status !== 'finished' || !slot) return;
  if (state.online.rematchBusy) return;
  const patch = slot === 1 ? { rematch_host_ready: true } : { rematch_guest_ready: true };
  let shouldAutoStart = false;
  state.online.rematchBusy = true;
  updateResultActionButtons();
  try {
    const updated = await updateRoomDirect(
      patch,
      {
        expectedRoom: room,
        roomId: room.id,
        timeoutMs: 10000,
        label: 'Заявката за реванш'
      }
    );
    if (!updated) throw new Error('Не успях да запиша заявката за реванш.');
    adoptIncomingRoom(updated);
    endOnlineGame();
    scheduleHardUiSync([200, 550, 1100, 2200], { roomId: updated.id });
    const flags = getOnlineRematchFlags(updated);
    shouldAutoStart = slot === 1 && flags.hostReady && flags.guestReady;
    if (slot !== 1) updateHud('Реваншът е заявен. Изчаква се домакинът да стартира новата игра.');
  } catch (error) {
    updateHud(error?.message || 'Не успях да заявя реванш.');
  } finally {
    state.online.rematchBusy = false;
    updateResultActionButtons();
    if (shouldAutoStart) {
      Promise.resolve().then(() => maybeAutoStartOnlineRematch(state.online.room)).catch((error) => console.warn('Auto rematch after request failed', error));
    }
  }
}

function endGame() {
  state.started = false;
  state.gameOver = true;
  clearTurnStart();
  let title = 'Равенство';
  let winnerSlot = 0;

  if (state.scores[1] > state.scores[2]) {
    title = `Победител: ${getPlayerName(1)}`;
    winnerSlot = 1;
  } else if (state.scores[2] > state.scores[1]) {
    title = `Победител: ${getPlayerName(2)}`;
    winnerSlot = 2;
  }

  setResultSummaryContent({
    title,
    summary: `Режим: ${getModeName()} • Тема: ${THEMES[state.selectedTheme].name} • Карти: ${state.selectedCardCount}.`,
    player1Name: getPlayerName(1),
    player2Name: getPlayerName(2),
    player1Score: state.scores[1],
    player2Score: state.scores[2]
  });
  updatePlayerPanels();
  updateHud('Рундът приключи. Можеш да натиснеш „Играй пак“ или да се върнеш в началното меню.');
  updateResultActionButtons();
  resultModal.classList.remove('hidden');

  if (state.auth.user && state.playMode !== 'online') {
    saveMatchToHistory({
      mode: state.playMode === 'computer' ? 'computer' : 'local',
      theme_key: state.selectedTheme,
      card_count: state.selectedCardCount,
      player1_user_id: state.auth.user.id,
      player1_name: getPlayerName(1),
      player2_user_id: null,
      player2_name: getPlayerName(2),
      player1_score: state.scores[1],
      player2_score: state.scores[2],
      winner_slot: winnerSlot,
      winner_user_id: winnerSlot === 1 ? state.auth.user.id : null
    });
  }
}


function setAuthTab(tab) {
  clearAllValidation();
  showFeedback(loginFeedback, '');
  showFeedback(registerFeedback, '');
  const stacked = !state.auth.user || !loginTab || !registerTab;
  loginTab?.classList.toggle('active', !stacked && tab === 'login');
  registerTab?.classList.toggle('active', !stacked && tab === 'register');
  loginForm.classList.toggle('active', stacked || tab === 'login');
  registerForm.classList.toggle('active', stacked || tab === 'register');
}

function getSupabaseConfig() {
  const url = window.SUPABASE_URL || '';
  const key = window.SUPABASE_ANON_KEY || '';
  return { url, key, enabled: Boolean(url && key && url.includes('http')) };
}

function schedulePostAuthSync() {
  if (state.online.authSyncQueued) return;
  state.online.authSyncQueued = true;
  window.setTimeout(async () => {
    try {
      if (!state.auth.user) return;
      clearGuestState();
      await loadProfile();
      await loadMatchHistory();
      await restoreOnlineSessionAfterAuth();
      if (state.ui.pendingInviteAutoJoin && state.ui.inviteToken) {
        state.ui.pendingInviteAutoJoin = false;
        if (!state.online.room || state.online.room.invite_token !== state.ui.inviteToken) {
          await joinInviteFromToken();
          scheduleHardUiSync([0, 400, 1200, 2500], { roomId: state.online.room?.id || null });
        }
      }
      Promise.resolve().then(() => attemptInviteAutoJoinLoggedUser()).catch((error) => console.warn('Invite auto join failed', error));
    } catch (error) {
      console.warn('Post-auth sync failed', error);
    } finally {
      state.online.authSyncQueued = false;
      renderProfilePanel();
      updateAuthUi();
      renderModeSelector();
      updateHud();
      renderInviteLanding();
    }
  }, 0);
}

async function initAuth() {
  syncRememberMeUi();
  resolveInviteTokenFromUrl();
  loadGuestState();
  if (!state.auth.user && state.guest.active) ensureGuestNames(false);

  const cfg = getSupabaseConfig();
  if (!cfg.enabled || !window.supabase) {
    backendChip.textContent = 'Backend: няма Supabase';
    state.auth.enabled = false;
    renderProfilePanel();
    updateAuthUi();
    leaveRoomButton.disabled = false;
    return;
  }

  state.auth.client = window.supabase.createClient(cfg.url, cfg.key, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storage: getAdaptiveAuthStorage()
    }
  });
  state.auth.enabled = true;
  backendChip.textContent = 'Backend: Supabase';

  const { data } = await state.auth.client.auth.getSession();
  state.auth.user = data.session?.user || null;
  await loadInvitePreview();
  if (state.auth.user) {
    clearGuestState();
    await loadProfile();
    await loadMatchHistory();
    await restoreOnlineSessionAfterAuth();
  }

  state.auth.client.auth.onAuthStateChange((_event, session) => {
    state.auth.user = session?.user || null;
    if (state.auth.user) {
      schedulePostAuthSync();
      renderProfilePanel();
      updateAuthUi();
      renderModeSelector();
      updateHud();
      return;
    }

    window.setTimeout(async () => {
      try {
        state.auth.profile = null;
        state.auth.history = [];
        state.auth.historyLoaded = false;
        state.online.publicRooms = [];
        state.ui.pendingInviteAutoJoin = false;
        if (state.online.room) await leaveRoom();
        state.ui.onlineLobbyOpen = false;
        app.classList.remove('online-lobby-mode');
        if (state.playMode === 'online') state.playMode = 'local';
      } catch (error) {
        console.warn('Post-signout cleanup failed', error);
      } finally {
        renderProfilePanel();
        updateAuthUi();
        renderModeSelector();
        updateHud();
        renderInviteLanding();
      }
    }, 0);
  });

  if (state.ui.inviteToken) {
    state.ui.onlinePreviewVisible = false;
    renderModeSelector();
    renderInviteLanding();
    if (state.auth.user && state.online.room && state.online.invitePreview?.id === state.online.room.id) {
      clearInviteContext();
      updateHud('Върна се в активната си стая.');
    } else if (state.auth.user) {
      updateHud(getInviteConflictMessage() || 'Поканата е разпозната. Натисни бутона и ще влезеш в стаята.');
    } else {
      updateHud('Поканата е разпозната. Избери вход с профил или временен гост вход.');
    }
  }

  renderProfilePanel();
  updateAuthUi();
  Promise.resolve().then(() => attemptInviteAutoJoinLoggedUser()).catch((error) => console.warn('Invite auto join failed', error));
  ensureOnlineSyncLoop();
  ensureTurnLoop();
}

async function ensureProfileFromSession() {
  if (!state.auth.user) return;
  const user = state.auth.user;
  const metadata = user.user_metadata || {};
  const guestName = sanitizeName(metadata.guest_name || metadata.username || metadata.first_name || createGuestName(), createGuestName());

  if (isAnonymousUser(user)) {
    state.auth.profile = {
      id: user.id,
      username: guestName,
      first_name: guestName,
      last_name: '',
      full_name: guestName,
      email: ''
    };
    return;
  }

  const profile = {
    id: user.id,
    username: metadata.username || user.email?.split('@')[0] || 'player',
    first_name: metadata.first_name || '',
    last_name: metadata.last_name || '',
    full_name: `${metadata.first_name || ''} ${metadata.last_name || ''}`.trim() || metadata.username || user.email?.split('@')[0] || 'Player',
    email: user.email || ''
  };
  const { error } = await state.auth.client.from('profiles').upsert(profile, { onConflict: 'id' });
  if (!error) state.auth.profile = profile;
}

async function loadProfile() {
  if (!state.auth.user || !state.auth.client) return;
  if (isAnonymousUser()) {
    await ensureProfileFromSession();
    renderProfilePanel();
    return;
  }
  const { data, error } = await state.auth.client.from('profiles').select('*').eq('id', state.auth.user.id).maybeSingle();
  if (error || !data) {
    await ensureProfileFromSession();
  } else {
    state.auth.profile = data;
  }
  renderProfilePanel();
}

function getDisplayName() {
  if (state.auth.profile?.username) return state.auth.profile.username;
  if (state.auth.profile?.first_name) return state.auth.profile.first_name;
  if (state.auth.profile?.full_name) return state.auth.profile.full_name;
  return state.playerNames[1];
}

function updateAuthUi() {
  const hasSession = Boolean(state.auth.user);
  const loggedIn = isRealAccountUser();
  const anonymousSession = Boolean(hasSession && isAnonymousUser());
  const sessionLabel = loggedIn ? 'влязъл' : (anonymousSession ? 'гост' : (state.guest.active ? 'гост' : 'няма'));
  sessionChip.textContent = `Сесия: ${sessionLabel}`;
  authStatusText.textContent = !state.auth.enabled
    ? 'Добави ключовете си в supabase-config.js и пусни SQL схемата, за да активираш онлайн режима.'
    : loggedIn
      ? `Влязъл си като ${getDisplayName()}. Онлайн режимът е активен, waiting room-ът е отключен и историята се пази.`
      : anonymousSession
        ? `Влезе като гост${state.online.room ? ' в поканената стая' : ''}. Гостът не отваря профил и не може да създава нови стаи.`
        : state.ui.inviteToken
          ? 'Поканата е разпозната. Влез с имейл или username, регистрирай се или използвай временен гост вход, за да приемеш поканата.'
          : 'Влез с имейл или username, или се регистрирай, за да отключиш онлайн режима. Като гост можеш да продължиш локално.';

  guestPreview.textContent = createGuestName();
  guestBanner.classList.toggle('hidden', loggedIn);
  const inviteLobbyAllowed = Boolean(state.ui.inviteToken && state.ui.onlineLobbyOpen && !state.started);
  const guestWaiting = isWaitingGuestView(state.online.room);
  const lobbyVisible = Boolean(isOnlineMode() && state.ui.onlineLobbyOpen && !state.started && (loggedIn || inviteLobbyAllowed || guestWaiting));
  onlineLobby.classList.toggle('hidden', !lobbyVisible);
  app.classList.toggle('online-lobby-mode', lobbyVisible);
  document.body.classList.toggle('lobby-open', lobbyVisible);
  profilePanel.classList.toggle('hidden', !loggedIn);
  authPanel.classList.toggle('guest-auth', !loggedIn);
  loginTab?.classList.toggle('hidden', true);
  registerTab?.classList.toggle('hidden', true);
  loginForm.classList.toggle('hidden', loggedIn);
  registerForm.classList.toggle('hidden', loggedIn);
  loginForm.classList.toggle('active', !loggedIn);
  registerForm.classList.toggle('active', !loggedIn);
  logoutButton.classList.toggle('hidden', !hasSession);
  profileButton.classList.toggle('logged', loggedIn);
  updateProfileLauncher();
  renderModeSelector();
  startButton.disabled = !state.selectedTheme || isOnlineMode();

  const room = state.online.room;
  const invitePreviewMode = isInvitePreviewMode();
  const preview = state.online.invitePreview;
  const roomCode = room?.code || (invitePreviewMode ? preview?.code : '');
  const roomStatus = room?.status || (invitePreviewMode ? preview?.status : null);
  const count = room ? 1 + (room.guest_user_id ? 1 : 0) : (invitePreviewMode ? 1 + (preview?.has_guest ? 1 : 0) : 0);
  roomCodeChip.textContent = `Код: ${roomCode || '—'}`;
  roomCodeChip.classList.toggle('hidden', !roomCode);
  roomStatusChip.textContent = `Стая: ${roomStatus || 'няма'}`;
  roomPlayersChip.textContent = `Играчите: ${room || invitePreviewMode ? count : 0}/2`;
  onlineTurnChip.textContent = `Ход: ${room?.current_player_slot ? getPlayerName(room.current_player_slot) : '—'}`;
  const isHostWaitingRoom = Boolean(loggedIn && room && room.host_user_id === state.auth.user?.id && room.status === 'waiting');
  const isGuestWaitingRoom = isWaitingGuestView(room);
  const canStartOnline = Boolean(isHostWaitingRoom && room.guest_user_id);
  startOnlineButton.disabled = !canStartOnline || state.online.startBusy;
  startOnlineButton.textContent = state.online.startBusy ? 'Стартираме...' : (canStartOnline ? 'Старт онлайн' : (room?.status === 'playing' ? 'Играта тече' : 'Старт онлайн'));
  startOnlineButton.classList.toggle('hidden', !isHostWaitingRoom);
  leaveRoomButton.disabled = !room;
  leaveRoomButton.classList.toggle('hidden', !room);
  leaveRoomButton.textContent = room?.status === 'playing'
    ? 'Изход от играта'
    : room && loggedIn && room.host_user_id === state.auth.user?.id
      ? 'Затвори стая'
      : 'Напусни стая';
  createRoomButton.textContent = canReplaceOwnWaitingRoom() ? 'Създай нова стая' : 'Създай стая';
  const lobbyOwner = loggedIn && !anonymousSession;
  const showHostControls = lobbyOwner && !isGuestWaitingRoom;
  roomAccessSelector?.classList.toggle('hidden', !showHostControls);
  onlineThemeSelector?.classList.toggle('hidden', !showHostControls);
  onlineCountSelector?.classList.toggle('hidden', !showHostControls);
  // Login полетата не трябва да зависят от online host controls.
  lobbyJoinCreateRow?.classList.toggle('hidden', loggedIn);
  inviteCard?.classList.toggle('hidden', !shouldShowInviteLinkCard() || !showHostControls);
  refreshRoomsButton?.classList.toggle('hidden', !showHostControls);
  createRoomButton.disabled = !showHostControls || state.online.createBusy;

  onlineLobby.classList.toggle('invite-preview-mode', invitePreviewMode);
  onlineLobby.classList.toggle('guest-waiting-mode', isGuestWaitingRoom);
  onlineLobby.classList.toggle('host-waiting-mode', Boolean(isHostWaitingRoom));
  inviteCard.classList.toggle('hidden', !shouldShowInviteLinkCard());
  inviteLinkInput.value = shouldShowInviteLinkCard() && room?.invite_token ? getInviteUrl(room.invite_token) : '';
  const joinedInviteRoom = isSameInviteRoom(room, preview);
  inviteJoinBanner.classList.toggle('hidden', !state.ui.inviteToken || joinedInviteRoom || !preview);
  inviteGuestNameField.classList.toggle('hidden', loggedIn || !invitePreviewMode);
  continueInviteGuestButton.classList.toggle('hidden', loggedIn || !invitePreviewMode);
  openProfileFromInviteButton.classList.toggle('hidden', loggedIn || !invitePreviewMode);
  joinInviteButton.classList.add('hidden');
  if (state.ui.inviteToken) {
    if (!inviteGuestNameInput.value.trim()) inviteGuestNameInput.value = createGuestName();
    const roomSummary = preview ? ` ${getInvitePreviewRoomSummary()}` : '';
    inviteJoinText.textContent = loggedIn
      ? `Поканата е валидна.${roomSummary} Ще те добавим директно в стаята и ще изчакаш домакина да стартира мача.`
      : `Поканата е валидна.${roomSummary} Избери дали да влезеш като гост или с профил.`;
    if (invitePreviewMode) {
      const conflictMessage = getInviteConflictMessage();
      showFeedback(
        onlineLobbyFeedback,
        conflictMessage || (loggedIn
          ? 'Поканата е заредена. Натисни „Влез в поканената стая“.'
          : 'Поканата е заредена. Въведи име за гост или отвори вход / регистрация.'),
        conflictMessage ? 'error' : 'success'
      );
    }
  }

  renderOnlineThemeSelector(false);
  renderOnlineCountSelector(false);
  renderProfilePanel();
  renderRoomList();
}

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < 6; i += 1) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function myRoomSlot() {
  const room = state.online.room;
  if (!room || !state.auth.user) return null;
  if (room.host_user_id === state.auth.user.id) return 1;
  if (room.guest_user_id === state.auth.user.id) return 2;
  return null;
}

async function registerUser(event) {
  event?.preventDefault?.();
  if (!state.auth.enabled) {
    updateHud('Онлайн регистрацията изисква Supabase конфигурация в supabase-config.js.');
    return;
  }

  const values = getRegisterValues();
  const valid = validateRegisterForm();
  if (!valid || !values.username || !values.firstName || !values.lastName || !values.email || !values.password) {
    showFeedback(registerFeedback, 'Попълни коректно всички полета за регистрация.', 'error');
    focusFirstInvalidField([[registerUsernameField],[registerFirstNameField],[registerLastNameField],[registerEmailField],[registerPasswordField]]);
    return;
  }

  registerButton.disabled = true;
  showFeedback(registerFeedback, 'Създаваме профила ти...', '');

  const payload = {
    email: values.email,
    password: values.password,
    options: {
      emailRedirectTo: getAuthRedirectUrl(),
      data: { username: values.username, first_name: values.firstName, last_name: values.lastName }
    }
  };

  const { data, error } = await state.auth.client.auth.signUp(payload);
  if (data?.session?.user) state.auth.user = data.session.user;
  registerButton.disabled = false;
  if (error) {
    const friendly = friendlyAuthError(error);
    showFeedback(registerFeedback, `Грешка при регистрация: ${friendly}`, 'error');
    updateHud(`Грешка при регистрация: ${friendly}`);
    return;
  }

  if (data.session?.user) {
    await ensureProfileFromSession();
    await loadProfile();
    await loadMatchHistory();
    player1NameInput.value = sanitizeName(values.firstName || values.username, 'Играч 1');
    showFeedback(registerFeedback, 'Регистрацията е успешна и профилът беше влязъл автоматично.', 'success');
    if (state.ui.inviteToken) {
      toggleProfilePanel(false);
      await loadInvitePreview();
      await joinInviteFromToken();
    } else {
      toggleProfilePanel(false);
      updateHud('Успешна регистрация. Онлайн режимът е отключен.');
    }
    return;
  }

  showFeedback(registerFeedback, 'Профилът е създаден, но проектът изисква потвърждение по имейл, преди да има сесия. Ако искаш автоматичен вход без имейл, изключи Confirm email в Supabase.', 'success');
  setAuthTab('login');
  updateHud('Регистрацията е успешна, но Supabase е настроен да изисква email confirmation преди вход.');
}

async function loginUser(event) {
  event?.preventDefault?.();
  if (!state.auth.enabled) {
    updateHud('Онлайн входът изисква Supabase конфигурация в supabase-config.js.');
    return;
  }

  const values = getLoginValues();
  const valid = validateLoginForm();
  if (!valid || !values.identifier || !values.password) {
    showFeedback(loginFeedback, 'Попълни имейл или username и парола.', 'error');
    focusFirstInvalidField([[loginEmailField],[loginPasswordField]]);
    return;
  }

  state.auth.rememberMe = Boolean(rememberMeCheckbox.checked);
  localStorage.setItem('memory_duel_remember_me', state.auth.rememberMe ? '1' : '0');

  loginButton.disabled = true;
  showFeedback(loginFeedback, 'Проверяваме данните...', '');

  const resolved = await resolveLoginEmail(values.identifier);
  if (!resolved.email) {
    loginButton.disabled = false;
    setFieldError(loginEmailField, loginEmailError, resolved.error || 'Невалиден имейл или username.');
    showFeedback(loginFeedback, `Грешка при вход: ${resolved.error || 'Невалиден имейл или username.'}`, 'error');
    updateHud(`Грешка при вход: ${resolved.error || 'Невалиден имейл или username.'}`);
    return;
  }

  const { data, error } = await state.auth.client.auth.signInWithPassword({
    email: resolved.email,
    password: values.password
  });
  if (data?.user) state.auth.user = data.user;

  loginButton.disabled = false;
  if (error) {
    const friendly = friendlyAuthError(error);
    showFeedback(loginFeedback, `Грешка при вход: ${friendly}`, 'error');
    updateHud(`Грешка при вход: ${friendly}`);
    return;
  }

  state.ui.pendingOnlineIntent = false;
  player1NameInput.value = sanitizeName(resolved.matchedUsername || resolved.email.split('@')[0], 'Играч 1');
  showFeedback(loginFeedback, resolved.mode === 'username' ? 'Успешен вход с username.' : 'Успешен вход.', 'success');
  toggleProfilePanel(false);
  updateAuthUi();
  scheduleHardUiSync([0, 500, 1500]);
  Promise.resolve().then(async () => {
    try {
      await loadProfile();
      await loadMatchHistory();
      player1NameInput.value = sanitizeName(
        state.auth.profile?.first_name || state.auth.profile?.username || resolved.matchedUsername || resolved.email.split('@')[0],
        'Играч 1'
      );
      if (state.ui.inviteToken) {
        state.ui.pendingInviteAutoJoin = true;
        await loadInvitePreview();
        await attemptInviteAutoJoinLoggedUser();
        updateHud('Успешен вход. Присъединяваме те към поканената стая...');
      } else {
        updateHud('Успешен вход. Остана на началния екран.');
      }
      await forceUiResync();
    } catch (error) {
      console.warn('post-login sync failed', error);
    }
  });
}

async function logoutUser() {
  if (!state.auth.client || state.ui.logoutBusy) return;
  state.ui.logoutBusy = true;
  try {
    if (state.online.room) {
      try {
        await withTimeout(leaveRoom({ stayOnline: false }), 7000, 'Излизането от стаята');
      } catch (error) {
        console.warn('Leave room before logout timed out', error);
        clearOnlineRoomLocalState();
      }
    }
    try {
      await withTimeout(state.auth.client.auth.signOut(), 12000, 'Изходът от профила');
    } catch (error) {
      console.warn('Sign out timeout', error);
      state.auth.user = null;
    }
    showFeedback(loginFeedback, '');
    showFeedback(registerFeedback, '');
    state.ui.profileOpen = false;
    authBackdrop?.classList.add('hidden');
    app.classList.remove('auth-open');
    state.ui.onlineLobbyOpen = false;
    app.classList.remove('online-lobby-mode');
    if (state.playMode === 'online') state.playMode = 'local';
    updateHud('Излязохте от профила. Онлайн режимът е заключен.');
  } finally {
    state.ui.logoutBusy = false;
    updateAuthUi();
  }
}

async function subscribeToRoom(roomId) {
  if (!roomId || !state.auth.client) return null;
  setPreferredRoomId(roomId);
  state.online.subscribedRoomId = roomId;
  if (state.online.channel && state.auth.client) {
    removeOnlineChannel(state.online.channel);
    state.online.channel = null;
  }

  const channel = state.auth.client
    .channel(`memory-duel-room:${roomId}`)
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'rooms',
      filter: `id=eq.${roomId}`
    }, (payload) => {
      const eventType = payload.eventType;
      if (eventType === 'DELETE') {
        if (state.online.room?.id === roomId) {
          clearOnlineRoomLocalState();
          if (state.playMode === 'online') {
            resetRoundState();
            setOnlineLobbyOpen(true);
            updateHud('Онлайн стаята беше затворена.');
            updateAuthUi();
          }
        }
        return;
      }
      const nextRoom = payload.new || null;
      if (!nextRoom) return;
      const previous = state.online.room ? { ...state.online.room } : null;
      const adopted = adoptIncomingRoom(nextRoom);
      if (!adopted) return;
      syncFromOnlineRoom();
      if (previous && previous.status === 'waiting' && !previous.guest_user_id && nextRoom.guest_user_id && myRoomSlot() === 1) {
        const guestLabel = sanitizeName(nextRoom.guest_name || 'Гост', 'Гост');
        showFeedback(onlineLobbyFeedback, `Играч ${guestLabel} се присъедини. Вече можеш да натиснеш „Старт онлайн“.`, 'success');
        updateHud(`Играч ${guestLabel} се присъедини към стаята. Натисни „Старт онлайн“.`);
      }
    });

  try {
    state.online.channel = channel;
    await new Promise((resolve, reject) => {
      let settled = false;
      const timeoutId = window.setTimeout(() => {
        if (settled) return;
        settled = true;
        console.warn('Realtime subscription is slow; continuing with polling fallback for now.');
        resolve(null);
      }, 12000);
      channel.subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          if (settled) return;
          settled = true;
          clearTimeout(timeoutId);
          resolve(null);
        } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
          if (settled) return;
          settled = true;
          clearTimeout(timeoutId);
          reject(new Error(status));
        }
      });
    });
  } catch (error) {
    console.warn('Room realtime subscribe failed', error);
    state.online.channel = null;
    state.online.subscribedRoomId = null;
  }

  const fresh = await fetchRoomById(roomId);
  if (fresh) {
    adoptIncomingRoom(fresh);
    syncFromOnlineRoom();
    return fresh;
  }
  return null;
}


async function attemptInviteAutoJoinLoggedUser() {
  if (!state.ui.pendingInviteAutoJoin || !state.ui.inviteToken || !state.auth.user) return;
  if (state.online.joinBusy || state.online.inviteAutoJoinBusy) return;
  const sameInviteRoom = isSameInviteRoom();
  if (sameInviteRoom && state.online.room) {
    state.ui.pendingInviteAutoJoin = false;
    clearInviteContext();
    renderInviteLanding();
    return;
  }
  if (hasActiveOnlineRoom() && !sameInviteRoom) {
    renderInviteLanding();
    return;
  }
  state.ui.pendingInviteAutoJoin = false;
  await joinInviteFromToken();
}

async function loadInvitePreview() {
  if (!state.auth.client || !state.ui.inviteToken) {
    state.online.invitePreview = null;
    state.online.invitePreviewLoaded = false;
    renderInviteLanding();
    return;
  }
  const hadPreview = Boolean(state.online.invitePreviewLoaded || state.online.invitePreview);
  state.online.invitePreviewLoaded = false;
  if (!hadPreview) renderInviteLanding();
  const { data, error } = await runSupabaseTimed((signal) => withAbortSignal(state.auth.client.rpc('get_invite_room_preview', { p_invite_token: state.ui.inviteToken }), signal), 10000, 'Зареждането на invite preview');
  if (error) {
    state.online.invitePreview = null;
    state.online.invitePreviewLoaded = true;
    renderInviteLanding();
    return;
  }
  state.online.invitePreview = normalizeRpcSingle(data);
  state.online.invitePreviewLoaded = true;
  renderInviteLanding();
  Promise.resolve().then(() => attemptInviteAutoJoinLoggedUser()).catch((error) => console.warn('Invite auto join failed', error));
}

async function loadMyActiveRoom() {
  if (!state.auth.client || !state.auth.user) {
    clearOnlineRoomLocalState();
    return null;
  }

  if (state.online.activeRoomInflight) {
    try {
      return await state.online.activeRoomInflight;
    } catch (error) {
      return null;
    }
  }

  const adoptRoom = (room) => {
    state.online.refreshMisses = 0;
    state.online.room = room;
    setPreferredRoomId(room.id);
    clearInviteContextIfRoomClaimed(room);
    return room;
  };

  const validateRoom = async (room) => {
    if (!room) return null;
    if (room.status === 'finished') return null;
    if (isWaitingRoomExpired(room) && room.host_user_id === state.auth.user?.id) {
      try { await rpcCall('leave_room_safe', { p_room_id: room.id }, 10000, 'Затварянето на старата стая'); } catch (e) { console.warn(e); }
      return null;
    }
    if (room.status === 'playing' || shouldAutoRestoreWaitingRoom(room)) return room;
    return null;
  };

  if (state.online.preferredRoomId) {
    const preferred = await validateRoom(await fetchRoomById(state.online.preferredRoomId));
    if (preferred && (preferred.host_user_id === state.auth.user.id || preferred.guest_user_id === state.auth.user.id)) {
      return adoptRoom(preferred);
    }
    clearPreferredRoomId();
  }

  const request = (async () => {
    let room = null;
    try {
      room = normalizeRpcSingle(await rpcCall('get_my_active_room', {}, 8000, 'Проверката за активна стая'));
    } catch (error) {
      console.warn('get_my_active_room failed', error);
      return null;
    }

    room = await validateRoom(room);
    if (!room) return null;
    return adoptRoom(room);
  })();

  state.online.activeRoomInflight = request;
  try {
    return await request;
  } finally {
    if (state.online.activeRoomInflight === request) state.online.activeRoomInflight = null;
  }
}

async function loadLobbyRooms() {
  if (!state.auth.client || !state.auth.user || !canUseOnlineLobby()) {
    state.online.publicRooms = [];
    renderRoomList();
    return;
  }

  if (state.online.lobbyFetchInflight) {
    try {
      return await state.online.lobbyFetchInflight;
    } catch (error) {
      return null;
    }
  }

  const request = (async () => {
    let data, error;
    try {
      ({ data, error } = await runSupabaseTimed((signal) => withAbortSignal(state.auth.client.rpc('list_waiting_rooms'), signal), 8000, 'Зареждането на свободните стаи'));
    } catch (rpcError) {
      state.online.publicRooms = [];
      showFeedback(roomListFeedback, rpcError.message || 'Лобито не се зареди навреме.', 'error');
      renderRoomList();
      return null;
    }
    if (error) {
      state.online.publicRooms = [];
      showFeedback(roomListFeedback, `Лобито не се зареди: ${error.message}`, 'error');
      renderRoomList();
      return null;
    }

    state.online.publicRooms = (Array.isArray(data) ? data : []).filter((room) => !isWaitingRoomExpired(room));
    renderRoomList();
    return state.online.publicRooms;
  })();

  state.online.lobbyFetchInflight = request;
  try {
    return await request;
  } finally {
    if (state.online.lobbyFetchInflight === request) state.online.lobbyFetchInflight = null;
  }
}

async function createRoom() {
  if (!canUseOnlineLobby()) {
    updateHud('Само влязъл потребител с профил може да създава онлайн стаи.');
    showFeedback(onlineLobbyFeedback, 'Гостът може само да приема покана по линк.', 'error');
    return;
  }
  if (state.online.createBusy) return;
  if (!state.auth.enabled || !state.auth.user) {
    updateHud('За създаване на онлайн стая трябва да си влязъл.');
    showFeedback(onlineLobbyFeedback, 'За създаване на стая трябва да си влязъл в профила си.', 'error');
    toggleProfilePanel(true);
    return;
  }
  clearAllValidation();
  if (!isValidOnlineTheme(state.online.selectedTheme) || !isValidOnlineCount(state.online.selectedCardCount)) {
    showFeedback(onlineLobbyFeedback, 'Избери валидна тема и брой карти.', 'error');
    return;
  }
  if (state.online.accessType === 'password' && roomPasswordInput.value.trim().length < 4) {
    setFieldError(roomPasswordField, roomPasswordError, 'Паролата трябва да е минимум 4 символа.');
    return;
  }

  state.online.createBusy = true;
  createRoomButton.disabled = true;
  updateAuthUi();
  const previousWaitingRoom = canReplaceOwnWaitingRoom() ? { ...state.online.room } : null;
  try {
    showFeedback(onlineLobbyFeedback, 'Създаваме стаята...', '');
    const payload = {
      p_code: generateRoomCode(),
      p_host_name: getDisplayName(),
      p_selected_theme: state.online.selectedTheme,
      p_selected_card_count: Number(state.online.selectedCardCount),
      p_access_type: state.online.accessType,
      p_plain_password: state.online.accessType === 'password' ? roomPasswordInput.value.trim() : null
    };
    let createdRoom = normalizeRpcSingle(await rpcCall('create_room_secure', payload, 30000, 'Създаването на стая'));

    const pollCreatedRoom = async () => {
      const { data, error } = await withTimeout(
        state.auth.client
          .from('rooms')
          .select('*')
          .eq('host_user_id', state.auth.user.id)
          .eq('code', payload.p_code)
          .maybeSingle(),
        3000,
        'Опресняването на новата стая'
      );
      if (error) return null;
      return data || null;
    };

    if (!createdRoom) {
      createdRoom = await waitForTrackedRoom(
        null,
        pollCreatedRoom,
        (fresh) => fresh && fresh.status === 'waiting' && fresh.host_user_id === state.auth.user?.id,
        12000,
        250
      );
    }

    if (!createdRoom) {
      const activeRoom = await loadMyActiveRoom();
      if (activeRoom && activeRoom.status === 'waiting' && activeRoom.host_user_id === state.auth.user?.id) createdRoom = activeRoom;
    }
    if (!createdRoom) throw new Error('Неуспешно създаване на стая.');

    state.online.room = createdRoom;
    setPreferredRoomId(createdRoom.id);
    state.selectedTheme = createdRoom.selected_theme;
    state.selectedCardCount = createdRoom.selected_card_count;
    state.playMode = 'online';
    setOnlineLobbyOpen(true);
    roomPasswordInput.value = '';
    if (createdRoom.access_type !== 'invite') clearInviteContext();
    syncFromOnlineRoom();
    updateAuthUi();
    Promise.resolve().then(() => subscribeToRoom(createdRoom.id)).catch((error) => console.warn('create subscribe failed', error));
    scheduleHardUiSync([0, 300, 900, 1800], { roomId: createdRoom.id });
    Promise.resolve().then(async () => {
      try {
        if (previousWaitingRoom?.id && previousWaitingRoom.id !== createdRoom.id) {
          await rpcCall('leave_room_safe', { p_room_id: previousWaitingRoom.id }, 15000, 'Затварянето на старата стая');
        }
        await loadLobbyRooms();
      } catch (error) {
        console.warn('Background room cleanup failed', error);
      }
    });
    const msg = createdRoom.access_type === 'invite'
      ? 'Invite стаята е създадена. Копирай линка и го изпрати на опонента.'
      : `Стаята е създадена. Изпрати код ${createdRoom.code} на другия играч.`;
    showFeedback(onlineLobbyFeedback, msg, 'success');
    updateHud(msg);
  } catch (error) {
    const msg = error?.message || 'Не успях да създам стая.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
  } finally {
    state.online.createBusy = false;
    createRoomButton.disabled = false;
    updateAuthUi();
  }
}


async function joinRoomByRecord(room) {
  if (!room || state.online.joinBusy) return;
  if (!canUseOnlineLobby()) {
    updateHud('Гостът не може да влиза в лобито по код. Използвай покана по линк.');
    return;
  }
  if (hasActiveOnlineRoom() && state.online.room?.id !== room.id) {
    const msg = 'Вече имаш активна онлайн стая. Напусни я, преди да се присъединиш към друга.';
    showFeedback(roomListFeedback, msg, 'error');
    updateHud(msg);
    return;
  }
  if ((room.status || 'waiting') !== 'waiting') {
    const msg = room.status === 'playing' ? 'Тази стая вече е в игра.' : 'Тази стая вече не е достъпна за присъединяване.';
    showFeedback(roomListFeedback, msg, 'error');
    updateHud(msg);
    return;
  }

  state.online.joinBusy = true;
  joinRoomButton.disabled = true;
  try {
    let joined = null;
    if ((room.access_type || 'public') === 'password') {
      const password = joinPasswordInput.value.trim();
      if (password.length < 4) {
        setFieldError(joinPasswordField, joinPasswordError, 'Въведи валидна парола.');
        return;
      }
      joined = normalizeRpcSingle(await rpcCall('join_room_with_password', { p_room_id: room.id, p_plain_password: password, p_guest_name: getDisplayName() }, 10000, 'Влизането в стаята'));
    } else {
      joined = normalizeRpcSingle(await rpcCall('join_room_public', { p_room_id: room.id, p_guest_name: getDisplayName() }, 10000, 'Влизането в стаята'));
    }
    if (!joined) throw new Error('Неуспешно присъединяване.');

    joinPasswordInput.value = '';
    joinPasswordRow.classList.add('hidden');
    state.ui.pendingProtectedRoomId = null;
    state.online.room = joined;
    setPreferredRoomId(joined.id);
    state.selectedTheme = joined.selected_theme;
    state.selectedCardCount = joined.selected_card_count;
    state.playMode = 'online';
    setOnlineLobbyOpen(true);
    syncFromOnlineRoom();
    await subscribeToRoom(joined.id);
    scheduleHardUiSync([0, 400, 1200, 2500], { roomId: joined.id });
    if (canUseOnlineLobby()) await loadLobbyRooms();
    updateHud(`Свързан си към стая ${joined.code}.`);
    setFieldError(joinRoomField, joinRoomError, '');
  } catch (error) {
    const msg = error?.message || 'Неуспешно присъединяване.';
    setFieldError(joinRoomField, joinRoomError, msg);
    showFeedback(roomListFeedback, msg, 'error');
    updateHud(msg);
  } finally {
    state.online.joinBusy = false;
    joinRoomButton.disabled = false;
    updateAuthUi();
  }
}

async function handleListedRoomJoin(roomId, accessType, roomCode = '') {
  const room = state.online.publicRooms.find((item) => item.id === roomId) || null;
  if (accessType === 'password') {
    state.ui.pendingProtectedRoomId = roomId;
    joinPasswordRow.classList.remove('hidden');
    joinPasswordInput.focus();
    joinRoomInput.value = roomCode || joinRoomInput.value;
    setFieldError(joinPasswordField, joinPasswordError, '');
    updateHud('Тази стая е защитена. Въведи паролата и потвърди.');
    return;
  }
  await joinRoomByRecord(room);
}

async function joinRoom() {
  if (hasActiveOnlineRoom()) {
    updateHud('Вече имаш активна онлайн стая. Напусни я, преди да се присъединиш към друга.');
    showFeedback(onlineLobbyFeedback, 'Вече имаш активна онлайн стая. Напусни я, преди да се присъединиш към друга.', 'error');
    return;
  }

  if (!canUseOnlineLobby()) {
    updateHud('Само влязъл потребител с профил може да влиза в стаи от лобито.');
    return;
  }
  if (!validateJoinRoomCode()) {
    updateHud('Въведи валиден 6-символен код на стая.');
    return;
  }
  const code = joinRoomInput.value.trim().toUpperCase();

  const { data: room, error } = await runSupabaseTimed((signal) => withAbortSignal(state.auth.client.from('rooms').select('*').eq('code', code).maybeSingle(), signal), 10000, 'Търсенето на стаята');
  if (error || !room) {
    setFieldError(joinRoomField, joinRoomError, 'Няма намерена стая с този код.');
    updateHud('Няма намерена стая с този код.');
    return;
  }

  if ((room.access_type || 'public') === 'invite') {
    setFieldError(joinRoomField, joinRoomError, 'Тази стая приема само вход чрез invite линк.');
    updateHud('Тази стая приема само вход чрез invite линк.');
    return;
  }
  if ((room.access_type || 'public') === 'password') {
    state.ui.pendingProtectedRoomId = room.id;
    if (!state.online.publicRooms.some((item) => item.id === room.id)) state.online.publicRooms.unshift(room);
    joinPasswordRow.classList.remove('hidden');
    joinPasswordInput.focus();
    setFieldError(joinPasswordField, joinPasswordError, '');
    updateHud('Тази стая е защитена. Въведи паролата и потвърди.');
    return;
  }

  await joinRoomByRecord(room);
}

async function joinInviteFromToken() {
  if (state.online.joinBusy) return;
  if (!state.auth.enabled || !state.ui.inviteToken) return;
  if (!state.auth.user) {
    updateHud('Поканата е разпозната. Влез с профил или като гост.');
    return;
  }
  if (hasActiveOnlineRoom() && !isSameInviteRoom()) {
    const msg = 'Имаш друга активна стая. Затвори я, преди да използваш тази покана.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
    return;
  }

  state.online.joinBusy = true;
  if (joinInviteButton) joinInviteButton.disabled = true;
  if (inviteLandingJoinButton) inviteLandingJoinButton.disabled = true;
  showFeedback(onlineLobbyFeedback, 'Присъединяваме те към поканената стая...', '');
  try {
    let joinedRoom = null;
    try {
      joinedRoom = normalizeRpcSingle(await rpcCall('join_room_with_invite', { p_invite_token: state.ui.inviteToken, p_guest_name: getDisplayName() }, 30000, 'Приемането на поканата'));
    } catch (rpcError) {
      console.warn('join_room_with_invite delayed', rpcError);
    }
    if (!joinedRoom) {
      const activeRoom = await loadMyActiveRoom();
      if (activeRoom && activeRoom.status === 'waiting') joinedRoom = activeRoom;
    }
    if (!joinedRoom) throw new Error('Не успяхме да приемем поканата.');
    state.playMode = 'online';
    setOnlineLobbyOpen(true);
    state.online.room = joinedRoom;
    setPreferredRoomId(joinedRoom.id);
    state.selectedTheme = joinedRoom.selected_theme;
    state.selectedCardCount = joinedRoom.selected_card_count;
    clearInviteContextIfRoomClaimed(state.online.room);
    renderModeSelector();
    renderInviteLanding();
    syncFromOnlineRoom();
    Promise.resolve().then(() => subscribeToRoom(joinedRoom.id)).catch((error) => console.warn('invite subscribe failed', error));
    scheduleHardUiSync([0, 300, 900, 1800], { roomId: joinedRoom.id });
    updateAuthUi();
    const joinedCode = joinedRoom.code || '—';
    showFeedback(onlineLobbyFeedback, `Влезе в поканената стая ${joinedCode}. Изчакай домакинът да натисне „Старт онлайн“.`, 'success');
    updateHud(`Влезе в поканената стая ${joinedCode}. Изчакай домакинът да натисне „Старт онлайн“.`);
  } catch (error) {
    const msg = error?.message || 'Не успяхме да приемем поканата.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
  } finally {
    state.online.joinBusy = false;
    if (joinInviteButton) joinInviteButton.disabled = false;
    if (inviteLandingJoinButton) inviteLandingJoinButton.disabled = false;
    updateAuthUi();
  }
}

async function continueInviteAsGuest() {
  if (!state.auth.enabled || !state.ui.inviteToken) {
    updateHud('Поканата изисква активна Supabase конфигурация.');
    return;
  }
  if (state.online.inviteAutoJoinBusy || state.online.joinBusy) return;

  const inviteInput = getInviteGuestInput();
  const guestName = sanitizeName(inviteInput?.value, createGuestName());
  if (inviteInput) inviteInput.value = guestName;
  if (guestName.length < 3) {
    setFieldError(inviteGuestNameField, inviteGuestNameError, 'Името трябва да е минимум 3 символа.');
    setFieldError(inviteLandingGuestField, inviteLandingGuestError, 'Името трябва да е минимум 3 символа.');
    updateHud('Въведи валидно временно име за гост.');
    return;
  }

  setFieldError(inviteGuestNameField, inviteGuestNameError, '');
  setFieldError(inviteLandingGuestField, inviteLandingGuestError, '');
  state.online.inviteAutoJoinBusy = true;
  continueInviteGuestButton.disabled = true;
  if (inviteLandingGuestButton) inviteLandingGuestButton.disabled = true;
  if (inviteLandingLoginButton) inviteLandingLoginButton.disabled = true;
  showFeedback(onlineLobbyFeedback, 'Подготвяме гост достъп и те присъединяваме към стаята...', '');
  updateHud('Подготвяме гост достъп и те присъединяваме към стаята...');

  try {
    if (state.auth.user) {
      await withTimeout(state.auth.client.auth.signOut(), 12000, 'Смяната към гост сесия');
      state.auth.user = null;
      state.auth.profile = null;
      state.auth.history = [];
      state.auth.historyLoaded = false;
      clearOnlineRoomLocalState();
      updateAuthUi();
    }

    const { data, error } = await withTimeout(
      state.auth.client.auth.signInAnonymously({
        options: {
          data: {
            username: guestName,
            first_name: guestName,
            last_name: '',
            guest_name: guestName
          }
        }
      }),
      8000,
      'Създаването на гост сесия'
    );

    if (error) {
      const msg = error?.message?.includes('Anonymous sign-ins are disabled')
        ? 'Гост входът е изключен в Supabase. Активирай Authentication → Providers → Anonymous или използвай регистрация.'
        : `Не успях да стартирам гост сесия: ${error.message || 'неочаквана грешка'}`;
      showFeedback(onlineLobbyFeedback, msg, 'error');
      updateHud(msg);
      return;
    }

    const sessionUser = data?.user || data?.session?.user || (await state.auth.client.auth.getSession()).data.session?.user || null;
    state.auth.user = sessionUser;
    state.auth.profile = sessionUser
      ? {
          id: sessionUser.id,
          username: guestName,
          first_name: guestName,
          last_name: '',
          full_name: guestName,
          email: ''
        }
      : null;
    state.auth.history = [];
    state.auth.historyLoaded = false;
    state.guest.active = true;
    state.guest.name1 = guestName;
    persistGuestState();
    player1NameInput.value = guestName;
    state.ui.pendingInviteAutoJoin = false;
    clearOnlineRoomLocalState();
    updateAuthUi();
    renderInviteLanding();

    await joinInviteFromToken();
  } catch (error) {
    const msg = error?.message || 'Не успях да те присъединя като гост.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
  } finally {
    state.online.inviteAutoJoinBusy = false;
    continueInviteGuestButton.disabled = false;
    if (inviteLandingGuestButton) inviteLandingGuestButton.disabled = false;
    if (inviteLandingLoginButton) inviteLandingLoginButton.disabled = false;
    renderInviteLanding();
    updateAuthUi();
  }
}

async function openProfileFromInvite() {
  state.ui.pendingOnlineIntent = false;
  state.ui.pendingInviteAutoJoin = true;
  if (state.auth.user) {
    try {
      await withTimeout(state.auth.client.auth.signOut(), 12000, 'Смяната на профила');
      state.auth.user = null;
      state.auth.profile = null;
      state.auth.history = [];
      state.auth.historyLoaded = false;
      clearOnlineRoomLocalState();
      updateAuthUi();
    } catch (error) {
      updateHud('Не успях да изляза от текущия профил. Пробвай пак.');
      return;
    }
  }
  setAuthTab('login');
  toggleProfilePanel(true);
  renderInviteLanding();
  updateHud('Поканата е активна. Влез в профила си и ще те добавим автоматично в стаята.');
}

async function copyInviteLink() {
  if (!inviteLinkInput.value) return;
  await copyTextValue(inviteLinkInput.value, 'Линкът за покана е копиран.');
}

async function leaveRoom(options = {}) {
  const room = state.online.room;
  const stayOnline = Boolean(options.stayOnline);
  if (!room) {
    clearOnlineRoomLocalState();
    if (stayOnline) { state.playMode = 'online'; setOnlineLobbyOpen(true); }
    else { state.playMode = 'local'; resetRoundState(); }
    updateAuthUi();
    return;
  }

  leaveRoomButton.disabled = true;
  leaveRoomButton.textContent = room.status === 'playing' ? 'Излизаме...' : (myRoomSlot() === 1 ? 'Затваряме...' : 'Напускаме...');
  if (state.online.pendingTimeout) { clearTimeout(state.online.pendingTimeout); state.online.pendingTimeout = null; }

  const roomId = room.id;
  const wasPlaying = room.status === 'playing';
  const wasHost = myRoomSlot() === 1;
  clearOnlineRoomLocalState();
  if (stayOnline) {
    resetRoundState();
    state.playMode = 'online';
    setOnlineLobbyOpen(true);
  } else {
    state.playMode = 'local';
    renderModeSelector();
    resetRoundState();
  }
  updateAuthUi();

  try {
    const leaveTracker = trackAsync(
      runSupabaseTimed((signal) => withAbortSignal(state.auth.client.rpc('leave_room_safe', { p_room_id: roomId }), signal), 10000, 'Напускането на стаята').then(({ data, error }) => {
        if (error) throw new Error(error.message || 'Не успях да напусна стаята.');
        return data;
      })
    );
    await waitForTrackedRoom(leaveTracker, async () => {
      const fresh = await fetchRoomById(roomId);
      return fresh ? null : { id: roomId, status: 'closed' };
    }, (fresh) => Boolean(fresh && fresh.status === 'closed'), 6000, 200);
    if (stayOnline && canUseOnlineLobby()) await loadLobbyRooms();
    scheduleHardUiSync([0, 400, 1200]);
    updateHud(wasPlaying ? 'Излезе от онлайн играта.' : (wasHost ? 'Стаята беше затворена.' : 'Напусна стаята.'));
  } catch (error) {
    updateHud(error?.message || 'Не успях да затворя/напусна стаята.');
  } finally {
    leaveRoomButton.disabled = false;
    updateAuthUi();
  }
}


async function exitCurrentGame() {
  if (exitGameButton) exitGameButton.disabled = true;
  try {
    if (state.playMode === 'online' && state.online.room) {
      await leaveRoom({ finishIfPlaying: true });
      returnToMainMenu('Онлайн играта беше прекратена и стаята е приключена.');
      return;
    }
    resetRoundState();
    updateHud('Излезе от текущата игра.');
  } finally {
    if (exitGameButton) exitGameButton.disabled = false;
  }
}

async function resumeOnlineSession() {
  if (!state.online.room) return;
  if (state.auth.client && state.online.room.id) {
    await subscribeToRoom(state.online.room.id);
  }
  state.playMode = 'online';
  renderModeSelector();
  if (state.online.room.status === 'waiting') {
    setOnlineLobbyOpen(true);
    updateHud('Върна се в waiting room-а.');
  } else {
    syncFromOnlineRoom();
    updateHud('Върна се в активната онлайн игра.');
  }
  toggleProfilePanel(false);
}


async function updateRoomDirect(patch, options = {}) {
  const expectedRoom = options.expectedRoom || state.online.room;
  const roomId = options.roomId || expectedRoom?.id || state.online.room?.id;
  if (!state.auth.client || !roomId) return null;
  let query = state.auth.client.from('rooms').update(patch).eq('id', roomId);
  if (options.onlyIfWaiting) query = query.eq('status', 'waiting');
  if (options.onlyIfPlaying) query = query.eq('status', 'playing');
  if (typeof options.onlyIfCurrentPlayer === 'number') query = query.eq('current_player_slot', options.onlyIfCurrentPlayer);
  if (typeof options.onlyIfLocked === 'boolean') query = query.eq('lock_board', options.onlyIfLocked);
  if (typeof options.onlyIfGuestPresent === 'boolean') {
    if (options.onlyIfGuestPresent) query = query.not('guest_user_id', 'is', null);
    else query = query.is('guest_user_id', null);
  }
  const response = await runSupabaseTimed((signal) => withAbortSignal(query.select().maybeSingle(), signal), options.timeoutMs || 12000, options.label || 'Синхронизацията на стаята');
  if (response.error) throw new Error(response.error.message || 'Грешка при синхронизация на стаята.');
  return setCachedRoom(response.data || null);
}

function computeDirectStartPatch(room, deck) {
  return {
    status: 'playing',
    deck,
    scores: { '1': 0, '2': 0 },
    current_player_slot: 1,
    flipped_indices: [],
    matched_indices: [],
    lock_board: false,
    winner_slot: null,
    turn_started_at: getNowIso(),
    rematch_host_ready: false,
    rematch_guest_ready: false,
    rematch_nonce: Number(room?.rematch_nonce || 0)
  };
}

function getDeckPairId(room, index) {
  return String(room?.deck?.[index]?.pairId ?? '');
}

function getUniqueSortedIndices(values = []) {
  return [...new Set(values.map((value) => Number(value)).filter((value) => Number.isInteger(value) && value >= 0))].sort((a, b) => a - b);
}

function computeDirectFlipPatch(room, index, slot) {
  if (!room || room.status !== 'playing') return null;
  const deckSize = Array.isArray(room.deck) ? room.deck.length : 0;
  if (!Number.isInteger(index) || index < 0 || index >= deckSize) return null;
  const matched = new Set(Array.isArray(room.matched_indices) ? room.matched_indices.map(Number) : []);
  const flipped = Array.isArray(room.flipped_indices) ? room.flipped_indices.map(Number) : [];
  if (matched.has(index) || flipped.includes(index)) return null;

  if (!flipped.length) {
    return {
      flipped_indices: [index],
      lock_board: false,
      turn_started_at: room.turn_started_at || getNowIso()
    };
  }

  const first = Number(flipped[0]);
  if (!Number.isInteger(first) || first === index) return null;
  const isMatch = getDeckPairId(room, first) && getDeckPairId(room, first) === getDeckPairId(room, index);

  if (!isMatch) {
    return {
      flipped_indices: [first, index],
      lock_board: true
    };
  }

  const matchedIndices = getUniqueSortedIndices([...(room.matched_indices || []), first, index]);
  const scores = {
    '1': Number(room.scores?.['1'] || room.scores?.[1] || 0),
    '2': Number(room.scores?.['2'] || room.scores?.[2] || 0)
  };
  scores[String(slot)] += 1;
  const finished = matchedIndices.length >= deckSize;
  const winner = finished
    ? (scores['1'] === scores['2'] ? 0 : (scores['1'] > scores['2'] ? 1 : 2))
    : null;

  return {
    flipped_indices: [],
    matched_indices: matchedIndices,
    scores,
    lock_board: false,
    status: finished ? 'finished' : 'playing',
    winner_slot: winner,
    turn_started_at: getNowIso()
  };
}

function computeDirectUnlockPatch(room) {
  if (!room || room.status !== 'playing' || !room.lock_board) return null;
  const flipped = Array.isArray(room.flipped_indices) ? room.flipped_indices : [];
  if (flipped.length < 2) return null;
  return {
    flipped_indices: [],
    lock_board: false,
    current_player_slot: Number(room.current_player_slot) === 1 ? 2 : 1,
    turn_started_at: getNowIso()
  };
}

async function directStartRoom(room, deck) {
  return updateRoomDirect(
    computeDirectStartPatch(room, deck),
    {
      expectedRoom: room,
      onlyIfWaiting: true,
      onlyIfGuestPresent: true,
      timeoutMs: 12000,
      label: 'Директния старт на играта'
    }
  );
}

async function directApplyRoomFlip(room, index, slot) {
  const patch = computeDirectFlipPatch(room, index, slot);
  if (!patch) return room;
  return updateRoomDirect(
    patch,
    {
      expectedRoom: room,
      onlyIfPlaying: true,
      onlyIfCurrentPlayer: slot,
      onlyIfLocked: false,
      timeoutMs: 12000,
      label: 'Директното обръщане на карта'
    }
  );
}

async function directClearRoomLock(room) {
  const patch = computeDirectUnlockPatch(room);
  if (!patch) return room;
  return updateRoomDirect(
    patch,
    {
      expectedRoom: room,
      onlyIfPlaying: true,
      onlyIfLocked: true,
      timeoutMs: 10000,
      label: 'Директното разкриване на картите'
    }
  );
}

async function startOnlineMatch() {
  if (state.online.startBusy) return;
  const room = state.online.room;
  if (!room) return updateHud('Няма активна онлайн стая за стартиране.');
  if (myRoomSlot() !== 1) {
    const msg = 'Само домакинът може да стартира онлайн мача.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    return updateHud(msg);
  }
  if (room.status !== 'waiting') return updateHud('Онлайн мачът вече е стартиран или е приключил.');
  if (!room.guest_user_id) {
    showFeedback(onlineLobbyFeedback, 'Нужен е втори играч, преди да стартираш онлайн мач.', 'error');
    return updateHud('Изчакай втори играч в стаята.');
  }

  state.online.startBusy = true;
  updateAuthUi();
  showFeedback(onlineLobbyFeedback, 'Стартираме онлайн мача...', '');
  updateHud('Стартираме онлайн мача...');
  try {
    suppressBackgroundOnlineTraffic(5000);
    let latestRoom = room;
    if (!latestRoom.guest_user_id || latestRoom.status !== 'waiting') {
      latestRoom = await fetchRoomById(room.id, { force: true, timeoutMs: 6000 }) || room;
    }
    if (!latestRoom.guest_user_id) {
      throw new Error('Нужен е втори играч, преди да стартираш онлайн мач.');
    }
    const deck = createSerializedDeck(latestRoom.selected_theme);
    let startedRoom = null;
    let rpcError = null;
    try {
      startedRoom = normalizeRpcSingle(await rpcCall('start_room_match', { p_room_id: latestRoom.id, p_deck: deck }, 12000, 'Старта на играта'));
    } catch (error) {
      rpcError = error;
      console.warn('start_room_match rpc failed, switching to direct room update', error);
    }

    if (!startedRoom || startedRoom.status !== 'playing') {
      try {
        startedRoom = await directStartRoom(latestRoom, deck);
      } catch (directError) {
        console.warn('direct start_room fallback failed', directError);
        if (!rpcError) rpcError = directError;
      }
    }

    if (!startedRoom || startedRoom.status !== 'playing') {
      startedRoom = await confirmRoomState(
        latestRoom.id,
        (fresh) => fresh && fresh.status === 'playing' && Array.isArray(fresh.deck) && fresh.deck.length > 0,
        10000,
        250
      );
    }
    if (!startedRoom || startedRoom.status !== 'playing') {
      throw (rpcError || new Error('Старта на играта отне твърде дълго.'));
    }
    adoptIncomingRoom(startedRoom);
    state.online.playingGraceUntil = Date.now() + 30000;
    state.online.allowPlayingBurstUntil = Date.now() + 1500;
    state.online.suspendRefreshUntil = Date.now() + 1200;
    state.playMode = 'online';
    state.ui.onlineLobbyOpen = false;
    renderModeSelector();
    syncFromOnlineRoom();
    updateAuthUi();
    scheduleHardUiSync([0, 400, 1100], { roomId: startedRoom.id });
    showFeedback(onlineLobbyFeedback, 'Онлайн мачът стартира успешно.', 'success');
    updateHud('Онлайн мачът стартира. Играта започва.');
  } catch (error) {
    const msg = error?.message || 'Не успях да стартирам онлайн мача.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
  } finally {
    state.online.startBusy = false;
    updateAuthUi();
  }
}

function syncFromOnlineRoom() {
  const room = state.online.room;
  if (!room) return;
  setPreferredRoomId(room.id);
  if (room.status !== 'playing' && state.online.pendingTimeout) {
    clearTimeout(state.online.pendingTimeout);
    state.online.pendingTimeout = null;
  }

  if (room.status === 'playing' || room.status === 'finished') {
    state.playMode = 'online';
    state.ui.onlineLobbyOpen = false;
    if (room.status === 'playing') {
      state.online.playingGraceUntil = Date.now() + 20000;
      state.online.lastRematchAutoKey = null;
    }
  }

  state.selectedTheme = room.selected_theme;
  state.selectedCardCount = room.selected_card_count;
  state.currentPlayer = room.current_player_slot || 1;
  state.scores[1] = Number(room.scores?.['1'] || room.scores?.[1] || 0);
  state.scores[2] = Number(room.scores?.['2'] || room.scores?.[2] || 0);
  state.lockBoard = Boolean(room.lock_board);
  state.totalPairs = (room.deck?.length || 0) / 2;
  state.matchedPairs = (room.matched_indices?.length || 0) / 2;
  state.started = room.status === 'playing' || room.status === 'finished';
  state.gameOver = room.status === 'finished';
  refreshPlayerNames();
  applyThemePalette(state.selectedTheme);
  renderThemeSelector();
  renderCountSelector();
  updatePlayerPanels();
  updateAuthUi();
  renderProfilePanel();
  updateTurnTimerChip();

  if (room.status === 'playing' || room.status === 'finished') {
    emptyState.classList.add('hidden');
    gameBoard.classList.add('active');
    setAppMode('game');
    if (!gameBoard.children.length || Number(gameBoard.children.length) !== room.deck.length) {
      buildBoard(room.selected_theme, room.deck);
    }
    applyOnlineBoardState();
    requestAnimationFrame(() => requestAnimationFrame(resizeBoardFit));
  }

  if (room.status === 'waiting') {
    state.started = false;
    setAppMode('setup');
    if (isOnlineMode() || state.ui.onlineLobbyOpen || shouldShowInviteLanding()) {
      setOnlineLobbyOpen(true);
      updateAuthUi();
      if (room.guest_user_id) {
        updateHud(myRoomSlot() === 1
          ? 'И двамата играчи са в стаята. Можеш да дадеш „Старт онлайн“.'
          : 'Успешно присъединяване. Изчаква се домакинът да стартира играта.');
        if (myRoomSlot() === 2) {
          const burstKey = `${room.id}:${room.guest_user_id || ''}:${room.status}`;
          if (state.online.lastGuestWaitingBurstKey !== burstKey) {
            state.online.lastGuestWaitingBurstKey = burstKey;
            scheduleOnlineRefreshBurst([300, 900, 1800, 3200, 5000]);
          }
        }
      } else if (isOnlineMode() || state.ui.onlineLobbyOpen) {
        updateHud(myRoomSlot() === 2
          ? 'Успешно присъединяване. Изчаква се домакинът да стартира играта.'
          : 'Стаята чака втори играч.');
      }
    }
  } else if (room.status === 'playing') {
    state.playMode = 'online';
    state.ui.onlineLobbyOpen = false;
    renderModeSelector();
    updateAuthUi();
    updateHud(`Онлайн мач: на ход е ${getPlayerName(state.currentPlayer)}.`);
  } else if (room.status === 'finished') {
    endOnlineGame();
    Promise.resolve().then(() => maybeAutoStartOnlineRematch(room)).catch((error) => console.warn('Auto rematch failed', error));
  }
  updateResultActionButtons();
}

function applyOnlineBoardState() {
  const room = state.online.room;
  if (!room) return;
  setPreferredRoomId(room.id);
  const flipped = new Set(room.flipped_indices || []);
  const matched = new Set(room.matched_indices || []);
  gameBoard.querySelectorAll('.memory-card').forEach((card) => {
    const index = Number(card.dataset.index);
    card.classList.toggle('flip', flipped.has(index) || matched.has(index));
    card.classList.toggle('matched', matched.has(index));
  });
}

async function patchRoom(patch, options = {}) {
  const room = state.online.room;
  if (!room || !state.auth.client) return null;
  const { silent = false, refreshLobby = false } = options;
  const previous = { ...room };
  const optimistic = { ...room, ...patch, updated_at: patch.updated_at || getNowIso() };
  state.online.room = optimistic;
  state.online.suspendRefreshUntil = Date.now() + 1400;
  syncFromOnlineRoom();
  try {
    const response = await runSupabaseTimed((signal) => withAbortSignal(state.auth.client.from('rooms').update(patch).eq('id', room.id).select().maybeSingle(), signal), 10000, 'Синхронизацията на стаята');
    if (response.error) throw response.error;
    const serverRoom = response.data || optimistic;
    adoptIncomingRoom(serverRoom);
    if (refreshLobby && state.ui.onlineLobbyOpen && canUseOnlineLobby()) {
      loadLobbyRooms().catch((error) => console.warn('Lobby refresh failed', error));
    }
    return serverRoom;
  } catch (error) {
    state.online.room = previous;
    syncFromOnlineRoom();
    if (!silent) updateHud(`Грешка при синхронизация: ${error.message}`);
    return null;
  }
}


function scheduleRoomUnlockResolution(roomId) {
  if (!roomId) return;
  if (state.online.pendingTimeout) clearTimeout(state.online.pendingTimeout);
  state.online.pendingTimeout = setTimeout(async () => {
    try {
      suppressBackgroundOnlineTraffic(2200);
      let updated = null;
      try {
        updated = normalizeRpcSingle(await rpcCall('clear_room_lock', { p_room_id: roomId }, 8000, 'Разкриването на картите'));
      } catch (error) {
        console.warn('clear_room_lock failed, switching to direct update', error);
      }
      if (!updated) {
        const latest = await fetchRoomById(roomId, { force: true, timeoutMs: 10000 }) || state.online.room;
        if (latest) {
          try {
            updated = await directClearRoomLock(latest);
          } catch (directError) {
            console.warn('direct clear_room_lock failed', directError);
          }
        }
      }
      if (!updated) {
        updated = await confirmRoomState(
          roomId,
          (fresh) => fresh && !fresh.lock_board && Array.isArray(fresh.flipped_indices) && fresh.flipped_indices.length === 0,
          6000,
          250
        );
      }
      if (updated) {
        adoptIncomingRoom(updated);
        syncFromOnlineRoom();
        scheduleHardUiSync([0, 300, 900], { roomId: updated.id || roomId });
      }
    } catch (error) {
      console.warn('clear_room_lock failed', error);
    } finally {
      state.online.pendingTimeout = null;
    }
  }, 1200);
}

async function handleOnlineFlip(card) {
  const room = state.online.room;
  const slot = myRoomSlot();
  if (!room || room.status !== 'playing' || !slot) return;
  if (slot !== room.current_player_slot) return;
  if (room.lock_board || state.online.flipBusy) return;

  const index = Number(card.dataset.index);
  const beforeKey = roomSnapshotKey(room);
  state.online.flipBusy = true;
  suppressBackgroundOnlineTraffic(2200);
  try {
    let updated = null;
    let rpcError = null;
    try {
      updated = normalizeRpcSingle(await rpcCall('apply_room_flip', { p_room_id: room.id, p_index: index }, 9000, 'Обръщането на карта'));
    } catch (error) {
      rpcError = error;
      console.warn('apply_room_flip rpc failed, switching to direct update', error);
    }
    if (!updated || roomSnapshotKey(updated) === beforeKey) {
      try {
        updated = await directApplyRoomFlip(room, index, slot);
      } catch (directError) {
        console.warn('direct apply_room_flip failed', directError);
        if (!rpcError) rpcError = directError;
      }
    }
    if (!updated || roomSnapshotKey(updated) === beforeKey) {
      updated = await confirmRoomState(
        room.id,
        (fresh) => fresh && roomSnapshotKey(fresh) !== beforeKey,
        7000,
        200
      );
    }
    if (!updated || roomSnapshotKey(updated) === beforeKey) {
      if (rpcError) throw rpcError;
      return;
    }
    adoptIncomingRoom(updated);
    syncFromOnlineRoom();
    scheduleHardUiSync([0, 300, 900], { roomId: updated.id || room.id });
    if (updated.lock_board && Array.isArray(updated.flipped_indices) && updated.flipped_indices.length >= 2) {
      scheduleRoomUnlockResolution(updated.id || room.id);
    }
  } catch (error) {
    updateHud(error?.message || 'Не успях да обърна карта.');
  } finally {
    state.online.flipBusy = false;
  }
}

function endOnlineGame() {
  const room = state.online.room;
  if (!room) return;
  setPreferredRoomId(room.id);
  state.started = false;
  state.gameOver = true;
  const winner = Number(room.winner_slot);
  const autoFinished = winner === ONLINE_AUTO_FINISH_WINNER_SLOT;
  setResultSummaryContent({
    title: autoFinished
      ? 'Играта е приключена автоматично'
      : (winner === 0 ? 'Равенство' : `Победител: ${getPlayerName(winner)}`),
    summary: autoFinished
      ? `Онлайн играта беше прекратена автоматично поради липса на активност над 15 минути. Код стая: ${room.code} • Тема: ${THEMES[room.selected_theme]?.name || room.selected_theme} • Карти: ${room.selected_card_count}.`
      : `Онлайн мачът приключи. Код стая: ${room.code} • Тема: ${THEMES[room.selected_theme]?.name || room.selected_theme} • Карти: ${room.selected_card_count}.`,
    player1Name: getPlayerName(1),
    player2Name: getPlayerName(2),
    player1Score: state.scores[1],
    player2Score: state.scores[2],
    ...(autoFinished ? {} : getOnlineRematchStatus(room))
  });
  updateHud(autoFinished
    ? 'Онлайн играта се приключва автоматично поради липса на активност.'
    : 'Онлайн мачът приключи. Можеш да избереш „Реванш“ или да се върнеш в началното меню.');
  updateResultActionButtons();
  resultModal.classList.remove('hidden');
  updatePlayerPanels();
  updateAuthUi();

  if (state.auth.user && room.host_user_id === state.auth.user.id) {
    saveMatchToHistory({
      room_id: room.id,
      mode: 'online',
      theme_key: room.selected_theme,
      card_count: room.selected_card_count,
      player1_user_id: room.host_user_id,
      player1_name: room.host_name || getPlayerName(1),
      player2_user_id: room.guest_user_id,
      player2_name: room.guest_name || getPlayerName(2),
      player1_score: state.scores[1],
      player2_score: state.scores[2],
      winner_slot: winner,
      winner_user_id: winner === 1 ? room.host_user_id : winner === 2 ? room.guest_user_id : null
    });
  }
}

player1NameInput.addEventListener('input', () => {
  refreshPlayerNames();
  updatePlayerPanels();
  updateHud();
});

player2NameInput.addEventListener('input', () => {
  refreshPlayerNames();
  updatePlayerPanels();
  updateHud();
});

startButton.addEventListener('click', startGame);
newRoundButton.addEventListener('click', resetRoundState);
playAgainButton.addEventListener('click', async () => {
  if (state.playMode === 'online' && state.online.room?.status === 'finished') {
    await requestOnlineRematch();
    return;
  }
  resultModal.classList.add('hidden');
  startGame();
});

mainMenuButton?.addEventListener('click', async () => {
  if (state.playMode === 'online' && state.online.room?.status === 'finished') {
    resultModal.classList.add('hidden');
    setResultRematchStatus('', '');
    returnToMainMenu('Върна се в началното меню.');
    return;
  }
  resultModal.classList.add('hidden');
  setResultRematchStatus('', '');
  returnToMainMenu();
});

window.addEventListener('resize', () => requestAnimationFrame(resizeBoardFit));
window.addEventListener('orientationchange', () => requestAnimationFrame(resizeBoardFit));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !resultModal.classList.contains('hidden')) {
    resultModal.classList.add('hidden');
    setResultRematchStatus('', '');
  }
});

loadGuestState();
syncRememberMeUi();
refreshPlayerNames();
renderModeSelector();
renderDifficultySelector();
renderThemeSelector();
renderCountSelector();
renderRoomAccessSelector();
renderOnlineThemeSelector(true);
renderOnlineCountSelector(true);
setRoomAccess(state.online.accessType);
updatePlayerInputUi();
updatePlayerPanels();
updateProfileLauncher();
updateHud();
setAuthTab('login');

profileButton.addEventListener('click', () => toggleProfilePanel());
closeAuthPanelButton.addEventListener('click', () => toggleProfilePanel(false));
closeOnlineLobbyButton?.addEventListener('click', () => exitOnlineLobby());
continueGuestButton.addEventListener('click', () => continueAsGuest(false));
loginTab?.addEventListener('click', () => setAuthTab('login'));
registerTab?.addEventListener('click', () => setAuthTab('register'));
loginForm.addEventListener('submit', loginUser);
registerForm.addEventListener('submit', registerUser);
logoutButton.addEventListener('click', logoutUser);
profileLogoutButton.addEventListener('click', logoutUser);
refreshHistoryButton.addEventListener('click', loadMatchHistory);
resumeRoomButton?.addEventListener('click', resumeOnlineSession);
exitGameButton?.addEventListener('click', exitCurrentGame);
createRoomButton.addEventListener('click', createRoom);
joinRoomButton.addEventListener('click', joinRoom);
leaveRoomButton.addEventListener('click', () => leaveRoom({ stayOnline: true }));
startOnlineButton.addEventListener('click', startOnlineMatch);
refreshRoomsButton.addEventListener('click', loadLobbyRooms);
copyInviteButton.addEventListener('click', copyInviteLink);
openProfileFromInviteButton.addEventListener('click', openProfileFromInvite);
continueInviteGuestButton.addEventListener('click', continueInviteAsGuest);
joinInviteButton.addEventListener('click', joinInviteFromToken);
inviteLandingLoginButton?.addEventListener('click', openProfileFromInvite);
inviteLandingGuestButton?.addEventListener('click', continueInviteAsGuest);
inviteLandingJoinButton?.addEventListener('click', joinInviteFromToken);
closeInviteLandingButton?.addEventListener('click', () => { clearInviteContext(); updateHud('Поканата беше затворена.'); });
joinPasswordConfirmButton.addEventListener('click', async () => {
  if (!state.ui.pendingProtectedRoomId) return;
  const room = state.online.publicRooms.find((item) => item.id === state.ui.pendingProtectedRoomId)
    || (state.online.room && state.online.room.id === state.ui.pendingProtectedRoomId ? state.online.room : null);
  await joinRoomByRecord(room);
});

joinRoomInput.addEventListener('input', () => {
  joinRoomInput.value = joinRoomInput.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  if (joinRoomInput.value) setFieldError(joinRoomField, joinRoomError, '');
});

[
  [loginEmail, loginEmailField, loginEmailError],
  [loginPassword, loginPasswordField, loginPasswordError],
  [registerUsername, registerUsernameField, registerUsernameError],
  [registerFirstName, registerFirstNameField, registerFirstNameError],
  [registerLastName, registerLastNameField, registerLastNameError],
  [registerEmail, registerEmailField, registerEmailError],
  [registerPassword, registerPasswordField, registerPasswordError],
  [roomPasswordInput, roomPasswordField, roomPasswordError],
  [joinPasswordInput, joinPasswordField, joinPasswordError],
  [inviteLandingGuestInput, inviteLandingGuestField, inviteLandingGuestError]
].forEach(([input, field, errorEl]) => {
  if (!input) return;
  input.addEventListener('input', () => {
    if (input.value.trim()) setFieldError(field, errorEl, '');
  });
});

joinRoomInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') joinRoom();
});
joinPasswordInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') joinPasswordConfirmButton.click();
});
rememberMeCheckbox.addEventListener('change', () => {
  state.auth.rememberMe = Boolean(rememberMeCheckbox.checked);
  localStorage.setItem('memory_duel_remember_me', state.auth.rememberMe ? '1' : '0');
});

document.addEventListener('click', (event) => {
  if (authPanel.classList.contains('hidden')) return;
  const insidePanel = authPanel.contains(event.target);
  const insideButton = profileButton.contains(event.target);
  if (!insidePanel && !insideButton) toggleProfilePanel(false);
});

ensureTurnLoop();
initAuth();
updateAuthUi();
