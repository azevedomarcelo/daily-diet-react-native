import { Option, Status, Title } from "./styles";

type TypeMealProps = {
  status?: "success" | "error";
  title: string;
  isSelected?: boolean;
  onPress: () => void;
};

export function TypeMeal({ isSelected, onPress, status, title }: TypeMealProps) {
  return (
    <Option selected={isSelected} status={status} onPress={onPress}>
      <Status status={status} />
      <Title>{title}</Title>
    </Option>
  )
}