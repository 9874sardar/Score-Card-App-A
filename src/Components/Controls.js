import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BallBtn from './Controls/BallBtn';
import AddBtn from './Controls/AddBtn';
import OtherBtn from './Controls/OtherBtn';

export default function Controls() {
  return (
    <View style={styles.controls}>
      <BallBtn/>
      <AddBtn/>
      <OtherBtn/>
    </View>
  )
}

const styles = StyleSheet.create({
    controls:{
        alignItems:"center"
    }
})