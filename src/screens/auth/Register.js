import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, ROUTES } from '../../constants';


const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <ScrollView>
            <Text style={styles.loginContinueTxt}>Full Name*</Text>
            <TextInput style={styles.input} placeholder="Full Name" />
            <Text style={styles.loginContinueTxt}>Email*</Text>
            <TextInput style={styles.input} placeholder="example@mail.com" />
            <Text style={styles.loginContinueTxt}>Phone*</Text>
            <TextInput style={styles.input} placeholder="Phone" />
            <Text style={styles.loginContinueTxt}>Password*</Text>
            <TextInput style={styles.input} placeholder="Password" />
            <Text style={styles.loginContinueTxt}>Conform-Password*</Text>
            <TextInput style={styles.input} placeholder="Conform-Password" />
          </ScrollView>

            <View style={styles.loginBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{ y: 0.0, x: 0.0 }}
                end={{ y: 1.0, x: 0.0 }}>
                {/******************** LOGIN BUTTON *********************/}
                <TouchableOpacity activeOpacity={0.7} style={styles.loginBtn}>
                  <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>
              </LinearGradient>
          </View>

        </View>

        {/* <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signupBtn}>Sign In</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView >
  );
};

export default Register;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 18,
    textAlign: 'left',
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 40,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    width: 55,
    height: 55,
    marginRight: 7,
  },
});

