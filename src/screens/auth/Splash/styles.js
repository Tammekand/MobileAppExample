import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    paddingVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: '#FCA34D',
    textDecorationLine: 'underline',
  },
  footerText: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F63AC',
  },
});
