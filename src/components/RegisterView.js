import React, {useState} from 'react'
import {View,StyleSheet, TextInput,Modal, Text, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import Button from './Button'
import Confirmation from './Confirmation'

export default function RegisterView({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [confirmModal, setConfirmModal] = useState(false)


    
    const register = () => {
        if(password===password2){
            
            auth().createUserWithEmailAndPassword(email, password)
            .then(async ()=>{
                    const user = auth().currentUser;
                    user.sendEmailVerification()
                    .catch((error)=>console.log(error))
                    setConfirmModal(true)
                    await firestore()
                    .collection('users')
                    .doc(user.uid)
                    .set({
                        email:user.email,
                        cart:[],
                        completedOrders:[],
                        savedItems: [],
                        phoneNumber:"",
                        defaultLocation:{
                            city:"",
                            street:""
                        }
                    })
                    
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }
              
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                // setConfirmModal(false)
                console.error(error);
            });
        }else{
            alert('Passwords not match!')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor="#4b24ab"
            onChangeText={text => setEmail(text)}
            value={email}/>
            <TextInput
            placeholder="Password"
            placeholderTextColor="#4b24ab"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}/>
            <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholderTextColor="#4b24ab" 
            placeholder="Confirm password"
            onChangeText={text => setPassword2(text)}
            value={password2}/>
            <View style={styles.button}>
            <Button 
            text="Register"
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={register}/>
            </View>
            
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text style={styles.login}>Go back to Login</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={false}
                visible={confirmModal}
            >
                <Confirmation setConfirmModal={setConfirmModal} navigation={navigation}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:25,
        color:'#4b24ab',
        marginBottom: 20,
        fontWeight:'bold'
    },
    button:{
        marginTop:65
    },
    textInput: {
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
        marginBottom:8,
        marginHorizontal:15,
        color:'#4b24ab',
        padding:15,
        width:300
    },
    login:{
        color:'#9d4ff0',
        fontSize:15
    }

})