import { View, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { Styles } from "../../constants/styles";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			<ExpensesList expenses={expenses} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 24,
		backgroundColor: Styles.colors.primary700,
	},
});
