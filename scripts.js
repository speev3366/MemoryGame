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
    description: 'Военна техника, екипировка и полеви символи.',
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
      { key: 'mcdonalds', label: 'McDonald\'s' }
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

const state = {
  selectedTheme: null,
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
    persistentNotice: ''
  },
  online: {
    room: null,
    channel: null,
    pendingTimeout: null,
    publicRooms: [],
    accessType: 'public',
    selectedTheme: null,
    selectedCardCount: null,
    invitePreview: null,
    invitePreviewLoaded: false,
    refreshBusy: false,
    autoFinishing: false,
    joinBusy: false,
    startBusy: false,
    lastRefreshAt: 0,
    refreshBusyAt: 0,
    lastTimeoutKey: null
  },
  timers: {
    interval: null,
    localTurnStartedAt: null,
    durationMs: 10000
  },
  aiTurnTimeout: null
};

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

async function fetchRoomById(roomId) {
  if (!state.auth.client || !roomId) return null;
  const { data, error } = await state.auth.client.from('rooms').select('*').eq('id', roomId).maybeSingle();
  if (error) return null;
  return data || null;
}

function getRoomActivityTime(room) {
  if (!room) return 0;
  const candidate = room.updated_at || room.turn_started_at || room.created_at || null;
  if (!candidate) return 0;
  const value = new Date(candidate).getTime();
  return Number.isFinite(value) ? value : 0;
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

function shouldAutoOpenOnlineAfterAuth() {
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

function scheduleOnlineRefreshBurst(delays = [0, 400, 1200, 2400]) {
  if (!state.auth.client || !state.auth.user) return;
  delays.forEach((delay) => {
    window.setTimeout(() => {
      refreshOnlineState(true);
    }, delay);
  });
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
    if (state.auth.user && (state.ui.onlineLobbyOpen || state.playMode === 'online' || state.online.room)) {
      await refreshOnlineState(false);
    }
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
  if (state.online.refreshBusy && state.online.refreshBusyAt && now - state.online.refreshBusyAt > 8000) {
    state.online.refreshBusy = false;
    state.online.refreshBusyAt = 0;
  }
  if (state.online.refreshBusy) return;
  const minRefreshGap = state.online.room?.status === 'waiting' ? 600 : 1200;
  if (!force && now - state.online.lastRefreshAt < minRefreshGap) return;
  state.online.refreshBusy = true;
  state.online.refreshBusyAt = now;
  state.online.lastRefreshAt = now;
  try {
    if (state.online.room?.id) {
      const previousRoom = state.online.room;
      const fresh = await fetchRoomById(state.online.room.id);
      if (fresh) {
        if (isRoomInactive(fresh)) {
          await autoFinishRoomForInactivity(fresh, { keepLocalState: true });
        } else {
          if (previousRoom?.status === 'waiting' && !previousRoom?.guest_user_id && fresh.guest_user_id && fresh.host_user_id === state.auth.user?.id) {
            const guestLabel = sanitizeName(fresh.guest_name || 'Гост', 'Гост');
            showFeedback(onlineLobbyFeedback, `Играч ${guestLabel} се присъедини. Вече можеш да натиснеш „Старт онлайн“.`, 'success');
            queuePersistentNotice(`Играч ${guestLabel} се присъедини към стаята. Натисни „Старт онлайн“.`);
            updateHud(`Играч ${guestLabel} се присъедини към стаята. Натисни „Старт онлайн“.`);
          }
          if (previousRoom?.status === 'waiting' && fresh.status === 'playing') {
            queuePersistentNotice('Онлайн мачът започна. Успех!');
          }
          state.online.room = fresh;
          syncFromOnlineRoom();
        }
      } else if (state.online.room) {
        state.online.room = null;
        if (state.playMode === 'online') {
          resetRoundState();
          updateHud('Онлайн стаята вече не съществува или е приключила.');
        }
      }
    } else if (isOnlineMode() || state.ui.onlineLobbyOpen) {
      const active = await loadMyActiveRoom();
      if (active) {
        await subscribeToRoom(active.id);
        syncFromOnlineRoom();
      }
    }
    if (state.ui.onlineLobbyOpen || isOnlineMode()) {
      await loadLobbyRooms();
    }
  } finally {
    state.online.refreshBusy = false;
    state.online.refreshBusyAt = 0;
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
  if (!room || room.status !== 'playing' || room.lock_board) return false;
  const nextSlot = getOtherSlot(room.current_player_slot || 1);
  const patched = await patchRoom({
    flipped_indices: [],
    lock_board: false,
    current_player_slot: nextSlot,
    turn_started_at: getNowIso()
  }, { silent: false, refreshLobby: false });
  if (!patched) {
    state.online.lastTimeoutKey = null;
    return false;
  }
  scheduleOnlineRefreshBurst([0, 350, 900]);
  updateHud(`Времето за ход изтече. Ред е на ${getPlayerName(nextSlot)}.`);
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
    renderOnlineThemeSelector();
    renderOnlineCountSelector();
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
            <div class="room-row-meta">Код ${escapeHtml(preview.code)} • ${escapeHtml(THEMES[preview.selected_theme]?.name || preview.selected_theme)} • ${preview.selected_card_count} карти</div>
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
            <div class="room-row-meta">Код ${escapeHtml(ownRoom.code)} • ${escapeHtml(THEMES[ownRoom.selected_theme]?.name || ownRoom.selected_theme)} • ${ownRoom.selected_card_count} карти</div>
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
            <div class="room-row-meta">Код ${escapeHtml(room.code)} • ${escapeHtml(THEMES[room.selected_theme]?.name || room.selected_theme)} • ${room.selected_card_count} карти</div>
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
}

function updateProfileLauncher() {
  const loggedIn = Boolean(state.auth.user);
  const sessionLabel = loggedIn ? getDisplayName() : (state.guest.active ? state.guest.name1 || 'Гост' : 'Вход / регистрация');
  profileButtonTitle.textContent = loggedIn ? sessionLabel : 'Профил';
  profileButtonSubtext.textContent = loggedIn ? 'Онлайн активен' : (state.guest.active ? 'Гост режим (локален)' : 'Отключи онлайн режим');
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
  const loading = !previewLoaded;
  const validPreview = Boolean(preview);
  const conflictMessage = getInviteConflictMessage();
  const titleName = preview?.host_name || 'домакин';
  const themeName = preview?.selected_theme ? (THEMES[preview.selected_theme]?.name || preview.selected_theme) : '—';
  const countText = preview?.selected_card_count ? `${preview.selected_card_count} карти` : '—';

  inviteLandingTitle.textContent = loading
    ? 'Зареждаме поканата…'
    : validPreview
      ? `${titleName} те кани на онлайн двубой`
      : 'Получи линк за онлайн покана';

  inviteLandingText.textContent = loading
    ? 'Проверяваме линка и подготвяме стаята. Това може да отнеме секунда.'
    : conflictMessage
      ? conflictMessage
      : validPreview
        ? `Това е директна покана за конкретна стая. ${loggedIn ? 'След вход ще те добавим директно към стаята.' : 'Избери дали да влезеш с профил или като гост с еднократен псевдоним.'}`
        : 'Не успяхме да заредим детайлите за поканата, но можеш да продължиш с профил или като гост. При опит за вход ще проверим линка отново.';

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
    `;

  const canShowGuestFlow = Boolean(state.ui.inviteToken && !loggedIn && !conflictMessage);
  const canShowJoinFlow = Boolean(state.ui.inviteToken && loggedIn && !conflictMessage);

  inviteLandingGuestField.classList.toggle('hidden', !canShowGuestFlow);
  inviteLandingGuestButton.classList.toggle('hidden', !canShowGuestFlow);
  inviteLandingLoginButton.classList.toggle('hidden', loggedIn || Boolean(conflictMessage));
  inviteLandingJoinButton.classList.toggle('hidden', !canShowJoinFlow);

  if (canShowGuestFlow && !inviteLandingGuestInput.value.trim()) inviteLandingGuestInput.value = createGuestName();
  inviteLandingJoinButton.disabled = loading && !validPreview;
  inviteLandingGuestButton.disabled = loading && !state.ui.inviteToken;
  inviteLandingLoginButton.disabled = loading && !state.ui.inviteToken;
}

function getInviteConflictMessage() {
  if (!state.ui.inviteToken || !state.online.invitePreview || !state.online.room) return '';
  if (state.online.room.id === state.online.invitePreview.id) return '';
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
  await loadMyActiveRoom();

  const autoOpenOnline = shouldAutoOpenOnlineAfterAuth();

  if (state.online.room) {
    if (autoOpenOnline) {
      state.playMode = 'online';
      renderModeSelector();
      await subscribeToRoom(state.online.room.id);
      if (state.online.room.status === 'waiting') {
        setOnlineLobbyOpen(true);
      }
      syncFromOnlineRoom();
    } else if (state.online.room.status === 'playing') {
      await subscribeToRoom(state.online.room.id);
      syncFromOnlineRoom();
    }
  }

  state.ui.pendingOnlineIntent = false;
  await loadLobbyRooms();
  renderInviteLanding();
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
      state.online.room = null;
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
    button.addEventListener('click', () => selectTheme(button.dataset.theme));
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
    button.addEventListener('click', () => selectCardCount(Number(button.dataset.count)));
  });
  renderOnlineCountSelector();
}



function renderOnlineThemeSelector() {
  if (!onlineThemeSelector) return;
  onlineThemeSelector.innerHTML = Object.entries(THEMES)
    .map(([key, theme]) => `
      <button class="online-theme-option ${state.online.selectedTheme === key ? 'selected' : ''}" data-online-theme="${key}" type="button">
        <span>${theme.icon}</span>
        <strong>${theme.name}</strong>
      </button>
    `)
    .join('');

  onlineThemeSelector.querySelectorAll('[data-online-theme]').forEach((button) => {
    button.addEventListener('click', () => selectOnlineTheme(button.dataset.onlineTheme));
  });
}

function renderOnlineCountSelector() {
  if (!onlineCountSelector) return;
  onlineCountSelector.innerHTML = COUNT_OPTIONS
    .map((count) => `
      <button class="online-count-option ${state.online.selectedCardCount === count ? 'selected' : ''}" data-online-count="${count}" type="button">
        ${count} карти
      </button>
    `)
    .join('');

  onlineCountSelector.querySelectorAll('[data-online-count]').forEach((button) => {
    button.addEventListener('click', () => selectOnlineCardCount(Number(button.dataset.onlineCount)));
  });
}

function renderModeSelector() {
  const onlineUnlocked = Boolean(state.auth.user);
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
  state.online.selectedTheme = themeKey;
  renderOnlineThemeSelector();
  showFeedback(onlineLobbyFeedback, '', '');
}

function selectOnlineCardCount(count) {
  state.online.selectedCardCount = count;
  renderOnlineCountSelector();
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

  switch (key) {
    case 'football':
      return `
        <circle cx="210" cy="170" r="92" fill="#ffffff"/>
        <polygon points="210,120 242,142 230,179 190,179 178,142" fill="#111827"/>
        <path d="M166 141l-32-19M254 141l32-19M190 179l-18 34M230 179l18 34M140 182l30-3M280 182l-30-3" ${commonStroke}/>
      `;
    case 'basketball':
      return `
        <circle cx="210" cy="170" r="98" fill="#ff8a21"/>
        <path d="M112 170h196M210 72c36 22 54 60 54 98s-18 76-54 98M210 72c-36 22-54 60-54 98s18 76 54 98" stroke="#5c2500" stroke-width="14" fill="none"/>
        <path d="M136 103c30 21 47 41 56 67M284 103c-30 21-47 41-56 67" stroke="#5c2500" stroke-width="12" fill="none"/>
      `;
    case 'tennis':
      return `
        <circle cx="210" cy="165" r="96" fill="#d6ff55"/>
        <path d="M138 85c37 34 56 75 56 122M282 85c-37 34-56 75-56 122" stroke="#ffffff" stroke-width="14" fill="none"/>
      `;
    case 'boxing':
      return `
        <path d="M130 138c0-28 20-48 51-48h33c15 0 27 12 27 27v23h27c18 0 32 14 32 31v32c0 20-16 36-36 36H169c-22 0-39-17-39-39v-62z" fill="#ff5c61"/>
        <path d="M214 140v-24c0-13 10-23 23-23h14" ${commonStroke}/>
        <path d="M126 182h176" ${commonStroke}/>
      `;
    case 'volleyball':
      return `
        <circle cx="210" cy="170" r="98" fill="#f4f6fb"/>
        <path d="M112 170c38-18 73-26 106-22M188 74c26 34 39 68 38 104M292 126c-29 21-62 34-99 40M174 264c11-35 33-64 68-90M120 220c31-1 61-9 90-22" stroke="#8ea5c0" stroke-width="13" fill="none" stroke-linecap="round"/>
      `;
    case 'baseball':
      return `
        <circle cx="210" cy="170" r="96" fill="#fffaf5"/>
        <path d="M154 99c-19 24-29 50-29 77s10 53 29 77" stroke="#d33a3a" stroke-width="10" fill="none" stroke-dasharray="2 14" stroke-linecap="round"/>
        <path d="M266 99c19 24 29 50 29 77s-10 53-29 77" stroke="#d33a3a" stroke-width="10" fill="none" stroke-dasharray="2 14" stroke-linecap="round"/>
      `;
    case 'cycling':
      return `
        <circle cx="138" cy="214" r="52" ${commonStroke}/>
        <circle cx="290" cy="214" r="52" ${commonStroke}/>
        <path d="M138 214l64-78 42 0M202 136l35 78M180 214h110M208 136l-30 78" ${commonStroke}/>
        <circle cx="205" cy="106" r="18" fill="#ffffff"/>
        <path d="M205 126l20 36M195 146l-30 34" ${commonStroke}/>
      `;
    case 'helmet':
      return `
        <path d="M100 186c0-70 50-116 121-116 70 0 116 41 116 104 0 27-18 48-44 48H140c-23 0-40-16-40-36z" fill="#ffffff"/>
        <path d="M286 129h58v36h-58z" fill="#ff4d6d"/>
        <path d="M153 223c8 24 24 40 57 40" ${commonStroke}/>
        <path d="M136 170h130" stroke="#d5dff1" stroke-width="14"/>
      `;
    case 'dumbbell':
      return `
        <rect x="150" y="165" width="120" height="18" rx="9" fill="#ffffff"/>
        <rect x="122" y="136" width="20" height="76" rx="6" fill="#ffffff"/>
        <rect x="96" y="122" width="18" height="104" rx="6" fill="#ffffff"/>
        <rect x="278" y="136" width="20" height="76" rx="6" fill="#ffffff"/>
        <rect x="306" y="122" width="18" height="104" rx="6" fill="#ffffff"/>
      `;
    case 'trophy':
      return `
        <path d="M145 95h130v32c0 34-24 63-58 70v31h47v28H156v-28h47v-31c-34-7-58-36-58-70V95z" fill="#ffd166"/>
        <path d="M145 105h-28c0 43 17 70 51 80M275 105h28c0 43-17 70-51 80" stroke="#ffd166" stroke-width="16" fill="none" stroke-linecap="round"/>
      `;
    case 'running':
      return `
        <circle cx="228" cy="88" r="20" fill="#ffffff"/>
        <path d="M210 114l-34 42 38 14 28-34 24 24 34 10M214 170l-28 60M242 140l-14 46 42 60M164 232h46M268 228h58" ${commonStroke}/>
      `;
    case 'swimming':
      return `
        <circle cx="152" cy="132" r="24" fill="#ffffff"/>
        <path d="M172 132h78l48 34" ${commonStroke}/>
        <path d="M90 228c28-18 56-18 84 0 28 18 56 18 84 0 28-18 56-18 84 0" stroke="#ffffff" stroke-width="14" fill="none" stroke-linecap="round"/>
        <path d="M124 180l50 18" ${commonStroke}/>
      `;
    case 'skiing':
      return `
        <circle cx="220" cy="90" r="18" fill="#ffffff"/>
        <path d="M220 108l-34 42 30 28 50-8 42 36" ${commonStroke}/>
        <path d="M104 268h174M146 240h176" stroke="#ffffff" stroke-width="12" fill="none" stroke-linecap="round"/>
        <path d="M258 102v64" stroke="#ffffff" stroke-width="10" fill="none"/>
      `;
    case 'skate':
      return `
        <rect x="110" y="170" width="200" height="36" rx="18" fill="#ffffff"/>
        <circle cx="150" cy="230" r="24" fill="#10253f"/>
        <circle cx="270" cy="230" r="24" fill="#10253f"/>
        <path d="M136 166l26-30M286 166l-26-30" ${commonStroke}/>
      `;
    case 'racket':
      return `
        <ellipse cx="200" cy="138" rx="68" ry="88" fill="none" stroke="#ffffff" stroke-width="18"/>
        <path d="M160 80v116M200 56v164M240 80v116M132 112h136M132 154h136" stroke="#ffffff" stroke-width="8"/>
        <rect x="234" y="220" width="30" height="110" rx="14" fill="#ffffff" transform="rotate(-30 249 275)"/>
      `;
    case 'whistle':
      return `
        <path d="M116 176c0-28 22-50 50-50h60c44 0 80 36 80 80s-36 80-80 80c-31 0-56-25-56-56 0-24 18-42 42-42 20 0 34 14 34 34" ${commonStroke}/>
        <circle cx="230" cy="206" r="18" fill="#ffffff"/>
      `;
    case 'goal':
      return `
        <path d="M112 264V112h184v152" ${commonStroke}/>
        <path d="M150 264V146h146v118" stroke="#ffffff" stroke-width="10" fill="none"/>
        <path d="M112 112l38 34M296 112l-38 34M150 146l146 118" stroke="#ffffff" stroke-width="10" fill="none"/>
      `;
    case 'medal':
      return `
        <path d="M154 72h46l18 62h-44z" fill="#2563eb"/>
        <path d="M220 72h46l-18 62h-44z" fill="#ef4444"/>
        <circle cx="210" cy="202" r="64" fill="#ffd166"/>
        <polygon points="210,162 224,191 256,196 232,219 238,252 210,236 182,252 188,219 164,196 196,191" fill="#fff7c2"/>
      `;
    case 'cup':
      return `
        <path d="M140 124h140v34c0 42-28 76-70 84-42-8-70-42-70-84v-34z" fill="#ffffff"/>
        <path d="M140 136h-26c0 34 14 56 42 66M280 136h26c0 34-14 56-42 66" stroke="#ffffff" stroke-width="14" fill="none" stroke-linecap="round"/>
        <rect x="190" y="242" width="40" height="54" rx="12" fill="#ffffff"/>
        <rect x="152" y="284" width="116" height="24" rx="12" fill="#ffffff"/>
      `;
    case 'tabletennis':
      return `
        <circle cx="280" cy="120" r="26" fill="#ffffff"/>
        <path d="M122 126c0-34 28-62 62-62 42 0 94 42 94 88 0 34-28 62-62 62-42 0-94-42-94-88z" fill="#ef4444"/>
        <rect x="194" y="212" width="24" height="94" rx="10" fill="#ffe3a3" transform="rotate(24 206 259)"/>
      `;
    default:
      return `<circle cx="210" cy="176" r="88" fill="#ffffff"/>`;
  }
}

function iconSoldier(key) {
  const commonStroke = 'stroke="#f8f6eb" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"';

  switch (key) {
    case 'helmet':
      return `
        <path d="M102 187c0-64 48-106 108-106 59 0 108 38 108 96 0 28-22 49-50 49H144c-24 0-42-15-42-39z" fill="#b7c38d"/>
        <path d="M145 176h130" stroke="#87915c" stroke-width="15"/>
      `;
    case 'tank':
      return `
        <rect x="96" y="175" width="220" height="52" rx="22" fill="#a4b279"/>
        <rect x="150" y="130" width="96" height="50" rx="18" fill="#b7c38d"/>
        <rect x="228" y="145" width="92" height="14" rx="7" fill="#e7efc3"/>
        <circle cx="140" cy="227" r="18" fill="#5f6944"/>
        <circle cx="192" cy="227" r="18" fill="#5f6944"/>
        <circle cx="244" cy="227" r="18" fill="#5f6944"/>
        <circle cx="296" cy="227" r="18" fill="#5f6944"/>
      `;
    case 'drone':
      return `
        <circle cx="210" cy="185" r="28" fill="#dfe7d2"/>
        <path d="M210 185L140 125M210 185l70-60M210 185l-70 60M210 185l70 60" ${commonStroke}/>
        <circle cx="124" cy="112" r="24" fill="#c7d19f"/>
        <circle cx="296" cy="112" r="24" fill="#c7d19f"/>
        <circle cx="124" cy="258" r="24" fill="#c7d19f"/>
        <circle cx="296" cy="258" r="24" fill="#c7d19f"/>
      `;
    case 'binoculars':
      return `
        <rect x="118" y="122" width="64" height="108" rx="28" fill="#c4ccb4"/>
        <rect x="238" y="122" width="64" height="108" rx="28" fill="#c4ccb4"/>
        <rect x="170" y="108" width="80" height="40" rx="14" fill="#e2e8d4"/>
        <circle cx="150" cy="218" r="36" fill="#49513c"/>
        <circle cx="270" cy="218" r="36" fill="#49513c"/>
      `;
    case 'radio':
      return `
        <rect x="132" y="92" width="156" height="188" rx="24" fill="#b9c58a"/>
        <rect x="154" y="122" width="112" height="76" rx="14" fill="#2c3b2d"/>
        <circle cx="182" cy="234" r="18" fill="#728050"/>
        <circle cx="238" cy="234" r="28" fill="#728050"/>
        <path d="M210 92V50" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
      `;
    case 'medic':
      return `
        <rect x="124" y="98" width="172" height="164" rx="28" fill="#f7efe7"/>
        <rect x="190" y="122" width="40" height="116" rx="10" fill="#ef4444"/>
        <rect x="152" y="160" width="116" height="40" rx="10" fill="#ef4444"/>
        <rect x="162" y="74" width="96" height="34" rx="16" fill="#d8c3ab"/>
      `;
    case 'shield':
      return `
        <path d="M210 74l100 36v60c0 72-42 118-100 154-58-36-100-82-100-154v-60l100-36z" fill="#cfd7b7"/>
        <path d="M210 106v180M132 168h156" stroke="#76815c" stroke-width="16"/>
      `;
    case 'boots':
      return `
        <path d="M104 214h92c18 0 32 15 32 33v17H104c-16 0-28-12-28-28v-6c0-9 8-16 28-16z" fill="#7b5b3b"/>
        <path d="M216 214h92c18 0 32 15 32 33v17H216c-16 0-28-12-28-28v-6c0-9 8-16 28-16z" fill="#8f6942"/>
        <path d="M170 214v-64h38v64M282 214v-64h38v64" stroke="#d8c49e" stroke-width="12" stroke-linecap="round"/>
      `;
    case 'medal':
      return `
        <path d="M152 72h44l18 60h-44z" fill="#ef4444"/>
        <path d="M224 72h44l-18 60h-44z" fill="#2563eb"/>
        <circle cx="210" cy="196" r="64" fill="#f3c54c"/>
        <polygon points="210,152 224,184 258,187 232,210 240,244 210,226 180,244 188,210 162,187 196,184" fill="#fff2b3"/>
      `;
    case 'goggles':
      return `
        <rect x="104" y="144" width="90" height="72" rx="26" fill="#d7dcc7"/>
        <rect x="226" y="144" width="90" height="72" rx="26" fill="#d7dcc7"/>
        <rect x="188" y="166" width="44" height="28" rx="14" fill="#d7dcc7"/>
        <path d="M78 176h28M314 176h28" stroke="#f8f6eb" stroke-width="14" stroke-linecap="round"/>
        <rect x="122" y="160" width="54" height="40" rx="14" fill="#46503b"/>
        <rect x="244" y="160" width="54" height="40" rx="14" fill="#46503b"/>
      `;
    case 'submarine':
      return `
        <path d="M98 212c0-42 34-76 76-76h92c34 0 64 18 80 46v30H98z" fill="#9cad72"/>
        <rect x="188" y="108" width="54" height="34" rx="12" fill="#d6dfb7"/>
        <circle cx="148" cy="212" r="16" fill="#425033"/>
        <circle cx="212" cy="212" r="16" fill="#425033"/>
        <circle cx="276" cy="212" r="16" fill="#425033"/>
        <path d="M320 196h34" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
      `;
    case 'jet':
      return `
        <path d="M74 194l118-34 96-82 30 6-52 90 48 14-14 20-66-8-34 44-20-2 8-40-84 18z" fill="#dfe7d2"/>
      `;
    case 'compass':
      return `
        <circle cx="210" cy="176" r="104" fill="#c8d1ab"/>
        <circle cx="210" cy="176" r="72" fill="#46503b"/>
        <polygon points="210,92 240,176 210,260 180,176" fill="#f8f6eb"/>
        <polygon points="210,116 228,176 210,236 192,176" fill="#ef4444"/>
        <circle cx="210" cy="176" r="16" fill="#f8f6eb"/>
      `;
    case 'watchtower':
      return `
        <rect x="148" y="92" width="124" height="52" rx="12" fill="#d7dcc7"/>
        <path d="M162 144l-30 128M258 144l30 128M188 144l-18 128M232 144l18 128" ${commonStroke}/>
        <path d="M120 272h180" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
      `;
    case 'parachute':
      return `
        <path d="M102 154c18-58 64-92 108-92s90 34 108 92H102z" fill="#dfe7d2"/>
        <path d="M136 154l34 74M210 154v94M284 154l-34 74" ${commonStroke}/>
        <circle cx="210" cy="278" r="18" fill="#f8f6eb"/>
        <path d="M210 296v34M210 314l-26 34M210 314l26 34" ${commonStroke}/>
      `;
    case 'ammo':
      return `
        <rect x="122" y="128" width="54" height="132" rx="18" fill="#d9c282"/>
        <rect x="184" y="108" width="54" height="152" rx="18" fill="#e7d59c"/>
        <rect x="246" y="142" width="54" height="118" rx="18" fill="#d9c282"/>
        <path d="M149 128l-8-26h16zM211 108l-8-26h16zM273 142l-8-26h16z" fill="#f8f6eb"/>
      `;
    case 'map':
      return `
        <path d="M92 120l76-24 84 28 76-24v180l-76 24-84-28-76 24z" fill="#d7dcc7"/>
        <path d="M168 96v180M252 124v180" stroke="#77825a" stroke-width="12"/>
        <path d="M118 170c24-20 46-26 72-18 18 6 28 14 48 12 18-2 28-10 52-24" stroke="#ef4444" stroke-width="10" fill="none" stroke-linecap="round"/>
      `;
    case 'nightvision':
      return `
        <rect x="106" y="144" width="90" height="72" rx="24" fill="#cad4aa"/>
        <rect x="224" y="144" width="90" height="72" rx="24" fill="#cad4aa"/>
        <rect x="184" y="112" width="52" height="28" rx="10" fill="#e3ecd0"/>
        <circle cx="150" cy="180" r="26" fill="#57ff79" opacity="0.55"/>
        <circle cx="270" cy="180" r="26" fill="#57ff79" opacity="0.55"/>
        <path d="M106 182h-24M314 182h24" stroke="#f8f6eb" stroke-width="12" stroke-linecap="round"/>
      `;
    case 'case':
      return `
        <rect x="108" y="126" width="204" height="144" rx="24" fill="#7a8458"/>
        <rect x="178" y="96" width="64" height="28" rx="12" fill="#dfe7d2"/>
        <rect x="138" y="160" width="144" height="20" rx="10" fill="#dfe7d2"/>
        <rect x="184" y="188" width="52" height="18" rx="9" fill="#dfe7d2"/>
      `;
    case 'star':
      return `
        <polygon points="210,74 246,150 330,160 268,216 286,298 210,256 134,298 152,216 90,160 174,150" fill="#f0d36f"/>
      `;
    default:
      return `<circle cx="210" cy="176" r="88" fill="#d9dfc2"/>`;
  }
}

function iconBrand(key) {
  switch (key) {
    case 'apple':
      return `
        <path d="M236 86c11-17 14-29 13-41-16 1-34 12-43 25-8 11-14 25-12 39 17 2 31-8 42-23z" fill="#ffffff"/>
        <path d="M272 136c-13-22-32-32-50-32-21 0-30 10-44 10-15 0-25-10-45-10-34 0-69 28-69 80 0 32 11 66 27 89 14 20 29 42 50 42 19 0 26-12 49-12 24 0 29 12 49 12 22 0 36-20 50-40 11-17 16-30 24-49-52-21-59-93-12-130-10-15-18-25-29-36z" fill="#ffffff"/>
      `;
    case 'nike':
      return `<path d="M102 222c67-15 140-66 216-120-31 59-91 138-185 150-28 4-42-5-31-30z" fill="#ffffff"/>`;
    case 'bmw':
      return `
        <circle cx="210" cy="176" r="104" fill="#ffffff"/>
        <circle cx="210" cy="176" r="78" fill="#111827"/>
        <path d="M210 98A78 78 0 0 1 288 176H210z" fill="#5bc0ff"/>
        <path d="M132 176A78 78 0 0 1 210 98v78z" fill="#ffffff"/>
        <path d="M210 254A78 78 0 0 1 132 176h78z" fill="#5bc0ff"/>
        <path d="M288 176A78 78 0 0 1 210 254v-78z" fill="#ffffff"/>
        <circle cx="210" cy="176" r="46" fill="#111827"/>
      `;
    case 'lego':
      return `
        <rect x="102" y="102" width="216" height="148" rx="28" fill="#ef4444"/>
        <rect x="126" y="84" width="38" height="30" rx="12" fill="#ffd166"/>
        <rect x="182" y="84" width="38" height="30" rx="12" fill="#ffd166"/>
        <rect x="238" y="84" width="38" height="30" rx="12" fill="#ffd166"/>
        <text x="210" y="195" text-anchor="middle" font-size="58" font-weight="900" fill="#ffffff" font-family="Arial, sans-serif">LEGO</text>
      `;
    case 'tesla':
      return `
        <path d="M110 108c26-14 61-22 100-22s74 8 100 22c-8 9-20 15-34 18-17-9-40-13-66-13s-49 4-66 13c-14-3-26-9-34-18z" fill="#ffffff"/>
        <path d="M195 116h30l-14 140h-2z" fill="#ffffff"/>
        <path d="M150 146c17-11 38-16 60-16s43 5 60 16" stroke="#ffffff" stroke-width="14" fill="none" stroke-linecap="round"/>
      `;
    case 'pepsi':
      return `
        <circle cx="210" cy="176" r="102" fill="#ffffff"/>
        <path d="M108 176c0-48 47-86 102-86 43 0 77 16 92 43-17-10-38-15-63-15-56 0-101 26-131 58z" fill="#ef4444"/>
        <path d="M112 195c31-33 74-53 129-53 25 0 46 4 63 12-6 44-48 88-94 101-45 13-89 1-120-28 20 2 42 0 61-9 26-12 46-20 61-23-39 0-71 1-100 0z" fill="#2563eb"/>
      `;
    case 'adidas':
      return `
        <path d="M110 236l58-102 36 18-44 84z" fill="#ffffff"/>
        <path d="M178 236l48-88 36 18-34 70z" fill="#ffffff"/>
        <path d="M242 236l36-66 34 18-22 48z" fill="#ffffff"/>
      `;
    case 'amazon':
      return `
        <text x="192" y="178" text-anchor="middle" font-size="142" font-weight="800" fill="#ffffff" font-family="Arial, sans-serif">a</text>
        <path d="M142 226c30 18 102 18 136-4" stroke="#ffb703" stroke-width="14" fill="none" stroke-linecap="round"/>
        <path d="M266 214l22 4-11 20" fill="none" stroke="#ffb703" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    case 'microsoft':
      return `
        <rect x="110" y="96" width="88" height="88" rx="14" fill="#f25022"/>
        <rect x="222" y="96" width="88" height="88" rx="14" fill="#7fba00"/>
        <rect x="110" y="208" width="88" height="88" rx="14" fill="#00a4ef"/>
        <rect x="222" y="208" width="88" height="88" rx="14" fill="#ffb900"/>
      `;
    case 'shell':
      return `
        <path d="M210 88c68 0 114 52 114 114H96c0-62 46-114 114-114z" fill="#ffd54f"/>
        <path d="M210 96v104M142 116l32 84M278 116l-32 84M112 154h196M138 190h144" stroke="#ef4444" stroke-width="12" stroke-linecap="round"/>
      `;
    case 'google':
      return `
        <text x="210" y="212" text-anchor="middle" font-size="92" font-weight="800" fill="#ffffff" font-family="Arial, sans-serif">G</text>
        <path d="M236 126c-12-8-26-12-44-12-40 0-72 28-72 62s32 62 72 62c32 0 56-14 66-38h-66" stroke="#4285F4" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M136 188c4 18 16 32 34 42" stroke="#34A853" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M164 118c14-10 30-16 50-16" stroke="#EA4335" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M258 182h46" stroke="#FBBC05" stroke-width="18" fill="none" stroke-linecap="round"/>
      `;
    case 'spotify':
      return `
        <circle cx="210" cy="176" r="104" fill="#1ed760"/>
        <path d="M146 152c44-12 88-8 132 12M154 188c34-10 68-7 102 8M162 222c26-6 49-4 74 6" stroke="#0d1117" stroke-width="16" fill="none" stroke-linecap="round"/>
      `;
    case 'youtube':
      return `
        <rect x="92" y="104" width="236" height="144" rx="36" fill="#ff3030"/>
        <polygon points="184,136 184,216 254,176" fill="#ffffff"/>
      `;
    case 'starbucks':
      return `
        <circle cx="210" cy="176" r="104" fill="#0f9d58"/>
        <circle cx="210" cy="176" r="72" fill="#ffffff"/>
        <path d="M210 118c20 0 38 18 38 38 0 8-2 16-8 22 6 8 10 18 10 30 0 22-18 40-40 40s-40-18-40-40c0-12 4-22 10-30-6-6-8-14-8-22 0-20 18-38 38-38z" fill="#0f9d58"/>
        <path d="M162 120l18-26M258 120l-18-26" stroke="#0f9d58" stroke-width="10" stroke-linecap="round"/>
      `;
    case 'intel':
      return `
        <ellipse cx="210" cy="176" rx="118" ry="82" fill="none" stroke="#5bc0ff" stroke-width="14"/>
        <text x="210" y="196" text-anchor="middle" font-size="76" font-weight="800" fill="#ffffff" font-family="Arial, sans-serif">intel</text>
      `;
    case 'toyota':
      return `
        <ellipse cx="210" cy="176" rx="118" ry="88" fill="none" stroke="#ffffff" stroke-width="14"/>
        <ellipse cx="210" cy="176" rx="38" ry="72" fill="none" stroke="#ffffff" stroke-width="14"/>
        <ellipse cx="210" cy="176" rx="86" ry="38" fill="none" stroke="#ffffff" stroke-width="14"/>
      `;
    case 'nasa':
      return `
        <circle cx="210" cy="176" r="104" fill="#1d4ed8"/>
        <text x="210" y="196" text-anchor="middle" font-size="70" font-weight="900" fill="#ffffff" font-family="Arial, sans-serif">NASA</text>
        <path d="M120 220c54-42 108-56 176-46" stroke="#ef4444" stroke-width="12" fill="none" stroke-linecap="round"/>
      `;
    case 'gucci':
      return `
        <text x="180" y="212" text-anchor="middle" font-size="110" font-weight="700" fill="#ffffff" font-family="Georgia, serif">G</text>
        <text x="242" y="212" text-anchor="middle" font-size="110" font-weight="700" fill="#ffffff" font-family="Georgia, serif">G</text>
      `;
    case 'playstation':
      return `
        <path d="M176 92c34 6 60 28 60 58v118c0 14-10 24-24 24-12 0-24-6-36-18V92z" fill="#ffffff"/>
        <path d="M198 188l102-32c12-4 24 4 24 16 0 8-6 16-16 20l-104 38c-14 4-28-6-28-20 0-10 8-18 22-22z" fill="#ffffff"/>
        <path d="M118 242l54 20 46-16-52-20z" fill="#5bc0ff"/>
      `;
    case 'mcdonalds':
      return `
        <path d="M126 272c0-92 20-154 52-154 16 0 28 16 32 42 4-26 16-42 32-42 32 0 52 62 52 154h-32c0-66-8-104-20-104-8 0-16 18-20 46h-24c-4-28-12-46-20-46-12 0-20 38-20 104z" fill="#ffd166"/>
      `;
    default:
      return `<circle cx="210" cy="176" r="88" fill="#ffffff"/>`;
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

function cardFrame({ palette, label, inner, fullBleed = false, idSeed = '__ID__' }) {
  const footerY = fullBleed ? 298 : 300;
  const bgId = `${idSeed}-bg`;
  const shadowId = `${idSeed}-shadow`;

  return `
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="${bgId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.accent}"/>
          <stop offset="100%" stop-color="${palette.accent2}"/>
        </linearGradient>
        <filter id="${shadowId}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="rgba(0,0,0,0.28)"/>
        </filter>
      </defs>
      <rect x="8" y="8" width="404" height="404" rx="36" fill="rgba(255,255,255,0.10)"/>
      <rect x="16" y="16" width="388" height="388" rx="32" fill="url(#${bgId})"/>
      <circle cx="320" cy="98" r="82" fill="rgba(255,255,255,0.14)"/>
      <circle cx="100" cy="332" r="100" fill="rgba(255,255,255,0.08)"/>
      ${fullBleed ? `<rect x="44" y="58" width="332" height="228" rx="30" fill="#ffffff" filter="url(#${shadowId})"/>` : ''}
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
      inner: flagMarkup(item.key),
      idSeed: `__ID__-${themeKey}-${item.key}`
    });
  }

  if (themeKey === 'sport') {
    return cardFrame({
      palette,
      label: item.label,
      inner: iconSport(item.key),
      idSeed: `__ID__-${themeKey}-${item.key}`
    });
  }

  if (themeKey === 'soldiers') {
    return cardFrame({
      palette,
      label: item.label,
      inner: iconSoldier(item.key),
      idSeed: `__ID__-${themeKey}-${item.key}`
    });
  }

  return cardFrame({
    palette,
    label: item.label,
    inner: iconBrand(item.key),
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

function createSerializedDeck(themeKey) {
  const theme = THEMES[themeKey];
  const pairCount = state.selectedCardCount / 2;
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

  resultTitle.textContent = title;
  resultSummary.textContent = `Краен резултат — ${getPlayerName(1)}: ${state.scores[1]} • ${getPlayerName(2)}: ${state.scores[2]} • Режим: ${getModeName()} • Тема: ${THEMES[state.selectedTheme].name} • Карти: ${state.selectedCardCount}.`;
  updatePlayerPanels();
  updateHud('Рундът приключи. Можеш да натиснеш „Играй пак“ или да се върнеш в началното меню.');
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

  state.auth.client.auth.onAuthStateChange(async (_event, session) => {
    state.auth.user = session?.user || null;
    if (state.auth.user) {
      clearGuestState();
      await loadProfile();
      await loadMatchHistory();
      await restoreOnlineSessionAfterAuth();
      if (state.ui.pendingInviteAutoJoin && state.ui.inviteToken) {
        state.ui.pendingInviteAutoJoin = false;
        if (!state.online.room || state.online.room.invite_token !== state.ui.inviteToken) {
          await joinInviteFromToken();
        }
      }
    } else {
      state.auth.profile = null;
      state.auth.history = [];
      state.auth.historyLoaded = false;
      state.online.publicRooms = [];
      state.ui.pendingInviteAutoJoin = false;
      if (state.online.room) await leaveRoom();
      state.ui.onlineLobbyOpen = false;
      app.classList.remove('online-lobby-mode');
      if (state.playMode === 'online') state.playMode = 'local';
    }
    renderProfilePanel();
    updateAuthUi();
    renderModeSelector();
    updateHud();
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
  const loggedIn = Boolean(state.auth.user);
  const sessionLabel = loggedIn ? 'влязъл' : (state.guest.active ? 'гост' : 'няма');
  sessionChip.textContent = `Сесия: ${sessionLabel}`;
  authStatusText.textContent = !state.auth.enabled
    ? 'Добави ключовете си в supabase-config.js и пусни SQL схемата, за да активираш онлайн режима.'
    : loggedIn
      ? `Влязъл си като ${getDisplayName()}. Онлайн режимът е активен, waiting room-ът е отключен и историята се пази.`
      : state.ui.inviteToken
        ? 'Поканата е разпозната. Влез с имейл или username, регистрирай се или използвай временен гост вход, за да приемеш поканата.'
        : 'Влез с имейл или username, или се регистрирай, за да отключиш онлайн режима. Като гост можеш да продължиш локално.';

  guestPreview.textContent = createGuestName();
  guestBanner.classList.toggle('hidden', loggedIn);
  const inviteLobbyAllowed = Boolean(state.ui.inviteToken && state.ui.onlineLobbyOpen && !state.started);
  const lobbyVisible = Boolean(isOnlineMode() && state.ui.onlineLobbyOpen && !state.started && (loggedIn || inviteLobbyAllowed));
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
  logoutButton.classList.toggle('hidden', !loggedIn);
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
  joinInviteButton.classList.toggle('hidden', !loggedIn || !invitePreviewMode);
  joinInviteButton.textContent = 'Влез в поканената стая';
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

  renderOnlineThemeSelector();
  renderOnlineCountSelector();
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

  await loadProfile();
  await loadMatchHistory();
  player1NameInput.value = sanitizeName(
    state.auth.profile?.first_name || state.auth.profile?.username || resolved.matchedUsername || resolved.email.split('@')[0],
    'Играч 1'
  );
  state.ui.pendingOnlineIntent = false;
  showFeedback(loginFeedback, resolved.mode === 'username' ? 'Успешен вход с username.' : 'Успешен вход.', 'success');
  if (state.ui.inviteToken) {
    toggleProfilePanel(false);
    await loadInvitePreview();
    await joinInviteFromToken();
  } else {
    toggleProfilePanel(false);
    updateHud('Успешен вход. Остана на началния екран.');
  }
}

async function logoutUser() {
  if (!state.auth.client) return;
  await leaveRoom();
  await state.auth.client.auth.signOut();
  showFeedback(loginFeedback, '');
  showFeedback(registerFeedback, '');
  state.ui.profileOpen = false;
  authBackdrop?.classList.add('hidden');
  app.classList.remove('auth-open');
  state.ui.onlineLobbyOpen = false;
  app.classList.remove('online-lobby-mode');
  if (state.playMode === 'online') state.playMode = 'local';
  updateHud('Излязохте от профила. Онлайн режимът е заключен.');
}

async function subscribeToRoom(roomId) {
  if (state.online.channel) {
    await state.auth.client.removeChannel(state.online.channel);
    state.online.channel = null;
  }

  state.online.channel = state.auth.client
    .channel(`room-${roomId}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'rooms', filter: `id=eq.${roomId}` }, async (payload) => {
      const previousRoom = state.online.room;
      if (payload.eventType === 'DELETE') {
        state.online.room = null;
        await loadLobbyRooms();
        updateAuthUi();
        resetRoundState();
        updateHud('Стаята беше изтрита.');
        scheduleOnlineRefreshBurst([0, 500]);
        return;
      }
      state.online.room = payload.new;
      syncFromOnlineRoom();
      await loadLobbyRooms();
      if (previousRoom?.status === 'waiting' && !previousRoom?.guest_user_id && payload.new?.guest_user_id && payload.new.host_user_id === state.auth.user?.id) {
        const guestLabel = sanitizeName(payload.new.guest_name || 'Гост', 'Гост');
        showFeedback(onlineLobbyFeedback, `Играч ${guestLabel} се присъедини. Вече можеш да натиснеш „Старт онлайн“.`, 'success');
        queuePersistentNotice(`Играч ${guestLabel} се присъедини към стаята. Натисни „Старт онлайн“.`);
        updateHud(`Играч ${guestLabel} се присъедини към стаята. Натисни „Старт онлайн“.`);
        scheduleOnlineRefreshBurst([0, 250, 800, 1800]);
      }
      if (previousRoom?.status === 'waiting' && payload.new?.status === 'playing') {
        queuePersistentNotice('Онлайн мачът започна. Успех!');
        scheduleOnlineRefreshBurst([0, 250, 700, 1600]);
      }
      if (isRoomInactive(payload.new)) {
        await autoFinishRoomForInactivity(payload.new, { keepLocalState: true });
      } else {
        syncFromOnlineRoom();
      }
    });

  await state.online.channel.subscribe((status) => {
    if (status === 'SUBSCRIBED') {
      scheduleOnlineRefreshBurst([0, 400, 1200]);
    }
  });
}

async function loadInvitePreview() {
  if (!state.auth.client || !state.ui.inviteToken) {
    state.online.invitePreview = null;
    state.online.invitePreviewLoaded = false;
    renderInviteLanding();
    return;
  }
  state.online.invitePreviewLoaded = false;
  renderInviteLanding();
  const { data, error } = await state.auth.client.rpc('get_invite_room_preview', { p_invite_token: state.ui.inviteToken });
  if (error) {
    state.online.invitePreview = null;
    state.online.invitePreviewLoaded = true;
    renderInviteLanding();
    return;
  }
  state.online.invitePreview = normalizeRpcSingle(data);
  state.online.invitePreviewLoaded = true;
  renderInviteLanding();
}

async function loadMyActiveRoom() {
  if (!state.auth.client || !state.auth.user) {
    state.online.room = null;
    return null;
  }
  const { data, error } = await state.auth.client.rpc('get_my_active_room');
  if (error) return null;
  const room = normalizeRpcSingle(data);
  if (!room) {
    state.online.room = null;
    return null;
  }
  if (room.status === 'finished') {
    state.online.room = null;
    if (room.invite_token && room.invite_token === state.ui.inviteToken) clearInviteContext();
    if (state.online.invitePreview?.id === room.id) clearInviteContext();
    return null;
  }
  if (isWaitingRoomExpired(room) && room.host_user_id === state.auth.user?.id) {
    await state.auth.client.from('rooms').delete().eq('id', room.id).eq('host_user_id', state.auth.user.id);
    state.online.room = null;
    queuePersistentNotice('Старата waiting стая беше затворена автоматично след 30 минути без втори играч.');
    if (room.invite_token && room.invite_token === state.ui.inviteToken) clearInviteContext();
    if (state.online.invitePreview?.id === room.id) clearInviteContext();
    return null;
  }
  if (isRoomInactive(room)) {
    await autoFinishRoomForInactivity(room, { keepLocalState: false });
    state.online.room = null;
    if (room.invite_token && room.invite_token === state.ui.inviteToken) clearInviteContext();
    if (state.online.invitePreview?.id === room.id) clearInviteContext();
    return null;
  }
  state.online.room = room;
  if (state.ui.inviteToken && (clearInviteContextIfRoomClaimed(room) || state.online.invitePreview?.id === room.id)) {
    clearInviteContext();
  }
  return room;
}

async function loadLobbyRooms() {
  if (!state.auth.client || !state.auth.user) {
    state.online.publicRooms = [];
    renderRoomList();
    return;
  }

  const { data, error } = await state.auth.client.rpc('list_waiting_rooms');
  if (error) {
    state.online.publicRooms = [];
    showFeedback(roomListFeedback, `Лобито не се зареди: ${error.message}`, 'error');
    renderRoomList();
    return;
  }

  state.online.publicRooms = (Array.isArray(data) ? data : []).filter((room) => !isWaitingRoomExpired(room));
  renderRoomList();
}

async function createRoom() {
  if (hasActiveOnlineRoom()) {
    if (state.online.room?.status === 'playing') {
      const msg = 'Вече имаш активна онлайн игра. Завърши я или излез от играта, преди да създадеш нова стая.';
      showFeedback(onlineLobbyFeedback, msg, 'error');
      updateHud(msg);
      return;
    }
    if (!canReplaceOwnWaitingRoom()) {
      const msg = 'Вече си в waiting стая. Напусни я, преди да се присъединиш към друга или да създадеш нова.';
      showFeedback(onlineLobbyFeedback, msg, 'error');
      updateHud(msg);
      return;
    }
  }

  if (!state.auth.enabled || !state.auth.user) {
    updateHud('За създаване на онлайн стая трябва да си влязъл.');
    showFeedback(onlineLobbyFeedback, 'За създаване на стая трябва да си влязъл в профила си.', 'error');
    toggleProfilePanel(true);
    return;
  }
  clearAllValidation();

  if (!isValidOnlineTheme(state.online.selectedTheme)) {
    showFeedback(onlineLobbyFeedback, 'Първо избери тема за онлайн играта.', 'error');
    updateHud('Първо избери тема за онлайн играта.');
    renderOnlineThemeSelector();
    return;
  }
  if (!isValidOnlineCount(state.online.selectedCardCount)) {
    showFeedback(onlineLobbyFeedback, 'Първо избери брой карти за онлайн играта.', 'error');
    updateHud('Първо избери брой карти за онлайн играта.');
    renderOnlineCountSelector();
    return;
  }
  if (state.online.accessType === 'password' && roomPasswordInput.value.trim().length < 4) {
    setFieldError(roomPasswordField, roomPasswordError, 'Паролата трябва да е минимум 4 символа.');
    showFeedback(onlineLobbyFeedback, 'Добави парола от поне 4 символа.', 'error');
    updateHud('Добави парола от поне 4 символа.');
    return;
  }

  const replacingExistingWaitingRoom = canReplaceOwnWaitingRoom();
  createRoomButton.disabled = true;
  try {
    showFeedback(onlineLobbyFeedback, replacingExistingWaitingRoom ? 'Затваряме старата waiting стая и създаваме нова...' : 'Създаваме стаята...', '');

    if (replacingExistingWaitingRoom && state.online.room?.id) {
      const oldRoom = state.online.room;
      if (state.online.channel && state.auth.client) {
        await state.auth.client.removeChannel(state.online.channel);
        state.online.channel = null;
      }
      const { error: closeError } = await state.auth.client
        .from('rooms')
        .delete()
        .eq('id', oldRoom.id)
        .eq('host_user_id', state.auth.user.id)
        .eq('status', 'waiting');
      if (closeError) {
        const msg = `Не успях да затворя старата стая: ${closeError.message || 'неочаквана грешка'}`;
        showFeedback(onlineLobbyFeedback, msg, 'error');
        updateHud(msg);
        return;
      }
      state.online.room = null;
      if (oldRoom.invite_token && oldRoom.invite_token === state.ui.inviteToken) clearInviteContext();
    }

    const payload = {
      p_code: generateRoomCode(),
      p_host_name: getDisplayName(),
      p_selected_theme: state.online.selectedTheme,
      p_selected_card_count: Number(state.online.selectedCardCount),
      p_access_type: state.online.accessType,
      p_plain_password: state.online.accessType === 'password' ? roomPasswordInput.value.trim() : null
    };

    const { data, error } = await state.auth.client.rpc('create_room_secure', payload);
    const createdRoom = normalizeRpcSingle(data);
    if (error || !createdRoom) {
      const msg = `Не успях да създам стая: ${error?.message || 'неочаквана грешка'}`;
      showFeedback(onlineLobbyFeedback, msg, 'error');
      updateHud(msg);
      return;
    }

    const freshRoom = await fetchRoomById(createdRoom.id);
    state.online.room = freshRoom || createdRoom;
    state.selectedTheme = state.online.room.selected_theme;
    state.selectedCardCount = state.online.room.selected_card_count;
    roomPasswordInput.value = '';
    if (state.online.room.access_type !== 'invite') {
      clearInviteContext();
    }
    await subscribeToRoom(state.online.room.id);
    await refreshOnlineState(true);
    scheduleOnlineRefreshBurst();
    await loadLobbyRooms();
    syncFromOnlineRoom();
    const successMessage = state.online.room.access_type === 'invite'
      ? `${replacingExistingWaitingRoom ? 'Старата стая беше затворена. ' : ''}Invite стаята е създадена. Копирай линка и го изпрати на опонента.`
      : `${replacingExistingWaitingRoom ? 'Старата стая беше затворена. ' : ''}Стаята е създадена. Изпрати код ${state.online.room.code} на другия играч.`;
    showFeedback(onlineLobbyFeedback, successMessage, 'success');
    updateHud(successMessage);
  } finally {
    createRoomButton.disabled = false;
  }
}

async function joinRoomByRecord(room) {
  if (!room || state.online.joinBusy) return;
  if (room.id && state.online.room?.id === room.id) {
    const fresh = await fetchRoomById(room.id);
    state.online.room = fresh || room;
    syncFromOnlineRoom();
    updateHud(`Вече си в стая ${state.online.room.code}.`);
    return;
  }
  if (hasActiveOnlineRoom()) {
    const msg = 'Вече имаш активна онлайн стая. Напусни я, преди да се присъединиш към друга.';
    showFeedback(roomListFeedback, msg, 'error');
    updateHud(msg);
    return;
  }
  if ((room.status || 'waiting') !== 'waiting') {
    const msg = room.status === 'playing' ? 'Тази стая вече е в игра.' : 'Тази стая вече не е достъпна за присъединяване.';
    showFeedback(roomListFeedback, msg, 'error');
    updateHud(msg);
    await refreshOnlineState(true);
    return;
  }
  if (room.guest_user_id && room.guest_user_id !== state.auth.user.id) {
    updateHud('Тази стая вече е пълна.');
    return;
  }

  let data = null;
  let error = null;
  state.online.joinBusy = true;
  joinRoomButton.disabled = true;
  if ((room.access_type || 'public') === 'password') {
    const password = joinPasswordInput.value.trim();
    if (password.length < 4) {
      setFieldError(joinPasswordField, joinPasswordError, 'Въведи валидна парола.');
      return;
    }
    ({ data, error } = await state.auth.client.rpc('join_room_with_password', { p_room_id: room.id, p_plain_password: password, p_guest_name: getDisplayName() }));
  } else {
    ({ data, error } = await state.auth.client.rpc('join_room_public', { p_room_id: room.id, p_guest_name: getDisplayName() }));
  }

  if (error || !data) {
    const msg = error?.message || 'Неуспешно присъединяване.';
    setFieldError(joinRoomField, joinRoomError, msg);
    showFeedback(roomListFeedback, msg, 'error');
    updateHud(msg);
    state.online.joinBusy = false;
    joinRoomButton.disabled = false;
    return;
  }

  joinPasswordInput.value = '';
  joinPasswordRow.classList.add('hidden');
  state.ui.pendingProtectedRoomId = null;
  state.online.room = data;
  state.selectedTheme = data.selected_theme;
  state.selectedCardCount = data.selected_card_count;
  applyThemePalette(state.selectedTheme);
  renderThemeSelector();
  renderCountSelector();
  await subscribeToRoom(data.id);
  await refreshOnlineState(true);
  scheduleOnlineRefreshBurst();
  await loadLobbyRooms();
  syncFromOnlineRoom();
  setFieldError(joinRoomField, joinRoomError, '');
  updateHud(`Свързан си към стая ${data.code}.`);
  state.online.joinBusy = false;
  joinRoomButton.disabled = false;
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

  if (!state.auth.enabled || !state.auth.user) {
    updateHud('За присъединяване към стая трябва да си влязъл.');
    return;
  }
  if (!validateJoinRoomCode()) {
    updateHud('Въведи валиден 6-символен код на стая.');
    return;
  }
  const code = joinRoomInput.value.trim().toUpperCase();

  const { data: room, error } = await state.auth.client.from('rooms').select('*').eq('code', code).maybeSingle();
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
  if (!state.auth.enabled || !state.ui.inviteToken) {
    updateHud('Поканата изисква активна Supabase конфигурация.');
    return;
  }

  if (!state.auth.user) {
    openProfileFromInvite();
    return;
  }

  if (hasActiveOnlineRoom() && state.online.invitePreview?.id && state.online.room?.id && state.online.room.id !== state.online.invitePreview.id) {
    const msg = 'Имаш друга активна онлайн стая. Затвори я, преди да използваш тази покана.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
    return;
  }

  state.online.joinBusy = true;
  if (joinInviteButton) joinInviteButton.disabled = true;
  if (inviteLandingJoinButton) inviteLandingJoinButton.disabled = true;
  const { data, error } = await state.auth.client.rpc('join_room_with_invite', { p_invite_token: state.ui.inviteToken, p_guest_name: getDisplayName() });
  if (error || !data) {
    updateHud(`Не успях да използвам поканата: ${error?.message || 'неочаквана грешка'}`);
    showFeedback(onlineLobbyFeedback, `Не успях да използвам поканата: ${error?.message || 'неочаквана грешка'}`, 'error');
    state.online.joinBusy = false;
    if (joinInviteButton) joinInviteButton.disabled = false;
    if (inviteLandingJoinButton) inviteLandingJoinButton.disabled = false;
    return;
  }

  const joinedRoom = normalizeRpcSingle(data);
  state.playMode = 'online';
  renderModeSelector();
  setOnlineLobbyOpen(true);
  state.online.room = (await fetchRoomById(joinedRoom.id)) || joinedRoom;
  clearInviteContextIfRoomClaimed(state.online.room);
  renderInviteLanding();
  state.selectedTheme = state.online.room.selected_theme;
  state.selectedCardCount = state.online.room.selected_card_count;
  await subscribeToRoom(state.online.room.id);
  await refreshOnlineState(true);
  scheduleOnlineRefreshBurst();
  await loadLobbyRooms();
  syncFromOnlineRoom();
  const joinedCode = state.online.room?.code || joinedRoom.code || '—';
  showFeedback(onlineLobbyFeedback, `Влезе в поканената стая ${joinedCode}. Изчакай домакинът да натисне „Старт онлайн“.`, 'success');
  queuePersistentNotice(`Влезе в поканената стая ${joinedCode}. Изчакай домакинът да натисне „Старт онлайн“.`);
  updateHud(`Влезе в поканената стая ${joinedCode}. Изчакай домакинът да натисне „Старт онлайн“.`);
  state.online.joinBusy = false;
  if (joinInviteButton) joinInviteButton.disabled = false;
  if (inviteLandingJoinButton) inviteLandingJoinButton.disabled = false;
}

async function continueInviteAsGuest() {
  if (!state.auth.enabled || !state.ui.inviteToken) {
    updateHud('Поканата изисква активна Supabase конфигурация.');
    return;
  }

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
  continueInviteGuestButton.disabled = true;
  if (inviteLandingGuestButton) inviteLandingGuestButton.disabled = true;
  state.ui.pendingInviteAutoJoin = true;
  showFeedback(onlineLobbyFeedback, 'Създаваме временна гост сесия...', '');

  const { error } = await state.auth.client.auth.signInAnonymously({
    options: {
      data: {
        username: guestName,
        first_name: guestName,
        last_name: '',
        guest_name: guestName
      }
    }
  });

  continueInviteGuestButton.disabled = false;
  if (inviteLandingGuestButton) inviteLandingGuestButton.disabled = false;
  if (error) {
    state.ui.pendingInviteAutoJoin = false;
    const msg = error?.message?.includes('Anonymous sign-ins are disabled')
      ? 'Гост входът е изключен в Supabase. Активирай Authentication → Providers → Anonymous или използвай регистрация.'
      : `Не успях да стартирам гост сесия: ${error.message || 'неочаквана грешка'}`;
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
    return;
  }

  state.guest.active = true;
  state.guest.name1 = guestName;
  persistGuestState();
  player1NameInput.value = guestName;
}

function openProfileFromInvite() {
  state.ui.pendingOnlineIntent = false;
  toggleProfilePanel(true);
  renderInviteLanding();
  updateHud('Поканата е активна. Влез в профила си и ще те добавим директно в стаята.');
}

async function copyInviteLink() {
  if (!inviteLinkInput.value) return;
  try {
    await navigator.clipboard.writeText(inviteLinkInput.value);
    updateHud('Линкът за покана е копиран.');
  } catch (error) {
    inviteLinkInput.select();
    document.execCommand('copy');
    updateHud('Линкът за покана е копиран.');
  }
}

async function leaveRoom(options = {}) {
  const room = state.online.room;
  const finishIfPlaying = Boolean(options.finishIfPlaying);
  const stayOnline = Boolean(options.stayOnline);

  leaveRoomButton.disabled = true;
  if (room) {
    leaveRoomButton.textContent = room.status === 'playing'
      ? 'Излизаме...'
      : (room.host_user_id === state.auth.user?.id ? 'Затваряме...' : 'Напускаме...');
  }

  if (state.online.pendingTimeout) {
    clearTimeout(state.online.pendingTimeout);
    state.online.pendingTimeout = null;
  }

  try {
    if (state.online.channel && state.auth.client) {
      await state.auth.client.removeChannel(state.online.channel);
      state.online.channel = null;
    }

    if (!state.auth.client || !room) {
      state.online.room = null;
      if (stayOnline) {
        state.playMode = 'online';
        renderModeSelector();
        setOnlineLobbyOpen(true);
      } else {
        state.playMode = 'local';
        renderModeSelector();
        resetRoundState();
      }
      updateAuthUi();
      return;
    }

    const userId = state.auth.user?.id || null;
    const isHost = Boolean(userId && room.host_user_id === userId);
    const isGuest = Boolean(userId && room.guest_user_id === userId);
    const slot = isHost ? 1 : (isGuest ? 2 : myRoomSlot());

    if (finishIfPlaying && room.status === 'playing') {
      const winnerSlot = slot === 1 ? 2 : 1;
      await state.auth.client.from('rooms').update({
        status: 'finished',
        winner_slot: (room.guest_user_id || slot === 2) ? winnerSlot : null,
        lock_board: false,
        flipped_indices: []
      }).eq('id', room.id);
    } else if (room.status === 'waiting' && isHost) {
      await state.auth.client.from('rooms').delete().eq('id', room.id).eq('host_user_id', userId);
    } else if (room.status === 'waiting' && isGuest) {
      await state.auth.client.from('rooms').update({ guest_user_id: null, guest_name: null }).eq('id', room.id);
    } else if (isGuest) {
      await state.auth.client.from('rooms').update({
        guest_user_id: null,
        guest_name: null,
        status: room.status === 'playing' ? 'finished' : room.status,
        winner_slot: room.status === 'playing' ? 1 : room.winner_slot
      }).eq('id', room.id);
    }

    if (room?.invite_token && room.invite_token === state.ui.inviteToken) clearInviteContext();
    state.online.room = null;
    if (stayOnline) {
      resetRoundState();
      state.playMode = 'online';
      renderModeSelector();
      setOnlineLobbyOpen(true);
      await loadLobbyRooms();
      showFeedback(onlineLobbyFeedback, room.status === 'playing' ? 'Излезе от онлайн играта.' : (slot === 1 ? 'Стаята беше затворена.' : 'Напусна стаята.'));
      updateHud(room.status === 'playing' ? 'Излезе от онлайн играта.' : (slot === 1 ? 'Стаята беше затворена.' : 'Напусна стаята.'));
    } else {
      state.playMode = 'local';
      renderModeSelector();
      resetRoundState();
      await loadLobbyRooms();
    }
    updateAuthUi();
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

async function startOnlineMatch() {
  if (state.online.startBusy) return;
  const room = state.online.room;
  if (!room) {
    updateHud('Няма активна онлайн стая за стартиране.');
    return;
  }
  if (myRoomSlot() !== 1) {
    const msg = 'Само домакинът може да стартира онлайн мача.';
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
    return;
  }
  if (room.status !== 'waiting') {
    updateHud('Онлайн мачът вече е стартиран или е приключил.');
    return;
  }
  if (!room.guest_user_id) {
    showFeedback(onlineLobbyFeedback, 'Нужен е втори играч, преди да стартираш онлайн мач.', 'error');
    updateHud('Изчакай втори играч в стаята.');
    return;
  }

  state.online.startBusy = true;
  updateAuthUi();
  showFeedback(onlineLobbyFeedback, 'Стартираме онлайн мача...', '');
  const deck = createSerializedDeck(room.selected_theme);
  const nowIso = getNowIso();
  if (!state.online.channel && state.auth.client) {
    await subscribeToRoom(room.id);
  }
  const { data, error } = await state.auth.client.from('rooms').update({
    status: 'playing',
    deck,
    scores: { '1': 0, '2': 0 },
    current_player_slot: 1,
    flipped_indices: [],
    matched_indices: [],
    lock_board: false,
    winner_slot: null,
    turn_started_at: nowIso
  }).eq('id', room.id).select().single();

  if (error || !data) {
    state.online.startBusy = false;
    updateAuthUi();
    const msg = `Не успях да стартирам онлайн мача: ${error?.message || 'неочаквана грешка'}`;
    showFeedback(onlineLobbyFeedback, msg, 'error');
    updateHud(msg);
    return;
  }

  state.online.room = data;
  state.playMode = 'online';
  state.ui.onlineLobbyOpen = false;
  renderModeSelector();
  syncFromOnlineRoom();
  await loadLobbyRooms();
  showFeedback(onlineLobbyFeedback, 'Онлайн мачът стартира успешно.', 'success');
  updateHud('Онлайн мачът стартира. Играта започва.');
  scheduleOnlineRefreshBurst([0, 250, 700, 1400, 2400]);
  state.online.startBusy = false;
  updateAuthUi();
}

function syncFromOnlineRoom() {
  const room = state.online.room;
  if (!room) return;
  if (room.status !== 'playing' && state.online.pendingTimeout) {
    clearTimeout(state.online.pendingTimeout);
    state.online.pendingTimeout = null;
  }

  if (room.status === 'playing' || room.status === 'finished') {
    state.playMode = 'online';
    state.ui.onlineLobbyOpen = false;
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
          : 'Влезе в стаята успешно. Изчакай домакинът да натисне „Старт онлайн“.');
      } else if (isOnlineMode() || state.ui.onlineLobbyOpen) {
        updateHud('Стаята чака втори играч.');
      }
    }
  } else if (room.status === 'playing') {
    state.playMode = 'online';
    state.ui.onlineLobbyOpen = false;
    renderModeSelector();
    updateAuthUi();
    updateHud(`Онлайн мач: на ход е ${getPlayerName(state.currentPlayer)}.`);
    const remaining = getTurnRemainingMs();
    if (remaining === 0 && !room.lock_board) {
      window.setTimeout(() => { handleOnlineTurnTimeout(); }, 120);
    }
  } else if (room.status === 'finished') {
    endOnlineGame();
  }
}

function applyOnlineBoardState() {
  const room = state.online.room;
  if (!room) return;
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
  const { silent = false, refreshLobby = true } = options;
  const { data, error } = await state.auth.client.from('rooms').update(patch).eq('id', room.id).select().single();
  if (error) {
    if (!silent) updateHud(`Грешка при синхронизация: ${error.message}`);
    return null;
  }
  state.online.room = data;
  syncFromOnlineRoom();
  if (refreshLobby && state.ui.onlineLobbyOpen) {
    await loadLobbyRooms();
  }
  return data;
}

async function handleOnlineFlip(card) {
  const room = state.online.room;
  const slot = myRoomSlot();
  if (!room || room.status !== 'playing' || !slot) return;
  if (slot !== room.current_player_slot) return;

  const index = Number(card.dataset.index);
  const flipped = [...(room.flipped_indices || [])];
  const matched = new Set(room.matched_indices || []);
  if (matched.has(index) || flipped.includes(index) || room.lock_board) return;

  if (flipped.length === 0) {
    await patchRoom({ flipped_indices: [index] }, { silent: false, refreshLobby: false });
    return;
  }

  const firstIndex = flipped[0];
  const deck = room.deck || [];
  const isMatch = deck[firstIndex]?.pairId === deck[index]?.pairId;

  if (isMatch) {
    const newMatched = [...new Set([...(room.matched_indices || []), firstIndex, index])];
    const scores = { ...(room.scores || { '1': 0, '2': 0 }) };
    scores[String(slot)] = Number(scores[String(slot)] || 0) + 1;
    const finished = newMatched.length === deck.length;
    let winnerSlot = null;
    if (finished) {
      const s1 = Number(scores['1'] || 0);
      const s2 = Number(scores['2'] || 0);
      winnerSlot = s1 === s2 ? 0 : (s1 > s2 ? 1 : 2);
    }
    await patchRoom({
      flipped_indices: [],
      matched_indices: newMatched,
      scores,
      lock_board: false,
      status: finished ? 'finished' : 'playing',
      winner_slot: winnerSlot,
      turn_started_at: finished ? room.turn_started_at : getNowIso()
    }, { silent: false, refreshLobby: false });
    return;
  }

  const nextSlot = slot === 1 ? 2 : 1;
  const updated = await patchRoom({ flipped_indices: [firstIndex, index], lock_board: true }, { silent: false, refreshLobby: false });
  if (!updated) return;

  if (state.online.pendingTimeout) clearTimeout(state.online.pendingTimeout);
  state.online.pendingTimeout = setTimeout(async () => {
    if (!state.online.room || state.online.room.id !== room.id) return;
    await patchRoom({
      flipped_indices: [],
      lock_board: false,
      current_player_slot: nextSlot,
      turn_started_at: getNowIso()
    }, { silent: false, refreshLobby: false });
    state.online.pendingTimeout = null;
  }, 900);
}

function endOnlineGame() {
  const room = state.online.room;
  if (!room) return;
  state.started = false;
  state.gameOver = true;
  const winner = Number(room.winner_slot);
  const autoFinished = winner === ONLINE_AUTO_FINISH_WINNER_SLOT;
  resultTitle.textContent = autoFinished
    ? 'Играта е приключена автоматично'
    : (winner === 0 ? 'Равенство' : `Победител: ${getPlayerName(winner)}`);
  resultSummary.textContent = autoFinished
    ? `Онлайн играта беше прекратена автоматично поради липса на активност над 15 минути. Текущ резултат — ${getPlayerName(1)}: ${state.scores[1]} • ${getPlayerName(2)}: ${state.scores[2]} • Код стая: ${room.code} • Тема: ${THEMES[room.selected_theme]?.name || room.selected_theme} • Карти: ${room.selected_card_count}.`
    : `Онлайн резултат — ${getPlayerName(1)}: ${state.scores[1]} • ${getPlayerName(2)}: ${state.scores[2]} • Код стая: ${room.code} • Тема: ${THEMES[room.selected_theme]?.name || room.selected_theme} • Карти: ${room.selected_card_count}.`;
  updateHud(autoFinished
    ? 'Онлайн играта се приключва автоматично поради липса на активност.'
    : 'Онлайн мачът приключи. Можеш да натиснеш „Играй пак“ или да се върнеш в началното меню.');
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
  resultModal.classList.add('hidden');
  if (state.playMode === 'online' && state.online.room) {
    if (myRoomSlot() === 1) {
      await patchRoom({ status: 'waiting', deck: [], flipped_indices: [], matched_indices: [], scores: { '1': 0, '2': 0 }, current_player_slot: 1, winner_slot: null, lock_board: false, turn_started_at: getNowIso() });
      updateHud('Онлайн рундът е върнат в режим за нов старт.');
    } else {
      updateHud('Изчакай домакина да подготви нов онлайн рунд или се върни в началното меню.');
    }
    return;
  }
  startGame();
});

mainMenuButton?.addEventListener('click', async () => {
  if (state.playMode === 'online' && state.online.room?.status === 'finished') {
    resultModal.classList.add('hidden');
    returnToMainMenu('Върна се в началното меню.');
    return;
  }
  resultModal.classList.add('hidden');
  returnToMainMenu();
});

window.addEventListener('resize', () => requestAnimationFrame(resizeBoardFit));
window.addEventListener('orientationchange', () => requestAnimationFrame(resizeBoardFit));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !resultModal.classList.contains('hidden')) {
    resultModal.classList.add('hidden');
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
