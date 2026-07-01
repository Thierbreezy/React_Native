import 'react-native-gesture-handler';
import {  useLayoutEffect } from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
//import { FavoritesContext } from '../store/context/favorite-context';
import { addFavorite, removeFavorite } from '../store/redux/favorite'


function MealsDetailScreen ({ route, navigation }){

  //  const favoriteMealCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state)=> state.favoriteMeals.ids);

    const dispatch = useDispatch();
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealsIds.includes(mealId);

    function changeFavoriteStatusHandler(){
      if (mealIsFavorite) {
        //favoriteMealCtx.removeFavorite(mealId);
        dispatch(removeFavorite({ id: mealId }))
      }
      else{
        //favoriteMealCtx.addFavorite(mealId);
        dispatch(addFavorite({ id: mealId }))
      }
    };

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerRight: ()=> {
            return (<IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
       },
    });  
    },[navigation, changeFavoriteStatusHandler])

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