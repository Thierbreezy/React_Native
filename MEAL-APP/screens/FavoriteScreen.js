//import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import MealsList from '../components/MealsList/MealsList';
//import { FavoritesContext } from '../store/context/favorite-context';
import { MEALS } from '../data/dummy-data';
function FavoritesScreen() {

 //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoritemealIds = useSelector(state=>state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    //favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  // Si aucun favori n'est enregistré, on affiche un message d'information
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );}
    // On réutilise le composant de liste pour afficher les favoris
    return (
    <View style={styles.listContainer}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#3f2f25', 
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f2f25',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});