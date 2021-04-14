import React, { Component } from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Input, Overlay, Divider } from "react-native-elements";
import back from "../../assets/back.png";
import DatePicker from "react-native-datepicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import location from "../../assets/locations.png";
import global from "../../global";
import { LinearGradient } from "expo-linear-gradient";

export default class forgotScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContaier}>
            <View style={{ width: 40 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Image
                  source={global.ASSETS.BACK}
                  style={{
                    width: 20,
                    height: 26,
                    alignSelf: "flex-start",
                    resizeMode: "contain",
                    shadowColor: "gray",
                    marginTop: 40,
                    marginLeft: 22,
                    // marginRight: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </View>
        <View>
          <Text style={styles.bottomText}>
            Please enter your email address. You Will{"\n"} receive a code to
            create a new password{"\n"} via email
          </Text>
        </View>
        <View style={styles.inputContainer}>
          {/* email container */}

          <Input
            label="Your email Address"
            labelStyle={styles.labelText}
            textContentType="emailAddress"
            inputContainerStyle={styles.inputFiedContainer}
            keyboardType="email-address"
            inputStyle={styles.inputText}
            // onChangeText={(v) => this.setState({ number: v })}
            // value={this.state.number}
          />
        </View>
        <View>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            // loading={this.state.buttonLoading}
            title="Reset Password"
            titleStyle={styles.buttonTitle}
            TouchableComponent={TouchableOpacity}
            // onPress={() => this.props.navigation.navigate("loginScreen")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
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
    // marginTop: ,
    // marginBottom: 30,
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
    marginTop: 100,
  },
  buttonContainer: {
    alignSelf: "center",
    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "green",
    height: 50,
    width: 320,
    borderRadius: 40,
    marginTop: 10,
  },
  buttonTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 16,
  },
  headerContainer: {
    height: 100,
    backgroundColor: "#087407",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 24,
  },
  iconContaier: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 36,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  forgotText: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
  },
  bottomText: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
  },
});
