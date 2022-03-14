import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3 style={styles.headingStyle}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default AuthForm;
