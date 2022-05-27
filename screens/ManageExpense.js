import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { ExpensesContext } from "../store/expenses-context";
import { Styles } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpense({ route, navigation }) {
	const expensesCtx = useContext(ExpensesContext);
	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditing]);

	function deleteExpenseHandler() {
		expensesCtx.deleteExpense(editedExpenseId);
		navigation.goBack();
	}

	function confirmHandler(expenseData) {
		if (isEditing) {
			expensesCtx.updateExpense(editedExpenseId, expenseData);
		} else {
			expensesCtx.addExpense(expenseData);
		}
		navigation.goBack();
	}

	function cancelHandler() {
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				onSubmit={confirmHandler}
				onCancel={cancelHandler}
				isEditing={isEditing}
			/>

			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						color={Styles.colors.error500}
						size={36}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: Styles.colors.primary800,
	},

	deleteContainer: {
		marginTop: 16,
		padding: 8,
		borderTopWidth: 2,
		borderTopColor: Styles.colors.primary200,
		alignItems: "center",
	},
});
