import AuthorizeFlowButton from 'components/authorize/buttons/AuthorizeFlowButton/AuthorizeFlowButton';
import * as Font from "expo-font";
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { JoinInfo } from 'types/join';
import joinCompleteScreenStyles from './JoinCompleteScreen.style';

interface Props {
  state: JoinInfo;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinCompleteScreen = ({ state, setIsLogin }: Props) => {
  useEffect(() => {
    Font.loadAsync({
      "Pretendard-Bold": require("../../../../assets/fonts/Pretendard-Bold.ttf"),
      "Pretendard-SemiBold": require("../../../../assets/fonts/Pretendard-SemiBold.ttf"),
      "Pretendard-Medium": require("../../../../assets/fonts/Pretendard-Medium.ttf"),
      "Pretendard-Regular": require("../../../../assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Light": require("../../../../assets/fonts/Pretendard-Light.ttf"),
    });
  }, []);
  return (
    <View style={joinCompleteScreenStyles.container}>
      <View style={joinCompleteScreenStyles.titleContainer}>
        <Text style={joinCompleteScreenStyles.title}>
          {`'${state.nickName}'님`}
        </Text>
        <Text style={joinCompleteScreenStyles.title}>
          회원가입을 축하합니다!
        </Text>
      </View>
      <Text style={joinCompleteScreenStyles.myFieldTitle}>나의 관심사는</Text>
      <View style={joinCompleteScreenStyles.myFieldContainer}>
        {state.interestField.map((field) =>
          field ? (
            <Text key={field.value} style={joinCompleteScreenStyles.myField}>
              #{field.label}
            </Text>
          ) : null,
        )}
      </View>
      <AuthorizeFlowButton
        label="시작하기"
        handlePress={() => {
          setIsLogin(true);
        }}
        isActive
      />
    </View>
  );
};

export default JoinCompleteScreen;
