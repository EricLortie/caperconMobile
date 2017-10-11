import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, Dimensions, Image, NetInfo, Linking } from 'react-native';
import { List, ListItem, Button, Icon, Card } from 'react-native-elements';
import FeaturedContent from './FeaturedContent';
import { styles, primaryFontColour, primaryBGColour, primaryHighlightColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';
import { reloadAllData, loadFeaturedContentData } from '../config/functions';

class Attractions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fcTop: [],
      fcMid: [],
      fcBottom: [],
    }

  }

  openExternalURL = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  onLearnMore = (page) => {
    this.props.navigation.navigate(page);
  };

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
          source={require('../assets/cosplayHeader.jpg')}
          resizeMode="cover" />

        <View style={styles.altWithPadding}>
          <Text key={"ticket header"} style={styles.altHeaderText}>{"SO EXCITING"}</Text>
          <Text key={"ticket description"} style={styles.altText}>{"With so much to see & do you'll definitely have an amazing weekend!"}</Text>
        </View>

        {this.state.fcTop.map((fc) => (
          <FeaturedContent key={fc.slug} fc={fc} />
        ))}

        <View style={styles.metaPanel}>
          <ListItem
            title={<Text style={styles.listText}>Guests</Text>}
            onPress={() => this.onLearnMore('Guests')}
            underlayColor={secondaryBGColour}
            chevronColor={secondaryHighlightColour}
          />
          <ListItem
            title={<Text style={styles.listText}>Panels</Text>}
            onPress={() => this.onLearnMore('Panels')}
            underlayColor={secondaryBGColour}
            chevronColor={secondaryHighlightColour}
          />
          <ListItem
            title={<Text style={styles.listText}>Gaming</Text>}
            onPress={() => this.onLearnMore('Games')}
            underlayColor={secondaryBGColour}
            chevronColor={secondaryHighlightColour}
          />
          <ListItem
            title={<Text style={styles.listText}>Vendors</Text>}
            onPress={() => this.onLearnMore('Vendors')}
            underlayColor={secondaryBGColour}
            chevronColor={secondaryHighlightColour}
          />
          <ListItem
            title={<Text style={styles.listText}>Artists</Text>}
            onPress={() => this.onLearnMore('Artists')}
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

export default Attractions;
