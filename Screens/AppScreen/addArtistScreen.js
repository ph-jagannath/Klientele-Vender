import React, { Component } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  LogBox,
  //   YellowBox,
} from "react-native";

import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Icon, Input, Avatar, Overlay } from "react-native-elements";
import global from "../../global";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
// console.disableYellowBox = false;
//Ignore all log notifications

LogBox.ignoreAllLogs();
export default class addArtistScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      profile_image: global.ASSETS.PROFILE,
      upload_visible: false,
    };
  }

  // Toggle camera options
  chooseUpload = () => {
    this.setState({
      upload_visible: !this.state.upload_visible,
    });
  };

  // Image Picker function
  _pickImage = async (v) => {
    let permissionResult;
    if (v == "camera") {
      permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    } else {
      permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    }

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let option =
      v == "camera"
        ? ImagePicker.launchCameraAsync
        : ImagePicker.launchImageLibraryAsync;
    let result = await option({
      quality: 0.2,
    });
    this.chooseUpload();

    if (!result.cancelled) {
      this.setState({
        profile: result.uri,
      });
    }
  };

  render() {
    const {
      name,
      email,
      password,
      phoneNumber,
      country,
      country_code,
      profile,
      upload_visible,
    } = this.state;
    return (
      <View style={styles.bgContainer}>
        <View style={styles.topContinaer}>
          <View style={styles.headerContainer}>
            <View style={styles.iconContaier}>
              <View style={{ width: 40 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("")}
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
              <View>
                <Text style={styles.headerText}> ADD ARTIST</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.avatarContainer}>
          <Avatar
            rounded
            size={"large"}
            source={this.state.profile_image}
            containerStyle={styles.empImg}
            onPress={() => {
              this.chooseUpload();
            }}
          />
        </View>
        <Overlay
          overlayStyle={styles.overlay}
          containerStyle={styles.overlayContainer}
          isVisible={upload_visible}
          transparent={true}
          //   width={global.CONSTANT.WIDTH - 40}
          height={170}
          animationType="fade"
          onRequestClose={this.chooseUpload}
          onBackdropPress={this.chooseUpload}
        >
          <View>
            <Text style={styles.overlayTitle}>{"choose_upload"}</Text>
            <View style={styles.distanceContainer}>
              {/* Files Button */}
              <TouchableOpacity
                onPress={() => {
                  this._pickImage("files");
                }}
                style={styles.durationContainer}
              >
                <Icon
                  iconStyle={styles.modelIcon}
                  name="file-image"
                  type="material-community"
                  color="green"
                  size={35}
                />

                <Text style={styles.overlayText}>Library</Text>
              </TouchableOpacity>
              {/* Camera Button */}
              <TouchableOpacity
                onPress={() => {
                  this._pickImage("camera");
                }}
                style={styles.durationContainer}
              >
                <Icon
                  iconStyle={styles.modelIcon}
                  name="camera"
                  type="material-community"
                  color="green"
                  size={35}
                />
                <Text style={styles.overlayText}>{"Camera"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    // justifyContent: "center",
  },
  headerContainer: {
    // height: 100,
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
    marginTop: 30,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 10,
    // marginTop: "-13%"
  },
  overlay: {
    // backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginTop: 200,
    flex: 1,
    justifyContent: "flex-end",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    // width: global.CONSTANT.WIDTH,
  },
  overlayContainer: {
    backgroundColor: "transparent",
  },
  overlayTitle: {
    alignSelf: "center",
    fontSize: 20,
    color: "yellow",
    // color: global.COLOR.PRIMARY,
    textTransform: "capitalize",
    // marginTop: 20,
  },
  distanceContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 30,
  },
  durationContainer: {
    // backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 0.8,
    height: 70,
    width: 70,
    marginVertical: 20,
    borderRadius: 10,
  },
  modelIcon: {
    marginVertical: 4,
  },
  overlayText: {
    alignSelf: "center",
    fontSize: 14,
    color: "green",
  },
});
