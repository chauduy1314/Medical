import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { t } from 'i18next';

const cover = require('../../../Resources/Images/cover.png');

const NotificationPage = () => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
            title: 'Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.',
            time: '5phút',
            image: cover
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd97f63',
            title: 'Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.',
            time: '5phút',
            image: cover
        },
        {
            id: '58694a0f-3da1-471f-bd9671e29d72',
            title: 'Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.',
            time: '5phút',
            image: cover
        },
    ];

    const Item = () => (
        <View style={styles.notificationBox}>
            <Image source={cover} />
            <View style={{ marginLeft: 15 }}>
                <Text style={styles.notificationTitle}>
                    Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.
                </Text>
                <Text style={styles.notificationSubtitle}>
                    1phút
                </Text>
            </View>
        </View>
    )

    const renderItem = ({ item }) => (
        <Item {...item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={styles.newTitle}>
                        {t('new')}
                    </Text>
                    <View style={styles.newBox}>
                        <Image source={cover} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.notificationTitle}>
                                Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.
                            </Text>
                            <Text style={styles.notificationSubtitle}>
                                1phút
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.previousTitle}>
                        {t('previous')}
                    </Text>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NotificationPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        paddingHorizontal: 10,
        paddingTop: 50,
    },
    newTitle: {
        fontFamily: 'SVN-PoppinsBold',
        color: '#BFC6BD',
        fontSize: 14,
        marginBottom: 15
    },
    newBox: {
        flexDirection: 'row',
        width: '85%'
    },
    notificationTitle: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        lineHeight: 20
    },
    notificationSubtitle: {
        fontSize: 10,
        fontFamily: 'SVN-Poppins',
        marginTop: 5,
        color: '#AEAEB2'
    },
    previousTitle: {
        fontFamily: 'SVN-PoppinsBold',
        color: '#BFC6BD',
        fontSize: 14,
        marginVertical: 15
    },
    notificationBox: {
        flexDirection: 'row',
        width: '85%',
        marginBottom: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: '#F7F7F7',
        paddingBottom: 10
    }
});
