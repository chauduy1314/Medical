import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import React from 'react';
import { t } from 'i18next';

const twobell = require('../../../Resources/Images/twobell.png');

const NotificationPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.boxContent}>
                <Image source={twobell} />
                <Text style={styles.boxText}>
                    {t('noNotification')}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default NotificationPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%'
    },
    boxContent: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
    },
    boxText: {
        color: '#BFC6BD',
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        marginTop: 20
    }
});
