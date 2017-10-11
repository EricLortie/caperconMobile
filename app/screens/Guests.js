import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import { List, ListItem, Icon, Card, Button } from 'react-native-elements';
import FeaturedContent from './FeaturedContent';
import { styles, primaryBGColour, primaryFontColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';
import { loadLocalPhoto, loadData, buildSubtitle, validatePhotoUrl, LoadingScreen, loadFeaturedContentData } from '../config/functions';
//import Spinner, {InlineSpinner} from "../components/spinner";

class Guests extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Data1: [],
      Data2: [],
      fcTop: [],
      fcMid: [],
      fcBottom: []
    }
  }

  onLearnMore = (guest) => {
    this.props.navigation.navigate('GuestDetail', { ...guest });
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
    loadData(this, 'guests');
  }
  componentWillReceiveProps() {
    loadData(this, 'guests');
  }

  render() {

    // Handle case where the response is not here yet
      if ( !this.state.Data1 && !this.state.Data2 ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something...
         return (
           <LoadingScreen />
         )
      }

      // Gives you the opportunity to handle the case where the ajax request
      // completed but the result array is empty
      if ( this.state.Data1.length === 0 && this.state.Data2.length === 0 ) {
        return (
          <LoadingScreen />
        )
      }

      const maxWidth = Dimensions.get('window').width;

      return (

        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/guestHeader.jpeg')}
            resizeMode="cover">
          </Image>

          <View style={styles.altWithPadding}>
            <Text key={"ticket header"} style={styles.altHeaderText}>{"THE MAIN EVENT"}</Text>
            <Text key={"ticket description"} style={styles.altText}>{"We're committed to bringing the best pop culture guests Cape Breton has ever seen."}</Text>
          </View>

          {this.state.fcTop.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

          <View style={styles.metaPanel}>
            {this.state.Data1.map((guest) => (
              <ListItem
                key={guest.slug}
                avatar={{ uri: validatePhotoUrl(guest.acf.photo) }}
                title={<Text style={styles.listText}>{guest.title.rendered}</Text>}
                onPress={() => this.onLearnMore({name: guest.title.rendered, description: guest.content.rendered, photo: guest.acf.photo, urls: guest.acf.urls, featured: guest.acf.featured})}
                underlayColor={secondaryBGColour}
                chevronColor={secondaryHighlightColour}
              />
            ))}

            {this.state.Data2.map((guest) => (
              <ListItem
                key={guest.slug}
                avatar={{ uri: validatePhotoUrl(guest.acf.photo) }}
                title={<Text style={styles.listText}>{guest.title.rendered}</Text>}
                onPress={() => this.onLearnMore({name: guest.title.rendered, description: guest.content.rendered, photo: guest.acf.photo, urls: guest.acf.urls, signing: guest.acf.signing})}
                underlayColor={secondaryBGColour}
                chevronColor={secondaryHighlightColour}
              />
            ))}
          </View>

          {this.state.fcBottom.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

        </ScrollView>
      )

  }
}

export default Guests;
