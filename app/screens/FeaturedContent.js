import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { styles, primaryBGColour, primaryFontColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';

class FeaturedContent extends Component {


  openExternalURL = (url) => {
    console.log(url);
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    // Handling Deep Linking
    const deepLinkUrl = Linking.getInitialURL().then((url) => {

    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    let fc = this.props.fc;
    const maxWidth = Dimensions.get('window').width;

    return (
      <View style={styles.fc_view}>
        <Text style={styles.fc_label}>{"Promoted Content"}</Text>
        <Image
          style={{ width: maxWidth-20, height: 54, flex: 1 }}
          source={{uri: fc.img_url}}
          onPress={() => this.openExternalURL(fc.ad_url)}>
        </Image>
      </View>
    )

  }
}

export default FeaturedContent;
