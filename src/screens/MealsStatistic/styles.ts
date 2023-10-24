import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

type ContainerListProps = {
  isHealthy: boolean;
};

export const Content = styled.View`
  position: relative;
  width: 100%;
  background-color: ${({ isHealthy }: ContainerListProps) =>
    isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  align-items: center;
  gap: 8px;
  padding: 32px 24px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 32px;
  top: 32px;
`

export const TitlePercentage = styled.Text`
  font-size: ${theme.FONT_SIZE.XL};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  text-align: center;
`;

export const StatisticContainer = styled.ScrollView`
  border-radius: 20px;
  flex-direction: column;
  padding: 32px 24px;
  background-color: ${theme.COLORS.WHITE};
`;

export const StatisticTitle = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const CardsContent = styled.View`
  align-items: center;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 16px;
  width: 100%;

  background: ${theme.COLORS.GRAY_600};
  margin-top: 8px;
  &:last-child {
    background-color: ${theme.COLORS.GREEN_DARK};
  }
`;

export const CardsNumber = styled.Text`
  font-size: ${theme.FONT_SIZE.LG};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const CardsDescription = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  text-align: center;
`;

export const CardsGroup = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 16px 0;
  border-radius: 8px;
  justify-content: space-between;

  margin-top: 12px;
  margin-top: 8px;
  gap: 12px;
`;

type CardProps = {
  isHealthy: boolean;
}

export const CardsInfo = styled.View<CardProps>`
  align-items: center;
  border-radius: 8px;
  width: 180px;
  padding: 16px;
  background-color: ${({ isHealthy }: ContainerListProps) =>
    isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
