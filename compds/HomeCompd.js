import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

const Home = (props) => {
  const { navigation } = props;
  const [isLoading, setisLoading] = useState(false);
  const [isLoading2, setisLoading2] = useState(false);
  const [listSP, setlistSP] = useState([
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
  const [listSP2, setlistSP2] = useState(listSP);


  const ItemFlastList = ({ item }) => {
    return (
      <TouchableOpacity  style={{
        width: 200,
        height: 250,

      }}>
        <LinearGradient colors={['rgba(38, 43, 51, 0.5)', 'rgba(38, 43, 51, 1)']} style={{

          flex: 1,
          marginEnd: 10,
          borderRadius: 20,
          padding: 10
        }}>
          <View style={{
            flex: 3,
            width: '100%',

          }} >
            <Image style={{ flex: 1, borderRadius: 15, }} source={{ uri: item.hinhanh }} />
            <View style={{
              position: 'absolute',
              top: 0, right: 0,
              width: 40, height: 20,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderBottomLeftRadius: 15,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
              borderTopEndRadius: 15
            }}>
              <Ionicons
                name={'star'}
                size={10}
                color="#D17842"
              />
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#fff' }}>4.5</Text>
            </View>
          </View>

          <View style={{
            flex: 1,
            marginTop: 10
          }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13 }}>{item.tensanpham}</Text>
            <Text style={{ color: '#fff', fontSize: 9 }}>{item.nguyenlieu}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#D17842', fontWeight: 'bold' }}>$ </Text>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.gia}</Text>
            </View>

            <TouchableOpacity style={{ width: 26, height: 26, borderRadius: 7, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons
                name={'add'}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableOpacity>

    );
  }
  return (


    <SafeAreaView style={styles.container}>


      <View style={styles.content_seach}>
        <Text style={{ fontSize: 28, color: '#000', width: '50%', fontWeight: 'bold' }}>Wellcome to T-Mobile</Text>
        <TextInput style={styles.input} placeholder='Tìm kiếm ' placeholderTextColor={'#fff'} />
      </View>
      <ScrollView style={styles.contents}>
        {
          (isLoading) ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              style={styles.Flastlist}
              horizontal data={listSP}
              keyExtractor={(item_sp) => { return item_sp.id }}
              renderItem={({ item }) => {
                return <ItemFlastList item={item} />
              }} />
          )
        }
        <Text style={styles.text}>SẢN PHẨM HOT</Text>

        {
          (isLoading2) ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              style={styles.Flastlist}
              horizontal data={listSP2}
              keyExtractor={(item_sp) => { return item_sp.id }}
              renderItem={({ item }) => {
                return <ItemFlastList item={item} />
              }} />
          )
        }
      </ScrollView>



    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0EEE0',



  },
  header: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray'
  },
  content_seach: {
    width: '100%',
    padding: '5%'
  },
  text: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20,
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
  input: {
    width: '100%',
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginTop: 10
  },
  contents: {
    width: '100%',
    marginBottom: 5,
    marginStart: 15



  },
  Flastlist: {
    marginTop: 20
  }


})