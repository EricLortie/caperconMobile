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

class Artists extends Component {

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

  onLearnMore = (artist) => {
    this.props.navigation.navigate('ArtistDetail', { ...artist });
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
    loadData(this, 'artists');
  }
  componentWillReceiveProps() {
    loadData(this, 'artists');
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
            source={require('../assets/artistHeader.jpg')}
            resizeMode="cover">
          </Image>

          <View style={styles.altWithPadding}>
            <Text key={"ticket header"} style={styles.altHeaderText}>{"SO MUCH TALENT"}</Text>
            <Text key={"ticket description"} style={styles.altText}>{"Cape Breton has an amazing artist community & it shines through at CaperCon."}</Text>
          </View>

          {this.state.fcTop.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

          <View style={styles.metaPanel}>
              {this.state.Data1.map((artist) => (
                <ListItem
                  key={artist.slug}
                  style={styles.featuredExhibitor}
                  subtitle={
                    <View style={styles.subtitleView}>
                      <Image source={{ uri: validatePhotoUrl(artist.photo_url) }} style={styles.subtitleImage}/>
                      <Text style={styles.subtitleText}>{artist.company}</Text>
                    </View>
                  }
                  onPress={() => this.onLearnMore({name: artist.company, description: artist.promotion, photo: artist.photo_url, twitter: artist.twitter, facebook: artist.facebook, website: artist.website})}
                  underlayColor={secondaryBGColour}
                  chevronColor={secondaryHighlightColour}
                />
              ))}

              {this.state.Data2.map((artist) => (
                <ListItem
                  key={artist.slug}
                  style={styles.featuredExhibitor}
                  subtitle={
                    <View style={styles.subtitleView}>
                      <Image source={{ uri: validatePhotoUrl(artist.photo_url) }} style={styles.subtitleImage}/>
                      <Text style={styles.subtitleText}>{artist.company}</Text>
                    </View>
                  }
                  onPress={() => this.onLearnMore({name: artist.company, description: artist.promotion, photo: artist.photo_url, twitter: artist.twitter, facebook: artist.facebook, website: artist.website})}
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

export default Artists;
