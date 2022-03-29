import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

import { colors } from '../../styles'

const Input = (props) => {
    return (
        <View>
            <TextInput
                style={[styles.input, props.error && styles.borderWarning]}
                {...props}
            />
            {props.errorText && (
                <Text style={styles.errorText}>{props.errorText}</Text>
            )}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 60,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
        backgroundColor: '#F3F3F3',
        borderColor: colors.WHITE
    },
    borderWarning: {
        borderColor: 'red'
    },
    errorText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 12,
        color: 'red',
        marginLeft: 10
    }
})