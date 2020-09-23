import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class FlexColumn2 extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'black'}}>
                <Text style={{marginTop:0,textAlign:'center',backgroundColor:'white',fontSize:20,fontWeight:'bold'}}>This is space-around </Text>
                <View style={{flex:0.5,backgroundColor:'#DAE3D9',flexDirection:'column',justifyContent:'space-around'}}>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B2B7F6'}}>Column 1</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B2F6F0'}}>Column 2</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B3EE9A'}}>Column 3</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#F6F39F'}}>Column 4</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#F6B09D'}}>Column 5</Text>
                </View>

                <Text style={{marginTop:20,textAlign:'center',backgroundColor:'white',fontSize:20,fontWeight:'bold'}}>This is space-between </Text>
                <View style={{flex:0.5,backgroundColor:'#DAE3D9',flexDirection:'column',justifyContent:'space-between'}}>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B2B7F6'}}>Column 1</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B2F6F0'}}>Column 2</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B3EE9A'}}>Column 3</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#F6F39F'}}>Column 4</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#F6B09D'}}>Column 5</Text>
                </View>

                <Text style={{marginTop:20,textAlign:'center',backgroundColor:'white',fontSize:20,fontWeight:'bold'}}>This is space-evenly </Text>
                <View style={{flex:0.5,backgroundColor:'#DAE3D9',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B2B7F6'}}>Column 1</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B2F6F0'}}>Column 2</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#B3EE9A'}}>Column 3</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#F6F39F'}}>Column 4</Text>
                    <Text style={{color:'black',fontSize:20,backgroundColor:'#F6B09D'}}>Column 5</Text>
                </View>

                <View style={{alignItems:'center',flex:0.25}}>
                    <TouchableOpacity  style={{
                        marginTop:10,
                        width:'100%',
                        height:50,
                        backgroundColor:'#4CAF50',
                        justifyContent:'center',
                        }}
                        onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center'}}>Back</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default FlexColumn2
