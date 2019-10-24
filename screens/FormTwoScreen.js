import React from "react";

// TODO: change to form 2
import config from "../navigation/forms/FormFour";
import SubjectList from "../views/SubjectList";

export default function FormTwoScreen(props) {
  const { subjects } = config;

  const navigateToSubject = item => {
    analytics.track(analytics.events.SUBJECT_VIEWED, {
      form: 2,
      name: item.name
    });

    props.navigation.navigate("subjectDetail", item);
  };

  return <SubjectList subjects={subjects} onPress={navigateToSubject} />;
}

FormTwoScreen.navigationOptions = {
  title: "Form Two"
};
