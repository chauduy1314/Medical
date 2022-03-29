import React, { useState } from 'react';
import {
    SafeAreaView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Keyboard,
    Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTranslation } from 'react-i18next';
import NetInfo from '@react-native-community/netinfo'
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux'

import { loggingSuccess } from '../../features/authentication/authenticationSlice';
import { getProfile } from '../../features/profile/profileSlice';
import { colors } from '../../styles';
import { hideIcon, userIcon, lockIcon } from '../../assets';
import AuthenticationService from '../../services/AuthenticationService';
import { AppAlert } from '../../helpers/AppAlert'

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const doLogin = async (data) => {
        Keyboard.dismiss()

        const networkState = await NetInfo.fetch()
        const isConnectedToInternet = networkState.isConnected
        if (!isConnectedToInternet) {
            return AppAlert.showNoInternetConnectionAlert()
        }

        try {
            await AuthenticationService.login(data.email, data.password)
                .then(() => dispatch(loggingSuccess()))
                .then(() => dispatch(getProfile()))
                .then(() =>
                    Alert.alert(
                        t('notification'),
                        t('loginSuccess'),
                        [
                            {
                                text: 'OK',
                                onPress: () => navigation.navigate('MainTab'),
                            }
                        ]
                    )
                )
        } catch (e) {
            let errorTitle = 'Login Message'
            const errorMsg = e.message
            return Alert.alert(
                errorTitle,
                errorMsg,
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('Ok Pressed'),
                    },
                ],
                { cancelable: false }
            )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1, paddingBottom: 16, paddingTop: '15%' }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.loginTitle}>
                        {t('login')}
                    </Text>
                    <View style={styles.emailInput}>
                        <Image source={userIcon} style={styles.userIcon} />
                        <Controller
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    placeholder={t('userAccountPlaceHolder')}
                                    style={styles.emailInputVal}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="email"
                        />
                    </View>
                    <View style={styles.passwordInput}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <Image source={lockIcon} style={styles.lockIcon} />
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        placeholder={t('userPasswordPlaceHolder')}
                                        style={styles.passwordInputVal}
                                        secureTextEntry={hidePassword}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="password"
                            />
                        </View>
                        <TouchableHighlight
                            onPress={() => { setHidePassword(!hidePassword) }}
                            underlayColor={colors.WHITE}
                        >
                            <Image source={hideIcon} style={{ marginRight: 5 }} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.forgotPasswordBox}>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor={colors.WHITE}
                        >
                            <Text style={styles.forgotPasswordText}>
                                {t('forgetPassword')}
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleSubmit(doLogin)}
                            underlayColor={colors.WHITE}
                        >
                            <Text style={styles.textLoginButton}>
                                {t('loginUppercase')}
                            </Text>
                        </TouchableOpacity>
                    </View >
                </View >
                <View style={styles.registerBox}>
                    <Text style={styles.registerText}>
                        {t('noAccount')}
                    </Text>
                    <TouchableHighlight
                        underlayColor={colors.WHITE}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.registerTextPress}>
                            {t('registerNow')}
                        </Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 36,
        flex: 1,
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
        borderColor: '#999100'
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
        color: colors.GREEN,
        fontFamily: 'SVN-PoppinsBold',
        marginLeft: 3,
        lineHeight: 20,
    },
    registerText: {
        color: colors.GREEN,
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        lineHeight: 20
    },
});

export default Login;