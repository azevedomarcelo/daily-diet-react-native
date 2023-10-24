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
  ContainerList,
  Content,
  Form,
  FormField,
  Header,
  SubTitle,
  Text,
  TextDeleteMeal,
  TextEditMeal,
  TextSecondary,
  Title,
} from "./styles";
import { TMealProps } from "@typings/types";

type MealLayoutProps = {
  item: TMealProps;
  onGoToEditMeal?: () => void;
  onDeleteMeal?: (id: string, date: string) => Promise<void>;
};

export function ViewMeal({
  onGoToEditMeal,
  item,
  onDeleteMeal,
}: MealLayoutProps) {
  const route = useRoute();
  const navigation = useNavigation()
  const { date, description, isHealthy, name, time } = route.params as TMealProps;
  const badgeText = isHealthy ? "dentro da dieta" : "fora da dieta";

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
              onPress={onGoToEditMeal}
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

            <ButtonDeleteMeal>
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
    </ContainerList>
  );
}
