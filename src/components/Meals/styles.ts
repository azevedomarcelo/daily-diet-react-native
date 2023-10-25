import styled, { css } from "styled-components/native";
import theme from "@theme/index";

export const Container = styled.ScrollView`
  width: 100%;
  margin: 40px;
`;

export const TitleMealContent = styled.View`
  margin-bottom: 8px;
`;

export const TextMeals = styled.Text`
  font-size: ${theme.FONT_SIZE.LG} ;
  color: ${theme.COLORS.GRAY_100};
`;

export const ButtonAddNewMeal = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  padding: 16px 24px;
  margin-bottom: 32px;
  
  border-radius: 8px;

  background: ${theme.COLORS.GRAY_100};
`;

export const TextButton = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD};
`;

export const DayList = styled.View` `;

export const DataText = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG};
`;

export const ContainerMeals = styled.TouchableOpacity`
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${theme.COLORS.GRAY_500};

  padding: 14px 16px 14px 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text`
  ${css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  border-width: 1px;
  border-color: ${theme.COLORS.GRAY_400};
  margin: 0 12px;
`;

export const TitleMeals = styled.Text`
  ${css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

type TypeProps = {
  isHealthy: boolean;
};

export const Type = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background-color: ${({ isHealthy }: TypeProps) =>
    isHealthy ? theme.COLORS.GREEN : theme.COLORS.RED};
`;

export const HeaderSection = styled.Text`
  ${css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top:32px;
`;
