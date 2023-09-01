import { Text, SafeAreaView,Image, Button, } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import styles from './Style'
import { AuthStackType } from '@/Navigaiton/Routes'

type Props = NativeStackScreenProps<AuthStackType,"Login">

const Index = ({navigation} : Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={require('@Assets/Images/React-icon.png')}style={{width:100,height:100}} resizeMode='contain'/>
      <Text style={{fontFamily:'ManropeBold',marginBottom:10}}>Happy Hacking!</Text>
      <Button title='Here You Go!' onPress={()=>navigation.navigate('SignUp')}  />
    </SafeAreaView>
  )
}

export default Index