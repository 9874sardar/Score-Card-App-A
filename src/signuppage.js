import {
  View, Text, StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Button,
  BackHandler
} from 'react-native'
import React, { useEffect, useState } from 'react'
import supabase from './config/supabaseClient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import loaderImg from "../assets/yy3.gif";

const logo = require("../assets/icon512.png")

const Signuppage = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loader,setLoader] = useState(false);

  useEffect(()=>{
    const handleBackButton = () => {
      // Set loader to false
      setLoader(false);
      // Return true to indicate that we've handled the back button press
      return true;
    };

    // Add event listener for the hardware back button
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    // Clean up function to remove the event listener
    return () => {
      backHandler.remove();
    };
  },[])

  const handleSubmit = async () => {

    setLoader(true)
    //authentication
    const { user, error } = await supabase
      .auth.signUp
      ({
        email: form.email,
        password: form.password
      })

    // console.log("data - 1", data);
    if (user) {
      console.log("data", user);
      }
    if (error) {
      console.log("error", error);
    }
    
    //Data insertion
    const { data, dberror } = await supabase
      .from('userdetails')
      .insert([form])

    if (dberror) {
      console.log("error", dberror);
    }else{
    navigation.navigate('overview')}
    // if (data) {
      // console.log("data -- ", data);
    // } else {
      // await AsyncStorage.setItem('currentUser', JSON.stringify(form));
    // }
}


return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
    <ScrollView>
    {loader?<Image 
              alt=""
              resizeMode="contain"
              style={styles.loaders}
              source={loaderImg}
              /> : 
      <View style={styles.container} >
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={logo} />

          <Text style={styles.title}>
            Sign Up to Cricket World
          </Text>

          <Text style={styles.subtitle}>
            Register Yourself to Enter into the new world
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Name  </Text>

            <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={name => setForm({ ...form, name })}
              placeholder="Your name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.name} />
          </View>
          {/* <View style={styles.input}>
            <Text style={styles.inputLabel}>Phone : </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              onChangeText={phone => setForm({ ...form, phone })}
              placeholder="Your Phone Number"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.phone} />
          </View> */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email} />
          </View>

          {/* <View style={styles.input}>
            <Text style={styles.inputLabel}>Address</Text>

            <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={address => setForm({ ...form, address })}
              placeholder="Your address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.address} />
          </View> */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password} />
              <Text
              style={styles.desc}
              >(Tip - Have 1 UPPERCASE 1 lowercase and a Number.)</Text>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={handleSubmit}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn-Page')}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
              Aready have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>}
    </ScrollView>
  </SafeAreaView>
)
}



export default Signuppage

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    color: '#929292',
    textAlign: 'center',
  },
  loaders:{
    width:"60%",
    top:"20%",
    left:"20%"
  }
});