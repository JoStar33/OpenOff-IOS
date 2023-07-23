import Text from 'components/common/Text/Text';
import { View } from 'react-native';
import errorTextStyles from './ErrorText.style';

interface Props {
  validation: (value: string) => string | undefined;
  value: string;
  width?: number;
}

const ErrorText = ({ validation, value, width = 350 }: Props) => {
  const calcFontSize = () => {
    const validate = validation(value)
    if (!validate)
      return 12;
    return validate.length > 29 ? 10 : 12
  };
  return (
    <View>
      {validation(value) ? (
        <Text
          color="error"
          variant="caption"
          style={{ ...errorTextStyles.text, width, fontSize: calcFontSize() }}
        >
          {validation(value)}
        </Text>
      ) : null}
    </View>
  );
};

export default ErrorText;
