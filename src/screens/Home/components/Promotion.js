import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { colors } from '../../../styles';
import { giftIcon } from '../../../assets'

const Promotion = (props) => {
    return (
        <View style={{ width: 180, marginRight: 5 }}>
            <View style={{ marginBottom: 10 }}>
                <Image source={props.image} style={{ width: 180, height: 110, borderRadius: 14 }} />
            </View>
            <Text style={styles.titlePromotion}>
                {props.title}
            </Text>
            <Text style={styles.subTitlePromotion}>
                {props.subTitle}
            </Text>
            <View style={{ flexDirection: 'row', lineHeight: 17, alignItems: 'flex-start' }}>
                <Image source={giftIcon} />
                <Text style={styles.promotionText}>
                    Nhận ưu đãi
                </Text>
            </View>
        </View>
    )
}

export default Promotion

const styles = StyleSheet.create({
    titlePromotion: {
        color: colors.BLACK,
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        lineHeight: 18
    },
    subTitlePromotion: {
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        color: '#A4A4A6',
        marginVertical: 5,
        lineHeight: 18
    },
    promotionText: {
        fontFamily: 'SVN-PoppinsSemiBold',
        color: colors.GREEN,
        fontSize: 12,
        marginLeft: 5,
        lineHeight: 19,
    }
})
