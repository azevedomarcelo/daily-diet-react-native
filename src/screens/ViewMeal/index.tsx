import { TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeft,
  PencilSimpleLine,
  Trash,
} from "phosphor-react-native";
import theme from "@theme/index";

import {
  Badge,
  BadgeStatus,
  BadgeText,
  ButtonDeleteMeal,
  ButtonEditMeal,
  CancelButton,
  ConfirmationButton,
  ContainerList,
  Content,
  Form,
  FormField,
  Header,
  SubTitle,
  Text,
  TextButton,
  TextDeleteMeal,
  TextEditMeal,
  TextSecondary,
  Title,
  ViewDialog,
} from "./styles";
import { TMealProps } from "@typings/types";
import { Dialog } from "react-native-simple-dialogs";
import { useState } from "react";
import { useMeal } from "@hooks/useMeal";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function ViewMeal() {
  const route = useRoute();
  const navigation = useNavigation();
  const { getMeals } = useMeal();

  const [openDialogConfirmation, setOpenDialogConfirmation] = useState(false);

  const { id, date, description, isHealthy, name, time } = route.params as TMealProps;
  const badgeText = isHealthy ? "dentro da dieta" : "fora da dieta";

  async function handleDeleteMeal(mealId: string) {
    try {
      const meals = await getMeals()

      const deletedMeal = meals.filter(meal => meal.id !== mealId);

      await AsyncStorage.setItem('@daily-diet:addMeal', JSON.stringify(deletedMeal));

      navigation.goBack();
    } catch (error) {
      console.log(error)
    }
  }

  function handleGoToEditMealPage() {
    navigation.navigate("EditMeal", {
      id,
      date,
      description,
      isHealthy,
      name,
      time
    });
  }

  return (
    <ContainerList isHealthy={isHealthy}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.COLORS.GRAY_200}
          />
        </TouchableOpacity>

        <Title>Refeição</Title>
      </Header>

      <Content
        contentContainerStyle={{
          paddingBottom: 48,
          flexGrow: 1,
        }}
      >
        <Form>
          <View>
            <Text>
              {name}
            </Text>
            <SubTitle>{description}</SubTitle>

            <FormField>
              <TextSecondary>Data e hora</TextSecondary>
              <SubTitle>
                {date} às {time}
              </SubTitle>
            </FormField>

            <Badge>
              <BadgeStatus isHealthy={isHealthy} />
              <BadgeText>{badgeText}</BadgeText>
            </Badge>
          </View>
          <View>
            <ButtonEditMeal
              onPress={handleGoToEditMealPage}
            >
              <PencilSimpleLine
                size={22}
                color={theme.COLORS.WHITE}
                weight={"bold"}
              />
              <TextEditMeal>
                Editar refeição
              </TextEditMeal>
            </ButtonEditMeal>

            <ButtonDeleteMeal onPress={() => setOpenDialogConfirmation(state => !state)}>
              <Trash
                size={22}
                color={theme.COLORS.GRAY_100}
              />
              <TextDeleteMeal>
                Excluir refeição
              </TextDeleteMeal>
            </ButtonDeleteMeal>
          </View>
        </Form>
      </Content>
      <Dialog
        visible={openDialogConfirmation}
        title="Deseja realmente excluir o registro da refeição?"
        onTouchOutside={() => setOpenDialogConfirmation(state => !state)}
      >
        <ViewDialog>
          <CancelButton onPress={() => setOpenDialogConfirmation(state => !state)}>
            <TextButton secondary>
              Cancelar
            </TextButton>
          </CancelButton>

          <ConfirmationButton onPress={() => handleDeleteMeal(id)}>
            <TextButton>
              Sim, excluir
            </TextButton>
          </ConfirmationButton>
        </ViewDialog>
      </Dialog>
    </ContainerList>
  );
}
