import { useReducer } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { ButtonOpacity, ButtonText, Container, Content, Form, FormField, FormFieldGroup, Header, Input, InputMasked, Label, TextArea, Title } from "./styles";
import { mealReducer } from "@reducers/addMealReducer";
import { TypeMeal } from "@components/Option";
import { useMeal } from "@hooks/useMeal";
import { TMealProps } from "@typings/types";

export function EditMeal() {
  const { COLORS } = useTheme();
  const { goBack, navigate } = useNavigation();
  const { getMeals } = useMeal();
  const route = useRoute();
  const { id, date, description, isHealthy, name, time } = route.params as TMealProps;

  const [state, dispatch] = useReducer(mealReducer, {
    id,
    name,
    description,
    date,
    isHealthy,
    time,
  });

  async function handleSaveUpdates() {
    const meals = await getMeals();

    const findMeal = meals.find(meal => meal.id === id);

    if (findMeal) {
      const updatedMeal = meals.map(meal => {
        if (meal.id === findMeal.id) {
          meal.id = state.id;
          meal.date = state.date;
          meal.description = state.description;
          meal.isHealthy = state.isHealthy;
          meal.name = state.name;
          meal.time = state.time;

          return meal;
        } else return meal;
      });

      await AsyncStorage.setItem('@daily-diet:addMeal', JSON.stringify(updatedMeal));
      navigate("Home");
    }
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={COLORS.GRAY_200}
          />
        </TouchableOpacity>

        <Title>Editar refeição</Title>
      </Header>

      <Content
        contentContainerStyle={{
          paddingBottom: 48,
          flexGrow: 1,
        }}
      >
        <Form>
          <FormField>
            <Label>Nome</Label>
            <Input
              onChangeText={(name: string) => dispatch({ type: "nameChange", value: name })}
              value={state.name}
            />
          </FormField>
          <FormField>
            <Label>Descrição</Label>
            <TextArea
              onChangeText={(description: string) => dispatch({ type: "descriptionChange", value: description })}
              value={state.description}
              multiline={true}
              textAlignVertical={"top"}
            />
          </FormField>
          <FormFieldGroup>
            <FormField>
              <Label>Data</Label>
              <Input
                onChangeText={(date: string) => dispatch({ type: "dateChange", value: date })}
                value={state.date}
              />
            </FormField>
            <FormField hasMarginLeft>
              <Label>Hora</Label>
              <InputMasked
                onChangeText={(time: string) => dispatch({ type: "timeChange", value: time })}
                value={state.time}
                mask={[/[0-2]/, /[0-9]/, ":", /[0-5]/, /[0-9]/]}
              />
            </FormField>
          </FormFieldGroup>
          <FormField>
            <Label>Está dentro da dieta?</Label>
            <FormFieldGroup>
              <FormField>
                <TypeMeal
                  onPress={() => dispatch({ type: 'isHealthyChange', value: true })}
                  title="Sim"
                  status="success"
                  isSelected={state.isHealthy === true}
                />
              </FormField>
              <FormField hasMarginLeft>
                <TypeMeal
                  onPress={() => dispatch({ type: 'isHealthyChange', value: false })}
                  title="Não"
                  status="error"
                  isSelected={state.isHealthy === false}
                />
              </FormField>
            </FormFieldGroup>
          </FormField>
        </Form>

        <ButtonOpacity
          onPress={async () => {
            handleSaveUpdates()
          }}
        >
          <ButtonText>
            Salvar alterações
          </ButtonText>
        </ButtonOpacity>
      </Content>
    </Container>
  )
}