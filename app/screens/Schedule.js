import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, Dimensions, Image, NetInfo, Linking } from 'react-native';
import { List, ListItem, Button, Icon, Card } from 'react-native-elements';
import FeaturedContent from './FeaturedContent';
import { styles, primaryFontColour, primaryBGColour, primaryHighlightColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';
import { loadFeaturedContentData } from '../config/functions';

class Schedule extends Component {

  constructor(props) {
    super(props);

    this.state = {
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

  componentDidMount() {
    loadFeaturedContentData(this);
    // Handling Deep Linking
    const deepLinkUrl = Linking.getInitialURL().then((url) => {

    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    const maxWidth = Dimensions.get('window').width;

    return (
      <ScrollView style={styles.defaultContainer}>

        <Image
          style={{ width: maxWidth, height: 200 }}
          source={require('../assets/aboutHeader.jpg')}
          resizeMode="cover" />

        <View style={styles.altWithPadding}>
          <Text key={"ticket header"} style={styles.altHeaderText}>{"SO MUCH TO DO"}</Text>
          <Text key={"ticket description"} style={styles.altText}>{"This is the biggest & best CaperCon ever."}</Text>
        </View>

        {this.state.fcTop.map((fc) => (
          <FeaturedContent key={fc.slug} fc={fc} />
        ))}

        <View style={styles.metaPanel}>
          <ListItem
            title={<Text style={styles.listText}>{"View Schedule by Time"}</Text>}
            onPress={() => this.onLearnMore('ScheduleByTime')}
            underlayColor={secondaryBGColour}
            chevronColor={secondaryHighlightColour}
          />
          <ListItem
            title={<Text style={styles.listText}>{"View Schedule by Location"}</Text>}
            onPress={() => this.onLearnMore('ScheduleByLocation')}
            underlayColor={secondaryBGColour}
            chevronColor={secondaryHighlightColour}
          />
        </View>

        {this.state.fcBottom.map((fc) => (
          <FeaturedContent key={fc.slug} fc={fc} />
        ))}

      </ScrollView>
    );
  }
}

export default Schedule;
