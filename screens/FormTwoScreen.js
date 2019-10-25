import React from "react";

// TODO: change to form 2
import analytics from "../util/analytics";
import formData from "../navigation/forms/FormFourData.json";
import SubjectList from "../views/SubjectList";

export default function FormTwoScreen(props) {
  const subjects = formData;

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
