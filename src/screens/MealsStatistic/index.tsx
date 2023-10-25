import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { BackButton, CardsContent, CardsDescription, CardsGroup, CardsInfo, CardsNumber, Container, Content, Description, StatisticContainer, StatisticTitle, TitlePercentage } from "./styles";
import { useMeal } from "@hooks/useMeal";

export function MealsStatistic() {
  const { goBack } = useNavigation();
  const { statistics } = useMeal();
  return (
    <Container>
      <Content isHealthy={statistics.percentage > 50}>
        <BackButton onPress={goBack}>
          <ArrowLeft />
        </BackButton>

        <TitlePercentage>
          {statistics.percentage}%
        </TitlePercentage>
        <Description>
          das refeições dentro da dieta
        </Description>
      </Content>

      <StatisticContainer contentContainerStyle={{
        paddingBottom: 48,
        flexGrow: 1,
        alignItems: 'center',
      }}>
        <StatisticTitle>
          Estatísticas gerais
        </StatisticTitle>

        <CardsContent>
          <CardsNumber>
            {statistics.sequence}
          </CardsNumber>
          <CardsDescription>
            melhor sequência de pratos dentro da dieta
          </CardsDescription>
        </CardsContent>

        <CardsContent>
          <CardsNumber>
            {statistics.mealsQuantity}
          </CardsNumber>
          <CardsDescription>
            refeições registradas
          </CardsDescription>
        </CardsContent>

        <CardsGroup>
          <CardsInfo isHealthy={true}>
            <CardsNumber>
              {statistics.healthyMealsQuantity}
            </CardsNumber>
            <CardsDescription>
              refeições dentro da dieta
            </CardsDescription>
          </CardsInfo>

          <CardsInfo isHealthy={false}>
            <CardsNumber>
              {statistics.unhealthyMealsQuantity}
            </CardsNumber>
            <CardsDescription>
              refeições fora da dieta
            </CardsDescription>
          </CardsInfo>
        </CardsGroup>
      </StatisticContainer>
    </Container >
  )
}