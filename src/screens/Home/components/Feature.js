import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'

const Feature = (props) => {
    return (
        <TouchableHighlight
            onPress={() => { }}
            underlayColor='#F8F8F8'
        >
            <View style={styles.homeFeatureBox}>
                <View >
                    <Image source={props.image} />
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.homeFeatureText}>
                        {props.text}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default Feature

const styles = StyleSheet.create({
    homeFeatureBox: {
        alignItems: 'center',
        width: 90,
    },
    homeFeatureText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 13,
        lineHeight: 18,
        textAlign: 'center',
        lineHeight: 18
    },
})