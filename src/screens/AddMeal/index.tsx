import { useReducer } from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonOpacity, ButtonText, Container, Content, Form, FormField, FormFieldGroup, Header, Input, InputMasked, Label, TextArea, Title } from "./styles";
import { mealReducer } from "@reducers/addMealReducer";
import { useTheme } from "styled-components";
import { TypeMeal } from "@components/Option";

export function AddMeal() {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();
  const [state, dispatch] = useReducer(mealReducer, {
    id: '',
    name: '',
    description: '',
    date: '',
    hour: '',
    isHealthy: true,
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
              // mask={Masks.DATE_DDMMYYYY}
              />
            </FormField>
            <FormField hasMarginLeft>
              <Label>Hora</Label>
              {/* <Input
              /> */}
              <InputMasked
                onChangeText={(hour: string) => dispatch({ type: "hourChange", value: hour })}
                value={state.hour}
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
          onPress={() => dispatch({ type: "addTask", meal: state })}
        >
          <ButtonText>
            Cadastrar refeição
          </ButtonText>
        </ButtonOpacity>
      </Content>
    </Container>
  )
}