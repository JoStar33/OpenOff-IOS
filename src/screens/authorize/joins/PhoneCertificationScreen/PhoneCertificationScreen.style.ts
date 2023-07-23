import { Dimensions, StyleSheet } from 'react-native';
import { colors } from 'styles/theme';

const phoneCertificationScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    position: 'relative',
    height: Dimensions.get('window').height - 200
  },
  title: {
    width: 350,
    height: 50,
    marginTop: 20,
    marginBottom: 25,
  },
});

export default phoneCertificationScreenStyles;
