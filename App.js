import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, TouchableHighlight } from 'react-native';

import LandingPage from './src/screens/LandingPage'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import HealthProfile from './src/screens/Profile/HealthProfile'
import Booking from './src/screens/Booking'
import NotificationPage from './src/screens/NotificationPage'
import Account from './src/screens/Account'
import HasNotification from './src/screens/NotificationPage/HasNotification'

const home = require('./Resources/Images/home.png');
const profile = require('./Resources/Images/profile.png');
const booking = require('./Resources/Images/booking.png');
const bell = require('./Resources/Images/bell.png');
const account = require('./Resources/Images/account.png');
const doublecheck = require('./Resources/Images/doublecheck.png');


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
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image source={home} />
                    ),
                    tabBarActiveTintColor: '#BFC6BD',
                    tabBarLabel: 'Trang chủ',
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
                    tabBarIcon: () => (
                        <Image source={profile} />
                    ),
                    tabBarActiveTintColor: '#BFC6BD',
                    tabBarLabel: 'Hồ sơ',
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
                    tabBarActiveTintColor: '#BFC6BD',
                    tabBarLabel: 'Đặt Lịch',
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    headerTitle: 'Đặt Lịch Hẹn',
                    headerTitleStyle: {
                        fontFamily: 'SVN-PoppinsSemiBold',
                        color: '#2B2B2B',
                        fontSize: 18
                    },
                    headerShadowVisible: false,
                }}
            />
            <Tab.Screen
                name="Notification"
                component={HasNotification}
                options={{
                    tabBarIcon: () => (
                        <Image source={bell} />
                    ),
                    tabBarActiveTintColor: '#BFC6BD',
                    tabBarLabel: 'Thông Báo',
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                    headerTitle: 'Thông Báo',
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
                    tabBarIcon: () => (
                        <Image source={account} />
                    ),
                    tabBarActiveTintColor: '#BFC6BD',
                    tabBarLabel: 'Tài Khoản',
                    tabBarLabelStyle: {
                        fontFamily: 'SVN-Poppins'
                    },
                }}
            />
        </Tab.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerBackTitle: '', headerTitle: '', headerTintColor: '#BFC6BD', headerShadowVisible: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerBackTitle: '', headerTitle: '', headerTintColor: '#BFC6BD', headerShadowVisible: false }} />
                <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
                <Stack.Screen name="HealthProfile" component={HealthProfile} options={{
                    headerTitle: 'Hồ sơ sức khoẻ',
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