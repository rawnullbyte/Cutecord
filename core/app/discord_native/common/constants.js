"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OVERLAY_WINDOW_KEY = exports.IPCEvents = void 0;
exports.getDiscordIPCEvent = getDiscordIPCEvent;
const discordPrefixRegex = /^DISCORD_/;
function getDiscordIPCEvent(ev) {
  return discordPrefixRegex.test(ev) ? ev : `DISCORD_${ev}`;
}
const OVERLAY_WINDOW_KEY = 'DISCORD_OutOfProcessOverlay';
exports.OVERLAY_WINDOW_KEY = OVERLAY_WINDOW_KEY;
let IPCEvents = function (IPCEvents) {
  IPCEvents["ACCESSIBILITY_GET_ENABLED"] = "DISCORD_ACCESSIBILITY_GET_ENABLED";
  IPCEvents["APP_BADGE_SET"] = "DISCORD_APP_BADGE_SET";
  IPCEvents["APP_GET_RELEASE_CHANNEL_SYNC"] = "DISCORD_APP_GET_RELEASE_CHANNEL_SYNC";
  IPCEvents["APP_GET_HOST_VERSION_SYNC"] = "DISCORD_APP_GET_HOST_VERSION_SYNC";
  IPCEvents["APP_GET_ANALYTICS_EVENTS"] = "DISCORD_APP_GET_ANALYTICS_EVENTS";
  IPCEvents["APP_GET_BUILD_NUMBER"] = "DISCORD_APP_GET_BUILD_NUMBER";
  IPCEvents["APP_GET_ARCH"] = "DISCORD_APP_GET_ARCH";
  IPCEvents["APP_GET_MODULE_VERSIONS"] = "DISCORD_APP_GET_MODULE_VERSIONS";
  IPCEvents["APP_GET_PATH"] = "DISCORD_APP_GET_PATH";
  IPCEvents["APP_SET_BADGE_COUNT"] = "DISCORD_APP_SET_BADGE_COUNT";
  IPCEvents["APP_DOCK_SET_BADGE"] = "DISCORD_APP_DOCK_SET_BADGE";
  IPCEvents["APP_DOCK_BOUNCE"] = "DISCORD_APP_DOCK_BOUNCE";
  IPCEvents["APP_DOCK_CANCEL_BOUNCE"] = "DISCORD_APP_DOCK_CANCEL_BOUNCE";
  IPCEvents["APP_PUSH_ANALYTICS"] = "DISCORD_APP_PUSH_ANALYTICS";
  IPCEvents["APP_RELAUNCH"] = "DISCORD_APP_RELAUNCH";
  IPCEvents["APP_GET_DEFAULT_DOUBLE_CLICK_ACTION"] = "DISCORD_APP_GET_DEFAULT_DOUBLE_CLICK_ACTION";
  IPCEvents["APP_PAUSE_FRAME_EVICTOR"] = "DISCORD_APP_PAUSE_FRAME_EVICTOR";
  IPCEvents["APP_UNPAUSE_FRAME_EVICTOR"] = "DISCORD_APP_UNPAUSE_FRAME_EVICTOR";
  IPCEvents["CLIPBOARD_COPY"] = "DISCORD_CLIPBOARD_COPY";
  IPCEvents["CLIPBOARD_CUT"] = "DISCORD_CLIPBOARD_CUT";
  IPCEvents["CLIPBOARD_PASTE"] = "DISCORD_CLIPBOARD_PASTE";
  IPCEvents["LOAD_CLIP"] = "DISCORD_LOAD_CLIP";
  IPCEvents["LOAD_CLIPS_DIRECTORY"] = "DISCORD_LOAD_CLIPS_DIRECTORY";
  IPCEvents["DELETE_CLIP"] = "DISCORD_DELETE_CLIP";
  IPCEvents["CHECK_FOR_UPDATES"] = "DISCORD_CHECK_FOR_UPDATES";
  IPCEvents["DESKTOP_CAPTURER_GET_SOURCES"] = "DISCORD_DESKTOP_CAPTURER_GET_SOURCES";
  IPCEvents["CONSTANTS_GET"] = "DISCORD_CONSTANTS_GET";
  IPCEvents["CRASH_REPORTER_UPDATE_METADATA"] = "DISCORD_CRASH_REPORTER_UPDATE_METADATA";
  IPCEvents["FEATURES_GET_BROWSER_FEATURES"] = "DISCORD_FEATURES_GET_BROWSER_FEATURES";
  IPCEvents["FILE_MANAGER_GET_MODULE_PATH"] = "DISCORD_FILE_MANAGER_GET_MODULE_PATH";
  IPCEvents["FILE_MANAGER_GET_MODULE_DATA_PATH_SYNC"] = "DISCORD_FILE_MANAGER_GET_MODULE_DATA_PATH_SYNC";
  IPCEvents["FILE_MANAGER_GET_MODULE_LOG_PATH"] = "DISCORD_FILE_MANAGER_GET_MODULE_LOG_PATH_SYNC";
  IPCEvents["FILE_MANAGER_GET_MODULE_LOG_PATH_SYNC"] = "DISCORD_FILE_MANAGER_GET_MODULE_LOG_PATH_SYNC";
  IPCEvents["FILE_MANAGER_SHOW_SAVE_DIALOG"] = "DISCORD_FILE_MANAGER_SHOW_SAVE_DIALOG";
  IPCEvents["FILE_MANAGER_SHOW_OPEN_DIALOG"] = "DISCORD_FILE_MANAGER_SHOW_OPEN_DIALOG";
  IPCEvents["FILE_MANAGER_SHOW_ITEM_IN_FOLDER"] = "DISCORD_FILE_MANAGER_SHOW_ITEM_IN_FOLDER";
  IPCEvents["GPU_SETTINGS_SET_ENABLE_HWACCEL"] = "DISCORD_GPU_SETTINGS_SET_ENABLE_HWACCEL";
  IPCEvents["GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC"] = "DISCORD_GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC";
  IPCEvents["GPU_SETTINGS_SET_CHROMIUM_SWITCHES"] = "DISCORD_GPU_SETTINGS_SET_CHROMIUM_SWITCHES";
  IPCEvents["HARDWARE_GET_DISPLAY_COUNT"] = "DISCORD_HARDWARE_GET_DISPLAY_COUNT";
  IPCEvents["NATIVE_MODULES_GET_PATHS"] = "DISCORD_NATIVE_MODULES_GET_PATHS";
  IPCEvents["NATIVE_MODULES_INSTALL"] = "DISCORD_NATIVE_MODULES_INSTALL";
  IPCEvents["NATIVE_MODULES_FINISH_UPDATER_BOOTSTRAP"] = "DISCORD_NATIVE_MODULES_FINISH_UPDATER_BOOTSTRAP";
  IPCEvents["NATIVE_MODULES_GET_HAS_NEW_UPDATER"] = "DISCORD_NATIVE_MODULES_GET_HAS_NEW_UPDATER";
  IPCEvents["NOTIFICATION_CLOSE"] = "DISCORD_NOTIFICATION_CLOSE";
  IPCEvents["NOTIFICATION_SHOW"] = "DISCORD_NOTIFICATION_SHOW";
  IPCEvents["NOTIFICATIONS_CLEAR"] = "DISCORD_NOTIFICATIONS_CLEAR";
  IPCEvents["REQUEST_OPEN_EXTERNAL_URL"] = "DISCORD_REQUEST_OPEN_EXTERNAL_URL";
  IPCEvents["OPEN_EXTERNAL_URL"] = "DISCORD_OPEN_EXTERNAL_URL";
  IPCEvents["GLOBAL_OVERLAY_OPEN_WINDOW"] = "DISCORD_GLOBAL_OVERLAY_OPEN_WINDOW";
  IPCEvents["POWER_MONITOR_RESUME"] = "DISCORD_POWER_MONITOR_RESUME";
  IPCEvents["POWER_MONITOR_SUSPEND"] = "DISCORD_POWER_MONITOR_SUSPEND";
  IPCEvents["POWER_MONITOR_LOCK_SCREEN"] = "DISCORD_POWER_MONITOR_LOCK_SCREEN";
  IPCEvents["POWER_MONITOR_UNLOCK_SCREEN"] = "DISCORD_POWER_MONITOR_UNLOCK_SCREEN";
  IPCEvents["POWER_MONITOR_GET_SYSTEM_IDLE_TIME"] = "DISCORD_POWER_MONITOR_GET_SYSTEM_IDLE_TIME";
  IPCEvents["POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP"] = "DISCORD_POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP";
  IPCEvents["POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP"] = "DISCORD_POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP";
  IPCEvents["POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP"] = "DISCORD_POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP";
  IPCEvents["PROCESS_UTILS_GET_CPU_USAGE"] = "DISCORD_PROCESS_UTILS_GET_CPU_USAGE";
  IPCEvents["PROCESS_UTILS_FLUSH_DNS_CACHE"] = "DISCORD_PROCESS_UTILS_FLUSH_DNS_CACHE";
  IPCEvents["PROCESS_UTILS_FLUSH_COOKIES"] = "DISCORD_PROCESS_UTILS_FLUSH_COOKIES";
  IPCEvents["PROCESS_UTILS_FLUSH_STORAGE_DATA"] = "DISCORD_PROCESS_UTILS_FLUSH_STORAGE_DATA";
  IPCEvents["PROCESS_UTILS_GET_MAIN_ARGV_SYNC"] = "DISCORD_PROCESS_UTILS_GET_MAIN_ARGV_SYNC";
  IPCEvents["PROCESS_UTILS_GET_LAST_CRASH"] = "DISCORD_PROCESS_UTILS_GET_LAST_CRASH";
  IPCEvents["PROCESS_UTILS_SET_CRASH_INFORMATION"] = "DISCORD_PROCESS_UTILS_SET_CRASH_INFORMATION";
  IPCEvents["PROCESS_UTILS_SET_MEMORY_INFORMATION"] = "PROCESS_UTILS_SET_MEMORY_INFORMATION";
  IPCEvents["PROCESS_UTILS_GET_SYSTEM_INFO"] = "DISCORD_PROCESS_UTILS_GET_SYSTEM_INFO";
  IPCEvents["QUIT_AND_INSTALL"] = "DISCORD_QUIT_AND_INSTALL";
  IPCEvents["SAFE_STORAGE_DECRYPT_STRING"] = "DISCORD_SAFE_STORAGE_DECRYPT_STRING";
  IPCEvents["SAFE_STORAGE_ENCRYPT_STRING"] = "DISCORD_SAFE_STORAGE_ENCRYPT_STRING";
  IPCEvents["SAFE_STORAGE_IS_ENCRYPTION_AVAILABLE"] = "DISCORD_SAFE_STORAGE_IS_ENCRYPTION_AVAILABLE";
  IPCEvents["SETTINGS_GET"] = "DISCORD_SETTINGS_GET";
  IPCEvents["SETTINGS_SET"] = "DISCORD_SETTINGS_SET";
  IPCEvents["SETTINGS_GET_SYNC"] = "DISCORD_SETTINGS_GET_SYNC";
  IPCEvents["SETTINGS_UPDATE_BACKGROUND_COLOR"] = "DISCORD_SETTINGS_UPDATE_BACKGROUND_COLOR";
  IPCEvents["SPELLCHECK_RESULT"] = "DISCORD_SPELLCHECK_RESULT";
  IPCEvents["SPELLCHECK_REPLACE_MISSPELLING"] = "DISCORD_SPELLCHECK_REPLACE_MISSPELLING";
  IPCEvents["SPELLCHECK_GET_AVAILABLE_DICTIONARIES"] = "DISCORD_SPELLCHECK_GET_AVAILABLE_DICTIONARIES";
  IPCEvents["SPELLCHECK_SET_LOCALE"] = "DISCORD_SPELLCHECK_SET_LOCALE";
  IPCEvents["SPELLCHECK_SET_LEARNED_WORDS"] = "DISCORD_SPELLCHECK_SET_LEARNED_WORDS";
  IPCEvents["SYSTEM_TRAY_SET_ICON"] = "DISCORD_SYSTEM_TRAY_SET_ICON";
  IPCEvents["SYSTEM_TRAY_SET_APPLICATIONS"] = "DISCORD_SYSTEM_TRAY_SET_APPLICATIONS";
  IPCEvents["THUMBAR_BUTTONS_UPDATE"] = "DISCORD_THUMBAR_BUTTONS_UPDATE";
  IPCEvents["THUMBAR_BUTTONS_CLICKED"] = "DISCORD_THUMBAR_BUTTONS_CLICKED";
  IPCEvents["TOGGLE_MINIMIZE_TO_TRAY"] = "DISCORD_TOGGLE_MINIMIZE_TO_TRAY";
  IPCEvents["TOGGLE_OPEN_ON_STARTUP"] = "DISCORD_TOGGLE_OPEN_ON_STARTUP";
  IPCEvents["TOGGLE_START_MINIMIZED"] = "DISCORD_TOGGLE_START_MINIMIZED";
  IPCEvents["UPDATE_OPEN_ON_STARTUP"] = "DISCORD_UPDATE_OPEN_ON_STARTUP";
  IPCEvents["UNHANDLED_JS_EXCEPTION"] = "DISCORD_UNHANDLED_JS_EXCEPTION";
  IPCEvents["UPDATER_HISTORY_QUERY_AND_TRUNCATE"] = "DISCORD_UPDATER_HISTORY_QUERY_AND_TRUNCATE";
  IPCEvents["UPDATED_QUOTES"] = "DISCORD_UPDATED_QUOTES";
  IPCEvents["USER_DATA_CACHE_DELETE"] = "DISCORD_USER_DATA_CACHE_DELETE";
  IPCEvents["USER_DATA_CACHE_GET"] = "DISCORD_USER_DATA_CACHE_GET";
  IPCEvents["USER_DATA_CACHE_SAVE"] = "DISCORD_USER_DATA_CACHE_SAVE";
  IPCEvents["WINDOW_BLUR"] = "DISCORD_WINDOW_BLUR";
  IPCEvents["WINDOW_CLOSE"] = "DISCORD_WINDOW_CLOSE";
  IPCEvents["WINDOW_FOCUS"] = "DISCORD_WINDOW_FOCUS";
  IPCEvents["WINDOW_MAXIMIZE"] = "DISCORD_WINDOW_MAXIMIZE";
  IPCEvents["WINDOW_MINIMIZE"] = "DISCORD_WINDOW_MINIMIZE";
  IPCEvents["WINDOW_SET_MINIMUM_SIZE"] = "DISCORD_WINDOW_SET_MINIMUM_SIZE";
  IPCEvents["WINDOW_RESTORE"] = "DISCORD_WINDOW_RESTORE";
  IPCEvents["WEBAUTHN_REGISTER_MAC"] = "DISCORD_WEBAUTHN_REGISTER_MAC";
  IPCEvents["WEBAUTHN_AUTHENTICATE_MAC"] = "DISCORD_WEBAUTHN_AUTHENTICATE_MAC";
  IPCEvents["WINDOW_FLASH_FRAME"] = "DISCORD_WINDOW_FLASH_FRAME";
  IPCEvents["WINDOW_TOGGLE_FULLSCREEN"] = "DISCORD_WINDOW_TOGGLE_FULLSCREEN";
  IPCEvents["WINDOW_SET_BACKGROUND_THROTTLING"] = "DISCORD_WINDOW_SET_BACKGROUND_THROTTLING";
  IPCEvents["WINDOW_SET_PROGRESS_BAR"] = "DISCORD_WINDOW_SET_PROGRESS_BAR";
  IPCEvents["WINDOW_IS_ALWAYS_ON_TOP"] = "DISCORD_WINDOW_IS_ALWAYS_ON_TOP";
  IPCEvents["WINDOW_SET_ALWAYS_ON_TOP"] = "DISCORD_WINDOW_SET_ALWAYS_ON_TOP";
  IPCEvents["WINDOW_DEVTOOLS_OPENED"] = "DISCORD_WINDOW_DEVTOOLS_OPENED";
  IPCEvents["WINDOW_DEVTOOLS_CLOSED"] = "DISCORD_WINDOW_DEVTOOLS_CLOSED";
  IPCEvents["WINDOW_SET_CONTENT_PROTCTION"] = "DISCORD_WINDOW_SET_CONTENT_PROTCTION";
  IPCEvents["WINDOW_GET_NATIVE_HANDLE"] = "DISCORD_WINDOW_GET_NATIVE_HANDLE";
  IPCEvents["WINDOW_GET_MEDIA_SOURCE_ID"] = "DISCORD_WINDOW_GET_MEDIA_SOURCE_ID";
  IPCEvents["GET_MOUSE_COORDINATES"] = "DISCORD_GET_MOUSE_COORDINATES";
  return IPCEvents;
}({});
exports.IPCEvents = IPCEvents;