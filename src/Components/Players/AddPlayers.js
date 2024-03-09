import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import minus from "../../../assets/minus.png";
import cross from "../../../assets/cross.png";
import profile from "../../../assets/Profile.png";
import { useRoute } from "@react-navigation/native";
import supabase from "../../config/supabaseClient";
import ScoreContext from "../../context/ScoreContext";

export default function AddPlayers({ route }) {
  const { team } = route.params;
  // const {totalPlayers} = useContext(ScoreContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    cricket_role: "",
    team_name: team,
  });

      const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("addTeamPlayer-1")
          .select()
          .eq("team_name", team); 

        if (error) {
          console.error("Error fetching data:", error.message);
        } else {
          console.log("Data fetched successfully:", data);
          setPlayerList(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

  useEffect(() => {
    fetchData();
  }, [team]);

  const addPlayer = async () => {
    const { error } = await supabase.from("addTeamPlayer-1").insert([form]);

    if (error) {
      console.log("error", error);
    }else{
      setForm({
    name: "",
    cricket_role: "",
    team_name: team,
  });
      fetchData();
    }

    setModalVisible(false);
  };

  const deletePlayer = async (eid) => {
    try {
      console.log("eid", eid);
      const { data, error } = await supabase
        .from("addTeamPlayer-1") 
        .delete()
        .match({ id: eid });
  
      if (error) {
        console.log("error", error);
      } else {
        console.log("Data deleted successfully");
        // Update playerList after deletion
        // totalPlayers(45);
        const updatedPlayerList = playerList.filter((player) => player.id !== eid);
        setPlayerList(updatedPlayerList);
      }
    } catch (error) {
      console.error("Error deleting player:", error.message);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.section}>
        <View style={styles.playerContainer}>
          <Image style={styles.teamImg} source={profile} />
          <View style={styles.playerDetails}>
            <Text>{item.name}</Text>
            {/* <Text style={styles.smallText}>Sel By {item.selPercentage}</Text> */}
            <Text style={styles.smallText}>{item.cricket_role}</Text>
          </View>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>{item.points}</Text>
            <TouchableOpacity onPress={() => deletePlayer(item.id)}>
              <Image style={styles.plusImage} source={minus} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  console.log("team name", team);
  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.addButton}>Add Players +</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "600", padding: 10 }}>
          Total Player : {playerList?.length}
        </Text>
        <Text style={{fontSize:15,fontWeight:"600"}}>Team Name : <Text style={{color:"blue"}}>{team} </Text></Text>
      </View>
      <FlatList
        data={playerList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
        <Image source={cross} style={styles.closeIcon} />
      </TouchableOpacity>
            <Text style={styles.modalTitle}>Add Player</Text>
            <TextInput
              style={styles.input}
              placeholder={team}
              value={team}
              editable={false}
              selectTextOnFocus={false}
              // onChangeText={(team_name) => setForm({ ...form, team_name })}
            />
            <TextInput
              style={styles.input}
              placeholder="Player Name"
              value={form.name}
              onChangeText={(name) => setForm({ ...form, name })}
            />
            <TextInput
              style={styles.input}
              placeholder="Player speciality"
              value={form.cricket_role}
              onChangeText={(cricket_role) =>
                setForm({ ...form, cricket_role })
              }
            />
            <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
              <Text style={styles.addButtonText}>Add Player</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  addButtonContainer: {
    padding: 20,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "lightgray",
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    padding: 10,
  },
  section: {
    borderWidth: 1,
    borderColor: "black",
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  teamImg: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  playerDetails: {
    paddingLeft: 10,
    flex: 1,
  },
  smallText: {
    fontSize: 10,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    marginLeft: "auto",
    marginRight: 10,
  },
  plusImage: {
    width: 15,
    height: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  // addButton: {
  //   backgroundColor: "blue",
  //   paddingVertical: 10,
  //   borderRadius: 5,
  // },
  addButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
    // Additional styles for your close icon
  },
});
