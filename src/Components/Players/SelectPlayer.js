import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import team1 from "../../../assets/icon512.png";
import plus from "../../../assets/plus.png";
import minus from "../../../assets/minus.png";
import profile from "../../../assets/Profile.png";

export default function SelectPlayer() {
  return (
    <View style={styles.container}>
      {/* Upper Section */}
      <View
        style={[
          styles.section,
          { flex: 1, backgroundColor: "black" },
          styles.upperSection,
        ]}
      >
        <Text style={[styles.text, { padding: 10, marginTop: -40 }]}>
          Max 7 player From a Team
        </Text>
        {/* TEAM VS ALONG WITH INFO */}
        <View
          style={{
            height: 60,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={[styles.middleSection, { flex: 1 }]}>
            <Text style={styles.text}> Players</Text>
            <Text style={styles.text}> 0/11</Text>
          </View>
          <View style={[styles.middleSection, { flex: 1, marginRight: -5 }]}>
            <Image style={styles.teamImg} source={{uri:'https://s3-alpha-sig.figma.com/img/ed4e/3613/61cb5f14e57a84a0609ecfdbe0e1aac5?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYJIhpW0sz52mJkbg1HMBQAeOELe4MQ-bhs6lS0fMP7xa9aHzyu3jtnBw9Kj8Mauz95XW00XwdWiaMDSonWCoFIMmJIgAYulsGgCyiN-qe3mgK-Pgkq2tq8eFgXCi-4lHhnDA3DkbKgj8lqxaLsSTWUcZ11gq8kria1q-CiQ81zQYt~XGRQu054t2TpiRhUGl87JMyAoXcBdL5PeTUK6FKFbi0vfaOgEb35hXSY1la4twQ-IlDBByVnU~83vPYbvQooABOEo9-WVi~EtgTUo0bVRdbPjL4YeAGVWt3iircdx6lIwwY~Ok8OP0tLF2vq7~vgY~kURCPL4XAcRWkPnKA__'}} />
          </View>
          <View style={[styles.middleSection, { flex: 1 }]}>
            <Text style={styles.text}>MI (0)</Text>
          </View>
          <View style={[styles.middleSection, { flex: 1 }]}>
            <Text style={styles.text}>CSK (0)</Text>
          </View>
          <View style={[styles.middleSection, { flex: 1, marginLeft: -5 }]}>
            <Image style={styles.teamImg} source={{uri:'https://s3-alpha-sig.figma.com/img/e1df/98ce/b0e748269f79a0614c22831e7a52d9e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lb7a5ZN45qK9hIDGCUrmECJ2ZntojEQRffw51caNxj04lmtJTWDqZhN8r8TsQIUUxvgN89PbcKG0mBBxR87C7HElHua8RJ0UV~fqukjOaUWs~BTMGabbILfk0QvLMn90FWQVdTSTuj2Txt2Wug9LpWmiCSf0ZIdiC1yilEZHrUnwi1lJuEl24jsxT9L46aGEUxAPkcYl6FrH6uuzusYzqvZWsEe1meSw1pXtIIE5pjVoBgaj6CAuAibqF7m3qANMzTW9SdXM2eBRK0IxlYxwlk9ah3rR8LyvJYwAvyC5GybSCe7HsjqX4fzXgFuiBF4oZ363DJs1pMif2geA0CyOPw__'}} />
          </View>
          <View style={[styles.middleSection, { flex: 1 }]}>
            <Text style={styles.text}>Credit Left (100)</Text>
          </View>
        </View>
        <View style={styles.noOfPlayers}>
          <Text
            style={[styles.noOfPlayersItem, { backgroundColor: "green" }]}
          ></Text>
          <Text
            style={[styles.noOfPlayersItem, { backgroundColor: "green" }]}
          ></Text>
          <Text
            style={[styles.noOfPlayersItem, { backgroundColor: "green" }]}
          ></Text>
          <Text style={styles.noOfPlayersItem}></Text>
          <Text style={styles.noOfPlayersItem}></Text>
          <Text style={styles.noOfPlayersItem}></Text>
          <Text style={styles.noOfPlayersItem}></Text>
          <Text style={styles.noOfPlayersItem}></Text>
          <Text style={styles.noOfPlayersItem}></Text>
          <Text style={styles.noOfPlayersItem}></Text>
          <Text style={styles.noOfPlayersItem}></Text>
        </View>
      </View>

      {/* Middle Section */}
      {/* WK BAT AR BOWL */}
      <View
        style={{
          height: 35,
          backgroundColor: "rgb(238, 236, 236)",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Four Vertical Sections */}
        <View style={[styles.middleSection, { flex: 1 }]}>
          <Text> WK (1)</Text>
        </View>
        <View style={[styles.middleSection, { flex: 1 }]}>
          <Text>BAT (0)</Text>
        </View>
        <View style={[styles.middleSection, { flex: 1 }]}>
          <Text>AR (0)</Text>
        </View>
        <View style={[styles.middleSection, { flex: 1 }]}>
          <Text>BOWL (0)</Text>
        </View>
      </View>
      {/* SELECTION */}
      <View style={{ height: 35, backgroundColor: "lightgray", padding: 5 }}>
        <Text>Select 3 - 6 Batsmen</Text>
      </View>

      <View
        style={{
          height: 45,
          backgroundColor: "rgb(238, 236, 236)",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>SELECTED BY</Text>
        <Text>POINT</Text>
        <Text>CREDITS</Text>
      </View>

      {/* Lower Section */}
      <View style={[styles.section, { flex: 2.5 }]}>
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 5,
          }}
        >
          <View style={{ flexDirection: "row", padding: 2 }}>
            <Image
              style={[styles.teamImg, { width: 45, height: 45 }]}
              source={profile}
            />
            <View style={{ paddingLeft: 2 }}>
              <Text>Rohit Sharma</Text>
              <Text style={{ fontSize: 10 }}>Sel By 73.89%</Text>
              <Text style={{ fontSize: 12 }}>Played Last match</Text>
            </View>
          </View>
          <Text style={{ marginLeft: -70, paddingTop: 10 }}>115</Text>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text style={{ marginRight: 25 }}>7.8</Text>
            <Image
              style={[styles.teamImg, { width: 15, height: 15 }]}
              source={plus}
            />
          </View>
        </View>
      </View>
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
  upperSection: {
    // :"white",
  },
  text: { textAlign: "center", color: "white" },
  middleSection: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: 'gray',
    marginHorizontal: 2,
  },
  teamImg: {
    width: "70%",
    height: "70%",
    // alignSelf:"flex-start"
    resizeMode: "contain",
  },
  noOfPlayers: {
    height: 20,
    width: "90%",
    borderRadius: 10,
    marginBottom: -30,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
  },
  noOfPlayersItem: {
    borderWidth: 1,
    borderColor: "white",
    flex: 1,
  },
});

//  SelectPlayer;
