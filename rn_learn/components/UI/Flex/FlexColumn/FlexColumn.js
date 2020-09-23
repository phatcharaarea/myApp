import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ColumnStyle from './FlexColumnStyle'
class FlexColumn extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'black'}}>
                <Text style={[ColumnStyle.Header,{marginTop:0}]}>This is Flex Column </Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={ColumnStyle.Text1}>Column 1</Text>
                    <Text style={ColumnStyle.Text2}>Column 2</Text>
                    <Text style={ColumnStyle.Text3}>Column 3</Text>
                    <Text style={ColumnStyle.Text4}>Column 4</Text>
                    <Text style={ColumnStyle.Text5}>Column 5</Text>
                </View>

                <Text style={ColumnStyle.Header}>This is Center </Text>
                <View style={[ColumnStyle.Box,{justifyContent:'center'}]}>
                    <Text style={ColumnStyle.Text1}>Column 1</Text>
                    <Text style={ColumnStyle.Text2}>Column 2</Text>
                    <Text style={ColumnStyle.Text3}>Column 3</Text>
                    <Text style={ColumnStyle.Text4}>Column 4</Text>
                    <Text style={ColumnStyle.Text5}>Column 5</Text>
                </View>

                <Text style={ColumnStyle.Header}>This is flex-start </Text>
                <View style={[ColumnStyle.Box,{justifyContent:'flex-start'}]}>
                    <Text style={ColumnStyle.Text1}>Column 1</Text>
                    <Text style={ColumnStyle.Text2}>Column 2</Text>
                    <Text style={ColumnStyle.Text3}>Column 3</Text>
                    <Text style={ColumnStyle.Text4}>Column 4</Text>
                    <Text style={ColumnStyle.Text5}>Column 5</Text>
                </View>

                <Text style={ColumnStyle.Header}>This is flex-end </Text>
                <View style={[ColumnStyle.Box,{justifyContent:'flex-end'}]}>
                    <Text style={ColumnStyle.Text1}>Column 1</Text>
                    <Text style={ColumnStyle.Text2}>Column 2</Text>
                    <Text style={ColumnStyle.Text3}>Column 3</Text>
                    <Text style={ColumnStyle.Text4}>Column 4</Text>
                    <Text style={ColumnStyle.Text5}>Column 5</Text>
                </View>

                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity  style={ColumnStyle.Button}
                        onPress={() => this.props.navigation.goBack()}>
                        <Text style={ColumnStyle.ButtonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={ColumnStyle.Button}
                        onPress={() => this.props.navigation.navigate('FlexColumn2')}>
                        <Text style={ColumnStyle.ButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default FlexColumn
