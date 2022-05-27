import { View, Text, TextInput, StyleSheet } from "react-native";

import { Styles } from "../../constants/styles";

export default function Input({ label, style, textInputConfig }) {
	const inputStyles = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiLine);
	}

	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={inputStyles} {...textInputConfig} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 8,
	},
	label: {
		fontSize: 12,
		color: Styles.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: Styles.colors.primary100,
		color: Styles.colors.primary700,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
	},
	inputMultiLine: {
		minHeight: 100,
		textAlignVertical: "top",
	},
});
