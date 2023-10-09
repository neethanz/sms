import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SmsListener from 'react-native-android-sms-listener';

export default function App() {
  useEffect(() => {
    console.log('this is new message');
    SmsListener.addListener(message => {
      console.log(message);
    });
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
