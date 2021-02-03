import React from "react";

import analytics from "../util/analytics";
import { getDataForLevel } from '../constants/LevelData';
import SubjectList from "../views/SubjectList";

export default function FormFourScreen(props) {
  const subjects = getDataForLevel('Form IV');

  const navigateToSubject = item => {
    analytics.track(analytics.events.SUBJECT_VIEWED, {
      level: item.level,
      name: item.name
    });
    props.navigation.navigate("subjectDetail", item);
  };

  return <SubjectList subjects={subjects} onPress={navigateToSubject} />;
}

FormFourScreen.navigationOptions = {
  title: "Form Four"
};
