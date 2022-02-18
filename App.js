import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableHighlight, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import LandingPage from './src/screens/LandingPage'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import ConnectedProfile from './src/screens/Profile/ConnectedProfile';
import HealthProfile from './src/screens/Profile/HealthProfile'
import Booking from './src/screens/Booking'
import NotificationPage from './src/screens/NotificationPage'
import Account from './src/screens/Account'
import HasNotification from './src/screens/NotificationPage/HasNotification'
import DetailExamination from './src/screens/Profile/DetailExamination';
import { colors } from './src/styles';
import { homeIcon, profileIcon, bookingIcon, bellIcon, accountIcon, homeActiveIcon, profileActiveIcon, bellActiveIcon, accountActiveIcon, doubleCheckIcon, cancelIcon } from './src/assets'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.WHITE,
    },
};

const MainTab = () => {
    const { t } = useTranslation()

    return (
        <Tab.Navigator
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? homeActiveIcon : homeIcon} />
                    ),
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabel: t('home'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    tabBarStyle: {
                        height: 60,
                        paddingBottom: 10,
                        marginBottom: 10
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? profileActiveIcon : profileIcon} />
                    ),
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabel: t('profile'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    tabBarStyle: {
                        height: 60,
                        paddingBottom: 10,
                        marginBottom: 10
                    }
                }}
            />
            <Tab.Screen
                name="Booking"
                component={Booking}
                options={{
                    tabBarIcon: () => (
                        <Image source={bookingIcon} style={{ marginBottom: 30 }} />
                    ),
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabel: t('booking'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    headerTitle: t('bookingHeader'),
                    headerTitleStyle: {
                        fontFamily: 'SVN-PoppinsSemiBold',
                        color: colors.BLACK,
                        fontSize: 18
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => { }}
                            underlayColor={colors.WHITE}
                            style={{ justifyContent: 'center' }}
                        >
                            <Image source={cancelIcon} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => { }}
                            underlayColor={colors.WHITE}
                            style={{ width: 80, height: 30, backgroundColor: colors.GREEN, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}
                        >
                            <Text style={{ fontFamily: 'SVN-Poppins', color: colors.WHITE, fontSize: 14 }}>
                                {t('booking')}
                            </Text>
                        </TouchableOpacity>
                    ),
                    tabBarStyle: {
                        height: 60,
                        paddingBottom: 10,
                        marginBottom: 10
                    }
                }}
            />
            < Tab.Screen
                name="Notification"
                component={HasNotification}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? bellActiveIcon : bellIcon} />
                    ),
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabel: t('notification'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    headerTitle: t('notification'),
                    headerTitleStyle: {
                        fontFamily: 'SVN-PoppinsSemiBold',
                        color: colors.BLACK,
                        fontSize: 18
                    },
                    headerShadowVisible: false,
                    headerRight: () => (
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor={colors.WHITE}
                        >
                            <Image source={doubleCheckIcon} style={{ marginRight: 20 }} />
                        </TouchableHighlight>
                    ),
                    tabBarStyle: {
                        height: 60,
                        paddingBottom: 10,
                        marginBottom: 10
                    }
                }}
            />
            < Tab.Screen
                name="Account"
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? accountActiveIcon : accountIcon} />
                    ),
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabel: t('account'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    tabBarStyle: {
                        height: 60,
                        paddingBottom: 10,
                        marginBottom: 10,
                    }
                }}
            />
        </Tab.Navigator >
    )
}

const App = () => {
    const { t } = useTranslation()

    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerBackTitle: '', headerTitle: '', headerTintColor: colors.GRAY, headerShadowVisible: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerBackTitle: '', headerTitle: '', headerTintColor: colors.GRAY, headerShadowVisible: false }} />
                <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
                <Stack.Screen name="HealthProfile" component={HealthProfile} options={{
                    headerTitle: t('healthRecord'),
                    headerBackTitle: '',
                    headerTintColor: colors.GRAY,
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: 'SVN-PoppinsBold',
                        color: colors.BLACK
                    }
                }} />
                <Stack.Screen name="DetailExamination" component={DetailExamination} options={{
                    headerTitle: 'Thông Tin Khám',
                    headerBackTitle: '',
                    headerTintColor: colors.GRAY,
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: 'SVN-PoppinsBold',
                        color: colors.BLACK
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;