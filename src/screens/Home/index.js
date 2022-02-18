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
import { colors } from '../../styles';
import { QRIcon, searchIcon, injectionIcon, scheduleIcon, contactIcon, serviceIcon, bookIcon, credentialIcon, starIcon, vnIcon, worldIcon, notificationPicture, promotionPicOne, promotionPicTwo, newPicOne, newPicTwo } from '../../assets'

const Home = (props) => {
    const { t } = useTranslation()

    const DATA_PROMOTION = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: promotionPicOne
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: promotionPicTwo
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: promotionPicOne
        },
    ];

    const DATA_FEATURE = [
        {
            id: 1,
            image: searchIcon,
            text: t('search')
        },
        {
            id: 2,
            image: scheduleIcon,
            text: t('examSchedule')
        },
        {
            id: 3,
            image: injectionIcon,
            text: t('injectionBook')
        },
        {
            id: 4,
            image: contactIcon,
            text: t('contact')
        },
        {
            id: 5,
            image: serviceIcon,
            text: t('serviceHighlight')
        },
        {
            id: 6,
            image: bookIcon,
            text: t('handBook')
        },
        {
            id: 7,
            image: credentialIcon,
            text: t('credentialCovid')
        }
    ]

    const DATA_NEW = [
        {
            id: 1,
            image: newPicOne,
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            time: '22:10, 08/02/2022'
        },
        {
            id: 2,
            image: newPicTwo,
            title: 'Tiêu đề chương trình hot mới nhất tháng 13',
            time: '22:10, 08/02/2022'
        },
        {
            id: 3,
            image: newPicOne,
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
        <SafeAreaView style={{ backgroundColor: '#FCFCFC' }}>
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
                            <Image source={QRIcon} />
                        </TouchableHighlight>
                    </View>
                    <FlatList data={DATA_FEATURE} renderItem={renderItemFeature} pagingEnabled horizontal={true} scrollEnabled={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }} />
                    <View style={{ marginTop: 22 }}>
                        <View >
                            <Text style={styles.notificationTitle}>
                                {t('importantNotification')}
                            </Text>
                        </View>
                        <View style={[styles.notificationBox, styles.shadowProp]}>
                            <Image source={notificationPicture} />
                            <View style={styles.notificationBoxContent}>
                                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                    <Image source={starIcon} />
                                    <Text style={{ color: '#FFCB55', fontSize: 12, fontFamily: 'SVN-Poppins', lineHeight: 18, marginLeft: 5 }}>
                                        TIN MỚI
                                    </Text>
                                </View>
                                <View style={{ width: 170 }}>
                                    <Text style={styles.titleNotification}>
                                        Tiêu đề chương trình hot mới nhất tháng 12
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#F7F7F7',
                            borderBottomWidth: 1.5,
                            marginVertical: 20
                        }}
                    />
                    <View >
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
                            <Text style={{ color: colors.GREEN, fontSize: 12, fontFamily: 'SVN-Poppins', lineHeight: 25 }}>
                                {t('more')}
                            </Text>
                        </View>
                        <View style={[styles.newsBox, styles.shadowProp]}>
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
                                            <Image source={vnIcon} style={{ marginRight: 10 }} />
                                            <Text style={styles.country}>
                                                {t('vietnam')}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <View style={{ marginRight: 20 }}>
                                                <Text style={[styles.newsValue, { color: '#F23E2C' }]}>
                                                    1.778.976
                                                </Text>
                                                <Text style={styles.newsText}>
                                                    {t('infected')}
                                                </Text>
                                            </View>
                                            <View >
                                                <Text style={[styles.newsValue, { color: '#56D23F' }]}>
                                                    1.778.976
                                                </Text>
                                                <Text style={styles.newsText}>
                                                    {t('recover')}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={[styles.newsValue, { color: '#353535' }]}>
                                                1.778.976
                                            </Text>
                                            <Text style={styles.newsText}>
                                                {t('dead')}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ borderLeftWidth: 1.5, borderLeftColor: '#F7F7F7' }} />
                                    <View >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={worldIcon} style={{ marginRight: 10 }} />
                                            <Text style={styles.country}>
                                                {t('world')}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <View style={{ marginRight: 20 }}>
                                                <Text style={[styles.newsValue, { color: '#F23E2C' }]}>
                                                    1.778.976
                                                </Text>
                                                <Text style={styles.newsText}>
                                                    {t('infected')}
                                                </Text>
                                            </View>
                                            <View >
                                                <Text style={[styles.newsValue, { color: '#56D23F' }]}>
                                                    1.778.976
                                                </Text>
                                                <Text style={styles.newsText}>
                                                    {t('recover')}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={[styles.newsValue, { color: '#353535' }]}>
                                                1.778.976
                                            </Text>
                                            <Text style={styles.newsText}>
                                                {t('dead')}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }} >
                        <FlatList data={DATA_NEW} renderItem={renderItemNew} pagingEnabled horizontal={true} scrollEnabled={true} showsHorizontalScrollIndicator={false} />
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
        color: colors.GREEN,
        marginBottom: 7
    },
    homeSubTitle: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#A4A4A6',
        lineHeight: 19
    },
    QRIcon: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    notificationTitle: {
        fontSize: 20,
        color: colors.GREEN_BOLD,
        fontFamily: 'SVN-PoppinsSemiBold',
        marginBottom: 15,
        lineHeight: 25
    },
    notificationBox: {
        width: 265,
        backgroundColor: colors.WHITE,
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
        color: colors.GREEN_BOLD,
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 18
    },
    newsBoxSubTitle: {
        fontSize: 10,
        fontFamily: 'SVN-Poppins',
        color: '#A4A4A6',
        lineHeight: 15
    },
    newsBox: {
        width: '100%',
        backgroundColor: colors.WHITE,
        borderRadius: 12,
        paddingBottom: 16
    },
    newsBoxContent: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    country: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 16,
        color: colors.BLACK,
        lineHeight: 21
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    newsValue: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'SVN-Poppins'
    },
    newsText: {
        fontSize: 12,
        lineHeight: 17,
        fontFamily: 'SVN-Poppins',
        color: colors.GRAY
    },
    titleNotification: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        lineHeight: 19,
        color: colors.BLACK
    }
});

export default Home;