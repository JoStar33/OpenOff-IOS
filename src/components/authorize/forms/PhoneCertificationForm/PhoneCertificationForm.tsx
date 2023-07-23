import AuthorizeFlowButton from "components/authorize/buttons/AuthorizeFlowButton/AuthorizeFlowButton";
import PhoneAuthButton from "components/authorize/buttons/PhoneAuthButton/PhoneAuthButton";
import EssentialInput from "components/authorize/inputs/EssentialInput/EssentialInput";
import TimerText from "components/authorize/texts/TimerText/TimerText";
import { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { validateAuthNumber, validatePhoneNumber } from "utils/validate";

interface Trigger {
  active: boolean;
  reactive: boolean;
}

interface Props {
  phonenumber: string;
  setPhonenumber: Dispatch<SetStateAction<string>>;
  authnumber: string;
  setAuthnumber: Dispatch<SetStateAction<string>>;
  handleCertification: () => void;
  handleAuthorizeFlow: () => void;
}

const PhoneCertificationForm = ({
  handleCertification,
  handleAuthorizeFlow,
  phonenumber,
  setPhonenumber,
  authnumber,
  setAuthnumber,
}: Props) => {
  const [retry, setRetry] = useState<boolean>(false);
  const [timerTrigger, setTimerTrigger] = useState<Trigger>({
    active: false,
    reactive: false,
  });
  const isActive =
    !validatePhoneNumber(phonenumber) &&
    phonenumber.length > 1 &&
    !validateAuthNumber(authnumber) &&
    authnumber.length > 1;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <EssentialInput
          validation={validatePhoneNumber}
          label="휴대폰 번호"
          keyboardType="number-pad"
          value={phonenumber}
          setValue={setPhonenumber}
          type="phonenumber"
        >
          <PhoneAuthButton
            label={retry ? "재발송" : "인증받기"}
            active={
              !(validatePhoneNumber(phonenumber) || phonenumber.length < 2)
            }
            handlePress={() => {
              setRetry(true);
              if (!timerTrigger.active) {
                setTimerTrigger({ ...timerTrigger, active: true });
                return;
              }
              setTimerTrigger({
                ...timerTrigger,
                reactive: !timerTrigger.reactive,
              });
              handleCertification();
            }}
          />
        </EssentialInput>
        <EssentialInput
          validation={validateAuthNumber}
          label="인증번호"
          keyboardType="number-pad"
          value={authnumber}
          setValue={setAuthnumber}
          type="authnumber"
        >
          {timerTrigger.active && (
            <TimerText
              timerTrigger={timerTrigger}
              setTimerTrigger={setTimerTrigger}
            />
          )}
        </EssentialInput>
      </ScrollView>
      <AuthorizeFlowButton
        handlePress={() => {
          setTimerTrigger(() => {
            return { reactive: false, active: false };
          });
          handleAuthorizeFlow();
        }}
        label="확인"
        isActive={isActive}
      />
    </KeyboardAvoidingView>
  );
};

export default PhoneCertificationForm;
