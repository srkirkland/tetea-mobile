import React from "react";

import { FlatList, View } from "react-native";

import Year from '../views/Year';

export default function SubjectDetail(props) {
  const subject = props.navigation.state.params;

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
