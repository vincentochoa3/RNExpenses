import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses() {
	const expensesCtx = useContext(ExpensesContext);

	const recentExpenses = expensesCtx.expenses.filter((expense) => {
		const today = new Date();
		const weekAgo = getDateMinusDays(today, 7);

		return expense.date >= weekAgo && expense.date <= today;
	});

	return (
		<ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
	);
}
