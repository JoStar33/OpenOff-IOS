import { Dimensions, StyleSheet } from 'react-native';

const authorizeFlowButtonStyles = StyleSheet.create({
  absolutePosition: {
    marginBottom: 100,
    marginLeft: 15,
    // position: 'absolute',
    // bottom: 25,
    // right: 15,
  },
  container: {
    width: Dimensions.get('window').width - 30,
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  label: {
    fontSize: 17,
    fontWeight: '600',
  },
});

export default authorizeFlowButtonStyles;
