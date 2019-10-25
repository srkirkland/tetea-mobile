import React from "react";

// TODO: change to form 6
import analytics from "../util/analytics";
import formData from "../navigation/forms/FormFourData.json";
import SubjectList from "../views/SubjectList";

export default function FormSixScreen(props) {
  const subjects = formData;

  const navigateToSubject = item => {
    analytics.track(analytics.events.SUBJECT_VIEWED, {
      form: 6,
      name: item.name
    });

    props.navigation.navigate("subjectDetail", item);
  };

  return <SubjectList subjects={subjects} onPress={navigateToSubject} />;
}

FormSixScreen.navigationOptions = {
  title: "Form Six"
};
