import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '../../styles';
import { twoBell } from '../../assets'

const NotificationPage = () => {
    const { t } = useTranslation()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.boxContent}>
                <Image source={twoBell} />
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
        backgroundColor: colors.WHITE,
        height: '100%'
    },
    boxContent: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
    },
    boxText: {
        color: colors.GRAY,
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        marginTop: 20
    }
});
