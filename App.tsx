/* eslint-disable import/newline-after-import */
import 'react-native-gesture-handler';
import React, {useCallback, useMemo} from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';
import RootNavigator from './src/navigations';
import store, {persistor} from './src/redux/store';
import {AppDefaultTheme} from './src/config/theme';
import toastConfig from './utils/toast';
SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // const onBeforeLift = async () => {
  //   await init();
  // };

  function ThemedApp() {
    const scheme = useColorScheme();
    const theme = useMemo(() => (scheme === 'light' ? AppDefaultTheme : AppDefaultTheme), [scheme]);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <SafeAreaProvider>
              <NavigationContainer theme={theme} onReady={onLayoutRootView}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <RootNavigator />
                <Toast config={toastConfig} />
              </NavigationContainer>
            </SafeAreaProvider>
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }

  return <ThemedApp />;
}
