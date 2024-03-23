import { Image, ScrollView, StyleSheet, Text, View, ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorites = (props) => {
    const [listSPY, setlistSPY] = useState([
        {
            id: "1",
            tensanpham: "99999",
            gia: 4.2,
            hinhanh: "https://th.bing.com/th/id/R.fac7d49a78b1f2debbfdd8b2c814638e?rik=fk1Y3INr8ew0jQ&riu=http%3a%2f%2fimg.websosanh.vn%2fv2%2fusers%2froot_product%2fimages%2fdien-thoai-iphone-12-pro-max%2fg94ypm6w72qaz.jpg&ehk=LsWxaL8fNOQ4IUZjDdpRCO7VlWKesfUHtJOAPoEGtoc%3d&risl=&pid=ImgRaw&r=0",
            loai: 1,
            nguyenlieu: "16pro max",
            noidung: "16 pro max"
          },
          {
            id: "2",
            tensanpham: "name: 16pro max",
            gia: 4.2,
            hinhanh: "https://th.bing.com/th/id/OIP.GD8kVWgPSUk5MBMOxuqPvgAAAA?w=342&h=342&rs=1&pid=ImgDetMain",
            loai: 1,
            nguyenlieu: "16pro max",
            noidung: "16 pro max"
          },{
            id: "3",
            tensanpham: "99999",
            gia: 4.2,
            hinhanh: "https://th.bing.com/th/id/R.fac7d49a78b1f2debbfdd8b2c814638e?rik=fk1Y3INr8ew0jQ&riu=http%3a%2f%2fimg.websosanh.vn%2fv2%2fusers%2froot_product%2fimages%2fdien-thoai-iphone-12-pro-max%2fg94ypm6w72qaz.jpg&ehk=LsWxaL8fNOQ4IUZjDdpRCO7VlWKesfUHtJOAPoEGtoc%3d&risl=&pid=ImgRaw&r=0",
            loai: 1,
            nguyenlieu: "16pro max",
            noidung: "16 pro max"
          },
          {
            id: "4",
            tensanpham: "name: 16pro max",
            gia: 4.2,
            hinhanh: "https://th.bing.com/th/id/OIP.GD8kVWgPSUk5MBMOxuqPvgAAAA?w=342&h=342&rs=1&pid=ImgDetMain",
            loai: 1,
            nguyenlieu: "16pro max",
            noidung: "16 pro max"
          }
    ]);
    const [id, setid] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const ItemFlastList = ({ item }) => {
        // 
        return (
            <View style={{
                width: '100%',

                height: 500,
                borderRadius: 20,
                backgroundColor: 'gray',
                marginBottom: 10,
                justifyContent: 'flex-end',

            }}>
                <Image source={{ uri: item.hinhanh }} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                <TouchableOpacity style={styles.icon} >
                    <Ionicons
                        name={'heart-dislike'}
                        size={25}
                        color="red"
                    />
                </TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    width: '100%',
                    height: '60%',
                }}>
                    <View style={{
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        flex: 1,
                        backgroundColor: 'rgba(20, 25, 33, 0.5)',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{item.tensanpham}</Text>
                            <Text style={{ color: 'rgba(174, 174, 174, 1)', fontSize: 12 }} >{item.nguyenlieu}</Text>
                            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                                
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>4.5</Text>
                                <Text style={{ color: 'rgba(174, 174, 174, 1)', fontSize: 12 }}>(6,879)</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            
                            
                        </View>
                    </View>

                    <View style={{
                        flex: 1,
                        backgroundColor: '#21262E',
                        padding: 10,
                        borderBottomEndRadius: 15,
                        borderBottomStartRadius: 15
                    }}>
                        
                        <Text style={{
                            fontSize: 16,
                            color: '#fff'
                        }}>{item.noidung}</Text>
                    </View>
                </View>
            </View>
        )
    }


   

   

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}><Text>Header Favorite</Text></View>
            <SafeAreaView style={styles.contents}>

                {
                    (isLoading) ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList

                            data={listSPY}
                            renderItem={({ item }) => <ItemFlastList item={item} />}
                            keyExtractor={item => item.id}
                        />
                    )
                }
            </SafeAreaView>

        </SafeAreaView>
    )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        backgroundColor:'#E0EEE0',
        padding:10

    },
    header: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 30,
        height: 30,
        backgroundColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8
    },
    contents: {
        width: '100%',
        marginBottom: 60

    },
    icon: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 40,
        height: 40,
        backgroundColor: '#21262E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }


})