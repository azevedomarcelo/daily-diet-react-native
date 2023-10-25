import { TMealProps } from "@typings/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      MealsStatistic: undefined;
      ViewMeal: TMealProps;
      AddMeal: undefined;
      EditMeal: TMealProps;
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