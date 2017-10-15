import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ListItem
} from 'react-native';
import ScheduleItem from './ScheduleItem';
import { styles, primaryBGColour, primaryFontColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';

export class ScheduleBlock extends Component {

  render() {
    console.log("FUCK");
    let date = this.props.date_data[0];
    let time_data = this.props.date_data[1];

    let timeslot_data = time_data.map(async function (events) {
      console.log("IN LOOP")
      console.log(events)
      return (
        <View key={events[0]}>
          <Text key={events[0]} style={styles.altHeaderText}>{events[1]}</Text>

          <View key={events[0]} style={styles.metaPanel}>
          {events[1].map((schedule) => (
              <ListItem
                key={schedule.slug}
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
          ))}
          </View>
        </View>
      )
    });

    console.log("TIMESLOT DATA");
    console.log(timeslot_data);
    {timeslot_data}
  }
}

export default ScheduleBlock;
