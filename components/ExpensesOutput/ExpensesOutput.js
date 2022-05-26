import { View, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { Styles } from "../../constants/styles";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2021/12/19"),
	},
	{
		id: "e2",
		description: "A pair of pants",
		amount: 89.29,
		date: new Date("2022/01/05"),
	},
	{
		id: "e3",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2022/05/25"),
	},
	{
		id: "e4",
		description: "Bananas",
		amount: 5.99,
		date: new Date("2021/12/05"),
	},
	{
		id: "e5",
		description: "Book",
		amount: 11.99,
		date: new Date("2022-02-19"),
	},
	{
		id: "e6",
		description: "Another Book",
		amount: 8.99,
		date: new Date("2022/05/25"),
	},
	{
		id: "e7",
		description: "A pair of pants",
		amount: 89.29,
		date: new Date("2022/01/05"),
	},
	{
		id: "e8",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2022/05/25"),
	},
	{
		id: "e9",
		description: "Bananas",
		amount: 5.99,
		date: new Date("2021/12/05"),
	},
	{
		id: "e10",
		description: "Book",
		amount: 11.99,
		date: new Date("2022/02/19"),
	},
	{
		id: "e11",
		description: "Another Book",
		amount: 8.99,
		date: new Date("2022/05/25"),
	},
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
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
