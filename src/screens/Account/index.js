import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, FlatList, ScrollView, StatusBar, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

import RadioButton from '../../../components/RadioButton';

const avatar = require('../../../Resources/Images/avatarAccount.png');
const edit = require('../../../Resources/Images/edit.png');
const logOut = require('../../../Resources/Images/logOut.png');
const moreInfo = require('../../../Resources/Images/moreInfo.png');
const setting = require('../../../Resources/Images/setting.png');
const next = require('../../../Resources/Images/next.png');
const language = require('../../../Resources/Images/language.png');
const security = require('../../../Resources/Images/security.png');
const support = require('../../../Resources/Images/support.png');
const permission = require('../../../Resources/Images/private.png');
const application = require('../../../Resources/Images/application.png');
const feedback = require('../../../Resources/Images/feedback.png');
const version = require('../../../Resources/Images/version.png');
const out = require('../../../Resources/Images/out.png');

const Account = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
            title: 'Hẹn lịch khám buổi sáng',
            subTitle: 'Thứ tư, ngày 22/02/2022 lúc 07:00 - 12:00'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd97f63',
            title: 'Hẹn lịch khám buổi sáng',
            subTitle: 'Thứ tư, ngày 22/02/2022 lúc 07:00 - 12:00'
        },
        {
            id: '58694a0f-3da1-471f-bd9671e29d72',
            title: 'Hẹn lịch khám buổi sáng',
            subTitle: 'Thứ tư, ngày 22/02/2022 lúc 07:00 - 12:00'
        },
    ];

    const Item = (props) => (
        <View style={styles.scheduleBoxContent}>
            <View style={styles.scheduleBoxRow}>
                <View style={{ borderLeftWidth: 2, borderColor: '#68BD45', height: 40 }} />
                <View style={styles.scheduleBoxColumn}>
                    <Text style={styles.scheduleBoxTitle}>
                        {props.title}
                    </Text>
                    <Text style={styles.scheduleBoxSubtitle}>
                        {props.subTitle}
                    </Text>
                </View>
                <View >
                    <Image source={moreInfo} />
                </View>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item {...item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerBox}>
                    <View >
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <Image source={logOut} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Image source={avatar} />
                        <Text style={styles.headerBoxText}>
                            Nguyễn Đặng Hoài Trang
                        </Text>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <Text style={styles.headerBoxID}>
                                039 8284 093
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <Image source={edit} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.scheduleBoxContainer}>
                    <Text style={styles.scheduleBoxText}>
                        {t('upComingAppointment')}
                    </Text>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.settingBox}>
                    <View style={{ paddingTop: 20, paddingLeft: 20 }}>
                        <View >
                            <Text style={styles.settingBoxTitle}>
                                {t('setting')}
                            </Text>
                        </View>
                        <View >
                            <View style={styles.settingBoxFirstItem}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={setting} />
                                    <Text style={styles.settingBoxItemText}>
                                        {t('accountSetting')}
                                    </Text>
                                </View>
                                <Image source={next} />
                            </View>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                            >
                                <View style={styles.settingBoxRow}>
                                    <View style={styles.settingBoxColumn}>
                                        <Image source={language} />
                                        <Text style={styles.settingBoxItemText}>
                                            {t('language')}
                                        </Text>
                                    </View>
                                    <View style={styles.settingBoxColumn}>
                                        <Text style={styles.language}>
                                            {currentLanguage === 'en' ? 'English' : 'Tiếng Việt'}
                                        </Text>
                                        <Image source={next} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.settingBoxRow}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={security} />
                                    <Text style={styles.settingBoxItemText}>
                                        {t('privacyPolicy')}
                                    </Text>
                                </View>
                                <Image source={next} />
                            </View>
                            <View style={styles.settingBoxRow}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={support} />
                                    <Text style={styles.settingBoxItemText}>
                                        {t('supportCenter')}
                                    </Text>
                                </View>
                                <Image source={next} />
                            </View>
                            <View style={styles.settingBoxLastItem}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={permission} />
                                    <Text style={styles.settingBoxItemText}>
                                        {t('privacy')}
                                    </Text>
                                </View>
                                <Image source={next} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxRow}>
                        <View style={styles.settingBoxColumn}>
                            <Image source={application} />
                            <Text style={styles.settingBoxItemText}>
                                {t('shareApp')}
                            </Text>
                        </View>
                        <Image source={next} />
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxRow}>
                        <View style={styles.settingBoxColumn}>
                            <Image source={feedback} />
                            <Text style={styles.settingBoxItemText}>
                                {t('applicationComment')}
                            </Text>
                        </View>
                        <Image source={next} />
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxRow}>
                        <View style={styles.settingBoxColumn}>
                            <Image source={version} />
                            <Text style={styles.settingBoxItemText}>
                                {t('appVersion')}
                            </Text>
                        </View>
                        <Image source={next} />
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxRow}>
                        <View style={styles.settingBoxColumn}>
                            <Image source={out} />
                            <Text style={styles.settingBoxItemText}>
                                {t('logout')}
                            </Text>
                        </View>
                        <Image source={next} />
                    </View>
                </View>
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalBox}>
                            <Text style={styles.modalBoxTitle}>
                                {t('selectLanguage')}
                            </Text>
                            <View style={styles.modalBoxRow}>
                                <TouchableOpacity
                                    onPress={() => {
                                        i18n.changeLanguage('en')
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <RadioButton selected={currentLanguage === 'en' ? true : false} />
                                        <Text style={styles.modalBoxText}>
                                            English
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        i18n.changeLanguage('vi')
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <RadioButton selected={currentLanguage === 'vi' ? true : false} />
                                        <Text style={styles.modalBoxText}>
                                            Việt Nam
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.buttonCancel}
                            >
                                <Text style={styles.buttonCancelText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        height: '100%'
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20
    },
    headerBoxText: {
        marginVertical: 10,
        fontSize: 16,
        fontFamily: 'SVN-PoppinsBold'
    },
    headerBoxID: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        color: '#68BD45'
    },
    scheduleBoxContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        paddingVertical: 20,
        paddingLeft: 20,
    },
    scheduleBoxText: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 16,
        color: '#2B2B2B'
    },
    settingBox: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 10
    },
    settingBoxTitle: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 16,
        color: '#2B2B2B',
        marginBottom: 15
    },
    settingBoxFirstItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderColor: '#F7F7F7',
        paddingVertical: 10,
        marginRight: 20
    },
    settingBoxItemText: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        marginLeft: 10
    },
    settingBoxColumn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderColor: '#F7F7F7',
        paddingVertical: 10,
        marginRight: 20,
        marginTop: 10
    },
    settingBoxLastItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderColor: '#F7F7F7',
        paddingTop: 10,
        marginRight: 20,
        marginTop: 10,
        paddingBottom: 20
    },
    language: {
        fontFamily: 'SVN-Poppins',
        fontSize: 13,
        color: '#BFC6BD'
    },
    boxContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        paddingLeft: 20,
        paddingVertical: 10
    },
    boxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginRight: 20
    },
    scheduleBoxContent: {
        width: 330,
        height: 70,
        backgroundColor: '#E8FFDF',
        borderRadius: 15,
        marginTop: 10,
        marginRight: 10
    },
    scheduleBoxRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    scheduleBoxColumn: {
        flexDirection: 'column',
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    scheduleBoxTitle: {
        fontFamily: 'SVN-Poppins',
        color: '#68BD45',
        fontSize: 16
    },
    scheduleBoxSubtitle: {
        fontFamily: 'SVN-Poppins',
        color: '#2B2B2B',
        fontSize: 13
    },
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalBox: {
        width: '95%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center'
    },
    modalBoxTitle: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 24,
        color: '#2B2B2B',
        textAlign: 'center'
    },
    modalBoxRow: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    modalBoxText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 16,
        marginLeft: 5
    },
    buttonCancel: {
        width: '30%',
        backgroundColor: 'red',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonCancelText: {
        fontFamily: 'SVN-PoppinsSemiBold', fontSize: 14
    }
});
