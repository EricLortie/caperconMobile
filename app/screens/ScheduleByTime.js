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
import { loadLocalPhoto, loadScheduleData, buildSubtitle, validatePhotoUrl, LoadingScreen, loadFeaturedContentData, ScheduleHeader } from '../config/functions';
//import Spinner, {InlineSpinner} from "../components/spinner";

class ScheduleByTime extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Schedule: [],
      FeaturedContent: []
    }
  }

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    //loadFeaturedContentData(this);
    // Handling Deep Linking
    loadScheduleData(this, 'schedule_by_time');
  }
  componentWillMount() {
    //loadFeaturedContentData(this);
    // Handling Deep Linking
    loadScheduleData(this, 'schedule_by_time');
  }
  componentWillReceiveProps() {
    loadScheduleData(this, 'schedule_by_time');
  }

  render() {

    // Handle case where the response is not here yet
      if ( !this.state.Schedule ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something...
         return (
           <LoadingScreen />
         )
      }

      // Gives you the opportunity to handle the case where the ajax request
      // completed but the result array is empty
      if ( this.state.Schedule.length === 0 ) {
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

          <View key={1111} style={styles.altWithPadding}>
            <Text key={1111} style={styles.altHeaderText}>"HEY"+{Object.keys(this.state.Schedule)[1]}</Text>
          </View>

          {this.state.Schedule.map((date_data) => {
            console.log("Loop motherfucker");
            console.log(date_data);
              let date = date_data[0];
              let dates = date_data[1];
              <View key={date} style={styles.altWithPadding}>
                <Text key={date} style={styles.altHeaderText}>"HEY"+{date}</Text>
              </View>

              {dates.map((time_data) => {
                let time = time_data[0];
                let shows = time_data[1];
                <View key={time}>
                  <Text key={time} style={styles.altHeaderText}>{time}</Text>

                  <View key={time} style={styles.metaPanel}>
                      {shows.map((schedule) => {
                        <ListItem
                          key={schedule.slug+(Math.random() * (1000 - 0))}
                          subtitle={
                            <View style={styles.subtitleView}>
                              <Text style={styles.subtitleText}>{schedule.name}</Text>
                              <Text style={styles.subtitleText}>{schedule.venue}</Text>
                              <Text style={styles.subtitleText}>{schedule.start_time} to {schedule.end_time}</Text>
                            </View>
                          }
                          onPress={() => this.onLearnMore({name: schedule.name, description: schedule.promotion, photo: schedule.photo_url, start: schedule.start_time, end: schedule.end_time})}
                          underlayColor={secondaryBGColour}
                          chevronColor={secondaryHighlightColour}
                        />
                      })}
                  </View>
                </View>
              })}
            })}

        </ScrollView>
      )

  }
}

export default ScheduleByTime;
