import { AlertButton, AlertOptions, AlertType } from "react-native";

export declare const Alert: {
	alert: (
		title: string,
		message?: string,
		buttons?: AlertButton[],
		options?: AlertOptions,
	) => void,
	prompt: (
		title: string,
		message?: string,
		callbackOrButtons?: ((text: string) => void) | AlertButton[],
		type?: AlertType,
		defaultValue?: string,
		keyboardType?: string,
		options?: AlertOptions,
	) => void
}