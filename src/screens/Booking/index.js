import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, TextInput, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import TimePicker from './components/TimePicker';

const avatar = require('../../../Resources/Images/patient.png');
const orange = require('../../../Resources/Images/orange.png');
const cong = require('../../../Resources/Images/cong.png');
const birthday = require('../../../Resources/Images/birthday.png');

const Booking = () => {
    const [date, setDate] = useState(moment(new Date()).format('DD/MM/YYYY'));
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(moment(date).format('DD/MM/YYYY'))
        hideDatePicker();
    };

    return (
        <SafeAreaView style={{ marginHorizontal: 10, height: '100%', backgroundColor: '#FFFFFF' }}>
            <StatusBar barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View >
                    <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 14, marginVertical: 20 }}>
                        Chọn khách hàng muốn khám:
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor='#FFFFFF'
                            >
                                <View style={{ borderRadius: 150 / 2, borderWidth: 1, borderColor: "red", padding: 2, marginBottom: 5 }}>
                                    <Image source={avatar} />
                                </View>
                            </TouchableHighlight>
                            <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 10, color: '#2B2B2B' }}>
                                Trang
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor='#FFFFFF'
                            >
                                <View style={{ borderRadius: 150 / 2, borderWidth: 1.5, borderColor: "red", padding: 2, marginBottom: 5 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={orange} style={{ zIndex: 1 }} />
                                        <Image source={cong} style={{ zIndex: 2, position: 'absolute' }} />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 10, color: '#2B2B2B' }}>
                                Thêm
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 14, marginVertical: 10 }}>
                        Thông tin người đặt lịch: *
                    </Text>
                    <View >
                        <TextInput style={styles.input} placeholder='Họ tên' />
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                autoCorrect={false}
                                placeholder='Ngày sinh'
                                value={date}
                                type='number'
                                onFocus={() => setDatePickerVisibility(true)}
                            />
                            <TouchableHighlight
                                onPress={() => setDatePickerVisibility(true)}
                                underlayColor='#FFFFFF'
                            >
                                <Image source={birthday} />
                            </TouchableHighlight>
                        </View>
                        <TextInput style={styles.input} placeholder='Số điện thoại' />
                        <TextInput style={styles.input} placeholder='Địa điểm' />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            display='inline'
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TimePicker />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Booking;

const styles = StyleSheet.create({
    input: {
        height: 55,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
        backgroundColor: '#F3F3F3',
        borderColor: '#FFFFFF',
    },
    passwordContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        height: 55,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
        backgroundColor: '#F3F3F3',
        borderColor: '#FFFFFF',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1
    }
});
