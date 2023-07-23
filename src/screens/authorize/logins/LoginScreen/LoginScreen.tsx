import JoinButton from 'components/authorize/buttons/JoinButton/JoinButton';
import LoginButton from 'components/authorize/buttons/LoginButton/LoginButton';
import SocialLoginButtonGroup from 'components/authorize/groups/SocialLoginButtonGroup/SocialLoginButtonGroup';
import LoginInput from 'components/authorize/inputs/LoginInput/LoginInput';
import * as Font from "expo-font";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { validateEmail, validatePassword } from 'utils/validate';
import Text from '../../../../components/common/Text/Text';
import loginScreenStyles from './LoginScreen.style';
interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginScreen = ({ setIsLogin }: Props) => {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isActive =
    !validateEmail(emailAddress) &&
    !validatePassword(password) &&
    emailAddress.length >= 1 &&
    password.length >= 1;
  const kakaoLogin = () => {
  };
  const handleCommonLogin = () => {
    if (!isActive) return;
    setIsLogin(true);
  };
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
    <View style={loginScreenStyles.container}>
      <Image
        style={loginScreenStyles.logo}
        source={require('../../../../assets/images/logo.png')}
      />
      <LoginInput
        label="이메일"
        value={emailAddress}
        type="emailAddress"
        validation={validateEmail}
        setValue={setEmailAddress}
      />
      <LoginInput
        label="비밀번호"
        value={password}
        type="password"
        setValue={setPassword}
        validation={validatePassword}
      />
      <LoginButton isActive={isActive} handlePress={handleCommonLogin} />
      <Text variant="caption" style={loginScreenStyles.middleText}>
        또는
      </Text>
      <SocialLoginButtonGroup
        kakaoLogin={kakaoLogin}
        naverLogin={() => {
          return false;
        }}
        googleLogin={() => {
          return false;
        }}
        appleLogin={() => {
          return false;
        }}
      />
      <View style={loginScreenStyles.joinAndFindContainer}>
        <JoinButton />
      </View>
    </View>
  );
};

export default LoginScreen;
