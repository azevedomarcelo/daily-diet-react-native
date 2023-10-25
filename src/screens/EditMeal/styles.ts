import theme from "@theme/index";
import MaskInput from "react-native-mask-input";
import styled, { css } from "styled-components/native";

type FormFieldProps = {
  hasMarginLeft?: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_500};
`;

export const Header = styled.View`
  width: 100%;
  padding: 40px 24px;

  background-color: ${theme.COLORS.GRAY_500};

  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  ${css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
  `}
`;

export const Content = styled.ScrollView`
  flex: 1;
  border-radius: 20px;

  padding: 32px 24px;

  background-color: ${theme.COLORS.WHITE};
`;

export const FormField = styled.View`
  width: 100%;
  flex-shrink: 1;
  margin-bottom: 24px;

  ${({ hasMarginLeft }: FormFieldProps) =>
    hasMarginLeft &&
    css`
      margin-left: 24px;
    `}
`;

export const FormFieldGroup = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  ${css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;

export const InputMasked = styled(MaskInput)`
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${theme.COLORS.GRAY_500};
  color: ${theme.COLORS.GRAY_100};

  padding: 14px;
  margin-top: 4px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${theme.COLORS.GRAY_500};
  color: ${theme.COLORS.GRAY_100};

  padding: 14px;
  margin-top: 4px;
`;

export const TextArea = styled(InputMasked)`
  height: 120px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
  
  background-color: ${theme.COLORS.GRAY_200};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-width: 1px;
`;

export const ButtonText = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD};
`;