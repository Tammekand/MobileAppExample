import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 14,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 21,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 16,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
