export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      MealsStatistic: undefined;
      ViewMeal: Meal;
      AddMeal: undefined;
    }
  }
}

export type StatisticsParamType = {
  statistics: {
    percentage: number;
    sequence: number;
    mealsQuantity: number;
    healthyMealsQuantity: number;
    unhealthyMealsQuantity: number;
  };
};

export type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isHealthy: boolean;
};