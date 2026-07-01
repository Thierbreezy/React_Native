import { FlatList, Text, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";


function renderExpenseItem(itemData) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.description}>{itemData.item.description}</Text>
            <Text style={styles.sum}>{itemData.item.amount} Fcfa</Text>
        </View>
    );
}

function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}   // très important !
            renderItem={renderExpenseItem}
        />
    );
}               

export default ExpensesList;

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: GlobalStyles.colors.primary50,
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
    },
    description: {
        fontSize: 16,
        color: GlobalStyles.colors.primary800,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
})