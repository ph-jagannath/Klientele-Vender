import { Dimensions, Platform } from "react-native";
// import Constants from "expo-constants";
// import axios from "axios";
// Set default Base Url
// axios.defaults.baseURL =
//   // "http://192.168.0.162/project/DeliveryLads_Web/public/api/v1/";
//   "http://deliverylads.com/public/api/v1/";

// axios.defaults.headers.common = { Authorization: `Bearer ${AUTHTOKEN}` };

var { height, width } = Dimensions.get("window");
export default {
  // Async Storage key
  //   USER_ROLE: "USER_ROLE",
  //   API_TOKEN: "API_TOKEN",
  //   USER_DATA: "USER_DATA",
  //   REGISTER: [
  //     "", //0 first name
  //     "", //1 last name
  //     "", //2 phone number
  //     "", //3 email address
  //     "", //4 password
  //     "", //5 profile_image
  //     "", //6 role-id
  //     "", //7 address
  //   ],
  // ende key
  ASSETS: {
    BACK: require("./assets/back.png"),
    FACEBOOK: require("./assets/facebook.png"),
    GOOGLE: require("./assets/googleplus.png"),
    LOCATION: require("./assets/locations.png"),
    LOGO: require("./assets/logo.png"),
    MENU: require("./assets/menu.png"),
    IMG: require("./assets/img1.png"),
    IMG3: require("./assets/img3.png"),
    DISCOUNT: require("./assets/discount.png"),
    MIN: require("./assets/mins.png"),
    PLUS: require("./assets/plus.png"),
    RIGHTARROWYELLOW: require("./assets/nexxt-arrow-yellow.png"),
    RIGHTARROWWHITE: require("./assets/nexxt-arrow.png"),
    CHECK: require("./assets/check.png"),
    // CLIENT: require("./assets/slient.png"),
    // ONE: require("./assets/1.png"),
    INFOGRAPHIC: require("./assets/info-graphic.png"),
    FINDLOCATION: require("./assets/find-locations.png"),
    SEARCH: require("./assets/search.png"),
    MALE: require("./assets/male.png"),
    ACTIVEMALE: require("./assets/male_active.png"),
    FEMALE: require("./assets/female.png"),
    ACTIVEFEMALE: require("./assets/female-active.png"),
    PERCENT: require("./assets/discount-green.png"),
    GRAYARROW: require("./assets/nextgray.png"),
    // IMAGE: require("./assets/image.png"),
    RATING: require("./assets/rating.png"),
    PROFILE: require("./assets/def-user.png"),
    PROFILEICON: require("./assets/profile.png"),
    PAYMENT: require("./assets/payment.png"),
    INVITE: require("./assets/invite.png"),
    CHAT: require("./assets/chat.png"),
    CONTACT: require("./assets/contact.png"),
    TERMS: require("./assets/tems.png"),
    SETTING: require("./assets/setting.png"),
    NEXTARROW: require("./assets/Next-arrow.png"),
    LOGOUT: require("./assets/logout.png"),
    PASSWORD: require("./assets/password-view.png"),
    CALENDAR: require("./assets/cale.png"),
    // BGIMAGE: require("./assets/bg.jpg"),
    // BGIMAGE2: require("./assets/bgimage.jpg"),
    // BANK: require("./assets/icons/bank.png"),
    // BOOKINGHISTORY: require("./assets/icons/upcoming_history.png"),
    // BOTTOMIMAGE: require("./assets/bottom.jpg"),
    // BACKICON: require("./assets/icons/backArrow.png"),
    // BOOKNOW: require("./assets/book_now.png"),
    // BIKEICON: require("./assets/icons/bike.png"),
    // BLACKSCOOTERICON: require("./assets/icons/scooterBlack.png"),
    // BICYCLEICON: require("./assets/icons/bicycle.png"),
    // CASH: require("./assets/icons/cash_online.png"),
    // CALL: require("./assets/icons/phone_image.png"),
    // CASHWHITE: require("./assets/icons/white_hand.png"),
    // CIRCLE: require("./assets/round_icon.png"),
    // CONTACTUS: require("./assets/icons/contact_us.png"),
    // CHANGEPASSWORD: require("./assets/icons/change_pass.png"),
    // DECLINE: require("./assets/icons/cancel.png"),
    // DOC: require("./assets/doc.png"),
    // EDITICON: require("./assets/icons/edit_icon.png"),
    // EMAIL: require("./assets/icons/email.png"),
    // GIFT: require("./assets/icons/gift.png"),
    // HEADERMENU: require("./assets/header_menu.jpg"),
    // HELP: require("./assets/icons/Help.png"),
    // HELP1: require("./assets/icons/tracking_user.png"),
    // HELPTEXT: require("./assets/icons/help_image.png"),
    // HOME: require("./assets/icons/Home.png"),
    // JEEP: require("./assets/icons/jeep.png"),
    // KG: require("./assets/icons/kg.png"),
    // LOCATION: require("./assets/icons/location.png"),
    // LOGOUT: require("./assets/icons/logout.png"),
    // LOGO: require("./assets/logo.png"),
    // THANKULOGO: require("./assets/thank_u_logo.png"),
    // MYPROFILE: require("./assets/icons/My-profile.png"),
    // MESSAGE: require("./assets/icons/message_image.png"),
    // MOBILE: require("./assets/icons/mobile.png"),
    // MENUICON: require("./assets/icons/side_menu.png"),
    // NOTIFICATION: require("./assets/icons/notification.png"),
    // NOTE: require("./assets/icons/note.png"),
    // NEXTBOTTON: require("./assets/icons/arrow.png"),
    // PROFILEBG: require("./assets/profile_bg.jpg"),
    // PAYONLINE: require("./assets/icons/pay_online.png"),
    // PASSWORD: require("./assets/icons/password.png"),
    // PAYONLINEBLACK: require("./assets/icons/pay_online_black.png"),
    // PROCEED: require("./assets/procedd.png"),
    // SCOTTERICON: require("./assets/icons/scotter.png"),
    // SHAREAPP: require("./assets/icons/share_app.png"),
    // TRUCKICON: require("./assets/icons/truck.png"),
    // USERNAME: require("./assets/icons/user_name.png"),
    // USER: require("./assets/icons/user.png"),
    // YELLOWBIKEICON: require("./assets/icons/bikeYellow.png"),
    // YELLOWTRUCKICON: require("./assets/icons/truckYellow.png"),
    // YELLOWBICYCLEICON: require("./assets/icons/bicycleYellow.png"),
    // TRACK: require("./assets/icons/pick.png"),
    // THANKU: require("./assets/thanku_bg.jpg"),
    // TERMCONDITION: require("./assets/icons/terms_and_condition.png"),
    // UPCOMINGBOOKING: require("./assets/icons/upcoming_bookings.png"),
    // QR: require("./assets/icons/qr.png"),
    // UPLOAD: require("./assets/icons/upload_icon.png"),
    // VEHICLENUMBER: require("./assets/icons/vechile_icon.png"),
    // DIRECTION: require("./assets/icons/direction.png"),
    // MAP_PIN: require("./assets/pin_icon.png"),
    // MAP_PIN_PICK: require("./assets/map_pin_pick_large.png"),
    // MAP_PIN_DROP: require("./assets/map_pin_drop_red_large.png"),
    // MAP_PIN_SMALL: require("./assets/pin_icon_small.png"),
    // USER_MARKER: require("./assets/icons/user_marker_large.png"),
    // CREDIT_CARD: require("./assets/icons/credit-card.png"),
    // AVATAR: "https://www.w3schools.com/howto/img_avatar.png",
    // PICKUP_ADDRESS_IMG: require("./assets/pickup_address.jpg"),
    // DELIVERY_ADDRESS_IMG: require("./assets/pickup_address.jpg"),
    // // audio
    // BUZZER: require("./assets/sound/buzzer.mp3"),
    // QR_BEEP: require("./assets/sound/qr_beep.mp3"),
  },
  //   FONT: {
  //     EXTRABOLD: "OpenSans-ExtraBold",
  //     REGULAR: "OpenSans-Regular",
  //     SEMIBOLD: "OpenSans-SemiBold",
  //     BOLD: "OpenSans-Bold",
  //     LIGHT: "OpenSans-Light",
  //   },
  //   COLOR: {
  //     PRIMARY: "#F7C129",
  //     PRIMARYBUTTON: "#000",
  //     PRIMARYTEXT: "#F7C129",
  //     SECONDARYTEXT: "#A9A9A9",
  //   },
  //   CONSTANT: {
  //     APPNAME: Constants.manifest.name,
  //     FB_APP_ID: Constants.manifest.facebookAppId,
  //     APPDESCRIPTION: "The best and trending Delivery Service App",
  //     PLAYSTOREURL:
  //       "https://play.google.com/store/apps/details?id=com.deliverylads.app",
  //     APPSTOREURL: "https://apps.apple.com/us/app/deliverylads/id1503511612",
  //     WEBURL: "https://www.deliverylads.com",
  //     APPVERSION: Constants.manifest.version,
  //     HEIGHT: height,
  //     WIDTH: width,
  //     STATUSBAR: Constants.statusBarHeight,
  //     DEVICETYPE: Platform.OS,
  //     DEVICETOKEN: "",
  //     INPUT_COUNTRY_CODE: "+44",
  //     PLACESAPI: "AIzaSyCdIiqraik9uJkeLdoarnKms9voK1Q94pk",
  //   },
  // //   AUTHTOKEN: "", //Bearer token
  // //   BOOKING_ID: "", // for getting booking details
  // //   USER: {},
  // //   DRIVER: {},
  // //   IS_ONLINE: ["true", ""],
  // //   CURRENT_LOCATION: [
  // //     "", // 0 lat
  // //     "", // 1 long
  // //   ],
  //   DRIVER_LOCATION: [
  //     28.898448, //LAT
  //     75.78531, //LNG
  //   ],
  //   VAL: [1],
  //   MAPS: [
  //     "", //0 coords for polyline
  //     "", //1 route distance in meters
  //     "", //2 route time in seconds
  //   ],
  //   BOOKINGS: [
  //     "", //0  pick  up address
  //     "", //1  pick up latitude
  //     "", //2  pick up longitude
  //     "", //3  drop address
  //     "", //4  drop latitude
  //     "", //5  drop longitude
  //     "", //6  category_id
  //     "", //7  vehicle_id
  //     "", //8  item type_id
  //     "", //9  product note
  //     "", //10 amount
  //     "", //11 distance
  //     "", //12 payment type
  //     "", //13 receiver name
  //     "", //14 receiver contact
  //     "", //15 receiver note
  //     "", //16 card_number
  //     "", //17 exp_month
  //     "", //18 exp_year
  //     "", //19 cvv
  //     "", //20 sender name
  //     "", //21 sender number
  //     "", //22 prdct ctg name
  //     "", //23 prdct type name
  //   ],
  //   DRIVER_COUNT: [
  //     "", // booking
  //     "", // earning
  //   ],
  //   STATUS: {
  //     initiated: 1,
  //     confirmed: 2,
  //     "on the way": 3,
  //     reschedule: 4,
  //     canceled: 5,
  //     completed: 7,
  //     "canceled by admin": 8,
  //     "canceled by driver": 9,
  //     "pick up": 10,
  //   },
  //   INTERVALS: [
  //     1, // fetch new bookings -- driver
  //     1, // location update -- driver
  //     1, // status update -- user tracking
  //     1, // fetch active bookings -- driver
  //     1, // update tracking polyline -- driver
  //   ],
};
