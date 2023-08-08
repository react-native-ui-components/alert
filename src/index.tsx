import {type AlertButton, type AlertType} from "react-native";

//todo use themed modals on web instead of window.alert and window.prompt

const format = (title: string, message?: string) =>
	title + (message ? "\n" + message : "");

const alert = (
	title: string,
	message?: string,
	buttons?: AlertButton[]
	// options?: AlertOptions
) => {
	//todo
	//@ts-ignore
	//eslint-disable-next-line no-alert
	const result: boolean = window.confirm(format(title, message));
	const cancelOption = buttons?.find(({style}) =>
		result ? style !== "cancel" : style === "cancel"
	);

	if (cancelOption) {
		cancelOption.onPress?.();
	}
};

const prompt = (
	title: string,
	message?: string,
	callbackOrButtons?: ((text: string) => void) | AlertButton[],
	_?: AlertType, //type?: AlertType,
	defaultValue?: string
	// keyboardType?: string,
	// options?: AlertOptions
) => {
	//todo
	//@ts-ignore
	//eslint-disable-next-line no-alert
	const result: string = window.prompt(
		format(title, message),
		defaultValue
	);

	if (!Array.isArray(callbackOrButtons)) {
		callbackOrButtons?.(result);
	}
};

export const Alert = {alert, prompt};
