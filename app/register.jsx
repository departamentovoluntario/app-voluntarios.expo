import React from "react";
import { Text, View } from "react-native";
import SimpleButton from "../components/Buttoms/SimpleButton";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function register() {
  const onRedirect = () => {
    console.log("redirect");
    router.replace("/");
  };
  return (
    <SafeAreaView>
      <View>
        <SimpleButton
          text="Ir a inicio"
          style={{
            backgroundColor: "#129abc",
          }}
          onPress={onRedirect}
        />
      </View>
    </SafeAreaView>
  );
}
