import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const datetime = require('../../../../Resources/Images/datetime.png')
const sun = require('../../../../Resources/Images/sun.png')
const night = require('../../../../Resources/Images/night.png')

const TimePicker = () => {
    const [date, setDate] = useState(moment(new Date()).format('DD/MM/YYYY'));
    const [show, setShow] = useState(false);

    const handleConfirm = (selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(moment(currentDate).format('DD/MM/YYYY'))
        setShow(false)
    };

    const onCancel = () => {
        setShow(false)
    }

    return (
        <View >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 14 }}>
                    Thời gian đến: *
                </Text>
                <TouchableHighlight
                    onPress={() => setShow(!show)}
                    underlayColor='#F8F8F8'
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={datetime} />
                        <Text style={{ fontSize: 12, fontFamily: 'SVN-Poppins', color: '#68BD45', marginLeft: 5 }}>
                            {date}
                        </Text>
                    </View>
                </TouchableHighlight>
                <DateTimePickerModal
                    isVisible={show}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={onCancel}
                    display='inline'
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.day} >
                        T2
                    </Text>
                    <Text style={styles.date}>
                        12
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.day} >
                        T3
                    </Text>
                    <Text style={styles.date}>
                        13
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.day} >
                        T4
                    </Text>
                    <Text style={styles.date}>
                        14
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.day} >
                        T5
                    </Text>
                    <Text style={styles.date}>
                        15
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.day} >
                        T6
                    </Text>
                    <Text style={styles.date}>
                        16
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.day} >
                        T7
                    </Text>
                    <Text style={styles.date}>
                        17
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.day} >
                        CN
                    </Text>
                    <Text style={styles.date}>
                        18
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '48%' }}>
                    <TouchableHighlight
                        style={{ borderRadius: 8, backgroundColor: '#68BD45', height: 40, justifyContent: 'center' }}
                    >
                        <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', paddingLeft: 10 }}>
                                <Image source={sun} />
                                <Text style={{ fontSize: 13, color: '#FFFFFF', marginLeft: 5, fontFamily: 'SVN-PoppinsSemiBold' }}>
                                    Buổi sáng
                                </Text>
                            </View>
                            <Text style={{ fontSize: 13, color: '#FFFFFF' }}>
                                07h-12h
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ width: '48%' }}>
                    <TouchableHighlight
                        style={{ borderRadius: 8, backgroundColor: '#68BD45', height: 40, justifyContent: 'center' }}
                    >
                        <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', paddingLeft: 10 }}>
                                <Image source={sun} />
                                <Text style={{ fontSize: 13, color: '#FFFFFF', marginLeft: 5, fontFamily: 'SVN-PoppinsSemiBold' }}>
                                    Buổi sáng
                                </Text>
                            </View>
                            <Text style={{ fontSize: 13, color: '#FFFFFF' }}>
                                07h-12h
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <TextInput style={styles.reason} />
            </View>
        </View>
    );
};

export default TimePicker;

const styles = StyleSheet.create({
    day: {
        fontFamily: 'SVN-Poppins',
        fontSize: 16,
        color: '#BFC6BD'
    },
    date: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#2B2B2B',
        marginTop: 10
    },
    reason: {
        height: 90,
        borderColor: '#FFFFFF',
        backgroundColor: '#F3F3F3',
        borderRadius: 14
    }
});
