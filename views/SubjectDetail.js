import React from "react";

import { FlatList, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import analytics from "../util/analytics";
import Year from "../views/Year";

export default function SubjectDetail(props) {
  const subject = props.route.params;

  const openUrl = async item => {
    analytics.track(analytics.events.DOCUMENT_VIEWED, {
      subject: subject.name,
      level: subject.level,
      year: item.year,
      name: item.name
    });

    await WebBrowser.openBrowserAsync(item.uri);
  };

  return (
    <View>
      <FlatList
        data={subject.docs.sort((a,b) => a.year < b.year)}
        renderItem={({ item }) => (
          <Year {...item} onPress={_ => openUrl(item)} />
        )}
        keyExtractor={item => `${item.name}-${item.year}`}
      />
    </View>
  );
}