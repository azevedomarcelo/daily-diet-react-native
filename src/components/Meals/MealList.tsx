import { Meal } from "src/@types/navigation";
import { ContainerMeals, Divider, Hour, InfoContainer, TitleMeals, Type } from "./styles";

type MealProps = {
  isHealthy: boolean;
  hour: string;
  title: string;
  onPress: () => void;
};

export function MealList({ title, hour, isHealthy, onPress }: MealProps) {

  return (
    <ContainerMeals onPress={onPress}>
      <InfoContainer>
        <Hour>{hour}</Hour>
        <Divider />
        <TitleMeals>{title}</TitleMeals>
      </InfoContainer>
      <Type isHealthy={isHealthy} />
    </ContainerMeals>
  );
}
