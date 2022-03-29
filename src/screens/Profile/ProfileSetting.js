import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import { updateProfile, getProfile } from '../../features/profile/profileSlice';
import { avatarAccount } from '../../assets/'
import { colors } from '../../styles'
import Input from '../../components/Input';
import RadioButton from '../../components/RadioButton';

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const ProfileSetting = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const userProfile = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
        defaultValues: {
            fullName: userProfile.profile.fullName,
            DOB: moment(userProfile.profile.DOB).format('DD/MM/YYYY'),
            phoneNumber: '',
            email: userProfile.profile.email,
            gender: userProfile.profile.gender
        }
    });

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setValue("dayOfBirth", moment(date).format('DD/MM/YYYY'))
        hideDatePicker();
    };

    const submit = (data) => {
        console.log('data', data)
        dispatch(updateProfile(data))
        dispatch(getProfile())
            .then(() => navigation.navigate('MainTab'))
    }

    return (
        <SafeAreaView style={{ marginTop: '5%', paddingHorizontal: 20, height: '100%' }}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>
                    <Image source={avatarAccount} />
                    <Text style={{ fontFamily: 'SVN-PoppinsBold', fontSize: 18, color: colors.GREEN_BOLD, marginVertical: 10 }}>
                        Edit Your Profile
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                error={errors.fullName}
                                errorText={errors.fullName?.message}
                                placeholder={t('name')}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="fullName"
                        rules={{
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        }}
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('birthDay')}
                                error={errors.DOB}
                                errorText={errors.DOB?.message}
                                onChangeText={onChange}
                                value={value}
                                onFocus={() => setDatePickerVisibility(true)}
                            />
                        )}
                        name="DOB"
                        rules={{
                            required: {
                                value: true,
                                message: 'Birthday is required'
                            }
                        }}
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('phone')}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="phoneNumber"
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Email"
                                onChangeText={onChange}
                                value={value}
                                error={errors.email}
                                errorText={errors.email?.message}
                            />
                        )}
                        name="email"
                        rules={{
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: EMAIL_REGEX,
                                message: 'Email is invalid'
                            }
                        }}
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('gender')}
                                onChangeText={onChange}
                                value={value}
                                onFocus={() => setModalVisible(true)}
                                error={errors.gender}
                                errorText={errors.gender?.message}
                            />
                        )}
                        name="gender"
                        rules={{
                            required: {
                                value: true,
                                message: 'Gender is required'
                            }
                        }}
                    />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        display='inline'
                    />
                    <Modal
                        visible={modalVisible}
                        animationType="fade"
                        transparent
                    >
                        <View style={styles.modalBackground}>
                            <View style={styles.modalBox}>
                                <Text style={styles.modalBoxTitle}>
                                    Select your gender
                                </Text>
                                <View style={styles.modalBoxRow}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setValue("gender", "male")
                                            setModalVisible(false)
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <RadioButton selected={getValues("gender") === 'male' ? true : false} />
                                            <Text style={styles.modalBoxText}>
                                                Male
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setValue("gender", "female")
                                            setModalVisible(false)
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <RadioButton selected={getValues("gender") === 'female' ? true : false} />
                                            <Text style={styles.modalBoxText}>
                                                Female
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={styles.buttonCancel}
                                >
                                    <Text style={styles.buttonCancelText}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <View>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleSubmit(submit)}
                            underlayColor={colors.WHITE}
                        >
                            <Text style={styles.textLoginButton}>
                                {t('save')}
                            </Text>
                        </TouchableOpacity>
                    </View >
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ProfileSetting

const styles = StyleSheet.create({
    input: {
        height: 60,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
        backgroundColor: '#F3F3F3',
        borderColor: colors.WHITE,
    },
    loginButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: '100%',
        backgroundColor: colors.GREEN_BOLD,
        borderRadius: 16,
        borderColor: '#999100',
        marginTop: 20
    },
    textLoginButton: {
        color: colors.WHITE,
        fontSize: 16,
        fontFamily: 'SVN-PoppinsBold',
        lineHeight: 21
    },
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalBox: {
        width: '95%',
        backgroundColor: colors.WHITE,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center'
    },
    modalBoxTitle: {
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 24,
        color: colors.BLACK,
        textAlign: 'center'
    },
    modalBoxRow: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    modalBoxText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 16,
        marginLeft: 5
    },
    buttonCancel: {
        width: '30%',
        backgroundColor: 'red',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonCancelText: {
        fontFamily: 'SVN-PoppinsSemiBold', fontSize: 14
    }
})