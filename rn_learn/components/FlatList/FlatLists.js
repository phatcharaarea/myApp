import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList} from 'react-native'

const { width, height } = Dimensions.get('window')

export class FlatLists extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.text}> FlatList </Text> */}
                <FlatList 
                    style={{marginTop:50}}
                    data={[1,2,3,4,5,6,7,8,9,10]}
                    renderItem={({item}) => 
                        <View style={{width,height:200,backgroundColor:'#600cad',marginBottom:10,justifyContent:'center'}}>
                            <Text style={styles.text}>No. {item}</Text>
                            <Text style={styles.text}>Title</Text>
                        </View>
                        
                    } 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    text: {
        fontSize:30,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
        
    }
})

export default FlatLists
