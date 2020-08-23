import React, {useState} from 'react'
import {View, TextInput,StyleSheet,Text, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';
import Button from './Button'

export default function LoginView({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            const user = auth().currentUser;
            if(!user.emailVerified){
                alert('Please verify your email first!')
                auth().signOut().then(() => console.log('User signed out!'));
            }
        })
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
        <View style={styles.container}>
            <Text style={styles.title}>
                Sign in
            </Text>
            
            <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#4b24ab"
            onChangeText={text => setEmail(text)}
            value={email}/>
            <TextInput
            placeholderTextColor="#4b24ab"
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}/>
            
            <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            
            <View style={styles.button}>
            <Button 
            text="Login"
            onPress={login}
            textColor='#fff'
            buttonColor='#4b24ab'/>
            </View>
            <Text>Don't you have an account yet?</Text>
            
            <TouchableOpacity onPress={()=>navigation.navigate('RegisterView')}>
                <Text style={styles.registerLink}>Register here</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    registerLink:{
        marginTop:0,
        color:'#9d4ff0'
    },
    forgotPassword:{
        marginRight:150,
        marginTop:10,
        color:'#9d4ff0'
    },
    title:{
        color:'#4b24ab',
        fontSize:25,
        fontWeight:"bold",
        marginTop:0

    },
    textInput:{
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
        borderRadius:30,
        marginTop:15,
        marginHorizontal:15,
        color:'#4b24ab',
        padding:15,
        width:300
    },
    button:{
        marginTop:30
    }
})