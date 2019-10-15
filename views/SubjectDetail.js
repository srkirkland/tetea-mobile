import React from "react";
import * as WebBrowser from "expo-web-browser";

import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";

function Year(props) {
  const openUrl = async () => {
    await WebBrowser.openBrowserAsync(props.uri);
  };

  return (
    <ListItem
      title={props.year}
      subtitle={props.name}
      onPress={openUrl}
      rightIcon={{ name: "picture-as-pdf" }}
      bottomDivider
      chevron
    />
  );
}

export default function SubjectDetail(props) {
  const subject = props.navigation.state.params;

  console.log("subject detail", props);
  return (
    <View>
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
