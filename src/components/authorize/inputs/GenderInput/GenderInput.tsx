import ColorButton from 'components/authorize/buttons/ColorButton/ColorButton';
import { GenderType } from 'constants/join';
import { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { colors } from 'styles/theme';
import { Gender } from 'types/join';
import Text from '../../../common/Text/Text';
import genderInputStyles from './GenderInput.style';

interface Props {
  value: Gender;
  setValue: Dispatch<SetStateAction<Gender>>;
}

const GenderInput = ({ value, setValue }: Props) => {
  const computedGenderAction = (compareGender: Gender) => {
    return {
      handlePress:
        value === compareGender
          ? () => {
              return false;
            }
          : () => setValue(compareGender),
      backgroundColor: value === compareGender ? colors.main : 'transparent',
      borderColor: value === compareGender ? 'transparent' : colors.main,
      color:
        value === compareGender
          ? ('white' as keyof typeof colors)
          : ('main' as keyof typeof colors),
    };
  };
  return (
    <View style={genderInputStyles.container}>
      <Text variant="h4" color="white" style={genderInputStyles.title}>
        성별
      </Text>
      <View style={genderInputStyles.genderButtonContainer}>
        <ColorButton
          label={GenderType.MAN}
          color={computedGenderAction(GenderType.MAN).color}
          marginRight={10}
          borderColor={computedGenderAction(GenderType.MAN).borderColor}
          backgroundColor={computedGenderAction(GenderType.MAN).backgroundColor}
          handleClick={computedGenderAction(GenderType.MAN).handlePress}
        />
        <ColorButton
          label={GenderType.WOMAN}
          color={computedGenderAction(GenderType.WOMAN).color}
          marginRight={10}
          borderColor={computedGenderAction(GenderType.WOMAN).borderColor}
          backgroundColor={
            computedGenderAction(GenderType.WOMAN).backgroundColor
          }
          handleClick={computedGenderAction(GenderType.WOMAN).handlePress}
        />
      </View>
    </View>
  );
};

export default GenderInput;
