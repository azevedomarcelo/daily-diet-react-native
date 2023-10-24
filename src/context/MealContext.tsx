import { ReactNode, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TMealProps } from "@typings/types";

type MealContextProps = {
  children: ReactNode;
}

type Props = {
  storeMeal: (meal: TMealProps) => Promise<void>;
  getMeals: () => Promise<TMealProps[]>;
}

export const MealContext = createContext({} as Props);

export function MealContextProvider({ children }: MealContextProps) {

  async function storeMeal(meal: TMealProps): Promise<void> {
    try {
      const existingMeals = await AsyncStorage.getItem('@daily-diet:addMeal');
      let meals: TMealProps[] = existingMeals ? JSON.parse(existingMeals) : [];

      meal.id = (Math.floor(Math.random() * 16)).toString(16);

      meals.push(meal);

      await AsyncStorage.setItem('@daily-diet:addMeal', JSON.stringify(meals));
    } catch (error) {
      console.error('Error storing meal:', error);
    }
  }

  async function getMeals(): Promise<TMealProps[]> {
    const response: TMealProps[] = await AsyncStorage
      .getItem('@daily-diet:addMeal')
      .then(response => response ? JSON.parse(response) : []);

    return response;
  }

  return (
    <MealContext.Provider value={{
      storeMeal,
      getMeals,
    }}>
      {children}
    </MealContext.Provider>
  )
}