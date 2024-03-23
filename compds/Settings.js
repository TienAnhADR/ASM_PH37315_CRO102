import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'

const Setting = () => {
    return (
        <View style={styles.container}>
            

            <View>

                <TouchableOpacity onPress={''} style={styles.setting}>
                    <View style={styles.his}>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/history.png')} />
                        <Text style={styles.text}>History</Text>
                    </View>
                    
                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/next.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={''} style={styles.setting}>
                    <View style={styles.his}>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/profile.png')} />
                    <Text style={styles.text}>Personal Details</Text>
                    </View>
                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/next.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={''} style={styles.setting}>
                    <View style={styles.his}>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/location.png')} />
                        <Text style={styles.text}>Address</Text>
                    </View>
                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/next.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={''} style={styles.setting}>
                    <View style={styles.his}>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/credit-card.png')} />
                        <Text style={styles.text}>Payment Method</Text>
                    </View>
                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/next.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={''} style={styles.setting}>
                    <View style={styles.his}>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/information.png')} />
                        <Text style={styles.text}>About</Text>
                    </View>
                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/next.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={''} style={styles.setting}>
                    <View style={styles.his}>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/supportive.png')} />
                        <Text style={styles.text}>Help</Text>
                    </View>
                    <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/next.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={''} style={styles.logout}>
                    <View>
                        <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../src/imgs/setting/shutdown.png')} />
                    </View>
                    <Text style={styles.text}>Logout</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#E0EEE0',
        flex:1

    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 10
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20,
       

    },
    logout: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 20,
    },
    his:{
        flexDirection: 'row',
    }

})