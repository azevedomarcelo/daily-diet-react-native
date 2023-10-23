
import { Container, Logo, UserIcon } from "./styles";
import logoImg from '@assets/daily-diet-logo.png';
import { Text } from "react-native";
import { useMeal } from "@hooks/useMeal";


export function Header() {
  const { name } = useMeal();
  return (
    <Container>
      <Logo source={logoImg} />
      {/* <UserIcon source={{ uri: `https://github.com/azevedomarcelo.png` }} /> */}
      <UserIcon source={{ uri: `https://this-person-does-not-exist.com/img/avatar-11a7cb0fb6316a3ff3a1edff9d163b62.jpg` }} />
      <Text>
        {name}
      </Text>
    </Container>
  )
}