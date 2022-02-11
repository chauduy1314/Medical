import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import { useTranslation } from "react-i18next";

import Promotion from './components/Promotion';
import Feature from './components/Feature';
import New from './components/New';

const QR = require('../../../Resources/Images/QR.png');
const search = require('../../../Resources/Images/search.png');
const schedule = require('../../../Resources/Images/schedule.png');
const injection = require('../../../Resources/Images/injection.png');
const contact = require('../../../Resources/Images/contact.png');
const service = require('../../../Resources/Images/service.png');
const book = require('../../../Resources/Images/book.png');
const credential = require('../../../Resources/Images/credential.png');
const notification = require('../../../Resources/Images/notification.png');
const star = require('../../../Resources/Images/star.png');
const image = require('../../../Resources/Images/Image.png');
const vn = require('../../../Resources/Images/vn.png');
const world = require('../../../Resources/Images/world.png');
const newImage = require('../../../Resources/Images/new.png');

const Home = (props) => {
    const { t } = useTranslation()

    const DATA_PROMOTION = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: image
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: image
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: image
        },
    ];

    const DATA_FEATURE = [
        {
            id: 1,
            image: search,
            text: t('search')
        },
        {
            id: 2,
            image: schedule,
            text: t('examSchedule')
        },
        {
            id: 3,
            image: injection,
            text: t('injectionBook')
        },
        {
            id: 4,
            image: contact,
            text: t('contact')
        },
        {
            id: 5,
            image: service,
            text: t('serviceHighlight')
        },
        {
            id: 6,
            image: book,
            text: t('handBook')
        },
        {
            id: 7,
            image: credential,
            text: t('credentialCovid')
        }
    ]

    const DATA_NEW = [
        {
            id: 1,
            image: newImage,
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            time: '22:10, 08/02/2022'
        },
        {
            id: 2,
            image: newImage,
            title: 'Tiêu đề chương trình hot mới nhất tháng 13',
            time: '22:10, 08/02/2022'
        },
        {
            id: 3,
            image: newImage,
            title: 'Tiêu đề chương trình hot mới nhất tháng 14',
            time: '22:10, 08/02/2022'
        }
    ]

    const renderItemNew = ({ item }) => (
        <New {...item} />
    );

    const renderItemPromotion = ({ item }) => (
        <Promotion {...item} />
    );

    const renderItemFeature = ({ item }) => (
        <Feature {...item} />
    );

    return (
        <SafeAreaView style={{ backgroundColor: '#F8F8F8' }}>
            <StatusBar barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <View style={styles.homeTitleBox}>
                        <View >
                            <Text style={styles.homeTitle}>
                                Medical Check-up
                            </Text>
                            <Text style={styles.homeSubTitle}>
                                {t('subTitleApp')}
                            </Text>
                        </View>
                        <TouchableHighlight
                            style={styles.QRIcon}
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <Image source={QR} />
                        </TouchableHighlight>
                    </View>
                    <FlatList data={DATA_FEATURE} renderItem={renderItemFeature} pagingEnabled horizontal={true} scrollEnabled={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }} />
                    <View style={{ marginTop: 10 }}>
                        <View >
                            <Text style={styles.notificationTitle}>
                                {t('importantNotification')}
                            </Text>
                        </View>
                        <View style={styles.notificationBox}>
                            <View >
                                <Image source={notification} />
                            </View>
                            <View style={styles.notificationBoxContent}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                    <Image source={star} />
                                    <Text style={{ color: '#FFCB55', fontSize: 13, fontFamily: 'SVN-Poppins' }}>
                                        TIN MỚI
                                    </Text>
                                </View>
                                <View style={{ width: 170 }}>
                                    <Text style={styles.titlePromotion}>
                                        Tiêu đề chương trình hot mới nhất tháng 12
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View >
                            <Text style={styles.notificationTitle}>
                                {t('promotion')}
                            </Text>
                        </View>
                        <FlatList data={DATA_PROMOTION} renderItem={renderItemPromotion} pagingEnabled horizontal={true} scrollEnabled={true} showsHorizontalScrollIndicator={false} />
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#F7F7F7',
                            borderBottomWidth: 1.5,
                            marginVertical: 20
                        }}
                    />
                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.notificationTitle}>
                                {t('latestNews')}
                            </Text>
                            <Text style={{ color: '#68BD45', fontSize: 12, fontFamily: 'SVN-Poppins', lineHeight: 25 }}>
                                {t('more')}
                            </Text>
                        </View>
                        <View style={styles.newsBox}>
                            <View style={styles.newsBoxContent}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <View >
                                        <Text style={styles.newsBoxTitle}>
                                            Covid-19
                                        </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newsBoxSubTitle}>
                                            {t('source')}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={vn} style={{ marginRight: 10 }} />
                                            <Text style={styles.country}>
                                                {t('vietnam')}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <View style={{ marginRight: 20 }}>
                                                <Text >
                                                    {`1.778.976\n${t('infected')}`}
                                                </Text>
                                            </View>
                                            <View >
                                                <Text >
                                                    {`1.778.976\n${t('recover')}`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text >
                                                {`1.778.976\n${t('dead')}`}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ borderLeftWidth: 1.5, borderLeftColor: '#F7F7F7' }} />
                                    <View >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={world} style={{ marginRight: 10 }} />
                                            <Text style={styles.country}>
                                                {t('world')}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <View style={{ marginRight: 20 }}>
                                                <Text >
                                                    {`1.778.976\n${t('infected')}`}
                                                </Text>
                                            </View>
                                            <View >
                                                <Text >
                                                    {`1.778.976\n${t('recover')}`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text >
                                                {`1.778.976\n${t('dead')}`}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }} >
                        <FlatList data={DATA_NEW} style={{ height: 200, width: '100%' }} renderItem={renderItemNew} pagingEnabled horizontal={true} scrollEnabled={true} showsHorizontalScrollIndicator={false} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 40,
    },
    homeTitleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeTitle: {
        fontFamily: 'SVN-PoppinsBold',
        fontSize: 28,
        color: '#68BD45',
        marginBottom: 7
    },
    homeSubTitle: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#A4A4A6'
    },
    QRIcon: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    notificationTitle: {
        fontSize: 20,
        color: '#184A34',
        fontFamily: 'SVN-PoppinsSemiBold',
        marginBottom: 15,
        lineHeight: 25
    },
    notificationBox: {
        width: 250,
        backgroundColor: '#FFFFFF',
        height: 82,
        borderRadius: 14,
        flexDirection: 'row'
    },
    notificationBoxContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    newsBoxTitle: {
        color: '#184A34',
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 18
    },
    newsBoxSubTitle: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        color: '#A4A4A6',
        lineHeight: 20
    },
    newsBox: {
        width: '100%',
        height: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: 12
    },
    newsBoxContent: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    country: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 16,
        color: '#2B2B2B',
        lineHeight: 21
    }
});

export default Home;