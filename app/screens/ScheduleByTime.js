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
      Data: [],
      FeaturedContent: []
    }
  }

  onLearnMore = (artist) => {
    this.props.navigation.navigate('ArtistDetail', { ...artist });
  };

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    loadScheduleData(this, 'schedule_by_time');
  }
  componentWillReceiveProps() {
    loadScheduleData(this, 'schedule_by_time');
  }
  pad(val){
     return (val<10) ? '0' + val : val;
   }

  render() {
    // Handle case where the response is not here yet

      const maxWidth = Dimensions.get('window').width;

      return (
        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/artistHeader.jpg')}
            resizeMode="cover">
          </Image>
            {this.state.Data.map((date_data)=> {
              return (
                <View key={date_data[0]}>
                  <View style={styles.altWithPadding}>
                    <Text style={styles.altHeaderText}>{date_data[0]}</Text>
                  </View>
                  {date_data[1].map((events)=> {
                    let time = events[0]*1000;
                    let hours = new Date(time).getHours();
                    let mins = new Date(time).getMinutes();

                    return (
                    <View key={events[0]}>

                      <View key={events[0]} style={styles.metaPanel}>
                      {events[1].map((schedEvent) => {
                        return (
                        <ListItem
                          key={schedEvent.slug}
                          subtitle={
                            <View>
                              <View style={styles.subtitleView}>
                                <Text style={styles.eventNameText}>{schedEvent.name}</Text>
                              </View>
                              <View style={styles.subtitleView}>
                                <Text style={styles.eventVenueText}>{schedEvent.venue}</Text>
                              </View>
                              <View style={styles.subtitleView}>
                                <Text style={styles.eventTimeText}>{schedEvent.start_time} to {schedEvent.end_time}</Text>
                              </View>
                            </View>
                          }
                          hideChevron={true}
                        />
                      )
                      })}
                      </View>
                    </View>
                  )
                  })}

                </View>
              )
            })}

        </ScrollView>
      )

  }


}



export default ScheduleByTime;
