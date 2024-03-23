import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const Wellcome = (props) => {
  const {navigation} = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
    navigation.replace('LoginComd');
    }, 3000);
    return () => clearTimeout(timeout);
    }, []);
  return (
    <View style = {styles.container}>
      <Image source={{uri:'https://inkythuatso.com/uploads/images/2021/12/logo-fpt-polytechnic-inkythuatso-09-12-57-46.jpg'}}
      style={{width: 189 , height: 189,resizeMode:'contain' }} />
    </View>
  )
}

export default Wellcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})