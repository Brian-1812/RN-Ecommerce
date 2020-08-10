import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth';
import LoginView from './LoginView'


const Auth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <LoginView/>
    );
  }

  return (
    <View>
      <Icon name="user-alt" size={20}/>
      <Text>Welcome {user.email}</Text>
      <Button title="Logout" onPress={()=>{
          auth()
          .signOut()
          .then(() => console.log('User signed out!'));
      }}/>
    </View>
  );
};



export default Auth;