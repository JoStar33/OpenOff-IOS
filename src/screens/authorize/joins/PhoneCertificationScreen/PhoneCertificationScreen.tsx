import { NavigationProp, useNavigation } from '@react-navigation/native';
import PhoneCertificationForm from 'components/authorize/forms/PhoneCertificationForm/PhoneCertificationForm';
import Text from 'components/common/Text/Text';
import UserInfoStatus from 'constants/join';
import { AuthorizeMenu } from 'constants/menu';
import * as Font from "expo-font";
import { Dispatch, useEffect, useState } from 'react';
import { View } from 'react-native';
import { AuthStackParamList } from 'types/apps/menu';
import { Action } from 'types/join';
import phoneCertificationScreenStyles from './PhoneCertificationScreen.style';

interface Props {
  dispatch: Dispatch<Action>;
}

const PhoneCertificationScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [authnumber, setAuthnumber] = useState<string>('');
  const handleCertification = () => {
    console.log(phonenumber);
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
  const handleAuthorizeFlow = () => {
    dispatch({
      type: UserInfoStatus.SET_PHONE_NUMBER,
      phoneNumber: phonenumber,
    });
    navigation.navigate(AuthorizeMenu.NickName);
  };
  return (
    <View style={phoneCertificationScreenStyles.container}>
      <Text
        variant="h1"
        color="white"
        style={phoneCertificationScreenStyles.title}
      >
        휴대폰 인증을 해주세요.
      </Text>
      <PhoneCertificationForm
        handleCertification={handleCertification}
        handleAuthorizeFlow={handleAuthorizeFlow}
        phonenumber={phonenumber}
        setPhonenumber={setPhonenumber}
        authnumber={authnumber}
        setAuthnumber={setAuthnumber}
      />
    </View>
  );
};

export default PhoneCertificationScreen;
