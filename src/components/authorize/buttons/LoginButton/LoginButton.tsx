import { Pressable } from 'react-native';
import { colors } from 'styles/theme';
import Text from '../../../common/Text/Text';
import loginButtonStyles from './LoginButton.style';

interface Props {
  handlePress: () => void;
  isActive: boolean;
}

const LoginButton = ({ handlePress, isActive }: Props) => {
  return (
    <Pressable
      onPress={handlePress}
      style={{
        ...loginButtonStyles.container,
        backgroundColor: isActive ? colors.main : colors.darkGrey,
      }}
    >
      <Text color={isActive ? 'white' : 'grey'} variant="h4">
        로그인
      </Text>
    </Pressable>
  );
};

export default LoginButton;
