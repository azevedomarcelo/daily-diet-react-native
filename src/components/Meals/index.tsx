import { useCallback, useState } from "react";
import { FlatList, SectionList } from "react-native";
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
import { compareDesc } from "date-fns";

interface MapMeals {
  title: string;
  data: TMealProps[];
}

export function Meals() {
  const navigation = useNavigation();
  const { getMeals } = useMeal();
  const [meals, setMeals] = useState<MapMeals[]>([]);

  const handleGoToMealViewPage = (meal: TMealProps) => {
    navigation.navigate("ViewMeal", meal);
  }

  const handleGoToAddMealPage = () => {
    navigation.navigate("AddMeal");
  }

  const loadMeals = async () => {
    const meals = await getMeals();

    let positive = 0;
    let negative = 0;
    let cont = 0;

    const separatedByDate: { [key: string]: TMealProps[] } = {};

    meals.forEach(obj => {
      const date = obj.date;
      if (!separatedByDate[date]) {
        separatedByDate[date] = [];
      }
      separatedByDate[date].push(obj);
    });

    const sections: MapMeals[] = Object.keys(separatedByDate).map(date => ({
      title: date,
      data: separatedByDate[date],
    }));

    sections.map((section) => {
      section.data.map((item) => {
        item.isHealthy ? positive++ : negative++;
      });
    });

    sections.map((section) => {
      section.data.map((item) => {
        item.isHealthy ? positive++ : negative++;
      });
    });

    const sortedMeals = sections.sort((a, b) => {
      const dateA = new Date(formatDate(a.title));
      const dateB = new Date(formatDate(b.title));

      return compareDesc(dateA, dateB);
    });

    sortedMeals.map((section) => {
      section.data.map((item) => {
        if (item.isHealthy) cont++;
        else cont = 0;
      });
    });

    // setStatistics((prev) => {
    //   return {
    //     ...prev,
    //     percentage: (positive / (positive + negative)) * 100,
    //     sequence: cont,
    //     healthyMealsQuantity: positive,
    //     unhealthyMealsQuantity: negative,
    //     mealsQuantity: positive + negative,
    //   };
    // });

    setMeals(sortedMeals);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, [])
  );

  function formatDate(data: string) {
    return data.substring(0, 10).split("/").reverse().join("-");
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
        <SectionList
          sections={meals}
          renderSectionHeader={({ section: { title } }) => (
            <TextMeals>{title}</TextMeals>
          )}
          showsVerticalScrollIndicator={false}
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