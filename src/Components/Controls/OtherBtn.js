import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import {Feather,MaterialCommunityIcons} from "@expo/vector-icons"
import { ScoreContext } from '../../context/ScoreContext'

const OtherBtn = () => {
    const {increaseWickets,
        wickets,
        resetScore,
        lastOperation,
        undoLastOperation,} = useContext(ScoreContext);
  return (<>
    <View style={styles.other}>
        <View style={styles.otherBtn}>
            <TouchableOpacity onPress={increaseWickets} disabled={wickets === 10} >
                <View style={[styles.btn,styles.wicketButton]}>
                    <Text style={styles.buttonText}>Wicket</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.otherBtn}>
            <TouchableOpacity onPress={resetScore} >
                <View style={[styles.btn,styles.resetButton]}>
                    <Text style={styles.buttonText}>
                        <Feather 
                            name='refresh-cw'
                            size={24}
                            color='white'
                        />
                        {"  "}Reset
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.other}>
        <View style={styles.otherBtn}>
            <TouchableOpacity onPress={undoLastOperation}
            disabled={lastOperation === null}>
                <View style={[styles.btn,styles.undoBtn]}>
                    <Text style={styles.buttonText}>
                        <MaterialCommunityIcons 
                            name='undo-variant'
                            size={24}
                            color='white'
                        />Undo
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
 {/* <View style={styles.otherBtn}>
          <Button
            title="Redo"
            // onPress={() => resetScore()}
            color="#757575"
            style={styles.btn}
          />
        </View> */}
    </View>
  </>
  )
}

const styles = StyleSheet.create({
    other:{
        flexDirection:"row",
        marginTop:10
    },
    otherBtn:{
        marginHorizontal:10,
        marginVertical:3,
    },
    btn:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
    },
    wicketButton:{
        backgroundColor:'#ef5350',
    },
    resetButton:{
        backgroundColor:'#42a5f5',
    },
    undoBtn:{
        backgroundColor:'#616161'
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        textTransform:"uppercase",
        fontSize:20,
        textAlign:"center",
    }
})

export default OtherBtn