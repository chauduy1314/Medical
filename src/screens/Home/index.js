import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    StatusBar,
    TouchableHighlight
} from 'react-native';

const QR = require('../../../Resources/Images/QR.png');
const search = require('../../../Resources/Images/search.png');
const schedule = require('../../../Resources/Images/schedule.png');
const injection = require('../../../Resources/Images/injection.png');
const contact = require('../../../Resources/Images/contact.png');
const service = require('../../../Resources/Images/service.png');
const book = require('../../../Resources/Images/book.png');
const credential = require('../../../Resources/Images/credential.png');
const notification = require('../../../Resources/Images/notification.png');
const star = require('../../../Resources/Images/star.png');
const image = require('../../../Resources/Images/Image.png');
const gift = require('../../../Resources/Images/gift.png');
const vn = require('../../../Resources/Images/vn.png');
const world = require('../../../Resources/Images/world.png');
const newImage = require('../../../Resources/Images/new.png');
const time = require('../../../Resources/Images/time.png');

const Home = (props) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: image
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: image
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            subTitle: 'Mô tả ngắn chương trình hot mới nhất tháng 12',
            image: image
        },
    ];

    const DATA_NEW = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            image: newImage,
            time: '22:10, 08/02/2022'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd97f63',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            image: newImage,
            time: '22:10, 08/02/2022'
        },
        {
            id: '58694a0f-3da1-471f-bd96-71e29d72',
            title: 'Tiêu đề chương trình hot mới nhất tháng 12',
            image: newImage,
            time: '22:10, 08/02/2022'
        }
    ]

    const Promotion = (props) => (
        <View style={{ width: 180 }}>
            <View style={{ marginBottom: 10 }}>
                <Image source={props.image} />
            </View>
            <Text style={styles.titlePromotion}>
                {props.title}
            </Text>
            <Text style={styles.subTitlePromotion}>
                {props.subTitle}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 5 }}>
                    <Image source={gift} />
                </View>
                <View >
                    <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', color: '#68BD45', fontSize: 12 }}>
                        Nhận ưu đãi
                    </Text>
                </View>
            </View>
        </View>
    );

    const NewComponent = (props) => {
        return (
            <View >
                <Image source={props.image} />
                <View style={{ width: 150, color: '#2B2B2B', fontFamily: 'SVN-Poppins', fontSize: 14, lineHeight: 20, marginVertical: 10 }}>
                    <Text >
                        {props.title}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={time} style={{ marginRight: 5 }} />
                    <Text style={{ fontFamily: 'SVN-Poppins', fontSize: 12, color: '#68BD45' }}>
                        {props.time}
                    </Text>
                </View>
            </View>
        )
    };

    const renderItemNew = ({ item }) => {
        <NewComponent {...item} />
    }

    const renderItemPromotion = ({ item }) => (
        <Promotion {...item} />
    );

    return (
        <SafeAreaView style={{ backgroundColor: '#F8F8F8' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <StatusBar barStyle='dark-content' />
                    <View style={styles.homeTitleBox}>
                        <View >
                            <Text style={styles.homeTitle}>
                                Medical Check-up
                            </Text>
                            <Text style={styles.homeSubTitle}>
                                Ứng dụng hỗ trợ theo dõi sức khoẻ
                            </Text>
                        </View>
                        <TouchableHighlight
                            style={styles.QRIcon}
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <Image source={QR} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <View style={styles.homeFeatureBox}>
                                <View >
                                    <Image source={search} />
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={styles.homeFeatureText}>
                                        Tìm kiếm
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <View style={styles.homeFeatureBox}>
                                <View >
                                    <Image source={schedule} />
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={styles.homeFeatureText}>
                                        Lịch khám
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <View style={styles.homeFeatureBox}>
                                <View >
                                    <Image source={injection} />
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={styles.homeFeatureText}>
                                        Sổ tiêm
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <View style={styles.homeFeatureBox}>
                                <View >
                                    <Image source={contact} />
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={styles.homeFeatureText}>
                                        Liên hệ
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <View style={styles.homeFeatureBox}>
                                <View >
                                    <Image source={service} />
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={styles.homeFeatureText}>
                                        {`Dịch vụ\nnổi bật`}
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <View style={styles.homeFeatureBox}>
                                <View >
                                    <Image source={book} />
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={styles.homeFeatureText}>
                                        {`Cẩm nang\nsức khoẻ`}
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='#F8F8F8'
                        >
                            <View style={styles.homeFeatureBox}>
                                <View >
                                    <Image source={credential} />
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={styles.homeFeatureText}>
                                        {`Chứng nhận\nngừa Covid`}
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View >
                            <Text style={styles.notificationTitle}>
                                Thông báo quan trọng
                            </Text>
                        </View>
                        <View style={styles.notificationBox}>
                            <View >
                                <Image source={notification} />
                            </View>
                            <View style={styles.notificationBoxContent}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                    <Image source={star} />
                                    <Text style={{ color: '#FFCB55', fontSize: 13, fontFamily: 'SVN-Poppins' }}>
                                        TIN MỚI
                                    </Text>
                                </View>
                                <View style={{ width: 170 }}>
                                    <Text style={styles.titlePromotion}>
                                        Tiêu đề chương trình hot mới nhất tháng 12
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View >
                            <Text style={styles.notificationTitle}>
                                Chương trình ưu đãi
                            </Text>
                        </View>
                        <FlatList data={DATA} renderItem={renderItemPromotion} pagingEnabled horizontal={true} scrollEnabled={true} showsHorizontalScrollIndicator={false} />
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#F7F7F7',
                            borderBottomWidth: 1.5,
                            marginVertical: 20
                        }}
                    />
                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.notificationTitle}>
                                Tin tức mới nhất
                            </Text>
                            <Text style={{ color: '#68BD45', fontSize: 12, fontFamily: 'SVN-Poppins' }}>
                                Xem thêm
                            </Text>
                        </View>
                        <View style={styles.newsBox}>
                            <View style={styles.newsBoxContent}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <View >
                                        <Text style={styles.newsBoxTitle}>
                                            Covid-19
                                        </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newsBoxSubTitle}>
                                            Nguồn: Bộ y tế Việt nam
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={vn} style={{ marginRight: 10 }} />
                                            <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 16, color: '#2B2B2B' }}>
                                                Việt Nam
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <View style={{ marginRight: 20 }}>
                                                <Text >
                                                    {`1.778.976\nCa nhiễm`}
                                                </Text>
                                            </View>
                                            <View >
                                                <Text >
                                                    {`1.778.976\nPhục hồi`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text >
                                                {`1.778.976\nTử vong`}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ borderLeftWidth: 1.5, borderLeftColor: '#F7F7F7' }} />
                                    <View >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={world} style={{ marginRight: 10 }} />
                                            <Text style={{ fontFamily: 'SVN-PoppinsSemiBold', fontSize: 16, color: '#2B2B2B' }}>
                                                Thế Giới
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <View style={{ marginRight: 20 }}>
                                                <Text >
                                                    {`1.778.976\nCa nhiễm`}
                                                </Text>
                                            </View>
                                            <View >
                                                <Text >
                                                    {`1.778.976\nPhục hồi`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text >
                                                {`1.778.976\nTử vong`}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', marginRight: 10 }}>
                        <NewComponent title='Tiêu đề chương trình hot mới nhất tháng 12' image={newImage} time='22:10, 08/02/2022' />
                        <NewComponent title='Tiêu đề chương trình hot mới nhất tháng 12' image={newImage} time='22:10, 08/02/2022' />
                        <NewComponent title='Tiêu đề chương trình hot mới nhất tháng 12' image={newImage} time='22:10, 08/02/2022' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 40,
    },
    homeTitleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeTitle: {
        fontFamily: 'SVN-PoppinsBold',
        fontSize: 28,
        color: '#68BD45',
        marginBottom: 7
    },
    homeSubTitle: {
        fontFamily: 'SVN-Poppins',
        fontSize: 14,
        color: '#A4A4A6'
    },
    QRIcon: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    homeFeatureBox: {
        alignItems: 'center',
        width: 90,
    },
    homeFeatureText: {
        fontFamily: 'SVN-Poppins',
        fontSize: 13,
        lineHeight: 18,
        textAlign: 'center'
    },
    notificationTitle: {
        fontSize: 20,
        color: '#184A34',
        fontFamily: 'SVN-PoppinsSemiBold',
        marginBottom: 15
    },
    notificationBox: {
        width: 250,
        backgroundColor: '#FFFFFF',
        height: 82,
        borderRadius: 14,
        flexDirection: 'row'
    },
    notificationBoxContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    titlePromotion: {
        color: '#2B2B2B',
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        lineHeight: 18
    },
    subTitlePromotion: {
        fontSize: 12,
        fontFamily: 'SVN-Poppins',
        color: '#A4A4A6',
        marginVertical: 7,
        lineHeight: 18
    },
    newsBoxTitle: {
        color: '#184A34',
        fontFamily: 'SVN-PoppinsSemiBold',
        fontSize: 18
    },
    newsBoxSubTitle: {
        fontSize: 14,
        fontFamily: 'SVN-Poppins',
        color: '#A4A4A6'
    },
    newsBox: {
        width: '100%',
        height: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: 12
    },
    newsBoxContent: {
        paddingHorizontal: 10,
        paddingTop: 20
    }
});

export default Home;