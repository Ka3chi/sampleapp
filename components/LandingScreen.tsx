import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

export default function LandingScreen({navigation}){
    return(
        <View style = {styles.container}>
            <LottieView
                source={require('../assets/team.json')}
                autoPlay={true}
                loop={true}
                style={styles.lottie}
                autoSize={true}
            />
            <Text style={styles.title}>Enterprise team collaboration.</Text>
            <Text style={styles.text}>Bring together your files, your tools, projects and people, including a new mobile and desktop application.</Text>
            <View style={styles.btnlayout}>
               <View style={styles.btnstyles}>
                   <TouchableOpacity 
                   >
                       <Text style={styles.btnreg}>Register</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.btnsign}>Sign In</Text></TouchableOpacity>
                    </View>
                </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#18171F',
      
    },
    lottie: {
        width: 300,
        height: 350,
        alignSelf: 'center',
        marginTop: 20
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#E4E8EE',
        textAlign: 'center'
    },
    text:{
        fontSize: 20,
        alignSelf: 'center',
        color: '#BDC1C6',
        padding: 20,
        textAlign: 'center',
        paddingHorizontal: 50
    },
    btnlayout:{
        justifyContent: 'flex-end',
        borderRadius: 10,
        alignItems: 'center',
        
        
    },
    btnstyles: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#354341',
        width: '80%',
        height: '29%',
        borderRadius: 20,
        bottom: 40
    },
    btnreg:{
        backgroundColor:'#E4E8EE',
        alignSelf: 'center',
        color: '#354341',
        borderRadius: 20,
        padding: 23,
        fontSize: 20,
        paddingLeft: 67,
        paddingRight: 67,
        
        
    },
    btnsign:{
        alignContent: 'center',
        backgroundColor: '#354341',
        color: '#E4E8EE',
        padding: 23,
        fontSize: 20,
        paddingLeft: 67,
        paddingRight: 67,
        borderRadius: 20,
        
    }

  });