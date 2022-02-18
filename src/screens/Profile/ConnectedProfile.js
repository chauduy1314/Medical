import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Image, StatusBar } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '../../styles';
import { face, infoIcon, loveIcon, nextIcon, plusIcon } from '../../assets'

const ConnectedProfile = () => {
    const { t } = useTranslation()
    return (
        <SafeAreaView >
            <StatusBar barStyle='light-content' />
            <View style={styles.secondLayer}>
                <View style={styles.boxInfo}>
                    <View style={styles.boxInfoHeader}>
                        <Image source={face} style={styles.boxInfoAvatar} />
                        <Text style={styles.boxInfoName}>
                            Nguyễn Đặng Hoài Trang
                        </Text>
                        <TouchableHighlight style={styles.boxInfoButton}
                            onPress={() => { }}
                        >
                            <Text style={styles.boxInfoButtonText}>
                                {t('idCode')}
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.boxInfoBody}>
                        <View style={styles.boxInfoRow}>
                            <View style={styles.rowBox}>
                                <Image source={infoIcon} />
                                <Text style={styles.boxRowText}>
                                    {t('personInfo')}
                                </Text>
                            </View>
                            <Image source={nextIcon} />
                        </View>
                        <View style={styles.boxInfoRow}>
                            <View style={styles.rowBox}>
                                <Image source={loveIcon} />
                                <Text style={styles.boxRowText}>
                                    {t('healthInfo')}
                                </Text>
                            </View>
                            <Image source={nextIcon} />
                        </View>
                        <View style={styles.boxInfoRow}>
                            <View style={styles.rowBox}>
                                <Image source={loveIcon} />
                                <Text style={styles.boxRowText}>
                                    {t('healthRecord')}
                                </Text>
                            </View>
                            <Image source={nextIcon} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.rowBox}>
                                <Image source={loveIcon} />
                                <Text style={styles.boxRowText}>
                                    {t('healthStatus')}
                                </Text>
                            </View>
                            <Image source={nextIcon} />
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', backgroundColor: '#F8F8F8', height: 8 }} />
                <View style={styles.boxAddProfile}>
                    <View style={styles.clickArea}>
                        <Image source={plusIcon} />
                        <Text style={styles.clickAreaText}>
                            {t('addProfilePlaceHolder')}
                        </Text>
                    </View>
                </View>
                <View style={{ width: '100%', backgroundColor: '#F8F8F8', height: 500 }} />
            </View>
            <View style={styles.firstLayer}>
            </View>
        </SafeAreaView>
    );
};

export default ConnectedProfile;

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
        height: 360,
        backgroundColor: colors.WHITE,
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
        width: 100,
        height: 32,
        backgroundColor: colors.GREEN_BOLD,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxInfoButtonText: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 12,
        color: colors.WHITE
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
        borderColor: colors.WHITE,
        marginBottom: 20,
        paddingBottom: 15
    },
    boxRowText: {
        marginLeft: 10,
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: colors.BLACK
    },
    rowBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    boxAddProfile: {
        width: '100%',
        backgroundColor: colors.WHITE,
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
        color: colors.GRAY
    }
});
