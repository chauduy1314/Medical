import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, FlatList, ScrollView, StatusBar } from 'react-native';
import React from 'react';

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

const Account = () => {

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
                        Lịch khám sắp tới:
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
                                Cài đặt
                            </Text>
                        </View>
                        <View >
                            <View style={styles.settingBoxFirstItem}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={setting} />
                                    <Text style={styles.settingBoxItemText}>
                                        Thiết lập tài khoản
                                    </Text>
                                </View>
                                <Image source={next} />
                            </View>
                            <View style={styles.settingBoxRow}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={language} />
                                    <Text style={styles.settingBoxItemText}>
                                        Ngôn ngữ
                                    </Text>
                                </View>
                                <View style={styles.settingBoxColumn}>
                                    <Text style={styles.language}>
                                        Tiếng Việt
                                    </Text>
                                    <Image source={next} />
                                </View>
                            </View>
                            <View style={styles.settingBoxRow}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={security} />
                                    <Text style={styles.settingBoxItemText}>
                                        Chính sách bảo mật
                                    </Text>
                                </View>
                                <Image source={next} />
                            </View>
                            <View style={styles.settingBoxRow}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={support} />
                                    <Text style={styles.settingBoxItemText}>
                                        Trung tâm hỗ trợ
                                    </Text>
                                </View>
                                <Image source={next} />
                            </View>
                            <View style={styles.settingBoxLastItem}>
                                <View style={styles.settingBoxColumn}>
                                    <Image source={permission} />
                                    <Text style={styles.settingBoxItemText}>
                                        Quyền riêng tư
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
                                Chia sẻ ứng dụng
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
                                Góp ý ứng dụng
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
                                Phiên bản ứng dụng
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
                                Đăng xuất
                            </Text>
                        </View>
                        <Image source={next} />
                    </View>
                </View>
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
    }
});
