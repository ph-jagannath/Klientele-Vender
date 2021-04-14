import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  LogBox,
} from "react-native";
import logo from "../../assets/logo.png";
import { Button, Input, Overlay, Divider } from "react-native-elements";

LogBox.ignoreAllLogs();
// import PasswordInputText from "react-native-hide-show-password-input";

import global from "../../global";

export default class loginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.upperContainer}>
          <ImageBackground
            source={global.ASSETS.LOGO}
            style={styles.imageContainer}
            style={{
              width: 240,
              height: 200,
              resizeMode: "cover",
              alignSelf: "center",
              marginTop: 40,
              backgroundColor: "#087407",
              // alignSelf: "center",
            }}
          ></ImageBackground>
        </View>
        <View style={styles.inputContainer}>
          {/* email container */}

          <Input
            label="Email"
            labelStyle={styles.labelText}
            textContentType="emailAddress"
            inputContainerStyle={styles.inputFiedContainer}
            keyboardType="email-address"
            inputStyle={styles.inputText}
            // onChangeText={(v) => this.setState({ number: v })}
            // value={this.state.number}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            labelStyle={styles.labelText}
            textContentType="emailAddress"
            inputContainerStyle={styles.inputFiedContainer}
            keyboardType="email-address"
            inputStyle={styles.inputText}

            // onChangeText={(v) => this.setState({ number: v })}
            // value={this.state.number}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotText}
          onPress={() => this.props.navigation.navigate("Forgot")}
        >
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <View>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            // loading={this.state.buttonLoading}
            title="Sign in"
            titleStyle={styles.buttonTitle}
            TouchableComponent={TouchableOpacity}
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
        <View style={styles.dividerContainer}>
          <Divider style={styles.divider} />
          <Text style={styles.orText}>On sign in with</Text>
          <Divider style={styles.divider} />
        </View>
        {/* <View style={styles.signInTextContainer}>
          <View style={styles.borderContainer}></View>
          <Text>On sign in with</Text>
          <View style={styles.borderContainer}></View>
        </View> */}
        <View style={styles.facebookContainer}>
          <TouchableOpacity>
            <Image
              source={global.ASSETS.FACEBOOK}
              style={{
                width: 46,
                height: 46,
                alignSelf: "center",
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={global.ASSETS.GOOGLE}
              style={{
                width: 46,
                height: 46,
                alignSelf: "center",
                resizeMode: "contain",
                shadowColor: "gray",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ alignSelf: "center", marginTop: 50, flexDirection: "row" }}
        >
          <Text style={styles.accountText}>You Don't have an acount?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  upperContainer: {
    height: 300,
    backgroundColor: "#087407",
    borderBottomLeftRadius: 240,
    width: 500,
    borderBottomRightRadius: 240,
    alignSelf: "center",
  },
  imageContainer: {},

  fromContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 30,
  },
  labelText: {
    // fontWeight: "bold",
    fontSize: 14,
    // marginVertical: 10,
    // color: "#000",
    // marginLeft: 11,
  },

  inputText: {
    color: "#000",
    fontSize: 16,
  },
  inputFiedContainer: {
    borderBottomWidth: 1,
  },
  inputContainer: {
    // flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 10,
  },
  forgotText: {
    color: "gray",
    alignSelf: "flex-end",
    fontSize: 14,
    marginHorizontal: 12,
    // marginTop: 4,
    // fontFamily: global.FONT.LIGHT,
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // height: 100,
    // width: 320,
    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "green",
    height: 50,
    width: 320,
    borderRadius: 40,
    marginTop: 46,
  },
  buttonTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 18,
  },
  signInTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  divider: {
    height: 0.5,
    width: 110,
    backgroundColor: "gray",
    alignSelf: "center",
    // marginTop: 10,
    marginHorizontal: 10,
  },
  orText: {
    alignSelf: "center",
    fontSize: 12,
    color: "gray",
    // fontFamily: "OpenSans-Light",
    // marginTop: 10,
  },
  facebookContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 90,
    marginTop: 20,
    // justifyContent: "center",
  },
  accountText: {
    color: "gray",
    // alignSelf: "flex-end",
    fontSize: 14,
    marginHorizontal: 12,
    // marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: "#087407",
    fontWeight: "bold",
    marginLeft: -10,
  },
});
