import React from 'react'
import { TouchableOpacity, Image, TextInput, Text, KeyboardAvoidingView, StyleSheet, Platform, Button } from 'react-native'

import logo from '../../assets/GoodBooks.png'

export default function Logon({ navigation }) {
    function handleSubmit() {
        navigation.navigate('Dashboard')
    }

    function handleAbout() {
        navigation.navigate('About')
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <TextInput style={styles.input} placeholder="Your literary preferences" />
            <TouchableOpacity  onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAbout} style={styles.aboutBtn}>
                <Text style={styles.aboutTxt}>ABOUT IT</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDFDFD',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        height: 60,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        padding: 20,
        fontFamily: 'Helvetica',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20,
    }, 

    button: {
        height: 60, 
        width: 300,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }, 

    buttonText: {
        color: '#FFF', 
        fontWeight: 'bold', 
        fontSize: 20,
    },   

    aboutBtn: {
        marginTop: 100,
    }, 

    aboutTxt: {
        color: '#E5585B',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
  })