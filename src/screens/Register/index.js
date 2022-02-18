import React from 'react';
import {
    SafeAreaView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { colors } from '../../styles';
import { hideIcon, userIcon, lockIcon } from '../../assets';

const Register = ({ navigation }) => {
    const { t } = useTranslation()

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1, paddingBottom: 16, paddingTop: '15%' }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.loginTitle}>
                        {t('register')}
                    </Text>
                    <View style={styles.emailInput}>
                        <View >
                            <Image source={userIcon} style={styles.userIcon} />
                        </View>
                        <View>
                            <TextInput
                                placeholder={t('userAccountPlaceHolder')}
                                style={styles.emailInputVal}
                            />
                        </View>
                    </View>
                    <View style={[styles.passwordInput, styles.margin]}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <Image source={lockIcon} style={styles.lockIcon} />
                            <TextInput
                                placeholder={t('userPasswordPlaceHolder')}
                                style={styles.passwordInputVal}
                            />
                        </View>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor={colors.WHITE}
                        >
                            <Image source={hideIcon} style={{ marginRight: 5 }} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.passwordInput}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <Image source={lockIcon} style={styles.lockIcon} />
                            <TextInput
                                placeholder={t('retypePassword')}
                                style={styles.passwordInputVal}
                            />
                        </View>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor={colors.WHITE}
                        >
                            <Image source={hideIcon} style={{ marginRight: 5 }} />
                        </TouchableHighlight>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => { }}
                            underlayColor={colors.WHITE}
                        >
                            <Text style={styles.textLoginButton}>
                                {t('registerUppercase')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View >
                <View style={styles.registerBox}>
                    <View >
                        <Text style={styles.registerText}>
                            {t('hasAccount')}
                        </Text>
                    </View>
                    <View >
                        <TouchableHighlight
                            underlayColor={colors.WHITE}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.registerTextPress}>
                                {t('login')}
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View >
            </KeyboardAwareScrollView >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 36,
        flex: 1
    },
    loginTitle: {
        fontFamily: 'SVN-PoppinsBold',
        fontSize: 30,
        color: colors.GREEN,
        marginBottom: 50,
        lineHeight: 35
    },
    loginButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: '100%',
        backgroundColor: colors.GREEN_BOLD,
        borderRadius: 16,
        borderColor: '#999100',
        marginTop: 10
    },
    textLoginButton: {
        color: colors.WHITE,
        fontSize: 16,
        fontFamily: 'SVN-PoppinsBold',
        lineHeight: 21
    },
    emailInputVal: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        height: 30,
        lineHeight: 19,
        width: 250,
        paddingBottom: 5
    },
    userIcon: {
        width: 24,
        height: 24,
        marginRight: 14
    },
    emailInput: {
        flexDirection: 'row',
        borderBottomColor: '#E3E8F1',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 30,
        alignItems: 'center',
    },
    passwordInput: {
        flexDirection: 'row',
        borderBottomColor: '#E3E8F1',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 15,
        alignItems: 'center'
    },
    lockIcon: {
        width: 24,
        height: 24,
        marginRight: 14
    },
    passwordInputVal: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        height: 30,
        lineHeight: 19,
        width: 240,
        paddingBottom: 5
    },
    forgotPasswordText: {
        textAlign: 'right',
        fontSize: 12,
        fontFamily: 'SVN-Poppins'
    },
    forgotPasswordBox: {
        width: 100, marginLeft: 255, marginBottom: 60
    },
    registerBox: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    registerTextPress: {
        fontSize: 14,
        color: colors.GREEN,
        fontFamily: 'SVN-PoppinsBold',
        marginLeft: 3,
        lineHeight: 20
    },
    registerText: {
        color: colors.GREEN,
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        lineHeight: 20
    },
    margin: {
        marginBottom: 30
    }
});

export default Register;