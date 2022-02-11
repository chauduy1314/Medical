import React from 'react';
import {
    SafeAreaView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';

const hideIcon = require('../../../Resources/Images/hide.png');
const lockIcon = require('../../../Resources/Images/lock.png');
const userIcon = require('../../../Resources/Images/user.png');

const Login = ({ navigation }) => {
    const { t } = useTranslation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: '95%' }}>
                <Text style={styles.loginTitle}>
                    {t('login')}
                </Text>
                <View style={styles.emailInput}>
                    <View >
                        <Image source={userIcon} style={styles.userIcon} />
                    </View>
                    <TextInput
                        placeholder={t('userAccountPlaceHolder')}
                        style={styles.emailInputVal}
                    />
                </View>
                <View style={styles.passwordInput}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Image source={lockIcon} style={styles.lockIcon} />
                        <TextInput
                            placeholder={t('userPasswordPlaceHolder')}
                            style={styles.passwordInputVal}
                        />
                    </View>
                    <TouchableHighlight
                        onPress={() => { }}
                        underlayColor='#FFFFFF'
                    >
                        <Image source={hideIcon} style={{ marginRight: 5 }} />
                    </TouchableHighlight>
                </View>
                <View style={styles.forgotPasswordBox}>
                    <TouchableHighlight
                        onPress={() => { }}
                        underlayColor='#FFFFFF'
                    >
                        <Text style={styles.forgotPasswordText}>
                            {t('forgetPassword')}
                        </Text>
                    </TouchableHighlight>
                </View>
                <View >
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('MainTab')}
                        underlayColor='#FFFFFF'
                    >
                        <Text style={styles.textLoginButton}>
                            {t('loginUppercase')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.registerBox}>
                    <View >
                        <Text style={styles.registerText}>
                            {t('noAccount')}
                        </Text>
                    </View>
                    <View >
                        <TouchableHighlight
                            underlayColor='#FFFFFF'
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text style={styles.registerTextPress}>
                                {t('registerNow')}
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '20%',
        marginHorizontal: 30
    },
    loginTitle: {
        fontFamily: 'SVN-PoppinsBold',
        fontSize: 30,
        color: '#68BD45',
        marginBottom: 50,
        lineHeight: 35
    },
    loginButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 350,
        backgroundColor: '#184A34',
        borderRadius: 16,
        borderColor: '#999100'
    },
    textLoginButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'SVN-PoppinsBold',
        lineHeight: 21
    },
    emailInputVal: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        width: 350,
        height: 25,
        lineHeight: 20
    },
    userIcon: {
        width: 20,
        height: 25,
        marginRight: 14
    },
    emailInput: {
        flexDirection: 'row',
        borderBottomColor: '#E3E8F1',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 30
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
        width: 20,
        height: 25,
        marginRight: 14
    },
    passwordInputVal: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        height: 25,
        lineHeight: 20
    },
    forgotPasswordText: {
        textAlign: 'right',
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        lineHeight: 17
    },
    forgotPasswordBox: {
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    registerBox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerTextPress: {
        fontSize: 14,
        color: '#68BD45',
        fontFamily: 'SVN-PoppinsBold',
        marginLeft: 3,
        lineHeight: 20
    },
    registerText: {
        color: '#68BD45',
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        lineHeight: 20
    }
});

export default Login;