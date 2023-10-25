import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { Meals } from '@components/Meals';

import { Container, } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Percent />
      <Meals />
    </Container>
  );
}