import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    ImageBackground,
    Picker
} from 'react-native';
import {Input, Button, ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';

const inbound = [
    {
        title: 'Print Shipping Mark'
    }, {
        title: 'Recieve'
    }, {
        title: 'Put-away'
    }, {
        title: 'QC Route'
    }, {
        title: 'Move Pallet'
    }, {
        title: 'Re-Print Shipping Mark'
    }
];

const outbound = [
    {
        title: 'Pick'
    }, {
        title: 'Pick Document'
    }, {
        title: 'QC Load'
    }, {
        title: 'Truck Unload'
    }
];

const stock = [
    {
        title: 'Check Stock'
    }, {
        title: 'Check Document'
    }, {
        title: 'Search Stock'
    }
];

const transfer = [
    {
        title: 'Transfer Status'
    }
];

export default class MenuScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/blue-polygonal.jpg')}
                    resizeMode="stretch"
                    style={styles.container}>

                    <View style={styles.banner}>
                        <Text style={styles.bannerTitle}>
                            Menu
                        </Text>
                    </View>

                    <ScrollView style={styles.scrollMenu}>
                        <Text style={styles.groupText}>Inbound</Text>
                        <View>
                            {inbound.map((item, i) => (<ListItem
                                key={i}
                                title={item.title}
                                bottomDivider={true}
                                leftIcon={{
                                name: 'access-time'
                            }}
                                rightIcon={{
                                name: 'keyboard-arrow-right'
                            }}/>))}
                        </View>
                        <Text style={styles.groupText}>Outbound</Text>
                        <View>
                            {outbound.map((item, i) => (<ListItem
                                key={i}
                                title={item.title}
                                bottomDivider={true}
                                leftIcon={{
                                name: 'access-time'
                            }}
                                rightIcon={{
                                name: 'keyboard-arrow-right'
                            }}/>))}
                        </View>
                        <Text style={styles.groupText}>Stock Balance</Text>
                        <View>
                            {stock.map((item, i) => (<ListItem
                                key={i}
                                title={item.title}
                                bottomDivider={true}
                                leftIcon={{
                                name: 'access-time'
                            }}
                                rightIcon={{
                                name: 'keyboard-arrow-right'
                            }}/>))}
                        </View>
                        <Text style={styles.groupText}>Transfer</Text>
                        <View>
                            {transfer.map((item, i) => (<ListItem
                                key={i}
                                title={item.title}
                                bottomDivider={true}
                                leftIcon={{
                                name: 'access-time'
                            }}
                                rightIcon={{
                                name: 'keyboard-arrow-right'
                            }}/>))}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '200',
        color: '#fff',
        marginVertical: 8,
        marginRight: 5
    },
    scrollMenu: {
        flex: 1,
        backgroundColor: '#eff0f3'
    },
    groupText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    }
});
