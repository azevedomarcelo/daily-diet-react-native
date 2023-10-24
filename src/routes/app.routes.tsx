import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddMeal } from '@screens/AddMeal';
import { Home } from '@screens/Home';
import { MealsStatistic } from '@screens/MealsStatistic';
import { ViewMeal } from '@screens/ViewMeal';

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="MealsStatistic"
        component={MealsStatistic}
      />

      <Screen
        name="ViewMeal"
        component={ViewMeal}
      />

      <Screen
        name="AddMeal"
        component={AddMeal}
      />
    </Navigator>
  )
}
