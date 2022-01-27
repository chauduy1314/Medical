import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Image, StatusBar } from 'react-native';
import React from 'react';

const avatar = require('../../../Resources/Images/face.png');
const info = require('../../../Resources/Images/info.png');
const love = require('../../../Resources/Images/love.png');
const next = require('../../../Resources/Images/next.png');
const plus = require('../../../Resources/Images/plus.png');

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView >
            <StatusBar barStyle='light-content' />
            <View style={styles.secondLayer}>
                <View style={styles.boxInfo}>
                    <View style={styles.boxInfoHeader}>
                        <Image source={avatar} style={styles.boxInfoAvatar} />
                        <Text style={styles.boxInfoName}>
                            Nguyễn Đặng Hoài Trang
                        </Text>
                        <TouchableHighlight style={styles.boxInfoButton}
                            onPress={() => { }}
                        >
                            <Text style={styles.boxInfoButtonText}>
                                Kết nối hồ sơ
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.boxInfoBody}>
                        <View style={styles.boxInfoRow}>
                            <View style={styles.rowBox}>
                                <Image source={info} />
                                <Text style={styles.boxRowText}>
                                    Thông tin cá nhân
                                </Text>
                            </View>
                            <Image source={next} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.rowBox}>
                                <Image source={love} />
                                <Text style={styles.boxRowText}>
                                    Thông tin sức khoẻ
                                </Text>
                            </View>
                            <Image source={next} />
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', backgroundColor: '#F8F8F8', height: 10 }} />
                <TouchableHighlight
                    onPress={() => navigation.navigate('HealthProfile')}
                >
                    <View style={styles.boxAddProfile}>
                        <View style={styles.clickArea}>
                            <Image source={plus} />
                            <Text style={styles.clickAreaText}>
                                Thêm hồ sơ người thân
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={{ width: '100%', backgroundColor: '#F8F8F8', height: 500 }} />
            </View>
            <View style={styles.firstLayer}>
            </View>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    firstLayer: {
        height: 200,
        backgroundColor: '#184A2F',
        position: 'absolute',
        zIndex: 1,
        width: '100%'
    },
    secondLayer: {
        height: 200,
        backgroundColor: '#184A2F',
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        marginTop: 125
    },
    boxInfo: {
        height: 240,
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48
    },
    boxInfoHeader: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    boxInfoAvatar: {
        marginTop: -50
    },
    boxInfoName: {
        fontFamily: 'SVN-PoppinsBold',
        fontSize: 18,
        color: '#184A2F',
        marginVertical: 10
    },
    boxInfoButton: {
        width: 114,
        height: 32,
        backgroundColor: '#68BD45',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxInfoButtonText: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 12,
        color: '#FFFFFF'
    },
    boxInfoBody: {
        flexDirection: 'column',
        marginTop: 30,
        marginHorizontal: 30
    },
    boxInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderColor: '#F7F7F7',
        marginBottom: 20,
        paddingBottom: 15
    },
    boxRowText: {
        marginLeft: 10,
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#2B2B2B'
    },
    rowBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        marginRight: 120
    },
    boxAddProfile: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 150
    },
    clickArea: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    clickAreaText: {
        marginTop: 10,
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        color: '#BFC6BD'
    }
});
