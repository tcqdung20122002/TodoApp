import { View, Text, Alert, } from 'react-native'
import React, { useState } from 'react'
import{TextInput,Button} from 'react-native-paper'
import auth from "@react-native-firebase/auth"
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin'
const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
   

    const handleLoginAccount =() =>{
        auth().signInWithEmailAndPassword(email,pass)
        .then( () => console.log("Thanh cong"))
        .catch( e => console.log("That bai"))
    }

    GoogleSignin.configure({
      webClientId:'655508783909-03akuiqe7nuet1ndmlqhtpolhg5c2aft.apps.googleusercontent.com'
    })

    const handleLoginWithGoogle = async ()=>{
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true})
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth().signInWithCredential(googleCredential)
      .then ((data) => console.log(data))
      .catch(e => console.log(e))
  }

  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <TextInput 
        label={"Email"}
        value={email}
        onChangeText={setEmail}
      />
       <TextInput 
        label={"Password"}
        value={pass}
        onChangeText={setPass}
      />
      
      <Button
        mode='contained' onPress={handleLoginAccount}>
            Confirm
        </Button>
      <View style={{flexDirection:'row'}}>
        <GoogleSigninButton onPress={handleLoginWithGoogle}/>
      </View>
    </View>
  )
}

export default Login