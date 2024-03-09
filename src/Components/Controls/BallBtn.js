import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScoreContext } from '../../context/ScoreContext'

const BallBtn = () => {
  const {wickets,increaseOver} = useContext(ScoreContext)
  return (
    <TouchableOpacity style={styles.button} onPress={() => increaseOver()} disabled={wickets === 10}>
    <Text style={styles.num}>
        <Ionicons name='tennisball-outline' size={40} color="black"/>
    </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#efefef",
        justifyContent:"center",
        alignContent:"center",
        borderWidth:2,
        borderRadius: 85 / 2,
        width: 85,
        height: 85,
        margin:0,
        marginTop:5,
    },
    num:{
        fontSize: 30,
        textAlign: "center",
        // fontFamily:"orbitron-regular"
    }
})

export default BallBtn