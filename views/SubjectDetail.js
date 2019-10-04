import React from "react";
import * as WebBrowser from "expo-web-browser";

import { FlatList, Text, TouchableOpacity, View } from "react-native";

function Year(props) {
  const openUrl = async () => {
    await WebBrowser.openBrowserAsync(props.uri);
  };

  return (
    <TouchableOpacity onPress={openUrl}>
      <Text>
        {props.year} - {props.name}
      </Text>
    </TouchableOpacity>
  );
}

export default function SubjectDetail(props) {
  const subject = props.navigation.state.params;

  console.log("subject detail", props);
  return (
    <View>
      <Text>{subject.name}</Text>
      <FlatList
        data={subject.docs}
        renderItem={({ item }) => <Year {...item} onPress={() => {}} />}
        keyExtractor={item => `${item.name}-${item.year}`}
      />
    </View>
  );
}

SubjectDetail.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.name
  };
};
