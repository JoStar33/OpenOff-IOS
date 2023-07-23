import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import UserInfoStatus from 'constants/join';
import { AuthorizeMenu } from 'constants/menu';
import * as Font from "expo-font";
import React, { Reducer, useEffect, useReducer } from 'react';
import { Platform } from 'react-native';
import EmailPasswordFindScreen from 'screens/authorize/finds/EmailPasswordFindScreen/EmailPasswordFindScreen';
import AgreeToTermScreen from 'screens/authorize/joins/AgreeToTermScreen/AgreeToTermScreen';
import EmailPasswordScreen from 'screens/authorize/joins/EmailPasswordScreen/EmailPasswordScreen';
import InterestFieldScreen from 'screens/authorize/joins/InterestFieldScreen/InterestFieldScreen';
import JoinCompleteScreen from 'screens/authorize/joins/JoinCompleteScreen/JoinCompleteScreen';
import NickNameScreen from 'screens/authorize/joins/NickNameScreen/NickNameScreen';
import PhoneCertificationScreen from 'screens/authorize/joins/PhoneCertificationScreen/PhoneCertificationScreen';
import UserInfoScreen from 'screens/authorize/joins/UserInfoScreen/UserInfoScreen';
import LoginScreen from 'screens/authorize/logins/LoginScreen/LoginScreen';
import textStyles from 'styles/textStyles';
import { colors } from 'styles/theme';
import { Action, JoinInfo } from 'types/join';

const Stack = createStackNavigator();

interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const userInfoReducer = (state: JoinInfo, action: Action): JoinInfo => {
  switch (action.type) {
    case UserInfoStatus.SET_NAME:
      return { ...state, name: action.name };
    case UserInfoStatus.SET_BIRTH:
      return { ...state, birth: action.birth };
    case UserInfoStatus.SET_AGREE_TO_TERM:
      return { ...state, agreeToTerm: action.term };
    case UserInfoStatus.SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.phoneNumber };
    case UserInfoStatus.SET_GENDER:
      return { ...state, gender: action.gender };
    case UserInfoStatus.SET_NICK_NAME:
      return { ...state, nickName: action.nickName };
    case UserInfoStatus.SET_EMAIL_ADDRESS_PASSWORD:
      return {
        ...state,
        emailAddress: action.emailPassword.email,
        password: action.emailPassword.password,
      };
    case UserInfoStatus.SET_INTEREST_FIELD:
      return { ...state, interestField: action.interestField };
    default:
      return state;
  }
};

const AuthorizeNavigator = ({ setIsLogin }: Props) => {
  const initialState = {
    name: '',
    birth: '',
    agreeToTerm: '',
    phoneNumber: '',
    nickName: '',
    gender: '',
    emailAddress: '',
    password: '',
    interestField: [],
  };
  const [state, dispatch] = useReducer<Reducer<JoinInfo, Action>>(
    userInfoReducer,
    initialState,
  );
  useEffect(() => {
    Font.loadAsync({
      "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.ttf"),
      "Pretendard-SemiBold": require("../assets/fonts/Pretendard-SemiBold.ttf"),
      "Pretendard-Medium": require("../assets/fonts/Pretendard-Medium.ttf"),
      "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Light": require("../assets/fonts/Pretendard-Light.ttf"),
    });
  }, []);
  const authorizeScreenOption = {
    ...TransitionPresets.SlideFromRightIOS,
    cardStyle: {
      backgroundColor: colors.background,
    },
    headerStyle: {
      ...Platform.select({
        ios: {
          shadowColor: colors.background,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
        },
        android: {
          elevation: 0,
        },
      }),
      backgroundColor: colors.background,
    },
    headerTintColor: colors.white,
  };
  return (
    <Stack.Navigator
      initialRouteName={AuthorizeMenu.Login}
      screenOptions={authorizeScreenOption}
    >
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.Login}
      >
        {() => <LoginScreen setIsLogin={setIsLogin} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.EmailPassword}
      >
        {() => <EmailPasswordScreen dispatch={dispatch} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.AgreeToTerm}
      >
        {() => <AgreeToTermScreen dispatch={dispatch} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.PhoneCertification}
      >
        {() => <PhoneCertificationScreen dispatch={dispatch} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.NickName}
      >
        {() => <NickNameScreen dispatch={dispatch} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.UserInfo}
      >
        {() => <UserInfoScreen dispatch={dispatch} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.InterestField}
      >
        {() => <InterestFieldScreen dispatch={dispatch} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name={AuthorizeMenu.JoinComplete}
      >
        {() => <JoinCompleteScreen state={state} setIsLogin={setIsLogin} />}
      </Stack.Screen>
      <Stack.Screen
        name={AuthorizeMenu.EmailPasswordFind}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
            ...Platform.select({
              ios: {
                shadowColor: colors.background,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.2,
              },
              android: {
                elevation: 0,
              },
            }),
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            ...textStyles.h3,
            color: colors.white,
          },
        }}
      >
        {() => <EmailPasswordFindScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthorizeNavigator;
