import { View, Text, Pressable } from "react-native";

import { Styles } from "../../constants/styles";

export default function Button({ children, onPress, mode }) {
	return (
		<View>
			<Pressable onPress={onPress}>
				<View>
					<Text>{children}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		padding: 8,
		backgroundColor: Styles.colors.primary500,
	},
});
