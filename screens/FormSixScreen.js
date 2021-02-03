import React from "react";

import analytics from "../util/analytics";
import { getDataForLevel } from '../constants/LevelData';
import SubjectList from "../views/SubjectList";

export default function FormSixScreen(props) {
  const subjects = getDataForLevel('Form VI');

  const navigateToSubject = item => {
    analytics.track(analytics.events.SUBJECT_VIEWED, {
      level: item.level,
      name: item.name
    });

    props.navigation.navigate("subjectDetail", item);
  };

  return <SubjectList subjects={subjects} onPress={navigateToSubject} />;
}

FormSixScreen.navigationOptions = {
  title: "Form Six"
};
