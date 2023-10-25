import { useNavigation } from '@react-navigation/native'
import { ArrowButton, ArrowUpToRight, Container, TextDescription, TextPercent } from './styles';
import { useMeal } from '@hooks/useMeal';
export function Percent() {
  const navigation = useNavigation();
  const { statistics } = useMeal();

  const handleGoToMealsPercentagePage = () => {
    navigation.navigate("MealsStatistic")
  }
  return (
    <Container>
      <ArrowButton
        onPress={handleGoToMealsPercentagePage}
        isHealthy={statistics.percentage > 50}
      >
        <TextPercent>
          {statistics.percentage}%
        </TextPercent>

        <ArrowUpToRight isHealthy={statistics.percentage > 50} />

        <TextDescription>
          das refeições dentro da dieta
        </TextDescription>
      </ArrowButton>
    </Container>
  )
}