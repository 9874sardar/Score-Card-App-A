import {View,Text,StyleSheet,ImageBackground,TouchableOpacity} from "react-native";
import React, { useContext } from "react";
import logo from "../../assets/wickets.png";
import { Ionicons } from "@expo/vector-icons";
import { ScoreContext } from "../context/ScoreContext";

export default function ScoreCard() {
  const {
    wickets,
    increaseRuns,
    runs,
    wide,
    resetScore,
    lastOperation,
    undoLastOperation,
    increaseWickets,
    currentScore,
    over: { overNo, ballNo },
  } = useContext(ScoreContext);

  console.log("Data ",currentScore);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        style={styles.background}
      >
        {/* Upper Start */}
        <View style={[styles.section, { flex: 2 }]}>
          {/* Upper Section - upper - 1*/}
          <View style={[styles.section, { flex: 1, width: "100%" }]}>
            <Text style={[styles.textWhite, { fontSize: 40 }]}>
              {runs >= 10 ? runs : `0${runs}`}/{wickets}
            </Text>
            <Text style={{ fontSize: 16, color: "lightgray" }}>
              Overs : {overNo}.{ballNo}
            </Text>
          </View>
          {/* Upper Section - lower - 2*/}
          {/* <View
            style={[
              styles.section,
              { flex: 1, width: "100%", flexDirection: "row" },
            ]}
          >
            <View style={[styles.section, { flex: 1, height: "100%" }]}>
              <Text style={[styles.textWhite, { fontSize: 20 }]}>Rohit</Text>
              <Text style={{ color: "lightgray" }}>4(2)*</Text>
            </View>
            <View style={[styles.section, { flex: 1, height: "100%" }]}>
              <Text style={[styles.textWhite, { fontSize: 20 }]}>Hardik</Text>
              <Text style={{ color: "lightgray" }}>4(2)*</Text>
            </View>
          </View> */}
        </View>
        {/* Upper End */}
      </ImageBackground>
      {/* MiddleSection Start */}
      <View
        style={[
          styles.section,
          { flex: 1, backgroundColor: "rgb(41, 86, 112)" },
        ]}
      >
        {/* <Text>Lower Section (2/3)</Text> */}
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginBottom: -20,
            marginTop: 2,
          }}
        >
          <Ionicons
            name="tennisball"
            size={22}
            color="white"
            style={{ marginTop: 2 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "400", color: "white" }}>
            Bumrah
          </Text>
        </View>
        <View style={styles.runsUpdate}>
          <View
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "40%",
              borderRadius: 40,
            }}
          >
            <Text style={[styles.runs]}>{currentScore[0] || 0}</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "40%",
              borderRadius: 40,
            }}
          >
            <Text style={[styles.runs]}>{currentScore[1] || 0}</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "40%",
              borderRadius: 40,
            }}
          >
            <Text style={[styles.runs]}>{currentScore[2] || 0}</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "40%",
              borderRadius: 40,
            }}
          >
            <Text style={[styles.runs]}>{currentScore[3] || 0}</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "40%",
              borderRadius: 40,
            }}
          >
            <Text style={[styles.runs]}>{currentScore[4] || 0}</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "40%",
              borderRadius: 40,
            }}
          >
            <Text style={[styles.runs]}>{currentScore[5] || 0}</Text>
          </View>
        </View>
      </View>
      {/* MiddleSection End */}
      {/* Last Start */}
      <View
        style={[
          styles.section,
          { flex: 4, backgroundColor: "rgb(230, 255, 255)" },
        ]}
      >
        <View
          style={{ flexDirection: "row", height: "100%", paddingBottom: 10 }}
        >
          {/* Lower section - 1 start */}
          <View style={[styles.section, { flex: 1 }]}>
            <TouchableOpacity
              style={[styles.section, { flex: 1, width: "100%" }]}
              onPress={() => increaseRuns(0)}
              disabled={wickets === 10}
            >
              <Text style={{ fontSize: 30 }}>0</Text>
              <Text>(Dot Ball)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.section, { flex: 1, width: "100%" }]}
              onPress={() => increaseRuns(3)}
              disabled={wickets === 10}
            >
              <Text style={{ fontSize: 30 }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.section, { flex: 1, width: "100%" }]}
              onPress={wide}
              disabled={wickets === 10}
            >
              {/* <Text style={{ fontSize: 30 }}>3</Text> */}
              <Text style={{ fontSize: 30 }}>WD</Text>
            </TouchableOpacity>
            {/* <View style={[styles.section, { flex: 1, width: "100%" }]}> */}
            {/* </View> */}
          </View>
          {/* Lower section - 1 End */}
          {/* Lower section - 2 Start */}
          <View style={[styles.section, { flex: 1 }]}>
            <TouchableOpacity
              style={[styles.section, { flex: 1, width: "100%" }]}
              onPress={() => increaseRuns(1)}
              disabled={wickets === 10}
            >
              <Text style={{ fontSize: 30 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.section, { flex: 1, width: "100%" }]}
              onPress={() => increaseRuns(4)}
              disabled={wickets === 10}
            >
              <Text style={{ fontSize: 30 }}>4</Text>
              <Text>(FOUR)</Text>
            </TouchableOpacity>
            <View style={[styles.section, { flex: 1, width: "100%" }]}>
              <Text style={{ fontSize: 30 }}>NB</Text>
            </View>
          </View>
          {/* Lower section - 2 End */}

          {/* Lower section - 3 Start */}
          <View style={[styles.section, { flex: 1 }]}>
            <TouchableOpacity
              style={[styles.section, { flex: 1, width: "100%" }]}
              onPress={() => increaseRuns(2)}
              disabled={wickets === 10}
            >
              <Text style={{ fontSize: 30 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.section, { flex: 1, width: "100%" }]}
              onPress={() => increaseRuns(6)}
              disabled={wickets === 10}
            >
              <Text style={{ fontSize: 30 }}>6</Text>
              <Text>(SIX)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={resetScore}
              style={[styles.section, { flex: 1, width: "100%" }]}
            >
              <Text style={{ fontSize: 28 }}>RESET</Text>
            </TouchableOpacity>
          </View>
          {/* Lower section - 3 End */}
          {/* Lower section - 4 Start */}
          <View
            style={[
              styles.section,
              { flex: 1, backgroundColor: "rgb(214, 214, 214)" },
            ]}
          >
            <TouchableOpacity
              onPress={undoLastOperation}
              disabled={lastOperation === null}
              style={[styles.section, { flex: 1, width: "100%" }]}
            >
              <Text style={{ fontSize: 25, color: "green" }}>UNDO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={increaseWickets}
              disabled={wickets === 10}
              style={[styles.section, { flex: 1, width: "100%" }]}
            >
              <Text style={{ fontSize: 25, color: "red" }}>OUT</Text>
            </TouchableOpacity>
            <View style={[styles.section, { flex: 1, width: "100%" }]}></View>
          </View>
          {/* Lower section - 4 End */}
        </View>
      </View>
      {/* Last End */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  background: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 2,
  },
  textWhite: {
    color: "white",
  },
  runs: {
    textAlign: "center",
    fontSize: 16,
    padding: 8,
    fontWeight: "800",
  },
  runsUpdate: {
    flexDirection: "row",
    gap: 20,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
