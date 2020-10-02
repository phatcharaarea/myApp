import React, { Component } from 'react'
import { Text, View,Dimensions ,Image} from 'react-native'

const {width,height} = Dimensions.get('window')

class Tab2 extends Component {
    render() {
        return (
            <View style={{width,height,backgroundColor:'black',flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image 
                    style={{height,width:300}}
                    source={require('../../../../assets/moon/Moon.png')}
                    resizeMode={'contain'}
                    
                    />
            </View>
        )
    }
}

export default Tab2
