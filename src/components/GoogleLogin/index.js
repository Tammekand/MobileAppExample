import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userinf => ', userInfo);
    } catch {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play service not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <TouchableOpacity
      onPress={signIn}
      activeOpacity={0.8}
      style={styles.container}>
      <Image style={styles.image} source={require('../../assets/google.png')} />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
