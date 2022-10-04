import { View, Text, StyleSheet } from "react-native";
import { Styles } from "../../constants/styles";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Styles.colors.primary700,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: Styles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: Styles.colors.primary200,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Styles.colors.primary200,
  },
});
