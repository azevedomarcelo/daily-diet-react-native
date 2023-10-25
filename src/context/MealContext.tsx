import { ReactNode, createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TMealProps } from "@typings/types";

type MealContextProps = {
  children: ReactNode;
}

type Props = {
  storeMeal: (meal: TMealProps) => Promise<void>;
  getMeals: () => Promise<TMealProps[]>;
  statistics: StatisticProps;
}

type StatisticProps = {
  percentage: number
  sequence: number
  healthyMealsQuantity: number
  unhealthyMealsQuantity: number
  mealsQuantity: number
}

export const MealContext = createContext({} as Props);

export function MealContextProvider({ children }: MealContextProps) {

  const [statistics, setStatistics] = useState<StatisticProps>({
    healthyMealsQuantity: 0,
    mealsQuantity: 0,
    percentage: 0,
    sequence: 0,
    unhealthyMealsQuantity: 0,
  });

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

    getStatistics(response)

    return response;
  }

  async function getStatistics(meals: TMealProps[]): Promise<void> {
    let positive = 0;
    let negative = 0;
    let cont = 0;

    meals.map((item) => {
      item.isHealthy ? positive++ : negative++;
    });

    meals.map((item) => {
      if (item.isHealthy) cont++;
      else cont = 0;
    });

    const percentage = Number(((positive / (positive + negative)) * 100).toFixed(2))

    setStatistics({
      percentage,
      sequence: cont,
      healthyMealsQuantity: positive,
      unhealthyMealsQuantity: negative,
      mealsQuantity: positive + negative,

    })
  }

  return (
    <MealContext.Provider value={{
      storeMeal,
      getMeals,
      statistics,
    }}>
      {children}
    </MealContext.Provider>
  )
}