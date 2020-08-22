import React, {useState} from 'react'
import {View, Text, TouchableOpacity, TextInput,Image, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'
import Button from './Button'


export default function ProfileUpdate({setConfirmModal}) {
    const user = auth().currentUser
    const [username, setUsername] = useState(user.displayName)
    const [image, setImage] = useState(null)

    const update = async () =>{
        const reference = storage().ref(`/userImages/${user.uid}.jpg`);
        if(image){
            const task = await reference.putFile(image.path);
            var result = await reference.getDownloadURL()
        }else{
            var result = null
        }
        

        user.updateProfile({
            displayName:username,
            photoURL:result
        }).then(()=>{
            alert('Updated')
            setConfirmModal(false)
        })
        .catch(err=>console.log(err))

        await firestore()
            .collection('users')
            .doc(user.uid)
            .update({
                username:username
            })
    }

    const uploadPhoto =()=>{
        const options = {noData:true}

        ImagePicker.launchImageLibrary(options, response=>{
            setImage(response)
        })
        
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={()=>{
                setConfirmModal(false)
                }} style={{marginBottom:60}}>
                <Icon style={styles.close} name="md-close-outline" size={25} color="#4b24ab"/>
            </TouchableOpacity>
            <Text style={styles.title}>Update your profile</Text>
            <TouchableOpacity onPress={uploadPhoto}>
                {image?
                <View>
                    <Image source={{uri:"file://"+image.path}} style={styles.photo}/>
                </View>:
                <View style={styles.photoHolder}>
                    <Icon name='cloud-upload-outline' size={25}/>
                    <Text>Upload a photo</Text>
                </View>
                }
            </TouchableOpacity>
            <View>
            <Text style={styles.nameLabel}>Profile Name</Text>
            <TextInput
            style={styles.textInput}
            placeholder='Username'
            placeholderTextColor="#4b24ab"
            value={username}
            onChangeText={(text)=>setUsername(text)}
            />
            </View>
            
            <Button text="Update" textColor="#fff" buttonColor="#4b24ab" onPress={update}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    nameLabel:{
        fontSize:15,
        color:"#4b24ab",
        marginBottom:10,
        marginLeft:10,
        fontWeight:'bold'
    },
    close:{
        marginTop:20
    },
    title:{
        fontSize:25,
        color:"#4b24ab"
    },
    photoHolder:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:"space-around",
        padding:10,
        width:200,
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius: 1
    },
    photo:{
        width:200,
        height:200,
        resizeMode:'cover',
        borderRadius:80
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
        color:'#4b24ab',
        padding:15,
        width:300
    },
})