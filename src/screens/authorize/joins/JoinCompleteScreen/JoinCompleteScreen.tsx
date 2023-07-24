import ScreenCover from 'components/authorize/covers/ScreenCover/ScreenCover';
import Text from 'components/common/Text/Text';
import * as Font from "expo-font";
import React, { useEffect } from 'react';
import { View } from 'react-native';
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
    <ScreenCover
      authorizeButton={{
        handlePress: () => {
          setIsLogin(true);
        },
        label: '시작하기',
        isActive: true,
      }}
      titleElements={[`'${state.nickname}'님`, '회원가입을 축하합니다!']}
    >
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
    </ScreenCover>
  );
};

export default JoinCompleteScreen;
