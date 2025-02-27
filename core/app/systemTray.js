"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayHowToCloseHint = displayHowToCloseHint;
exports.hasInit = void 0;
exports.init = init;
exports.show = show;
var _electron = require("electron");
var _securityUtils = require("../common/securityUtils");
var _appSettings = require("./bootstrapModules/appSettings");
var _ipcMain = _interopRequireDefault(require("./ipcMain"));
var _utils = require("./utils");
var _Constants = require("./Constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const settings = _appSettings.appSettings.getSettings();
const TrayIconNames = {
  DEFAULT: 'tray',
  UNREAD: 'tray-unread',
  CONNECTED: 'tray-connected',
  SPEAKING: 'tray-speaking',
  MUTED: 'tray-muted',
  DEAFENED: 'tray-deafened'
};
const MenuItems = {
  SECRET: 'SECRET',
  MUTE: 'MUTE',
  DEAFEN: 'DEAFEN',
  OPEN: 'OPEN',
  VOICE_SETTINGS: 'VOICE_SETTINGS',
  CHECK_UPDATE: 'CHECK_UPDATE',
  QUIT: 'QUIT',
  ACKNOWLEDGEMENTS: 'ACKNOWLEDGEMENTS'
};
let hasInit = false;
exports.hasInit = hasInit;
let currentIcon;
let options;
let menuItems;
let contextMenu;
let atomTray;
let trayIcons;
let applications;
function init(_options) {
  if (hasInit) {
    console.warn('systemTray: Has already init! Cancelling init.');
    return;
  }
  trayIcons = {};
  generateTrayIconPaths();
  exports.hasInit = hasInit = true;
  options = _options;
  currentIcon = trayIcons.DEFAULT;
  menuItems = {};
  applications = [];
  contextMenu = [];
  initializeMenuItems();
  buildContextMenu();
  _ipcMain.default.on('SYSTEM_TRAY_SET_ICON', (evt, icon) => setTrayIcon(icon));
  _ipcMain.default.on('SYSTEM_TRAY_SET_APPLICATIONS', (evt, newApplications) => setApplications(newApplications));
}
function generateTrayIconPaths() {
  const resourcePath = `app/images/systemtray/${process.platform}`;
  const suffix = process.platform === 'darwin' ? 'Template' : '';
  for (const key of Object.keys(TrayIconNames)) {
    trayIcons[key] = (0, _utils.exposeModuleResource)(resourcePath, `${TrayIconNames[key]}${suffix}.png`);
  }
}
function initializeMenuItems() {
  const {
    onToggleMute,
    onToggleDeafen,
    onTrayClicked,
    onOpenVoiceSettings,
    onCheckForUpdates
  } = options;
  const voiceConnected = currentIcon !== trayIcons.DEFAULT && currentIcon !== trayIcons.UNREAD;
  menuItems[MenuItems.SECRET] = {
    label: `Discord`,
    icon: trayIcons.DEFAULT,
    enabled: false
  };
  menuItems[MenuItems.MUTE] = {
    label: `Mute`,
    type: 'checkbox',
    checked: currentIcon === trayIcons.MUTED || currentIcon === trayIcons.DEAFENED,
    visible: voiceConnected,
    click: onToggleMute
  };
  menuItems[MenuItems.DEAFEN] = {
    label: `Deafen`,
    type: 'checkbox',
    checked: currentIcon === trayIcons.DEAFENED,
    visible: voiceConnected,
    click: onToggleDeafen
  };
  menuItems[MenuItems.OPEN] = {
    label: `Open ${_Constants.APP_NAME}`,
    type: 'normal',
    visible: process.platform === 'linux',
    click: onTrayClicked
  };
  menuItems[MenuItems.VOICE_SETTINGS] = {
    label: 'Voice / Video Settings',
    type: 'normal',
    visible: voiceConnected,
    click: onOpenVoiceSettings
  };
  menuItems[MenuItems.CHECK_UPDATE] = {
    label: 'Check for Updates...',
    type: 'normal',
    visible: process.platform !== 'darwin',
    click: onCheckForUpdates
  };
  menuItems[MenuItems.QUIT] = {
    label: `Quit ${_Constants.APP_NAME}`,
    role: 'quit'
  };
  menuItems[MenuItems.ACKNOWLEDGEMENTS] = {
    label: 'Acknowledgements',
    type: 'normal',
    visible: process.platform !== 'darwin',
    click: () => (0, _securityUtils.saferShellOpenExternal)('https://discord.com/acknowledgements')
  };
}
function buildContextMenu() {
  const separator = {
    type: 'separator'
  };
  const hasApplications = applications != null && applications.length > 0;
  contextMenu = [menuItems[MenuItems.SECRET], separator, ...(hasApplications ? [...applications, separator] : []), menuItems[MenuItems.OPEN], menuItems[MenuItems.MUTE], menuItems[MenuItems.DEAFEN], menuItems[MenuItems.VOICE_SETTINGS], menuItems[MenuItems.CHECK_UPDATE], menuItems[MenuItems.ACKNOWLEDGEMENTS], separator, menuItems[MenuItems.QUIT]];
}
function setTrayIcon(icon) {
  currentIcon = trayIcons[icon];
  if (icon == null) {
    hide();
    return;
  } else {
    show();
  }
  const muteIndex = contextMenu.indexOf(menuItems[MenuItems.MUTE]);
  const deafenIndex = contextMenu.indexOf(menuItems[MenuItems.DEAFEN]);
  const voiceConnected = contextMenu[muteIndex].visible;
  let shouldSetContextMenu = false;
  if (currentIcon !== trayIcons.DEFAULT && currentIcon !== trayIcons.UNREAD) {
    if (!voiceConnected) {
      contextMenu[muteIndex].visible = true;
      contextMenu[deafenIndex].visible = true;
      shouldSetContextMenu = true;
    }
    if (currentIcon === trayIcons.DEAFENED) {
      contextMenu[muteIndex].checked = true;
      contextMenu[deafenIndex].checked = true;
      shouldSetContextMenu = true;
    } else if (currentIcon === trayIcons.MUTED) {
      contextMenu[muteIndex].checked = true;
      contextMenu[deafenIndex].checked = false;
      shouldSetContextMenu = true;
    } else if (contextMenu[muteIndex].checked || contextMenu[deafenIndex].checked) {
      contextMenu[muteIndex].checked = false;
      contextMenu[deafenIndex].checked = false;
      shouldSetContextMenu = true;
    }
  } else if (voiceConnected) {
    contextMenu[muteIndex].visible = false;
    contextMenu[deafenIndex].visible = false;
    shouldSetContextMenu = true;
  }
  shouldSetContextMenu && setContextMenu();
  atomTray != null && atomTray.setImage(_electron.nativeImage.createFromPath(currentIcon));
}
function launchApplication(applicationId) {
  options.onLaunchApplication(applicationId);
}
function setApplications(newApplications) {
  applications = newApplications.map(application => ({
    type: 'normal',
    label: application.name,
    click: () => launchApplication(application.id)
  }));
  buildContextMenu();
  setContextMenu();
}
function setContextMenu() {
  let menu = null;
  try {
    menu = _electron.Menu.buildFromTemplate(contextMenu);
  } catch (_) {}
  if (atomTray != null) {
    atomTray.setContextMenu(menu);
  }
}
function show() {
  if (atomTray != null) return;
  atomTray = new _electron.Tray(_electron.nativeImage.createFromPath(currentIcon));
  atomTray.setToolTip(_Constants.APP_NAME);
  setContextMenu();
  atomTray.on('click', options.onTrayClicked);
}
function hide() {
  if (atomTray == null) {
    return;
  }
  atomTray.destroy();
  atomTray = null;
}
function displayHowToCloseHint() {
  if (settings.get('trayBalloonShown') != null || atomTray == null) {
    return;
  }
  settings.set('trayBalloonShown', true);
  settings.save();
  atomTray.displayBalloon({
    title: 'Discord',
    content: 'Hi! Discord will run in the background to keep you in touch with your friends.' + ' You can right-click here to quit.'
  });
}