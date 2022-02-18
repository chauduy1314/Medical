import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';

import { colors } from '../../styles';
import { bookmarkIcon, nextIcon, newSpaperIcon } from '../../assets'

const DetailExamination = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.infoCustomerBox}>
                    <View style={styles.infoBoxRow}>
                        <Text style={styles.infoBoxLabel}>
                            Ngày nhận kết quả:
                        </Text>
                        <Text style={styles.infoBoxValue}>
                            10:22, 04/01/2022
                        </Text>
                    </View>
                    <View style={styles.infoBoxRow}>
                        <Text style={styles.infoBoxLabel}>
                            Dịch vụ khám:
                        </Text>
                        <Text style={styles.infoBoxValue}>
                            Khám tổng quát
                        </Text>
                    </View>
                    <View style={styles.infoBoxRow}>
                        <Text style={styles.infoBoxLabel}>
                            Bác sĩ:
                        </Text>
                        <Text style={styles.infoBoxValue}>
                            Nguyễn Minh A
                        </Text>
                    </View>
                    <View style={styles.infoBoxRow}>
                        <Text style={styles.infoBoxLabel}>
                            Lý do khám:
                        </Text>
                        <Text style={styles.infoBoxValue}>
                            Đau đầu, ói, chóng mặt, mất ngủ thường xuyên
                        </Text>
                    </View>
                    <View style={styles.infoBoxRow}>
                        <Text style={styles.infoBoxLabel}>
                            Chuẩn đoán:
                        </Text>
                        <Text style={styles.infoBoxValue}>
                            Viêm gan B, huyết áp cao, loãng xương
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={styles.infoBoxLabel}>
                            Lời dặn của Bác sĩ:
                        </Text>
                        <Text style={styles.infoBoxValue}>
                            __
                        </Text>
                    </View>
                </View>
                <View style={styles.categoryBox}>
                    <View style={styles.categoryBoxTitle}>
                        <Image source={bookmarkIcon} />
                        <Text style={styles.categoryBoxText}>
                            Bạn Đã Khám
                        </Text>
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            1. Vital Signs
                        </Text>
                        <Image source={nextIcon} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            2. Khám tim mạch
                        </Text>
                        <Image source={nextIcon} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            3. Lab Test
                        </Text>
                        <Image source={nextIcon} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            4. Ear Test
                        </Text>
                        <Image source={nextIcon} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            5. Far Vison
                        </Text>
                        <Image source={nextIcon} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            6. Color Blind
                        </Text>
                        <Image source={nextIcon} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            7. Refractive Error
                        </Text>
                        <Image source={nextIcon} />
                    </View>
                </View>
                <View style={styles.serviceBox}>
                    <View style={styles.serviceBoxTitle}>
                        <Image source={newSpaperIcon} />
                        <Text style={styles.serviceBoxText}>
                            Chỉ Định Dịch Vụ
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.serviceBoxLabel}>
                            1. Thuốc
                        </Text>
                        <Text style={styles.serviceBoxValue}>
                            Abc 5mg ( UCB thuỵ sĩ) Đơn giá: 56,000đ
                        </Text>
                    </View>
                    <View >
                        <Text style={styles.serviceBoxLabel}>
                            2. Xét nghiệm
                        </Text>
                        <Text style={styles.serviceBoxValue}>
                            Dengue Virus NS1 Đơn giá: 56,000đ
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailExamination;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        height: '100%'
    },
    infoCustomerBox: {
        backgroundColor: colors.WHITE,
        marginVertical: 10,
        padding: 10
    },
    infoBoxRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#F7F7F7',
        borderBottomWidth: 1.5,
        paddingBottom: 10,
        marginTop: 10,
        alignItems: 'flex-start'
    },
    infoBoxLabel: {
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        color: colors.GRAY_BOLD,
        lineHeight: 22
    },
    infoBoxValue: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: colors.BLACK,
        textAlign: 'right',
        width: '45%',
        lineHeight: 22,
    },
    categoryBox: {
        backgroundColor: colors.WHITE,
        padding: 10,
        paddingBottom: 20
    },
    categoryBoxTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    categoryBoxText: {
        fontFamily: 'SVN-PoppinsSemiBold',
        color: colors.BLACK,
        marginLeft: 5
    },
    categoryBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#F7F7F7',
        borderBottomWidth: 1.5,
        paddingBottom: 10,
        marginTop: 10
    },
    categoryBoxLabel: {
        flex: 1,
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: colors.BLACK
    },
    serviceBox: {
        backgroundColor: colors.WHITE,
        marginVertical: 10,
        padding: 10
    },
    serviceBoxTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    serviceBoxText: {
        fontFamily: 'SVN-PoppinsSemiBold',
        color: colors.BLACK,
        marginLeft: 5
    },
    serviceBoxLabel: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: colors.BLACK
    },
    serviceBoxValue: {
        fontFamily: 'SVN-Poppins',
        fontSize: 12,
        color: colors.GRAY_BOLD,
        marginVertical: 5,
        width: 140,
        lineHeight: 24
    }
});
