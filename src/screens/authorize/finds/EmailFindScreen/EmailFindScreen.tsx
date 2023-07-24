import ScreenCover from 'components/authorize/covers/ScreenCover/ScreenCover';
import PhoneCertificationForm from 'components/authorize/forms/PhoneCertificationForm/PhoneCertificationForm';
import * as Font from "expo-font";
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { validateAuthNumber, validatePhoneNumber } from 'utils/validate';
import emailFindScreenStyles from './EmailFindScreen.style';

const EmailFindScreen = () => {
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [authnumber, setAuthnumber] = useState<string>('');
  const [isAuthorize, setIsAuthorize] = useState<boolean>(false);
  const [retry, setRetry] = useState<boolean>(false);
  const handleCertification = () => {
    setRetry(true);
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
    setIsAuthorize(true);
  };
  const isActive =
    !validatePhoneNumber(phonenumber) &&
    phonenumber.length > 1 &&
    !validateAuthNumber(authnumber) &&
    authnumber.length > 1 &&
    retry;
  return (
    <View style={emailFindScreenStyles.container}>
      {!isAuthorize ? (
        <ScreenCover
          authorizeButton={{
            handlePress: handleAuthorizeFlow,
            label: '다음',
            isActive,
          }}
        >
          <PhoneCertificationForm
            retry={retry}
            phonenumber={phonenumber}
            setPhonenumber={setPhonenumber}
            authnumber={authnumber}
            setAuthnumber={setAuthnumber}
            handleCertification={handleCertification}
          />
        </ScreenCover>
      ) : (
        <View style={emailFindScreenStyles.authorizeContainer}>
          <Image
            style={emailFindScreenStyles.checkImage}
            source={require('../../../../assets/images/check.png')}
          />
        </View>
      )}
    </View>
  );
};

export default EmailFindScreen;
