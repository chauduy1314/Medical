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

const home = require('./Resources/Images/home.png');
const profile = require('./Resources/Images/profile.png');
const booking = require('./Resources/Images/booking.png');
const bell = require('./Resources/Images/bell.png');
const account = require('./Resources/Images/account.png');
const homeActive = require('./Resources/Images/homeActive.png');
const profileActive = require('./Resources/Images/profileActive.png');
const bellActive = require('./Resources/Images/bellActive.png');
const accountActive = require('./Resources/Images/accountActive.png');
const doublecheck = require('./Resources/Images/doublecheck.png');
const cancel = require('./Resources/Images/cancel.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
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
                        <Image source={focused ? homeActive : home} />
                    ),
                    tabBarActiveTintColor: '#68BD45',
                    tabBarLabel: t('home'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? profileActive : profile} />
                    ),
                    tabBarActiveTintColor: '#68BD45',
                    tabBarLabel: t('profile'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    }
                }}
            />
            <Tab.Screen
                name="Booking"
                component={Booking}
                options={{
                    tabBarIcon: () => (
                        <Image source={booking} style={{ marginBottom: 30 }} />
                    ),
                    tabBarActiveTintColor: '#68BD45',
                    tabBarLabel: t('booking'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    headerTitle: t('bookingHeader'),
                    headerTitleStyle: {
                        fontFamily: 'SVN-PoppinsSemiBold',
                        color: '#2B2B2B',
                        fontSize: 18
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => { }}
                            underlayColor='#FFFFFF'
                            style={{ justifyContent: 'center' }}
                        >
                            <Image source={cancel} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => { }}
                            underlayColor='#FFFFFF'
                            style={{ width: 80, height: 30, backgroundColor: '#68BD45', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}
                        >
                            <Text style={{ fontFamily: 'SVN-Poppins', color: '#FFFFFF', fontSize: 14 }}>
                                {t('booking')}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? bellActive : bell} />
                    ),
                    tabBarActiveTintColor: '#68BD45',
                    tabBarLabel: t('notification'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    headerTitle: t('notification'),
                    headerTitleStyle: {
                        fontFamily: 'SVN-PoppinsSemiBold',
                        color: '#2B2B2B',
                        fontSize: 18
                    },
                    headerShadowVisible: false,
                    headerRight: () => (
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#FFFFFF'
                        >
                            <Image source={doublecheck} style={{ marginRight: 20 }} />
                        </TouchableHighlight>
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? accountActive : account} />
                    ),
                    tabBarActiveTintColor: '#68BD45',
                    tabBarLabel: t('account'),
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                }}
            />
        </Tab.Navigator>
    )
}

const App = () => {
    const { t } = useTranslation()

    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerBackTitle: '', headerTitle: '', headerTintColor: '#BFC6BD', headerShadowVisible: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerBackTitle: '', headerTitle: '', headerTintColor: '#BFC6BD', headerShadowVisible: false }} />
                <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
                <Stack.Screen name="HealthProfile" component={HealthProfile} options={{
                    headerTitle: t('healthRecord'),
                    headerBackTitle: '',
                    headerTintColor: '#BFC6BD',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: 'SVN-PoppinsBold',
                        color: '#2B2B2B'
                    }
                }} />
                <Stack.Screen name="DetailExamination" component={DetailExamination} options={{
                    headerTitle: 'Thông Tin Khám',
                    headerBackTitle: '',
                    headerTintColor: '#BFC6BD',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: 'SVN-PoppinsBold',
                        color: '#2B2B2B'
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;