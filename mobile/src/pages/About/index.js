import React from 'react'
import { View, StyleSheet, Image, Text, Linking, Button, Icon, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import logo from '../../assets/GoodBooks.png'

export default function About() {
    function goInstagram() {
        Linking.openURL('https://instagram.com')
    }

    function goTwitter() {
        Linking.openURL('https://twitter.com')
    }

    function goGithub() {
        Linking.openURL('https://github.com/gbcarneiro')
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />
            <Text style={styles.paragraph}>
                <Text style={{ fontWeight: 'bold'}}>GoodBooks</Text> is 
                aplatform for connecting independent writers with passionate 
                readers. With this app, you can download stories that other 
                users wrote.{"\n"}{"\n"}

                If you are a writer, you can access the website.
            </Text>
            <View style={styles.links}>
                <TouchableOpacity 
                    style={{ padding: 20 }} 
                    onPress={goInstagram}
                >
                    <View>
                    <Feather name="instagram" color="#E5585B" size={30}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ padding: 20 }} 
                    onPress={goTwitter}
                >
                    <View>
                    <Feather name="twitter" color="#E5585B" size={30}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ padding: 20 }} 
                    onPress={goGithub}
                >
                    <View>
                    <Feather name="github" color="#E5585B" size={30}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fdfdfd', 
        alignItems: 'center',
        justifyContent: 'center',
    },

    paragraph: {
        fontFamily: 'Helvetica',
        fontSize: 25,
        padding: 43,
        color: '#A0A0A0',
    },

    links: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})