import { StyleSheet, View } from 'react-native'
import React from 'react'

import { colors } from '../../styles'

const RadioButton = (props) => {
    return (
        <View style={[styles.radioBox, props.style]}>
            {
                props.selected ?
                    <View style={styles.selected} />
                    : null
            }
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    radioBox: {
        height: 18,
        width: 18,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colors.GREEN,
    }
})