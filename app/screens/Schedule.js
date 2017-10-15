import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, Dimensions, Image, NetInfo, Linking } from 'react-native';
import { List, ListItem, Button, Icon, Card } from 'react-native-elements';
import FeaturedContent from './FeaturedContent';
import { styles, primaryFontColour, primaryBGColour, primaryHighlightColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';
import { loadFeaturedContentData, loadScheduleData } from '../config/functions';

class Schedule extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Data: [],
      fcTop: [],
      fcMid: [],
      fcBottom: [],
    }

  }

  onLearnMore = (page) => {
    this.props.navigation.navigate(page);
  };

  openExternalURL = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    loadFeaturedContentData(this);
    // Handling Deep Linking
    const deepLinkUrl = Linking.getInitialURL().then((url) => {

    }).catch(err => console.error('An error occurred', err));
    loadScheduleData(this, 'schedule_by_time');
  }
  componentWillReceiveProps() {
    loadFeaturedContentData(this);
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
            source={require('../assets/scheduleHeader.jpg')}
            resizeMode="cover">
          </Image>

          <View style={styles.altWithPadding}>
            <Text style={styles.altText}>{"Scroll down to see a full list of events for the weekend or click the link below to view the program on CaperCon.ca"}</Text>
          </View>
          <View style={styles.metaPanel}>

            <ListItem
              title={<Text style={styles.listText}>{"Program on CaperCon.ca"}</Text>}
              onPress={() => this.openExternalURL('http://capercon.ca/2017-schedule')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryHighlightColour}
            />
          </View>

            {this.state.Data.map((date_data)=> {
              {if (date_data[0] == "Friday October 20th"){
                {this.state.fcTop.map((fc) => {
                  return(<FeaturedContent key={fc.slug} fc={fc} />)
                })}
              }}
              {if (date_data[0] == "Saturday October 21st"){
                {this.state.fcMid.map((fc) => {
                  return(<FeaturedContent key={fc.slug} fc={fc} />)
                })}
              }}
              {if (date_data[0] == "Sunday October 22nd"){
                {this.state.fcBottom.map((fc) => {
                  return(<FeaturedContent key={fc.slug} fc={fc} />)
                })}
              }}

              return (
                <View key={date_data[0]}>
                  <View style={styles.altWithPaddingAndBorder}>
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

export default Schedule;
