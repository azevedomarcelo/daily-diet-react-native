import { Header } from '@components/Header';

import { Container, } from './styles';
import { Percent } from '@components/Percent';
import { Meals } from '@components/Meals';
import { ScrollView } from 'react-native';

export function Home() {
  return (
    <ScrollView >
      <Container>
        <Header />
        <Percent />
        <Meals />
      </Container>
    </ScrollView>
  );
}