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
import {Input, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/blue-polygonal.jpg')}
                    resizeMode="stretch"
                    style={styles.container}>

                    <View style={styles.banner}>
                        <Text style={styles.bannerTitle}>
                            WAREHOUSE & FULFILLMENT PLATFORM (Cross-Docking)
                        </Text>
                    </View>

                    <Image source={require('../assets/login-logo.png')} style={styles.loginImage}/>
                    <ScrollView style={styles.loginForm}>
                        <View style={styles.formInput}>
                            <Input
                                placeholder='USERNAME'
                                leftIcon={< Icon name = 'user' size = {
                                24
                            } />}/>
                        </View>
                        <View style={styles.formInput}>
                            <Input
                                placeholder='PASSWORD'
                                secureTextEntry={true}
                                leftIcon={< Icon name = 'key' size = {
                                24
                            } />}/>
                        </View>
                        <View style={styles.formInput}>
                            <Picker
                                style={{
                                height: 50,
                                width: win.width - 50
                            }}>
                                <Picker.Item label="WMS STD CROSSDOCK ANDROID" value="WMS"/>
                            </Picker>
                        </View>
                        <View style={styles.formInput}>
                            <Button
                                title='LOGIN'
                                buttonStyle={styles.formButton}
                                onPress={() => this.props.navigation.navigate('Menu')}/>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        // backgroundColor: '#22a1ff',
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
    loginImage: {
        width: win.width,
        height: 282 * win.width / 675
    },
    loginForm: {
        flex: 1
    },
    formInput: {
        flex: 1,
        width: win.width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    formButton: {
        backgroundColor: '#003b67'
    }
});
