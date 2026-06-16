import { useState } from 'react';
import { StyleSheet,
         View, 
         Button, 
         TextInput, 
         Modal, 
         Image
        } from 'react-native';



function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
    
    return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/Image/goal.png')} />
        <TextInput
           style={styles.textInput} 
           placeholder="Your course goal" 
           onChangeText={goalInputHandler} 
           value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>   
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
          </View>
          <View style={styles.button}> 
          <Button title="Cancel"  onPress={props.onCancel} color="#f31282"/>
          </View>  
        </View>  
      </View>
    </Modal>);
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    backgroundColor: '#e4d0ff',
    borderBottomColor:  '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
    width: '100%',
    padding: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 150,
    marginHorizontal: 8,
  },
});
