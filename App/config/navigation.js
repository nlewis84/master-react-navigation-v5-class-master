import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";
import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "goldenrod" } }}
  >
    <ContactsStack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{ headerTitle: "Contacts" }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ route }) => {
        console.log(route);
        return {
          headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
          headerStyle: { backgroundColor: "darkgoldenrod" },
        };
      }}
    />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Contact" component={ContactsStackScreen} />
    <AppTabs.Screen name="Actions" component={ActionsStackScreen} />
  </AppTabs.Navigator>
);

export default () => (
  <NavigationContainer>
    <AppTabsScreen />
  </NavigationContainer>
);
