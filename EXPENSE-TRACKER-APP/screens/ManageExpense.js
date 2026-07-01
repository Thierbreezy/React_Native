import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function ManageExpense() {
    return (
        <ExpensesOutput 
            expenses={expenses}
            totalAmount={totalAmount}
            expensesPeriod="Last 7 days"
        />
    );
}

export default ManageExpense;