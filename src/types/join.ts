import UserInfoStatus from 'constants/join';
import { Field } from './apps/group';

interface EmailPassword {
  email: string;
  password: string;
}

type Action =
  | { type: UserInfoStatus.SET_NAME; name: string }
  | { type: UserInfoStatus.SET_BIRTH; birth: string }
  | {
      type: UserInfoStatus.SET_EMAIL_ADDRESS_PASSWORD;
      emailPassword: EmailPassword;
    }
  | { type: UserInfoStatus.SET_GENDER; gender: '남' | '여' }
  | { type: UserInfoStatus.SET_INTEREST_FIELD; interestField: Field[] }
  | { type: UserInfoStatus.SET_AGREE_TO_TERM; term: 'Y' | 'N' }
  | { type: UserInfoStatus.SET_NICK_NAME; nickName: string }
  | { type: UserInfoStatus.SET_PHONE_NUMBER; phoneNumber: string };
interface JoinInfo {
  name: string;
  birth: string;
  agreeToTerm: string;
  phoneNumber: string;
  gender: string;
  nickName: string;
  emailAddress: string;
  password: string;
  interestField: Field[];
}

export type { Action, JoinInfo };
