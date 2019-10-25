import React from "react";

import { FlatList, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import analytics from "../util/analytics";
import Year from "../views/Year";

export default function SubjectDetail(props) {
  const subject = props.navigation.state.params;

  const openUrl = async item => {
    analytics.track(analytics.events.DOCUMENT_VIEWED, {
      subject: subject.name,
      form: subject.form,
      year: item.year,
      name: item.name
    });

    console.log("doc view", {
      subject: subject.name,
      form: subject.form,
      year: item.year,
      name: item.name
    });
    await WebBrowser.openBrowserAsync(item.uri);
  };

  return (
    <View>
      <FlatList
        data={subject.docs}
        renderItem={({ item }) => (
          <Year {...item} onPress={_ => openUrl(item)} />
        )}
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
