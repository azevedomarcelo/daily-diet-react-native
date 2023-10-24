import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { BackButton, CardsContent, CardsDescription, CardsGroup, CardsInfo, CardsNumber, Container, Content, Description, StatisticContainer, StatisticTitle, TitlePercentage } from "./styles";

export function MealsStatistic() {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Content>
        <BackButton onPress={goBack}>
          <ArrowLeft />
        </BackButton>

        <TitlePercentage>
          98.86%
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
            22
          </CardsNumber>
          <CardsDescription>
            melhor sequência de pratos dentro da dieta
          </CardsDescription>
        </CardsContent>

        <CardsContent>
          <CardsNumber>
            109
          </CardsNumber>
          <CardsDescription>
            refeições registradas
          </CardsDescription>
        </CardsContent>

        <CardsGroup>
          <CardsInfo isHealthy={true}>
            <CardsNumber>
              99
            </CardsNumber>
            <CardsDescription>
              refeições dentro da dieta
            </CardsDescription>
          </CardsInfo>

          <CardsInfo isHealthy={false}>
            <CardsNumber>
              10
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