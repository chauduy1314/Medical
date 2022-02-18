import React from 'react';
import {
    SafeAreaView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { useTranslation } from "react-i18next";

import { colors } from '../../styles';

const LandingPage = ({ navigation }) => {
    const { t } = useTranslation()

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.appTitle}>
                    Medical Check-up
                </Text>
                <Text style={styles.appSubTitle}>
                    Plan what you will do to be more organized for today, tomorrow and beyond
                </Text>
            </View>
            <View >
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                    underlayColor={colors.WHITE}
                >
                    <Text style={styles.textLoginButton}>
                        {t('loginUppercase')}
                    </Text>
                </TouchableOpacity>
                <TouchableHighlight
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Register')}
                    underlayColor={colors.WHITE}
                >
                    <Text style={styles.textRegisterButton}>
                        {t('registerUppercase')}
                    </Text>
                </TouchableHighlight>
            </View >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 350,
        backgroundColor: colors.GREEN_BOLD,
        borderRadius: 16,
        borderColor: '#999100'
    },
    textLoginButton: {
        color: colors.WHITE,
        fontSize: 16,
        fontFamily: 'SVN-PoppinsBold',
        lineHeight: 21
    },
    textRegisterButton: {
        color: colors.GREEN,
        fontSize: 16,
        fontFamily: 'SVN-PoppinsBold',
        lineHeight: 21
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 50,
        width: 300,
        borderRadius: 5,
        borderColor: '#999100',
        marginBottom: 30
    },
    appTitle: {
        fontSize: 30,
        color: colors.GREEN,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'SVN-PoppinsBold',
    },
    appSubTitle: {
        fontSize: 14,
        color: colors.GRAY,
        fontFamily: 'SVN-Poppins',
        textAlign: 'center',
        marginBottom: 75,
        paddingHorizontal: 5
    }
});

export default LandingPage;