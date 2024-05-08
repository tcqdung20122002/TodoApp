import { View, Text, Alert, } from 'react-native'
import React, { useState } from 'react'
import{TextInput,Button, HelperText} from 'react-native-paper'
import auth from "@react-native-firebase/auth"

const Register = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [passconfirm, setPassconfirm] = useState("")
    const [showpass, setShowPass] = useState(false)
    const [showpassconfirm, setShowPassconfirm] = useState(false)

    const handleCreateAccount =() =>{
        auth().createUserWithEmailAndPassword(email,pass)
        .then( () => console.log("Dang ki thanh cong"))
        .catch( e => console.log(e))
    }

    const hasErrorPass =() => pass.length > 0 && pass.length <6
    const hasErrorPassWord =() => pass.length<6

  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <TextInput 
        label={"Email"}
        value={email}
        onChangeText={setEmail}
      />
      <HelperText type='error' visible={hasErrorPass()}>
        Email sai
      </HelperText>
       <TextInput 
        label={"Password"}
        value={pass}
        onChangeText={setPass}
        right={<TextInput.Icon icon={"eye"} onPress={() => setShowPass(!showpass)}/>}
      />
      <HelperText type='error' visible={hasErrorPass()}>
        Pass it nhat 6 ki tu
      </HelperText>
       <TextInput 
        label={"PAssword confirm"}
        value={passconfirm}
        onChangeText={setPassconfirm}
        right={<TextInput.Icon icon={"eye"} onPress={() => setShowPassconfirm(!showpassconfirm)}/>}
      />
      <HelperText type='error' visible={hasErrorPassWord()}>
        Pass confirm khong khop
      </HelperText>
      <Button
        mode='contained'  onPress={handleCreateAccount}>
            Register
        </Button>
    </View>
  )
}

export default Register