import { ActivityIndicator, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import themes from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { MealContextProvider } from '@context/MealContext';
import { Routes } from '@routes/index';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'


export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        style="auto"
        translucent
        backgroundColor='#000'
      />
      <MealContextProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {fontsLoaded
            ? <Routes />
            : <ActivityIndicator color={themes.COLORS.GRAY_500} style={{ flex: 1 }} />
          }
        </SafeAreaView>
      </MealContextProvider>
    </ThemeProvider >
  );
}