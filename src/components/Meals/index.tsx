import { FlatList, SectionList, SectionListComponent } from "react-native";
import { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

export type MealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isHealthy: boolean;
};


export function Meals() {
  const [meals, setMeals] = useState<MealProps[]>([
    {
      id: '1',
      name: 'X-Tudo',
      date: '18.10.2023',
      description: 'ovo, ervilha, milho, queijo, molho, carne de costela e bacon',
      isHealthy: false,
      time: '21:00'
    },
    {
      id: '2',
      name: 'X-Burger',
      date: '18.10.2023',
      description: 'hamburger, presunto, queijo e batata palha',
      isHealthy: true,
      time: '21:00'
    },
  ]);

  const navigation = useNavigation();

  const handleGoToMealViewPage = (meal: MealProps) => {
    navigation.navigate("ViewMeal", meal);
  }

  const handleGoToAddMealPage = () => {
    navigation.navigate("AddMeal");
  }

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
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item, index }) =>
            <MealList
              key={`${item.id}-${index}`}
              hour={item.time}
              isHealthy={item.isHealthy}
              title={item.name}
              onPress={() => handleGoToMealViewPage(item)}
            />
          }
        />
      </DayList>
    </Container>
  )
}