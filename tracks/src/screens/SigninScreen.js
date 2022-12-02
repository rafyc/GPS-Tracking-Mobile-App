import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign in to your account'
        submitButtonText='Sign Ip'
        onSubmit={signin}
        errorMessage={state.errorMessage}
      />
      <NavLink
        routeName='Signup'
        text='Dont have an account ? Sign up instead'
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default SigninScreen;
