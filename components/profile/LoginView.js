import React, {useState} from 'react'
import {View, Button, TextInput} from 'react-native'
import auth from '@react-native-firebase/auth';

export default function LoginView() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => (
            console.log('logged in')
        ))
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
        });
    }
    return (
        <View>
            <TextInput placeholder="Email" onChangeText={text => setEmail(text)} value={email}/>
            <TextInput placeholder="Password" onChangeText={text => setPassword(text)} value={password}/>
            <Button title="Login" onPress={login}/>
        </View>
    )
}
