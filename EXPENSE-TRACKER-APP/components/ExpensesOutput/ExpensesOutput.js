import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
        { id: '1', description: "Courses", amount: 45.50, date: new Date('2026-06-19') },
        { id: '2', description: "Essence", amount: 65.00, date: new Date('2025-06-20') },
        { id: '3', description: "Restaurant", amount: 32.75, date: new Date('2027-06-21') },
        { id: '4', description: "Santé", amount: 14.45, date: new Date('2026-06-21') },
        { id: '5', description: "Shopping", amount: 18.59, date: new Date('2027-05-10') },
    ];

function ExpensesOutput({expenses, totalAmount, expensesPeriod}) {

    return <View style={styles.container}>
        <ExpensesSummary 
            periodName={expensesPeriod}
            expenses={DUMMY_EXPENSES}
            />
        <ExpensesList  
            expenses={DUMMY_EXPENSES}
        />
    </View>
    
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
});
                   