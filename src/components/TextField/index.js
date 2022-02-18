import React, { useEffect, useRef, useState } from 'react'
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Animated,
    Easing,
    TouchableWithoutFeedback,
} from 'react-native'

const TextField = (props) => {
    const {
        label,
        errorText,
        value,
        style,
        onBlur,
        onFocus,
        ...restOfProps
    } = props
    const [isFocused, setIsFocused] = useState(false)

    const inputRef = useRef(null)
    const focusAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start()
    }, [focusAnim, isFocused, value])

    return (
        <View style={style}>
            <TextInput
                style={styles.input}
                ref={inputRef}
                {...restOfProps}
                value={value}
                onBlur={(event) => {
                    setIsFocused(false)
                    onBlur?.(event)
                }}
                onFocus={(event) => {
                    setIsFocused(true)
                    onFocus?.(event)
                }}
            />
            <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
                <Animated.View
                    style={[
                        styles.labelContainer,
                        {
                            transform: [
                                {
                                    scale: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.75],
                                    }),
                                },
                                {
                                    translateY: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [24, 5],
                                    }),
                                },
                                {
                                    translateX: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [16, -10],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Text
                        style={styles.label}
                    >
                        {label}
                        {errorText ? '*' : ''}
                    </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
            {!!errorText && <Text style={styles.error}>{errorText}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontFamily: 'SVN-Poppins',
        fontSize: 16,
        marginTop: 10,
    },
    labelContainer: {
        position: 'absolute',
        paddingHorizontal: 8,
    },
    label: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#AEAEB2',
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 12,
        color: '#B00020',
        fontFamily: 'SVN-Poppins',
    },
})

export default TextField