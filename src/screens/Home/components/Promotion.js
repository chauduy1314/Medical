import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const gift = require('../../../../Resources/Images/gift.png');

const Promotion = (props) => {
    return (
        <View style={{ width: 180 }}>
            <View style={{ marginBottom: 10 }}>
                <Image source={props.image} />
            </View>
            <Text style={styles.titlePromotion}>
                {props.title}
            </Text>
            <Text style={styles.subTitlePromotion}>
                {props.subTitle}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 5 }}>
                    <Image source={gift} />
                </View>
                <View >
                    <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', color: '#68BD45', fontSize: 12 }}>
                        Nhận ưu đãi
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Promotion

const styles = StyleSheet.create({
    titlePromotion: {
        color: '#2B2B2B',
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        lineHeight: 18
    },
    subTitlePromotion: {
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        color: '#A4A4A6',
        marginVertical: 7,
        lineHeight: 18
    },
})
