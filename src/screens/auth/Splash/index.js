import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

export default function Splash({navigation}) {
  console.log(navigation);

  const onSignup = () => {
    navigation.navigate('Signup');
  };
  const onSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" onPress={onSignup} />
      <Pressable onPress={onSignin}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
}
