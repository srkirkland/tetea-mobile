import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import * as WebBrowser from "expo-web-browser";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ padding: 10 }}>

          <Text style={{ fontSize: 40 }}>Welcome</Text>

          <Text style={styles.welcomeSubText}>
            Karibu sana kwenye Maktaba ya TETEA!
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text>
            To view the exams on your phone or computer you may need to download Adobe Reader:
          </Text>
          <TouchableOpacity onPress={handleAcrobatPress}>
          <Image
            source={
              require("../assets/images/acrobat.png")
            }
            style={styles.welcomeImage}
          />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function handleAcrobatPress() {
  WebBrowser.openBrowserAsync(
    "https://get.adobe.com/reader/"
  );
}

HomeScreen.navigationOptions = {
  title: 'Maktaba by Tetea'
};

const dimensions = Dimensions.get('window');
const acrobatImageRatio = 100 / 404;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    height: (dimensions.width * acrobatImageRatio) / 2,
    width: dimensions.width / 2,
    marginTop: 10
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  welcomeText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
