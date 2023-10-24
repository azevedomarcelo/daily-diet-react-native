import { ContainerMeals, Divider, Time, InfoContainer, TitleMeals, Type } from "./styles";

type MealProps = {
  isHealthy: boolean;
  time: string;
  title: string;
  onPress: () => void;
};

export function MealList({ title, time, isHealthy, onPress }: MealProps) {
  return (
    <ContainerMeals onPress={onPress}>
      <InfoContainer>
        <Time>{time}</Time>
        <Divider />
        <TitleMeals>{title}</TitleMeals>
      </InfoContainer>
      <Type isHealthy={isHealthy} />
    </ContainerMeals>
  );
}
