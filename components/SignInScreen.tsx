import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-paper';

export default function SignInScreen({navigation}){
    
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [Visible, setVisible] = useState(true);
                    
    return(
        <SafeAreaView style={styles.container} >
        <View style={styles.container}>
            <View style={{ left: 30 }}>
            <TouchableOpacity style={{ marginBottom: 40, marginTop: 40, left: 10}}  onPress={() => navigation.navigate('landing')}>
                <AntDesign 
                    name="back" 
                    size={40} 
                    color='white'/>
                </TouchableOpacity>
            <Text style={styles.title}>Let's sign you in.</Text>
            <Text style={{ fontSize: 40, color: 'white',}}>Welcome back.</Text>
            <Text style={{ fontSize: 40, color: 'white', marginBottom: 50}}>You've been missed!</Text>
            </View>
            <View style={styles.Textstyle} >
            <TextInput 
                    style={{ left: 20, color: 'white'}}
                    placeholder="Phone, email or username"
                    placeholderTextColor='#BDC1C6'
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    autoFocus={true}
                   
                />
            </View>
            <View style={styles.Textstyle1} >
            <TextInput
                    style={{ left: 20, color: 'white'}}
                    placeholder="Password"
                    placeholderTextColor='#BDC1C6'
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    autoFocus={true}
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={()=>{
                    setPasswordVisible(!passwordVisible)}}>
                <MaterialCommunityIcons
                    style={{ alignSelf: 'center'}}
                    name={passwordVisible == false ? 'eye-outline' : 'eye-off-outline'}
                    size={40} 
                    color='#BDC1C6'
                />
                </TouchableOpacity>
                
            </View>
        </View>
        
        <View  style={{ flexDirection:'row', justifyContent: 'center' }}>
        <Text style={{ color: '#BDC1C6', padding: 10 }}>Don't have an accout?</Text>
        <TouchableOpacity><Text style={{ color: 'white', padding: 10  }}>Register</Text></TouchableOpacity>
        </View>
        <View style={styles.btndesign}>
            <TouchableOpacity >
                <Text style={styles.btnstyle}>Sign In</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#18171F',
      
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        
    },
    text:{
        fontSize: 40,
        color: 'white',
    },
    btnstyle:{
        alignSelf: 'center',
        color: '#354341',
        borderRadius: 20,
        padding: 23,
        fontSize: 20,
        
    },
    btndesign: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor:'white',
        width: '80%',
        height: '10%',
        borderRadius: 30,
        marginBottom: 40,
        marginTop: 10
    },
    Textstyle:{
        height: '8%',
        width: '70%',
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: '#BDC1C6',
        borderWidth: 1
    },
    Textstyle1:{
        height: '8%',
        width: '70%',
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: '#BDC1C6',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
    }

  });