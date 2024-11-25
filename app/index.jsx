import { Link, router } from "expo-router";
import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../components/Inputs/InputText";
import SimpleButton from "../components/Buttoms/SimpleButton";
// import { Image } from 'expo-image';
import { useSession } from '../utils/ctx'

function index() {
  const { signIn, session } = useSession()
  const onLogin = () => {
    console.log('login enter')
    signIn('test')
  };

  const onRegister = () => {
    console.log("register");
    router.replace("/register");
  }

  useEffect(()=>{
    console.log(session)
    if (session) router.push('/home')
  }, [session])
  return (
    <SafeAreaView>
      <View style={{}}>
        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <Image
            source={require("../assets/logo-vitalia.png")}
            style={{
              width: "60%",
              height: 200,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginBottom: 25,
              fontWeight: 300,
            }}
          >
            Inicia sesión
          </Text>
          <TextInput
            placeholder="Email"
            style={{
              marginBottom: 25,
            }}
          />
          <TextInput placeholder="Contraseña" />
          <SimpleButton
            text="Iniciar sesión"
            style={{ marginVertical: 20 }}
            onPress={onLogin}
          />
          <SimpleButton
            text="Regístrate"
            style={{
              backgroundColor: "#129abc",
            }}
            onPress={onRegister}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default index;
