import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Icon, Input } from "react-native-elements";
// import { TouchableOpacity } from "react-native-gesture-handler";
import global from "../../global";
import { Divider } from "react-native-elements";
export default class drawer extends Component {
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={{ marginHorizontal: 20, marginTop: 60 }}>
          <Image source={global.ASSETS.PROFILE} />
          <Text style={styles.nameText}>KLIENTELE</Text>
          <Text style={styles.emailText}>klientele68@gmail.com</Text>
       <View style={{marginTop:40}}></View>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.PROFILEICON} style={styles.image} />
              <Text style={styles.rightText}>Profile</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("")}
          >
            <View style={styles.leftContainer}>
              <Icon
                name="book"
                color="#000"
                type="material-community"
                size={20}
                iconStyle={styles.icon1}
              />
              <Text style={styles.rightText}>Bookings</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.PROFILEICON} style={styles.image} />
              <Text style={styles.rightText}>Edit Profile</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.INVITE} style={styles.image} />
              <Text style={styles.rightText}>Invite and share app</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("Faq")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.CHAT} style={styles.image} />
              <Text style={styles.rightText}>FAQ</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.CONTACT} style={styles.image} />
              <Text style={styles.rightText}>Contact Us</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("TermsScreen")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.TERMS} style={styles.image} />
              <Text style={styles.rightText}>Terms & Conditions</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
       

          {/* <Divider style={styles.divider}></Divider> */}
        </View>
        <Divider style={styles.divider} />
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.LOGOUT} style={styles.image} />
              <Text style={styles.rightText}>Logout</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    // marginRight: 100,
    // justifyContent: "center",
    backgroundColor: "#fff",

    // justifyContent: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 8,
    fontWeight: "bold",
  },
  genderContainer: {
    borderWidth: 0.6,
    borderColor: "green",
    borderRadius: 5,
    marginVertical: 20,
    // marginHorizontal: 40,
  },
  genderText: {
    fontSize: 8,
    padding: 10,
    alignSelf: "center",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    // marginTop: 2,
  },
  rightText: {
    fontSize: 12,
    fontWeight: "700",
    // marginHorizontal: 20,
    // marginTop: 3,
    color: "gray",
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  image1: {
    marginTop: 5,

    marginLeft: 40,
  },
  divider: {
    backgroundColor: "gray",
    // marginHorizontal: 24,
    marginTop: 100,
    marginBottom: 20,
  },
  imageContainer: {
    //   alignSelf:"flex-end",
    //   justifyContent:"flex-end"
  },
});