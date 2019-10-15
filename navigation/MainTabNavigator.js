import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import LinksScreen from "../screens/LinksScreen";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FormTwoScreen from "../screens/FormTwoScreen";
import FormFourScreen from "../screens/FormFourScreen";
import FormSixScreen from "../screens/FormSixScreen";

import CommonNavigation from "./CommonNavigation";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
};

HomeStack.path = "";

const FormTwoStack = createStackNavigator(
  {
    FormTwo: FormTwoScreen,
    ...CommonNavigation
  },
  config
);

FormTwoStack.navigationOptions = {
  tabBarLabel: "Form Two",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="filter-2" />
};

FormTwoStack.path = "";

const FormFourStack = createStackNavigator(
  {
    FormFour: FormFourScreen,
    ...CommonNavigation
  },
  config
);

FormFourStack.navigationOptions = {
  tabBarLabel: "Form Four",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="filter-4" />
};

FormFourStack.path = "";

const FormSixStack = createStackNavigator(
  {
    FormSix: FormSixScreen,
    ...CommonNavigation
  },
  config
);

FormSixStack.navigationOptions = {
  tabBarLabel: "Form Six",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="filter-6" />
};

FormSixStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="link" />
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="settings" />
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FormTwoStack,
  FormFourStack,
  FormSixStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
