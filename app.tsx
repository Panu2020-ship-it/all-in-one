import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TextScreen from './screens/TextScreen';
import ImageScreen from './screens/ImageScreen';
import PDFScreen from './screens/PDFScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Text" component={TextScreen} />
          <Tab.Screen name="Image" component={ImageScreen} />
          <Tab.Screen name="PDF" component={PDFScreen} />
          <Tab.Screen name="Contact" component={require('./screens/ContactScreen').default} />
          <Tab.Screen name="Premium" component={require('./screens/PremiumScreen').default} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
