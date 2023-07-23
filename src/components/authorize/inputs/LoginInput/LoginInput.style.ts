import { StyleSheet } from 'react-native';

const loginInputStyles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'column',
  },
  input: {
    width: 350,
    fontSize: 15,
    height: 30,
    borderBottomWidth: 2,
    backgroundColor: 'transparent',
  },
  inputTitle: {
    color: 'white',
    fontSize: 17,
    marginBottom: 20,
    fontWeight: '800',
  },
  errorText: {
    color: 'red',
  },
});

export default loginInputStyles;
