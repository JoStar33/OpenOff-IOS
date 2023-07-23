import { NavigationProp, useNavigation } from '@react-navigation/native';
import AuthorizeFlowButton from 'components/authorize/buttons/AuthorizeFlowButton/AuthorizeFlowButton';
import EssentialInput from 'components/authorize/inputs/EssentialInput/EssentialInput';
import Text from 'components/common/Text/Text';
import UserInfoStatus from 'constants/join';
import { AuthorizeMenu } from 'constants/menu';
import * as Font from "expo-font";
import { Dispatch, useEffect, useState } from 'react';
import { View } from 'react-native';
import { AuthStackParamList } from 'types/apps/menu';
import { Action } from 'types/join';
import { validateNickName } from 'utils/validate';
import nickNameScreenStyles from './NickNameScreen.style';

interface Props {
  dispatch: Dispatch<Action>;
}

const NickNameScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [nickName, setNickname] = useState<string>('');
  const isActive = !validateNickName(nickName) && nickName.length > 1;
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
    <View style={nickNameScreenStyles.container}>
      <View style={nickNameScreenStyles.titleContainer}>
        <Text variant="h1" style={nickNameScreenStyles.title}>
          오픈오프에서 사용할
        </Text>
        <Text variant="h1" style={nickNameScreenStyles.title}>
          닉네임을 입력해주세요.
        </Text>
      </View>
      <EssentialInput
        validation={validateNickName}
        label="닉네임"
        maxLength={5}
        value={nickName}
        setValue={setNickname}
        type="nickname"
      />
      <AuthorizeFlowButton
        handlePress={() => {
          dispatch({ type: UserInfoStatus.SET_NICK_NAME, nickName });
          navigation.navigate(AuthorizeMenu.UserInfo);
        }}
        label="확인"
        isActive={isActive}
      />
    </View>
  );
};

export default NickNameScreen;
