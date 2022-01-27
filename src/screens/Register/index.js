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

const hideIcon = require('../../../Resources/Images/hide.png');
const lockIcon = require('../../../Resources/Images/lock.png');
const userIcon = require('../../../Resources/Images/user.png');


const Register = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <View style={{ height: '95%' }}>
                    <Text style={styles.loginTitle}>
                        Đăng Ký
                    </Text>
                    <View style={styles.emailInput}>
                        <View >
                            <Image source={userIcon} style={styles.userIcon} />
                        </View>
                        <TextInput
                            placeholder="Email hoặc điện thoại"
                            style={styles.emailInputVal}
                        />
                    </View>
                    <View style={styles.passwordInput}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Image source={lockIcon} style={styles.lockIcon} />
                            <TextInput
                                placeholder="Mật khẩu"
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
                    <View style={styles.passwordInput}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Image source={lockIcon} style={styles.lockIcon} />
                            <TextInput
                                placeholder="Mật khẩu"
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
                    <View >
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => { }}
                            underlayColor='#FFFFFF'
                        >
                            <Text style={styles.textLoginButton}>
                                ĐĂNG KÝ
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.registerBox}>
                    <View >
                        <Text style={styles.registerText}>
                            Bạn đã có tài khoản?
                        </Text>
                    </View>
                    <View >
                        <TouchableHighlight
                            underlayColor='#FFFFFF'
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.registerTextPress}>
                                Đăng nhập
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
        marginBottom: 50
    },
    loginButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 350,
        backgroundColor: '#184A34',
        borderRadius: 16,
        borderColor: '#999100',
        marginTop: 10
    },
    textLoginButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'SVN-PoppinsBold',
    },
    emailInputVal: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        width: 350,
        height: 25
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
        marginBottom: 30
    },
    lockIcon: {
        width: 20,
        height: 25,
        marginRight: 14
    },
    passwordInputVal: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        width: 300,
        height: 25
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
        color: '#68BD45',
        fontFamily: 'SVN-PoppinsBold',
        marginLeft: 3
    },
    registerText: {
        color: '#68BD45',
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
    }
});

export default Register;