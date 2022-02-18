import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { colors } from '../../../styles';
import { sunIcon, sunIconActive, nightIcon, nightIconActive, addTimeIcon } from '../../../assets'

const TimePicker = () => {
    const [dateSelected, setDateSelected] = useState(new Date())
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState('')
    const [displayBorder, setDisplayBorder] = useState('otherDay')
    const arrayDay = ['today', 'tomorrow', 'nextTwoDay', 'otherDay']
    const { t } = useTranslation()

    const handleConfirm = (selectedDate) => {
        setDateSelected(selectedDate)
        setDisplayBorder('selectedDay')
        setShow(false)
    };

    const onCancel = () => {
        setShow(false)
    }

    const getCurrentDate = () => {
        return moment().format('D')
    }

    const getNextDate = () => {
        return moment().add(1, 'days').format('D')
    }

    const getNextTwoDate = () => {
        return moment().add(2, 'days').format('D')
    }

    const getMonth = () => {
        return moment().format('M')
    }

    const getMonthSelected = () => {
        return moment(dateSelected).format('M')
    }

    const getDateSelected = () => {
        return moment(dateSelected).format('D')
    }

    return (
        <View >
            <View style={styles.timeTitle}>
                <Text style={styles.timeTitleText}>
                    {t('timeComing')}
                </Text>
                <DateTimePickerModal
                    isVisible={show}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={onCancel}
                    display='inline'
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        setDateSelected(moment())
                        setDisplayBorder('today')
                    }}
                    style={styles.timePickerBox}
                >
                    <View style={displayBorder === 'today' ? styles.timePickerBorder : styles.timePicker}>
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
                <TouchableOpacity
                    onPress={() => {
                        setDateSelected(moment().add(1, 'days'))
                        setDisplayBorder('tomorrow')
                    }}
                    style={styles.timePickerBox}
                >
                    <View style={displayBorder === 'tomorrow' ? styles.timePickerBorder : styles.timePicker}>
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
                <TouchableOpacity
                    onPress={() => {
                        setDateSelected(moment().add(2, 'days'))
                        setDisplayBorder('nextTwoDay')
                    }}
                    style={styles.timePickerBox}
                >
                    <View style={displayBorder === 'nextTwoDay' ? styles.timePickerBorder : styles.timePicker}>
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
                    {
                        _.includes(arrayDay, displayBorder) ? (
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 70 }}>
                                <View >
                                    <Image source={addTimeIcon} />
                                </View>
                                <Text style={styles.timeText} >
                                    {t('otherDay')}
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.timePickerBorder}>
                                <Text style={styles.timeNumber} >
                                    {`Th${getMonthSelected()}`}
                                </Text>
                                <Text style={styles.timeNumber} >
                                    {getDateSelected()}
                                </Text>
                                <Text style={styles.timeText} >
                                    {t('meetingDate')}
                                </Text>
                            </View>
                        )
                    }
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
                                <Image source={selected === 'firstBox' ? sunIconActive : sunIcon} style={{ marginRight: 10 }} />
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
                                <Image source={selected === 'secondBox' ? nightIconActive : nightIcon} style={{ marginRight: 10 }} />
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
        color: colors.GRAY
    },
    date: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: colors.BLACK,
        marginTop: 10
    },
    timeNumber: {
        fontFamily: 'SVN-Poppins',
        color: colors.BLACK,
        fontSize: 16,
        lineHeight: 20
    },
    timeText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 11,
        color: colors.GRAY_BOLD
    },
    selectedTimeBox: {
        backgroundColor: colors.GREEN,
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
        color: colors.WHITE,
        fontFamily: 'SVN-PoppinsSemiBold',
        lineHeight: 17
    },
    unselectedTimeText: {
        color: colors.GRAY,
        fontSize: 12,
        fontFamily: 'SVN-PoppinsSemiBold',
        lineHeight: 17
    },
    selectedTimeSubText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 10,
        color: colors.WHITE,
    },
    unselectedTimeSubText: {
        color: colors.GRAY,
        fontFamily: 'SVN-Poppins',
        fontSize: 10,
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
        color: colors.GREEN,
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
    },
    timePickerBorder: {
        borderColor: colors.GREEN,
        borderWidth: 1.5,
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70
    }
});
