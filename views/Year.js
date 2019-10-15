import React from "react";

import * as WebBrowser from "expo-web-browser";
import { ListItem } from "react-native-elements";

export default function Year(props) {
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
