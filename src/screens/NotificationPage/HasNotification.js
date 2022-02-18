import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, SectionList } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '../../styles';
import { cover } from '../../assets'
import Alert from './components/Alert';

const NotificationPage = () => {
    const { t } = useTranslation()

    const DATA = [
        {
            title: t('new'),
            data: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
                    title: 'Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.',
                    time: '5phút',
                    image: cover
                }
            ]
        },
        {
            title: t('previous'),
            data: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
                    title: 'Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.',
                    time: '5phút',
                    image: cover
                },
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
                    title: 'Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.',
                    time: '6phút',
                    image: cover
                },
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
                    title: 'Bạn đã đặt lịch khám buổi sáng, 22/2/2022 thành công.',
                    time: '7phút',
                    image: cover
                }
            ]
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Alert {...item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default NotificationPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        height: '100%',
        paddingHorizontal: 10,
        paddingTop: 50,
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
        color: colors.GRAY_BOLD
    },
    notificationBox: {
        flexDirection: 'row',
        width: '85%',
        marginBottom: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: colors.WHITE,
        paddingBottom: 10
    },
    header: {
        fontFamily: 'SVN-PoppinsBold',
        color: colors.GRAY,
        fontSize: 14,
        marginVertical: 15
    },
});
