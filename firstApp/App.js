import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const changeEmail = (a) => {
    setEmail(a);
  };
  const changePasword = (b) => {
    setPassword(b);
  };

  return (
    <View style={{ padding: 15 }}>
      <TextInput placeholder="Enter Your Email" onChangeText={changeEmail} />
      <TextInput
        keyboardType="numeric"
        placeholder="Enter your Password"
        secureTextEntry={true}
        onChangeText={changePasword}
      />

      <Button title="Submit" color="black" />
    </View>
  );
}
