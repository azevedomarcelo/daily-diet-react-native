import theme from "@theme/index";
import { css } from "styled-components";
import styled from "styled-components/native";

type StatusProps = {
  status: "success" | "error";
};

type OptionProps = {
  status: "success" | "error";
  selected: boolean;
};

export const Option = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.COLORS.GRAY_700};

  padding: 16px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;

  ${({ selected, status }: OptionProps) =>
    selected &&
    css`
      background-color: ${status === "success"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      };

      border-width: 1px;
      border-color: ${status === "success"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
      };
    `};
`;

export const Status = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;

  background-color: ${({ status }: StatusProps) =>
    status === "success"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK
  };
`;

export const Title = styled.Text`
  ${css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;
