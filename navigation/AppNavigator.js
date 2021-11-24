import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import FormTwoScreen from "../screens/FormTwoScreen";
import FormFourScreen from "../screens/FormFourScreen";
import FormSixScreen from "../screens/FormSixScreen";

import SubjectDetail from "../views/SubjectDetail";

export default function Navigation() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="subjectDetail"
        component={SubjectDetail}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        })}
      />
      <BottomTab.Screen
        name="FormTwo"
        component={FormTwoScreen}
        options={{
          title: "Form Two",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="filter-2" />
          ),
        }}
      />
      <BottomTab.Screen
        name="FormFour"
        component={FormFourScreen}
        options={{
          title: "Form Four",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="filter-4" />
          ),
        }}
      />
      <BottomTab.Screen
        name="FormSix"
        component={FormSixScreen}
        options={{
          title: "Form Six",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="filter-6" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
