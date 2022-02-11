import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { t } from 'i18next';

const datetime = require('../../../../Resources/Images/datetime.png')
const sun = require('../../../../Resources/Images/sun.png')
const night = require('../../../../Resources/Images/night.png')
const addTime = require('../../../../Resources/Images/addTime.png')

const TimePicker = () => {
    const [date, setDate] = useState(moment(new Date()).format('DD/MM/YYYY'));
    const [show, setShow] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selected, setSelected] = useState('')

    const handleConfirm = (selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(moment(currentDate).format('DD/MM/YYYY'))
        setShow(false)
    };

    const onCancel = () => {
        setShow(false)
    }

    const getCurrentDate = () => {
        return currentDate.getDate()
    }

    const getNextDate = () => {
        return currentDate.getDate() + 1
    }

    const getNextTwoDate = () => {
        return currentDate.getDate() + 2
    }

    const getMonth = () => {
        return currentDate.getMonth() + 1
    }

    return (
        <View >
            <View style={styles.timeTitle}>
                <Text style={styles.timeTitleText}>
                    {t('timeComing')}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={datetime} />
                    <Text style={styles.timeShow}>
                        {date}
                    </Text>
                </View>
                <DateTimePickerModal
                    isVisible={show}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={onCancel}
                    display='inline'
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity onPress={() => { }} style={styles.timePickerBox}>
                    <View style={styles.timePicker}>
                        <Text style={styles.timeNumber} >
                            {`Th${getMonth()}`}
                        </Text>
                        <Text style={styles.timeNumber} >
                            {getCurrentDate()}
                        </Text>
                        <Text style={styles.timeText} >
                            {t('today')}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.timePickerBox}>
                    <View style={styles.timePicker}>
                        <Text style={styles.timeNumber} >
                            {`Th${getMonth()}`}
                        </Text>
                        <Text style={styles.timeNumber} >
                            {getNextDate()}
                        </Text>
                        <Text style={styles.timeText} >
                            {t('tomorrow')}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.timePickerBox}>
                    <View style={styles.timePicker}>
                        <Text style={styles.timeNumber} >
                            {`Th${getMonth()}`}
                        </Text>
                        <Text style={styles.timeNumber} >
                            {getNextTwoDate()}
                        </Text>
                        <Text style={styles.timeText} >
                            {t('nextTwoDay')}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setShow(!show)}
                    style={styles.timePickerBox}
                >
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 70 }}>
                        <View >
                            <Image source={addTime} />
                        </View>
                        <Text style={styles.timeText} >
                            {t('otherDay')}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '48%' }}>
                    <TouchableHighlight
                        onPress={() => { setSelected('firstBox') }}
                        style={selected === 'firstBox' ? styles.selectedTimeBox : styles.unselectedTimeBox}
                    >
                        <View style={styles.dayBox}>
                            <View style={styles.dayBoxColumn}>
                                <Image source={sun} style={{ marginRight: 10 }} />
                                <Text style={selected === 'firstBox' ? styles.selectedTimeText : styles.unselectedTimeText}>
                                    {t('morning')}
                                </Text>
                            </View>
                            <Text style={selected === 'firstBox' ? styles.selectedTimeSubText : styles.unselectedTimeSubText}>
                                07h-12h
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ width: '48%' }}>
                    <TouchableHighlight
                        onPress={() => { setSelected('secondBox') }}
                        style={selected === 'secondBox' ? styles.selectedTimeBox : styles.unselectedTimeBox}
                    >
                        <View style={styles.dayBox}>
                            <View style={styles.dayBoxColumn}>
                                <Image source={night} style={{ marginRight: 10 }} />
                                <Text style={selected === 'secondBox' ? styles.selectedTimeText : styles.unselectedTimeText}>
                                    {t('afternoon')}
                                </Text>
                            </View>
                            <Text style={selected === 'secondBox' ? styles.selectedTimeSubText : styles.unselectedTimeSubText}>
                                13h-17h
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
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
    timeNumber: {
        fontFamily: 'SVN-Poppins',
        color: '#2B2B2B',
        fontSize: 16,
        lineHeight: 20
    },
    timeText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 11,
        color: '#AEAEB2'
    },
    selectedTimeBox: {
        backgroundColor: '#68BD45',
        borderRadius: 8,
        height: 40,
        justifyContent: 'center'
    },
    unselectedTimeBox: {
        backgroundColor: '#F3F3F3',
        borderRadius: 8,
        height: 40,
        justifyContent: 'center'
    },
    selectedTimeText: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'SVN-PoppinsSemiBold',
        lineHeight: 17
    },
    unselectedTimeText: {
        color: '#BFC6BD',
        fontSize: 12,
        fontFamily: 'SVN-PoppinsSemiBold',
        lineHeight: 17
    },
    selectedTimeSubText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 10,
        color: '#FFFFFF',
        marginRight: 10
    },
    unselectedTimeSubText: {
        color: '#BFC6BD',
        fontFamily: 'SVN-Poppins',
        fontSize: 10,
        marginRight: 10
    },
    timeTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeTitleText: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 14
    },
    timeShow: {
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        color: '#68BD45',
        marginLeft: 5
    },
    timePickerBox: {
        width: '24%',
        backgroundColor: '#F3F3F3',
        borderRadius: 12
    },
    timePicker: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70
    },
    dayBox: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    dayBoxColumn: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: 10
    }
});
