import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";

const AddBtn = () => {
  const {wickets,increaseRuns} = useContext(ScoreContext);
  return (
    <View>
      <View style={styles.addRunsRow}>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(1)} disabled={wickets === 10}>
          <Text style={styles.num}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(2)} disabled={wickets === 10}>
          <Text style={styles.num}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(3)} disabled={wickets === 10}>
          <Text style={styles.num}>3</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.addRunsRow}>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(4)} disabled={wickets === 10}>
          <Text style={styles.num}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(5)} disabled={wickets === 10}>
          <Text style={styles.num}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(6)} disabled={wickets === 10}>
          <Text style={styles.num}>6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addRunsRow: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 85 / 2,
    width: 85,
    height: 85,
    margin: 0,
    marginTop:5,
    marginRight:5,
  },
  num: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default AddBtn;
