import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginComd = (props) => {
    const { navigation } = props;
    const [userName, setuserName] = useState('');
    const [passWord, setpassWord] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const doLogin = () => {
        if (userName == "") {
            alert("chưa nhập user name");
            return;
        }
        if (passWord == "") {
            alert("chưa nhập password");
            return;
        }
        navigation.navigate('Tabs')
        
    }
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
  return (
    <SafeAreaView style={styles.container}>
                <View style={styles.box1}>
                    <Image source={{uri:'https://inkythuatso.com/uploads/images/2021/12/logo-fpt-polytechnic-inkythuatso-09-12-57-46.jpg'}}
                        style={{ width: 200, height: 200, resizeMode:"contain" }} />
                    
                    
                </View>
                <View>
                    <View style={styles.from}>
                        <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor="gray" onChangeText={txt=>setuserName(txt)} />

                        <View style={styles.input}>
                            <TextInput style={{ flex: 1, color: 'gray', }} placeholder='Password' placeholderTextColor="gray" secureTextEntry={!passwordVisible} onChangeText={txt=>setpassWord(txt)}/>
                            <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
                                <Ionicons
                                    name={passwordVisible ? 'eye-off' : 'eye'}
                                    size={24}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity style={styles.button} onPress={doLogin}>
                            <Text style={{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button2}>
                            <Image source={require('../src/imgs/gg.png')} />
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} >Sign in with Google</Text>
                            <Text>{ }</Text>
                        </TouchableOpacity>
                        <Text onPress={() => { navigation.navigate('RegisterComnd') }} style={{ color: 'gray', margin: 20 }}>Don’t have account? Click <Text style={{ color: '#D17842' }}>Register</Text></Text>
                        <Text style={{ color: 'gray', margin: 20 }}>Forget Password? Click <Text style={{ color: '#D17842' }}>Reset </Text></Text>
                    </View>
                </View>
            </SafeAreaView>
  )
}

export default LoginComd

const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent:'center'
        },
        box1: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: '#fff',
            fontSize: 26,
            fontWeight: 'bold'
        },

        input: {
            margin: 10,
            width: 350,
            height: 45,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center', 
            color: "gray"
        },
        from: {
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
        button: {
            height: 57,
            width: 350,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D17842',
            borderRadius: 15,
            marginTop: 50,
            marginBottom: 10
        },
        button2: {
            flexDirection: 'row',
            backgroundColor: '#D17842',
            height: 57,
            width: 350,
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 15,
            margin: 10
        },
        icon: {
            marginEnd: 10
        }
})