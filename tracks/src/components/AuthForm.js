import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, submitButtonText, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3 style={styles.title}>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 50
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: "800",
    color: 'red',
    marginLeft: 15,
    marginBottom: 10
  },
});

export default AuthForm;
