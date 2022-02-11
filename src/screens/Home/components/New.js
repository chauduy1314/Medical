import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const time = require('../../../../Resources/Images/time.png')

const New = (props) => {
    return (
        <View >
            <Image source={props.image} />
            <View style={{ width: 150, color: '#2B2B2B', fontFamily: 'SVN-Poppins', fontSize: 14, lineHeight: 20, marginVertical: 10 }}>
                <Text >
                    {props.title}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={time} style={{ marginRight: 5 }} />
                <Text style={{ fontFamily: 'SVN-Poppins', fontSize: 12, color: '#68BD45' }}>
                    {props.time}
                </Text>
            </View>
        </View>
    )
}

export default New

const styles = StyleSheet.create({})