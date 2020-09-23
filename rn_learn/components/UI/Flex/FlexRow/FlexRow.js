import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import flexrowStyle from './FlexRowCss'

class FlexRow extends Component {
    render() {
        return (
            <View style={{backgroundColor:'black',flex:1}}>
                <Text style={[styles.Header,{marginTop:0}]}>This is Flex Row </Text>
                <View style={flexrowStyle.Box}> 
                    <Text style={styles.Text1}>Row 1</Text>
                    <Text style={styles.Text2}>Row 2</Text>
                    <Text style={styles.Text3}>Row 3</Text>
                    <Text style={styles.Text4}>Row 4</Text>
                    <Text style={styles.Text5}>Row 5</Text>
                </View>
                
                <Text style={styles.Header}>This is center </Text>
                <View style={[styles.Box,{justifyContent:'center'}]}> 
                    <Text style={styles.Text1}>Row 1</Text>
                    <Text style={styles.Text2}>Row 2</Text>
                    <Text style={styles.Text3}>Row 3</Text>
                    <Text style={styles.Text4}>Row 4</Text>
                    <Text style={styles.Text5}>Row 5</Text>
                </View>                

                <Text style={styles.Header}>This is flex-start </Text>
                <View style={[styles.Box,{justifyContent:'flex-start'}]}>
                    <Text style={styles.Text1}>Row 1</Text>
                    <Text style={styles.Text2}>Row 2</Text>
                    <Text style={styles.Text3}>Row 3</Text>
                    <Text style={styles.Text4}>Row 4</Text>
                    <Text style={styles.Text5}>Row 5</Text>
                </View>

                <Text style={styles.Header}>This is flex-end </Text>
                <View style={[styles.Box,{justifyContent:'flex-end'}]}>
                    <Text style={styles.Text1}>Row 1</Text>
                    <Text style={styles.Text2}>Row 2</Text>
                    <Text style={styles.Text3}>Row 3</Text>
                    <Text style={styles.Text4}>Row 4</Text>
                    <Text style={styles.Text5}>Row 5</Text>
                </View>

                <Text style={styles.Header}>This is space-around </Text>
                <View style={[styles.Box,{justifyContent:'space-around'}]}>
                    <Text style={styles.Text1}>Row 1</Text>
                    <Text style={styles.Text2}>Row 2</Text>
                    <Text style={styles.Text3}>Row 3</Text>
                    <Text style={styles.Text4}>Row 4</Text>
                    <Text style={styles.Text5}>Row 5</Text>
                </View>

                <Text style={styles.Header}>This is space-between </Text>
                <View style={[styles.Box,{justifyContent:'space-between'}]}>
                    <Text style={styles.Text1}>Row 1</Text>
                    <Text style={styles.Text2}>Row 2</Text>
                    <Text style={styles.Text3}>Row 3</Text>
                    <Text style={styles.Text4}>Row 4</Text>
                    <Text style={styles.Text5}>Row 5</Text>
                </View>
            
                <Text style={styles.Header}>This is space-evenly </Text>
                <View style={[styles.Box,{justifyContent:'space-evenly'}]}>
                    <Text style={styles.Text1}>Row 1</Text>
                    <Text style={styles.Text2}>Row 2</Text>
                    <Text style={styles.Text3}>Row 3</Text>
                    <Text style={styles.Text4}>Row 4</Text>
                    <Text style={styles.Text5}>Row 5</Text>
                </View>

                <View style={{alignItems:'center'}}>
                    <TouchableOpacity  
                    style={styles.Button} 
                        onPress={() => this.props.navigation.navigate('FlexColumn')}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center'}}>Go to Column</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor:'#DAE3D9',
        flexDirection:'row',
        height:50,
    },

    Header: {
        marginTop:20,
        textAlign:"center",
        backgroundColor:"white",
        fontSize:30
    },
    
    Text1: {
        color:"black",
        fontSize:20,
        backgroundColor:'#B2B7F6'
    },
    
    Text2: {
        color:"black",
        fontSize:20,
        backgroundColor:'#B2F6F0'
    },
    
    Text3: {
        color:"black",
        fontSize:20,
        backgroundColor:'#B3EE9A'
    },
    
    Text4: {
        color:"black",
        fontSize:20,
        backgroundColor:'#F6F39F'
        
    },
    
    Text5: {
        color:"black",
        fontSize:20,
        backgroundColor:'#F6B09D'
        
    },

    Button: {
        marginTop:10,
        width:'100%',
        height:50,
        backgroundColor:'#4CAF50',
        justifyContent:'center'
    }

})

export default FlexRow
