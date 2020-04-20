import React from 'react' 
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native' 

import Constants from 'expo-constants'

export default function Dashboard({ navigation }) {
	function handleAbout() {
		navigation.navigate('About')
	}

	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Teste',
			author: 'Andrew',
			genres: 'stories, once upon a time'
		},
	];

function Item({ name, author, genres }) {
  return (
    <View style={styles.item}>
		<Text>Name:</Text>
    	<Text style={styles.title}>{name}</Text>

		<Text>Author</Text>
		<Text style={styles.title}>{author}</Text>	

		<Text>Genre</Text>
		<Text style={styles.title}>{genres}</Text>	
    </View>
  );
}	
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTxt}>Published Books with{"\n"}your literary preferences</Text>
				<TouchableOpacity onPress={handleAbout} style={styles.aboutBtn}>
                	<Text style={styles.aboutTxt}>ABOUT IT</Text>
            	</TouchableOpacity>

			</View>

			<FlatList
        		data={DATA}
        		renderItem={({ item }) => <Item title={item.name} />}
        		keyExtractor={item => item.id}
      		/>
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
	
	title: {
		
	}
})
