import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import { Button } from "react-native-web";

const Overview = ({ navigation }) => {
  // playerList?.length
  const [PlayerListNumOne, setPlayerListNumOne] = useState(0);
  const [PlayerListNumTwo, setPlayerListNumTwo] = useState(0);
  const [bat, setBat] = useState(false);
  const [ball, setBall] = useState(false);

  useEffect(() => {
    check1();
    check2();
  }, []);
  const check1 = async () => {
    try {
      const { data, error } = await supabase
        .from("addTeamPlayer-1")
        .select()
        .eq("team_name", "team-1");
      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        console.log("Data fetched 1:", data?.length);
        setPlayerListNumOne(data?.length);
      }
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  const check2 = async () => {
    try {
      const { data, error } = await supabase
        .from("addTeamPlayer-1")
        .select()
        .eq("team_name", "team-2");

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        console.log("Data fetched 2:", data?.length);
        setPlayerListNumTwo(data?.length);
      }
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>MATCH CENTER</Text>
        <View style={styles.insideContainer}>
          <View style={[styles.section, styles.sec1]}>
            <Text style={{ fontSize: 18, color: "white" }}>MATCH 2</Text>
          </View>
          <View style={[styles.section, styles.sec2]}>
            <View
              style={[
                styles.container,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("addPlayer", { team: "team-1" })
                  }
                >
                  <Text style={styles.playerTxt}>Team 1</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* BAT */}
                  <TouchableOpacity onPress={() => setBat(!bat)}>
                    <Text
                      style={{
                        padding: 10,
                        backgroundColor: "lightgray",
                        borderRadius: 8,
                      }}
                    >
                      BAT
                    </Text>
                  </TouchableOpacity>

                  {/* Ball */}
                  <TouchableOpacity onPress={() => setBall(!ball)}>
                    {/* <Text >BAT</Text>                   */}
                    <Text
                      style={{
                        padding: 10,
                        backgroundColor: "lightgray",
                        borderRadius: 8,
                      }}
                    >
                      BALL
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{ fontSize: 22, fontWeight: "600" }}>VS</Text>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("addPlayer", { team: "team-2" })
                  }
                >
                  <Text style={styles.playerTxt}>Team 2</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity onPress={() => setBat(!bat)}>
                    <Text
                      style={{
                        padding: 10,
                        backgroundColor: "lightgray",
                        borderRadius: 8,
                      }}
                    >
                      BAT
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setBall(!ball)}>
                    <Text
                      style={{
                        padding: 10,
                        backgroundColor: "lightgray",
                        borderRadius: 8,
                      }}
                    >
                      BALL
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            disabled={(PlayerListNumOne < 6 && PlayerListNumTwo) < 6}
          >
            <View
              style={[
                styles.section,
                styles.sec3,
                {borderRadius: 8},
                (PlayerListNumOne < 6 && PlayerListNumTwo) < 6
                  ? styles.disabledButton
                  : "",
              ]}
            >
              <Text style={[styles.playBtn]}>Play</Text>
            </View>
          </TouchableOpacity>

          <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
            {bat && 
            <Text style={{ fontSize: 15, fontWeight: "500", color: "black",padding:2 }}>
              Team a is batting
            </Text>}
            {ball && 
            <Text style={{ fontSize: 15, fontWeight: "500", color: "black",padding:2 }}>
              Team b is Bowling
            </Text>}
          </View>
          <View style={[styles.section, styles.sec4]}>
            {(PlayerListNumOne < 6 && PlayerListNumTwo) < 6 ? (
              <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
                Add 6 players Each
              </Text>
            ) : (
              <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
                You are Ready To play
              </Text>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  insideContainer: {
    height: 280,
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    overflow: "hidden",
    margin: 10,
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontSize: 22,
    fontWeight: "600",
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: 20,
  },
  sec1: {
    flex: 1,
    backgroundColor: "rgb(93, 49, 250)",
  },
  sec2: {
    flex: 3,
  },
  sec3: {
    padding: 10,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: "black",
    width: "50%",
    marginBottom: 5,
    backgroundColor: "lightgreen",
  },
  sec4: {
    flex: 1,
    backgroundColor: "rgb(93, 49, 250)",
    color: "black",
  },
  playerTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
    padding: 25,
  },
  playBtn: {
    fontSize: 20,
    fontWeight: "500",
  },
  disabledButton: {
    opacity: 0.5,
  },
});
