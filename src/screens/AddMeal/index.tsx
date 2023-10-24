import { useReducer } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { ArrowLeft } from "phosphor-react-native";
import { ButtonOpacity, ButtonText, Container, Content, Form, FormField, FormFieldGroup, Header, Input, InputMasked, Label, TextArea, Title } from "./styles";
import { mealReducer } from "@reducers/addMealReducer";
import { TypeMeal } from "@components/Option";
import { useMeal } from "@hooks/useMeal";

export function AddMeal() {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();
  const { storeMeal } = useMeal();
  const [state, dispatch] = useReducer(mealReducer, {
    id: '',
    name: '',
    description: '',
    date: '',
    isHealthy: true,
    time: '',
  });

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

        <Title>Nova refeição</Title>
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
            await storeMeal(state);
            dispatch({ type: "addTask", meal: state });
            goBack();
          }}
        >
          <ButtonText>
            Cadastrar refeição
          </ButtonText>
        </ButtonOpacity>
      </Content>
    </Container>
  )
}