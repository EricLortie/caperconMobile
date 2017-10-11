import React from 'react';
import { Platform, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, List, ListItem } from 'react-native-elements';
import { App } from '../index'
import Home from '../screens/Home';
import Passes from '../screens/Passes';
import About from '../screens/About';
import Attractions from '../screens/Attractions';
import Schedule from '../screens/Schedule';
import ScheduleByVenue from '../screens/ScheduleByVenue';
import ScheduleByTime from '../screens/ScheduleByTime';
import Vendors from '../screens/Vendors';
import VendorDetail from '../screens/VendorDetail';
import Artists from '../screens/Artists';
import ArtistDetail from '../screens/ArtistDetail';
import Guests from '../screens/Guests';
import GuestDetail from '../screens/GuestDetail';
import Games from '../screens/Games';
import GameDetail from '../screens/GameDetail';
import Panels from '../screens/Panels';
import PanelDetail from '../screens/PanelDetail';

import { styles, primaryBGColour, primaryFontColour, secondaryFontColour, primaryHighlightColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';

const emptyHeader = {
  header:null,
  tintColor: primaryFontColour,
  headerStyle: {
    marginTop: 20,
    backgroundColor: primaryBGColour
  },
  headerTitleStyle: {
    color: primaryFontColour
  }
};

const styledHeader = {
  tintColor: secondaryBGColour,
  headerTintColor: secondaryFontColour,
  headerStyle: {
    backgroundColor: secondaryBGColour
  },
  headerTitleStyle: {
    color: secondaryFontColour
  },
  headerBackTitleStyle: {
    color: secondaryBGColour
  }
}

export const AttractionsStack = StackNavigator({
  Attractions: {
    screen: Attractions,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
  Guests: {
    screen: Guests,
    navigationOptions: ({ navigation }) => ({...{title: 'GUESTS'}, ...styledHeader})
  },
  GuestDetail: {
    screen: GuestDetail,
    navigationOptions: ({ navigation }) => ({...{title: navigation.state.params.name.toUpperCase()}, ...styledHeader})
  },
  Panels: {
    screen: Panels,
    navigationOptions: ({ navigation }) => ({...{title: 'PANELS'}, ...styledHeader})
  },
  PanelDetail: {
    screen: PanelDetail,
    navigationOptions: ({ navigation }) => ({...{title: "PANEL"}, ...styledHeader})
  },
  Games: {
    screen: Games,
    navigationOptions: ({ navigation }) => ({...{title: 'GAMING'}, ...styledHeader})
  },
  GameDetail: {
    screen: GuestDetail,
    navigationOptions: ({ navigation }) => ({...{title: navigation.state.params.name.toUpperCase()}, ...styledHeader})
  },
  Vendors: {
    screen: Vendors,
    navigationOptions: ({ navigation }) => ({...{title: 'Vendors Village'}, ...styledHeader})
  },
  VendorDetail: {
    screen: VendorDetail,
    navigationOptions: ({ navigation }) => ({...{title: navigation.state.params.name.toUpperCase()}, ...styledHeader})
  },
  Artists: {
    screen: Artists,
    navigationOptions: ({ navigation }) => ({...{title: 'ARTISTS ALLEY'}, ...styledHeader})
  },
  ArtistDetail: {
    screen: ArtistDetail,
    navigationOptions: ({ navigation }) => ({...{title: navigation.state.params.name.toUpperCase()}, ...styledHeader})
  }
});
export const PassesStack = StackNavigator({
  Passes: {
    screen: Passes,
    navigationOptions: ({ navigation }) => (emptyHeader),
  }
});
export const ScheduleStack = StackNavigator({
  Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
  ScheduleByVenue: {
    screen: ScheduleByVenue,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
  ScheduleByTime: {
    screen: ScheduleByTime,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
});
export const AboutStack = StackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => (emptyHeader),
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Home</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={22} color={primaryBGColour} />,
      header: null
    }),
  },
  Attractions: {
    screen: AttractionsStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Attractions</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="users" type="font-awesome" size={22} color={primaryBGColour} />,
      header: null
    }),
  },
  Passes: {
    screen: PassesStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Passes</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="ticket" type="font-awesome" size={22} color={primaryBGColour} />,
      header: null
    }),
  },
  Schedule: {
    screen: ScheduleStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Schedule</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="clock-o" type="font-awesome" size={22} color={primaryBGColour} />,
      header: null
    }),
  },
  About: {
    screen: AboutStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>About</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="question" type="font-awesome" size={22} color={primaryBGColour} />,
      header: null
    }),
  }
}, {
    header: null,
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: false, //No label for Android
      tabLabel: {
        color: secondaryFontColour
      },
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: secondaryBGColour, // Makes Android tab bar white instead of standard blue
        height: 50 // I didn't use this in my app, so the numbers may be off.
      }
    },
});
