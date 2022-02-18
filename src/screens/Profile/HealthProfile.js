import { StyleSheet, Text, View, Image, TouchableHighlight, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next';

import { colors } from '../../styles';
import { doctorIcon, messageIcon } from '../../assets'

const Tab = createMaterialTopTabNavigator();

const HealthProfileTab = ({ navigation }) => {
    const { t } = useTranslation()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DetailExamination')}
                    >
                        <View style={styles.boxProfile}>
                            <View style={styles.boxProfileTime}>
                                <Text style={styles.boxProfileDate}>
                                    04
                                </Text>
                                <Text style={styles.boxProfileYear}>
                                    01/2022
                                </Text>
                            </View>
                            <View style={styles.boxLine} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.boxTitle}>
                                    Khám tổng quát
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Image source={doctorIcon} />
                                    <Text style={styles.boxSubTitle}>
                                        Bác sĩ: Nguyễn Minh A
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.boxProfile}>
                        <View style={styles.boxProfileTime}>
                            <Text style={{ fontSize: 24, fontFamily: 'SVN-PoppinsSemiBold', color: '#39AFFD' }}>
                                07
                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: 'SVN-Poppins', color: '#39AFFD' }}>
                                12/2021
                            </Text>
                        </View>
                        <View style={{ borderRightWidth: 2, borderRightColor: '#39AFFD', height: 80, marginHorizontal: 20 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.boxTitle}>
                                Khám Răng hàm mặt
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Image source={doctorIcon} />
                                <Text style={styles.boxSubTitle}>
                                    Bác sĩ: Nguyễn Minh B
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableHighlight
                onPress={() => { }}
                style={styles.messageBox}
                underlayColor='#F8F8F8'
            >
                <View >
                    <Image source={messageIcon} />
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

const HealthProfile = () => {
    const { t } = useTranslation()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: colors.GREEN_BOLD,
                    height: 3,
                    marginHorizontal: 20,
                    width: '40%'
                }
            }}
        >
            <Tab.Screen name="OutPatient" component={HealthProfileTab} options={{
                tabBarLabel: t('outpatient'),
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: 16,
                    fontFamily: 'SVN-PoppinsSemiBold',
                    color: colors.GRAY
                }
            }} />
            <Tab.Screen name="InPatient" component={HealthProfileTab} options={{
                tabBarLabel: t('inpatient'),
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: 16,
                    fontFamily: 'SVN-PoppinsSemiBold',
                    color: colors.GRAY
                }
            }} />
        </Tab.Navigator>
    )
}

export default HealthProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        height: '100%'
    },
    boxProfile: {
        marginTop: 10,
        flexDirection: 'row',
        height: 100,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    boxProfileTime: {
        width: 55,
        height: 70,
        backgroundColor: '#EAFDEF',
        borderRadius: 14,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxProfileDate: {
        fontSize: 24,
        fontFamily: 'SVN-PoppinsSemiBold',
        color: '#20D252'
    },
    boxProfileYear: {
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        color: '#20D252'
    },
    boxLine: {
        borderRightWidth: 2,
        borderRightColor: '#20D252',
        height: 80,
        marginHorizontal: 20
    },
    boxTitle: {
        color: colors.BLACK,
        fontFamily: 'SVN-Poppins',
        fontSize: 16
    },
    boxSubTitle: {
        color: colors.GRAY,
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        marginLeft: 5,
        marginTop: 10
    },
    messageBox: {
        position: 'absolute',
        right: '4%',
        top: '70%',
        zIndex: 2
    }
});
