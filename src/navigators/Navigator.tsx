import { createStackNavigator } from '@react-navigation/stack';
import { StackMenu } from 'constants/menu';
import DatePickScreen from 'screens/eventMap/DatePickScreen/DatePickScreen';
import FieldEventMapScreen from 'screens/eventMap/FieldEventMapScreen/FieldEventMapScreen';
import textStyles from 'styles/textStyles';
import { colors } from 'styles/theme';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={StackMenu.BottomTabNavigator}>
      <Stack.Screen
        name={StackMenu.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitle: '날짜 선택',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            ...textStyles.h3,
            color: colors.white,
          },
        }}
        name={StackMenu.DatePick}
        component={DatePickScreen}
      />
      <Stack.Screen
        name={StackMenu.FieldEventMap}
        component={FieldEventMapScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            ...textStyles.h3,
            color: colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
