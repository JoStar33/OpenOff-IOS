import { Platform, StyleSheet } from 'react-native';

const timerTextStyles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 18 : 12,
    right: 5,
    zIndex: 7,
  },
});

export default timerTextStyles;
