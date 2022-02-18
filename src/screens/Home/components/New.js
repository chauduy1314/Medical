import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { colors } from '../../../styles';
import { timeIcon } from '../../../assets'

const New = (props) => {
    return (
        <View style={{ width: 150 }}>
            <Image source={props.image} />
            <View style={{ width: 120, marginVertical: 5 }}>
                <Text style={styles.newsTitle}>
                    {props.title}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', lineHeight: 15 }}>
                <Image source={timeIcon} style={{ marginRight: 5 }} />
                <Text style={styles.newsTime}>
                    {props.time}
                </Text>
            </View>
        </View>
    )
}

export default New

const styles = StyleSheet.create({
    newsTitle: {
        color: colors.BLACK,
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'left'
    },
    newsTime: {
        fontFamily: 'SVN-Poppins',
        fontSize: 10,
        color: colors.GREEN,
        lineHeight: 15,
        paddingTop: 2
    }
})