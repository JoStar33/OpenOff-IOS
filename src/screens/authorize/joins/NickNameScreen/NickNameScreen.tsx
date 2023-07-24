import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenCover from 'components/authorize/covers/ScreenCover/ScreenCover';
import EssentialInput from 'components/authorize/inputs/EssentialInput/EssentialInput';
import { UserInfoStatus } from 'constants/join';
import { AuthorizeMenu } from 'constants/menu';
import * as Font from "expo-font";
import { Dispatch, useEffect, useState } from 'react';
import { AuthStackParamList } from 'types/apps/menu';
import { Action } from 'types/join';
import { validateNickname } from 'utils/validate';

interface Props {
  dispatch: Dispatch<Action>;
}

const NickNameScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [nickname, setNickname] = useState<string>('');
  const isActive = !validateNickname(nickname) && nickname.length > 1;
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
      titleElements={['오픈오프에서 사용할', '닉네임을 입력해주세요.']}
      authorizeButton={{
        handlePress: () => {
          dispatch({ type: UserInfoStatus.SET_NICK_NAME, nickname });
          navigation.navigate(AuthorizeMenu.UserInfo);
        },
        label: '확인',
        isActive,
      }}
    >
      <EssentialInput
        validation={validateNickname}
        label="닉네임"
        maxLength={5}
        value={nickname}
        setValue={setNickname}
        type="nickname"
      />
    </ScreenCover>
  );
};

export default NickNameScreen;
