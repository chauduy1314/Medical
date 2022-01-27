import { StyleSheet, Text, View, Image, TouchableHighlight, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const doctor = require('../../../Resources/Images/doctor.png');
const message = require('../../../Resources/Images/message.png');

const Tab = createMaterialTopTabNavigator();


const HealthProfile = () => {
    return (
        <SafeAreaView >
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
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
                            <Image source={doctor} />
                            <Text style={styles.boxSubTitle}>
                                Bác sĩ: Nguyễn Minh A
                            </Text>
                        </View>
                    </View>
                </View>
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
                            <Image source={doctor} />
                            <Text style={styles.boxSubTitle}>
                                Bác sĩ: Nguyễn Minh B
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableHighlight
                    onPress={() => { }}
                    style={styles.messageBox}
                    underlayColor='#F8F8F8'
                >
                    <View >
                        <Image source={message} />
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
};

const Test = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: '#184A34',
                    height: 5,
                    marginHorizontal: 20,
                    width: '40%'
                }
            }}
        >
            <Tab.Screen name="Test1" component={HealthProfile} options={{
                tabBarLabel: 'Ngoại Trú',
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: 16,
                    fontFamily: 'SVN-PoppinsSemiBold',
                    color: '#BFC6BD'
                }
            }} />
            <Tab.Screen name="Tool" component={HealthProfile} options={{
                tabBarLabel: 'Nội Trú',
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: 16,
                    fontFamily: 'SVN-PoppinsSemiBold',
                    color: '#BFC6BD'
                }
            }} />
        </Tab.Navigator>
    )
}

export default Test;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        height: '100%'
    },
    boxProfile: {
        marginTop: 10,
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#FFFFFF',
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
        color: '#2B2B2B',
        fontFamily: 'SVN-Poppins',
        fontSize: 16
    },
    boxSubTitle: {
        color: '#BFC6BD',
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        marginLeft: 5,
        marginTop: 10
    },
    messageBox: {
        position: 'absolute',
        right: 25,
        top: 500
    }
});
