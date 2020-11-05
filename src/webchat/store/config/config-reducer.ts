import { Reducer } from "redux";
import { IWebchatConfig } from "../../../common/interfaces/webchat-config";

export type ConfigState = IWebchatConfig;

const getInitialState = (): ConfigState => ({
    URLToken: '',
    active: false,
    settings: {
        agentAvatarUrl: '',
        backgroundImageUrl: '',
        colorScheme: '',
        designTemplate: 1,
        disableBranding: false,
        disableHtmlInput: false,
        disableInputAutofocus: false,
        disableLocalStorage: false,
        disablePersistentHistory: false,
        disableTextInputSanitization: false,
        disableToggleButton: false,
        dynamicImageAspectRatio: false,
        enableConnectionStatusIndicator: true,
        showEngagementMessagesInChat: false,
        enableFileUpload: false,
        enablePersistentMenu: false,
        enableSTT: false,
        enableStrictMessengerSync: false,
        enableTTS: false,
        enableTypingIndicator: false,
        enableUnreadMessageBadge: false,
        enableUnreadMessagePreview: false,
        enableUnreadMessageSound: false,
        enableUnreadMessageTitleIndicator: false,
        engagementMessageText: '',
        engagementMessageDelay: 5000,
        getStartedButtonText: '',
        getStartedPayload: '',
        getStartedText: '',
        headerLogoUrl: '',
        ignoreLineBreaks: false,
        inputPlaceholder: '',
        messageDelay: 1000,
        messageLogoUrl: '',
        persistentMenu: {
            title: '',
            menuItems: []
        },
        startBehavior: 'none',
        STTLanguage: '',
        title: '',
        unreadMessageTitleText: 'New Message',
        unreadMessageTitleTextPlural: 'New Messages',
        userAvatarUrl: '',
        useSessionStorage: false
    }
});

const SET_CONFIG = 'SET_CONFIG';
export const setConfig = (config: ConfigState) => ({
    type: SET_CONFIG as 'SET_CONFIG',
    config
});
export type SetConfigAction = ReturnType<typeof setConfig>;

export const config: Reducer<ConfigState, SetConfigAction> = (state = getInitialState(), action) => {

    switch (action.type) {
        case 'SET_CONFIG': {
            return {
                ...state,
                ...action.config,
                settings: {
                    ...state.settings,
                    ...action.config.settings
                }
            }
        }
    }

    return state;
}
