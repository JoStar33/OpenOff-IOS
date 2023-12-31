import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenCover from 'components/authorize/covers/ScreenCover/ScreenCover';
import BaseInfoInput from 'components/authorize/inputs/BaseInfoInput/BaseInfoInput';
import GenderInput from 'components/authorize/inputs/GenderInput/GenderInput';
import { UserInfoStatus } from 'constants/join';
import { AuthorizeMenu } from 'constants/menu';
import * as Font from "expo-font";
import { Dispatch, useEffect, useState } from 'react';
import { View } from 'react-native';
import { AuthStackParamList } from 'types/apps/menu';
import { Action } from 'types/join';
import { validateBirthday, validateName } from 'utils/validate';
import userInfoScreenStyles from './UserInfoScreen.style';

interface Props {
  dispatch: Dispatch<Action>;
}

const UserInfoScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('2000-00-00');
  const [gender, setGender] = useState<'남' | '여'>('남');
  useEffect(() => {
    Font.loadAsync({
      "Pretendard-Bold": require("../../../../assets/fonts/Pretendard-Bold.ttf"),
      "Pretendard-SemiBold": require("../../../../assets/fonts/Pretendard-SemiBold.ttf"),
      "Pretendard-Medium": require("../../../../assets/fonts/Pretendard-Medium.ttf"),
      "Pretendard-Regular": require("../../../../assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Light": require("../../../../assets/fonts/Pretendard-Light.ttf"),
    });
  }, []);
  const isActive =
    !validateName(name) && !validateBirthday(birth) && name.length > 1;
  return (
    <ScreenCover
      titleElements={['오픈오프 이용을 위해', '정보를 입력해주세요.']}
      authorizeButton={{
        handlePress: () => {
          dispatch({ type: UserInfoStatus.SET_NAME, name });
          dispatch({ type: UserInfoStatus.SET_GENDER, gender });
          dispatch({ type: UserInfoStatus.SET_BIRTH, birth });
          navigation.navigate(AuthorizeMenu.InterestField);
        },
        label: '확인',
        isActive,
      }}
    >
      <BaseInfoInput
        label="이름"
        value={name}
        width={350}
        setValue={setName}
        validation={validateName}
      />
      <View style={userInfoScreenStyles.detailUserInfo}>
        <BaseInfoInput
          label="생일"
          value={birth}
          width={165}
          setValue={setBirth}
          validation={validateBirthday}
          focusMode
        />
        <GenderInput value={gender} setValue={setGender} />
      </View>
    </ScreenCover>
  );
};

export default UserInfoScreen;
