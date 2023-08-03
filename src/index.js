import {Platform, Alert as PrimitiveAlert} from "react-native";

//todo use themed modals on web instead of window.alert and window.prompt

const format = (title, message) => title + (message ? "\n" + message : "");

const alertPolyfill = (title, message, buttons, options) => {
	const result = window.confirm(format(title, message));
	const cancelOption = buttons?.find(({style}) =>
		result ? style != "cancel" : style == "cancel"
	);

	if (cancelOption) {
		cancelOption.onPress?.();
	}
};

const promptPolyfill = (
	title,
	message,
	callbackOrButtons,
	type,
	defaultValue,
	keyboardType
) => {
	const result = window.prompt(format(title, message), defaultValue) || "";

	if (!Array.isArray(callbackOrButtons)) {
		callbackOrButtons?.(result);
	}
};

export const Alert = Platform.select({
	ios: PrimitiveAlert,
	android: {
		alert: PrimitiveAlert.alert,
		prompt: () => {
			//todo implement prompt on android
			throw new Error("Platform not supported by Alert.prompt yet.");
		}
	},
	default: {
		alert: alertPolyfill,
		prompt: promptPolyfill
	}
});
