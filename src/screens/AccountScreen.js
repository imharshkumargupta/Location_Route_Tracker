import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  const { state, signout } = useContext(AuthContext);
  useEffect(() => {
    if (!state.token) {
      navigation.navigate("loginFlow");
    }
  }, [state.token]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default AccountScreen;
