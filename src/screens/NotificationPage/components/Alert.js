import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { colors } from '../../../styles'

const Alert = (props) => (
    <View style={styles.notificationBox}>
        <Image source={props.image} />
        <View style={{ marginLeft: 15 }}>
            <Text style={styles.notificationTitle}>
                {props.title}
            </Text>
            <Text style={styles.notificationSubtitle}>
                {props.time}
            </Text>
        </View>
    </View>
)

export default Alert

const styles = StyleSheet.create({
    notificationBox: {
        flexDirection: 'row',
        width: '85%',
        marginBottom: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: colors.WHITE,
        paddingBottom: 10
    },
    notificationTitle: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        lineHeight: 20
    },
    notificationSubtitle: {
        fontSize: 10,
        fontFamily: 'SVN-Poppins',
        marginTop: 5,
        color: colors.GRAY_BOLD
    },
})