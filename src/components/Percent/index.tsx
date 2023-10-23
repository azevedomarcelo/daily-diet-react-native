import { useNavigation } from '@react-navigation/native'
import { ArrowButton, ArrowUpToRight, Container, TextDescription, TextPercent } from './styles';
export function Percent() {
  const navigation = useNavigation();

  const handleGoToMealsPercentagePage = () => {
    navigation.navigate("MealsStatistic")
  }
  return (
    <Container>
      <ArrowButton onPress={handleGoToMealsPercentagePage} >
        <TextPercent>
          90,86%
        </TextPercent>

        <ArrowUpToRight />

        <TextDescription>
          das refeições dentro da dieta
        </TextDescription>
      </ArrowButton>
    </Container>
  )
}