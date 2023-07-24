import { StyleSheet } from 'react-native';
import { colors } from 'styles/theme';

const userInfoScreenStyles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  detailUserInfo: {
    flexDirection: 'row',
    width: 360,
    alignItems: 'center',
  },
});

export default userInfoScreenStyles;
