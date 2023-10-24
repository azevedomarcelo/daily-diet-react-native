import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";

import {
  ButtonAddNewMeal,
  Container,
  DayList,
  TextButton,
  TextMeals,
  TitleMealContent,
} from "./styles";
import { MealList } from "./MealList";

import { useMeal } from "@hooks/useMeal";
import { TMealProps } from "@typings/types";


export function Meals() {
  const navigation = useNavigation();
  const { getMeals } = useMeal();
  const [meals, setMeals] = useState<TMealProps[]>([]);

  const handleGoToMealViewPage = (meal: TMealProps) => {
    navigation.navigate("ViewMeal", meal);
  }

  const handleGoToAddMealPage = () => {
    navigation.navigate("AddMeal");
  }

  const loadMeals = async () => {
    await getMeals()
      .then(response => setMeals(response))
      .catch(error => console.log(error));
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, [])
  );

  return (
    <Container>
      <TitleMealContent>
        <TextMeals>
          Refeições
        </TextMeals>
      </TitleMealContent>

      <ButtonAddNewMeal onPress={handleGoToAddMealPage}>
        <Plus size={24} color="#fff" />
        <TextButton>
          Nova Refeição
        </TextButton>
      </ButtonAddNewMeal>

      <DayList>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <MealList
              time={item.time}
              isHealthy={item.isHealthy}
              title={item.name}
              onPress={() => handleGoToMealViewPage(item)}
            />
          }
          ListEmptyComponent={<TextMeals>Nenhuma refeição cadastrada</TextMeals>}
        />
      </DayList>
    </Container>
  )
}