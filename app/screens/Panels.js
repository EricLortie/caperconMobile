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

class Panels extends Component {

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

  onLearnMore = (panel) => {
    this.props.navigation.navigate('PanelDetail', { ...panel });
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
    loadData(this, 'panels');
  }
  componentWillReceiveProps() {
    loadData(this, 'panels');
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
            source={require('../assets/panelsHeader.jpeg')}
            resizeMode="cover">
          </Image>


          <View style={styles.altWithPadding}>
            <Text key={"ticket header"} style={styles.altHeaderText}>{"THE CAPERCON COMMUNITY"}</Text>
            <Text key={"ticket description"} style={styles.altText}>{"Our curated collection of panels is put together by passionate and exciting individuals."}</Text>
          </View>

          {this.state.fcTop.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

          <View style={styles.metaPanel}>
            {this.state.Data1.map((panel) => (
              <ListItem
                key={panel.panel_name}
                avatar={{ uri: validatePhotoUrl(panel.photo_url) }}
                title={<Text style={styles.listText}>{panel.panel_name}</Text>}
                onPress={() => this.onLearnMore({name: panel.panel_name, description: panel.panel_promotion, photo: panel.photo_url, host: panel.panel_host_name, type: panel.panel_type})}
                underlayColor={secondaryBGColour}
                chevronColor={secondaryHighlightColour}
              />
            ))}
          </View>

          <View style={styles.metaPanel}>
            {this.state.Data2.map((panel) => (
              <ListItem
                key={panel.panel_name}
                avatar={{ uri: validatePhotoUrl(panel.photo_url) }}
                title={<Text style={styles.listText}>{panel.panel_name}</Text>}
                onPress={() => this.onLearnMore({name: panel.name, description: panel.panel_promotion, photo: panel.photo_url, urls: [], featured: false})}
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

export default Panels;
