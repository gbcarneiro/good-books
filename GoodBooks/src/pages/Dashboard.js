import React, { useState, useEffect } from 'react' 
import { View, StyleSheet, FlatList, Text, TouchableOpacity, AsyncStorage } from 'react-native' 
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'

import Booklist from '../components/BookList'

export default function Dashboard() {
	const [genres, setGenres] = useState([])

	const navigation = useNavigation()

	useEffect(() => {
        AsyncStorage.getItem('genres').then(storagedGenres => {
            const genresArray = storagedGenres.split(',').map(genre => genre.trim());

            setGenres(genresArray);
        })
	}, []);
	
	function handleAbout() {
		navigation.navigate('About')
	}

	
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTxt}>Published Books with{"\n"}your literary preferences</Text>
				<TouchableOpacity onPress={handleAbout} style={styles.aboutBtn}>
                	<Text style={styles.aboutTxt}>ABOUT IT</Text>
            	</TouchableOpacity>

			</View>

			<ScrollView>
				{genres.map(genre => <Booklist />)}	
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 24, 
		paddingTop: Constants.statusBarHeight - 40,
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center', 
	},

	headerTxt: {
		color: '#A0A0A0',
		fontSize: 16, 
		padding: 30,
	},

    aboutTxt: {
        color: '#E5585B',
        fontSize: 16,
        fontWeight: 'bold',	
		padding: 30,
        textDecorationLine: 'underline',
	},
})
