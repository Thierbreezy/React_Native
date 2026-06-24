import 'react-native-gesture-handler';
import { useLayoutEffect } from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import IconButton from '../components/IconButton';


function MealsDetailScreen ({ route, navigation }){
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler(){

    };

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerRight: ()=> {
            return (<IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
       },
    });  
    },[navigation, headerButtonPressHandler])

    return <ScrollView>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title} >{selectedMeal.title}</Text>
        <MealDetails 
         duration={selectedMeal.duration} 
         affordability={selectedMeal.affordability}
         complexity={selectedMeal.complexity}
         textStyle={styles.detailText}
         /> 
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
             <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
    </ScrollView>
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
    marginBottom: 32
  },
    image: {
        width: '100%',
        height: 350
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color:'white'
  },
   detailText:{
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});