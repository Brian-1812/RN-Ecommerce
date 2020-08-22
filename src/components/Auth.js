import React, { useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import LoginView from './LoginView'
import Userprofile from './Userprofile'

const Auth = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if(user){
      user.reload()
      .catch(err=>console.log(err))
    }
    
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  if (!user) {
    console.log('Email not verified or null')
    return (
      <LoginView navigation={navigation} style={{flex:1, backgroundColor:'#fff'}}/>
    );
  }

  return (
    <Userprofile navigation={navigation}/>
  );
};



export default Auth;