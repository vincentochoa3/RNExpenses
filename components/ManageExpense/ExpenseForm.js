import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "../UI/Button";
import Input from "./Input";

export default function ExpenseForm({ onCancel, isEditing, onSubmit }) {
	const [inputValues, setInputValue] = useState({
		amount: "",
		date: "",
		description: "",
	});

	function inputChangedHandler(inputIdentifier, enteredValue) {
		setInputValue((curInputValues) => {
			return {
				...curInputValues,
				[inputIdentifier]: enteredValue,
			};
		});
	}

	function submitHandler() {
		const expenseData = {
			amount: +inputValues.amount,
			date: new Date(inputValues.date),
			description: inputValues.description,
		};
		onSubmit(expenseData);
	}

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: inputChangedHandler.bind(this, "amount"),
						value: inputValues.amount,
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					textInputConfig={{
						placeholder: "YYYY/MM/DD",
						maxLength: 10,
						onChangeText: inputChangedHandler.bind(this, "date"),
						value: inputValues.date,
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					onChangeText: inputChangedHandler.bind(this, "description"),
					value: inputValues.description,
				}}
			/>
			<View style={styles.buttons}>
				<Button mode="flat" onPress={onCancel} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={submitHandler} style={styles.button}>
					{isEditing ? "Update" : "Add"}
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		// marginTop: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginVertical: 24,
		textAlign: "center",
	},
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowInput: {
		flex: 1,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
});
