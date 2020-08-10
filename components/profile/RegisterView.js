import React, {useState} from 'react'
import {View, Button, TextInput} from 'react-native'
import auth from '@react-native-firebase/auth';

export default function RegisterView() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const register = () => {
        if(password===password2){
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => (
                console.log('User account created & signed in!')
            ))
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                  }
              
                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }
              
                  console.error(error);
            });
        }else{
            alert('Passwords not match!')
        }
    }
    return (
        <View>
            <TextInput placeholder="Email" onChangeText={text => setEmail(text)} value={email}/>
            <TextInput placeholder="Password" onChangeText={text => setPassword(text)} value={password}/>
            <TextInput placeholder="Password2" onChangeText={text => setPassword2(text)} value={password2}/>
            <Button title="Register" onPress={register}/>
        </View>
    )
}
