import theme from "@theme/index";
import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

type PercentProps = {
  isHealthy: boolean;
}

export const ArrowButton = styled.TouchableOpacity`
  position: relative;
  border-radius: 8px;
  background: ${({ isHealthy }: PercentProps) =>
    isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  };
  width: 100%;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;

export const TextPercent = styled.Text`
  font-size: ${theme.FONT_SIZE.XL};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const ArrowUpToRight = styled(ArrowUpRight)`
  top: 16px;
  right: 16px;
  position: absolute;
  color: ${({ isHealthy }: PercentProps) =>
    isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`;

export const TextDescription = styled.Text`
  font-size: ${theme.FONT_SIZE.LG};
`;