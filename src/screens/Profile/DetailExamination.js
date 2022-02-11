import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';

const bookmark = require('../../../Resources/Images/bookmark.png')
const next = require('../../../Resources/Images/next.png')
const newSpaper = require('../../../Resources/Images/newSpaper.png')

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
                        <Image source={bookmark} />
                        <Text style={styles.categoryBoxText}>
                            Bạn Đã Khám
                        </Text>
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            1. Vital Signs
                        </Text>
                        <Image source={next} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            2. Khám tim mạch
                        </Text>
                        <Image source={next} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            3. Lab Test
                        </Text>
                        <Image source={next} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            4. Ear Test
                        </Text>
                        <Image source={next} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            5. Far Vison
                        </Text>
                        <Image source={next} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            6. Color Blind
                        </Text>
                        <Image source={next} />
                    </View>
                    <View style={styles.categoryBoxRow}>
                        <Text style={styles.categoryBoxLabel}>
                            7. Refractive Error
                        </Text>
                        <Image source={next} />
                    </View>
                </View>
                <View style={styles.serviceBox}>
                    <View style={styles.serviceBoxTitle}>
                        <Image source={newSpaper} />
                        <Text style={styles.serviceBoxText}>
                            Chỉ Định Dịch Vụ
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.serviceBoxLabel}>
                            1. Thuốc
                        </Text>
                        <Text style={styles.serviceBoxValue}>
                            {`Abc 5mg ( UCB thuỵ sĩ)\nnĐơn giá: 56,000đ`}
                        </Text>
                    </View>
                    <View >
                        <Text style={styles.serviceBoxLabel}>
                            2. Xét nghiệm
                        </Text>
                        <Text style={styles.serviceBoxValue}>
                            {`Dengue Virus NS1 \nnĐơn giá: 56,000đ`}
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
        backgroundColor: '#FFFFFF',
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
    },
    infoBoxLabel: {
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        color: '#AEAEB2'
    },
    infoBoxValue: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#2B2B2B',
        textAlign: 'right',
        width: '45%',
        lineHeight: 22
    },
    categoryBox: {
        backgroundColor: '#FFFFFF',
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
        color: '#2B2B2B',
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
        color: '#2B2B2B'
    },
    serviceBox: {
        backgroundColor: '#FFFFFF',
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
        color: '#2B2B2B',
        marginLeft: 5
    },
    serviceBoxLabel: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#2B2B2B'
    },
    serviceBoxValue: {
        fontFamily: 'SVN-Poppins',
        fontSize: 12,
        color: '#AEAEB2',
        marginVertical: 5
    }
});
