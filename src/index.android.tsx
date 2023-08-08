import {Alert as RNAlert} from "react-native";

export const Alert = {
	alert: RNAlert.alert,
	prompt: () => {
		throw new Error("Platform not supported by Alert yet.}");
	}
};
