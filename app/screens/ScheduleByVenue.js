import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import { List, ListItem, Icon, Card, Button } from 'react-native-elements';
import FeaturedContent from './FeaturedContent';
import { styles, primaryBGColour, primaryFontColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';
import { loadLocalPhoto, loadScheduleData, buildSubtitle, validatePhotoUrl, LoadingScreen, loadFeaturedContentData } from '../config/functions';
//import Spinner, {InlineSpinner} from "../components/spinner";

class ScheduleByVenue extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Data: [],
      FeaturedContent: []
    }
  }

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    //loadFeaturedContentData(this);
    // Handling Deep Linking
    loadScheduleData(this, 'schedule_by_venue');
  }
  componentWillReceiveProps() {
    loadScheduleData(this, 'schedule_by_venue');
  }

  render() {

    // Handle case where the response is not here yet
      if ( !this.state.Data ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something...
         return (
           <LoadingScreen />
         )
      }

      // Gives you the opportunity to handle the case where the ajax request
      // completed but the result array is empty
      if ( this.state.Data.length === 0 ) {
        return (
          <LoadingScreen />
        )
      }

      const maxWidth = Dimensions.get('window').width;

      return (

        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/artistHeader.jpg')}
            resizeMode="cover">
          </Image>

          {this.state.Data.map((data, events) => (
            <View style={styles.altWithPadding}>
              <Text key={"ticket header"} style={styles.altHeaderText}>{date}</Text>
            </View>


          ))}

        </ScrollView>
      )

  }
}

export default ScheduleByVenue;
