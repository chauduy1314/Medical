import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, TextInput, ScrollView, StatusBar, TouchableOpacity, Animated } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { colors } from '../../styles';
import TimePicker from './components/TimePicker';
import { patient, orangeIcon, congIcon, birthdayIcon, downIcon } from '../../assets'
import TextField from '../../components/TextField'

const Booking = () => {
    const [date, setDate] = useState(moment(new Date()).format('DD/MM/YYYY'));
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [email, setEmail] = useState('')
    const { t } = useTranslation()

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(moment(date).format('DD/MM/YYYY'))
        hideDatePicker();
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View >
                    <Text style={styles.titleCustomer}>
                        {t('choosePatient')}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor={colors.WHITE}
                            >
                                <View style={styles.customerBox}>
                                    <Image source={patient} />
                                </View>
                            </TouchableHighlight>
                            <Text style={styles.customerName}>
                                Trang
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor={colors.WHITE}
                            >
                                <View style={styles.customerBox}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={orangeIcon} style={{ zIndex: 1 }} />
                                        <Image source={congIcon} style={{ zIndex: 2, position: 'absolute' }} />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <Text style={styles.customerName}>
                                {t('add')}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 14, marginVertical: 10 }}>
                        {t('infoBooker')}
                    </Text>
                    <View >
                        <TextInput style={styles.input} placeholder={t('name')} />
                        <View style={styles.inputSelectedContainer}>
                            <TextInput
                                style={styles.inputSelected}
                                autoCorrect={false}
                                placeholder={t('birthDay')}
                                value={date}
                                type='number'
                                onFocus={() => setDatePickerVisibility(true)}
                            />
                            <TouchableHighlight
                                onPress={() => setDatePickerVisibility(true)}
                                underlayColor={colors.WHITE}
                            >
                                <Image source={birthdayIcon} />
                            </TouchableHighlight>
                        </View>
                        <TextInput style={styles.input} placeholder={t('phone')} />
                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <View style={styles.inputSelectedContainer}>
                                <TextInput
                                    style={styles.inputSelected}
                                    autoCorrect={false}
                                    placeholder={t('place')}
                                    editable={false}
                                />
                                <Image source={downIcon} />
                            </View>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            display='inline'
                        />
                    </View>
                </View >
                <View style={{ marginTop: 10 }}>
                    <TimePicker />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <View style={styles.inputSelectedContainer}>
                            <TextInput
                                style={styles.inputSelected}
                                autoCorrect={false}
                                placeholder={t('department')}
                                editable={false}
                            />
                            <Image source={downIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <View style={styles.inputSelectedContainer}>
                            <TextInput
                                style={styles.inputSelected}
                                autoCorrect={false}
                                placeholder={t('specificDoctor')}
                                editable={false}
                            />
                            <Image source={downIcon} />
                        </View>
                    </TouchableOpacity>
                    <TextInput style={styles.reason} multiline />
                </View>
            </KeyboardAwareScrollView >
        </SafeAreaView >
    );
};

export default Booking;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        height: '100%',
        backgroundColor: colors.WHITE
    },
    titleCustomer: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 14,
        marginVertical: 20,
        lineHeight: 20
    },
    input: {
        height: 60,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
        backgroundColor: '#F3F3F3',
        borderColor: colors.WHITE,
    },
    inputSelectedContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        height: 55,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
        backgroundColor: '#F3F3F3',
        borderColor: colors.WHITE,
        alignItems: 'center'
    },
    inputSelected: {
        flex: 1
    },
    reason: {
        height: 90,
        borderColor: colors.WHITE,
        backgroundColor: '#F3F3F3',
        borderRadius: 14,
        padding: 10,
        borderWidth: 1,
    },
    customerBox: {
        borderRadius: 150 / 2,
        borderWidth: 1.5,
        borderColor: "red",
        padding: 2,
        marginBottom: 5
    },
    customerName: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 10,
        color: colors.BLACK
    }
});
