import { StyleSheet } from 'react-native';
import { colors } from 'styles/theme';

const homeScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 25,
  },
  logo: {
    width: 50,
    height: 47,
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 25,
    marginTop: 20,
  },
  controllerContainer: {
    flexDirection: 'row',
  },
  controllerButton: {
    marginRight: 10,
  },
});

export default homeScreenStyles;
