import React, { Component } from 'react'
import { Text, View,Image,Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')

class Tab1 extends Component {
    render() {
        return (
            <View style={{width,height,backgroundColor:'black',flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image 
                    style={{height,width:300}}
                    source={require('../../../../assets/sun/Sun.png')}
                    resizeMode={'contain'}
                    
                    />
            </View>
        )
    }
}

export default Tab1
