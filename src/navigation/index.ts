// Import home navigator
// Import profile navigator

export const Routes = AppRoutes;

export const AppNavigator = createSwitchNavigator(
  {
    [Routes.LOGIN_PAGE]: { screen: authNavigator },

    [Routes.LOGGED_IN_AGENT]: LoggedInTabNavigators.Agent,
    [Routes.LOGGED_IN_CONSUMER]: LoggedInTabNavigators.Consumer

    // test: CreateProposal.StandardProposal.Sell.SelectCommissions //implement your scene here to test, without having to navigate the app
  },
  {
    initialRouteName: Routes.LOGIN_PAGE

    // initialRouteName: "test" // un-comment to access you test component
  }
);

export const NotificationNavigator = createSwitchNavigator(
  {
    [Routes.NOTIFICATION_LANDING]: NotificationLanding,
    [Routes.LOGIN_PAGE]: { screen: authNavigator },
    [Routes.LOGGED_IN_AGENT]: LoggedInTabNavigators.Agent,
    [Routes.LOGGED_IN_CONSUMER]: LoggedInTabNavigators.Consumer
  },
  {
    initialRouteName: Routes.NOTIFICATION_LANDING
  }
);
