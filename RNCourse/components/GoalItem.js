import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)} 
                android_ripple={{color: '#dddddd'}}
                style={({pressed}) => pressed && styles.pressedItem}>
            
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>   
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#5c0acc',
        borderRadius: 6,
        padding: 8,
        margin: 8,
    },
    goalText: {
        color: '#cccccc',
    },
    pressedItem: {
        opacity: 0.5,
    }
});

