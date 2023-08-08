import * as React from "react";
import {TouchableOpacity, Text, SafeAreaView} from "react-native";
import {Alert} from "@react-native-ui-components/alert";

export default function App() {
	return (
		<SafeAreaView>
			<TouchableOpacity onPress={() => Alert.alert("Hey there")}>
				<Text>Click me</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
