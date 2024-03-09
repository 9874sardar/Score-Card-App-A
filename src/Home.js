import { View, Text, StyleSheet, ScrollView ,Image} from "react-native";
import React, { useEffect, useState } from "react";
import supabase from "./config/supabaseClient";
import Score from "./Components/Scores";
import ScoreProvider from "./context/ScoreContext";
import Controls from "./Components/Controls";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { SupabaseClient } from "@supabase/supabase-js";
import loaderImg from "../assets/yy3.gif";

const Home = () => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [session, setSession] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const userAllDetails = async () => {
      console.log("Entered inside the database");

      // const user1 = await AsyncStorage.getItem("currentUser");
      // console.log("local store data", JSON.parse(user1));
      // const emailStr = JSON.parse(user1);
      // // console.log(emailStr.email);
      // const { data, error } = await supabase
      //   .from("userdetails")
      //   .select()
      //   .eq("email", emailStr.email);
      // if (data) {
      //   console.log("data homepage", data[0]);
      //   setUser(data[0]);
      // }
      // if (error) console.log("Got email error", error);

      const setData = async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        console.log("Session");
        console.log("Session");
        console.log("Session");
        setSession(session)
        console.log("session-1",session)
        setUser(session?.user);
        setLoader(false);
        // setLoading(false);
      };
      
      const { data : listener } = await supabase.auth.onAuthStateChange((event, sessin) => {
        console.log("Session listen");
        console.log("Session listen");
        // console.log(event, sessin) 
        setSession(sessin);
            setUser(session?.user);
            setLoader(false);
      })
      
      
      
      setData();
      // call unsubscribe to remove the callback
      return () => {
        listener?.subscription.unsubscribe();
      }; 
      
    
    };
    userAllDetails();
  }, []);

  const getData = async() =>{
    const { data, error } = await supabase
      .from("userdetails")
      .select()
      .eq("email", user?.email); 
      if (data) {
        console.log("data homepage", data);
        setLoader(true);
        setLoggedIn(data[0]?.name);
      }
      if (error) console.log("Got email error", error);
  }
  getData();
  console.log("USer",loggedIn);
  return (
    // <ScoreProvider>
      <ScrollView>
        {loader?<View>

            <Text
              style={{
                display: "flex",
                textAlign: "center",
                fontWeight: 600,
                padding: 15,
                fontSize:20,
              }}
              >
              Hi <Text style={{color:"#ff6868"}}> { loggedIn && loggedIn.toUpperCase()}</Text> ! WELCOME
            </Text>
        <View style={styles.container}>
          <Score />
          <Controls />
          <View>
            <Text>{error && <Text>{error}</Text>}</Text>
          </View>
        </View> 
        </View>
        : 
        // <ActivityIndicator style={styles.loaders} size={"large"}/>
              <Image 
              alt=""
              resizeMode="contain"
              style={styles.loaders}
              source={loaderImg}
              />
        }
      </ScrollView>
    // </ScoreProvider>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 15,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    flex: 1,
    fontWeight: "bold",
    marginRight: 5,
  },
  value: {
    flex: 2,
  },
  loaders:{
    width:"60%",
    top:"20%",
    left:"20%"
  }
});

export default Home;
