import styled from "styled-components/native";
import { css } from "styled-components";
import theme from "@theme/index";

type ContainerListProps = {
  isHealthy: boolean;
};

export const ContainerList = styled.View`
  flex: 1;

  background-color: ${({ isHealthy }: ContainerListProps) =>
    isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  width: 100%;
  padding: 40px 24px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  ${() => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
  `}
`;

export const Content = styled.ScrollView`
  flex: 1;
  border-radius: 20px;

  flex-direction: column;

  padding: 32px 24px;

  background-color: ${theme.COLORS.WHITE};
`;

export const FormField = styled.View`
  width: 100%;
  flex-shrink: 1;
  margin-top: 32px;
`;

export const FormFieldGroup = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  ${() => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;

export const Text = styled.Text`
  ${() => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
  `}
`;

export const TextSecondary = styled.Text`
  ${() => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;

export const SubTitle = styled.Text`
  margin-top: 8px;
  ${() => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG};
  `}
`;

export const Badge = styled.View`
  margin-top: 24px;
  padding: 8px 16px;
  width: 144px;
  border-radius: 1000px;
  background-color: ${theme.COLORS.GRAY_700};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  margin-left: 8px;
  ${() => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;

export const BadgeStatus = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${({ isHealthy }: ContainerListProps) =>
    isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ButtonEditMeal = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
  
  background-color: ${theme.COLORS.GRAY_200};
  border-radius: 6px;
  
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;

  border-width: 1px;
`;

export const TextEditMeal = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD};
  `;

export const TextDeleteMeal = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD};

`;

export const ButtonDeleteMeal = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
  
  border-radius: 6px;
  
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;

  border-width: 1px;
`;