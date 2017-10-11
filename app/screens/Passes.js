import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import FeaturedContent from './FeaturedContent';
import { styles, primaryFontColour, primaryBGColour, primaryHighlightColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour, secondaryAccentColour } from '../styles/common';
import { loadLocalPhoto, loadGuestData, buildSubtitle, validatePhotoUrl, LoadingScreen } from '../config/functions';
//import Spinner, {InlineSpinner} from "../components/spinner";

class Passes extends Component {

  constructor(props) {
    super(props);

  }

  openExternalURL = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  componentDidMount() {
    // Handling Deep Linking
    const deepLinkUrl = Linking.getInitialURL().then((url) => {

    }).catch(err => console.error('An error occurred', err));

  }

  render() {

    const maxWidth = Dimensions.get('window').width;

    return (
      <View>
        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/passesHeader.jpg')}
            resizeMode="cover">
          </Image>

          <View style={styles.altWithPadding}>
            <Text key={"ticket header"} style={styles.altHeaderText}>{"COME PLAY"}</Text>
            <Text key={"ticket description"} style={styles.altText}>{"CaperCon passes provide are affordable and provide an amazing value. Buy your passes today!"}</Text>
          </View>

          <View style={styles.metaPanel}>
            <View style={styles.headerContainer}>
              <Text key={"ticket header"} style={styles.altHeaderText}>BUY PASSES</Text>
              <Text key={"ticket description"} style={styles.altText}>These are pre-registration prices. Pass prices will increase at the door.</Text>
            </View>
            <ListItem
              key={"weekend"}
              title={<View style={styles.priceBox}><Text style={styles.priceAmount}>$35</Text><Text style={styles.priceLabel}>Full Weekend</Text></View>}
              onPress={() => this.openExternalURL('http://tickets.capebreton.ca')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryAccentColour}
            />
            <ListItem
              key={"friday"}
              title={<View style={styles.priceBox}><Text style={styles.priceAmount}>$15</Text><Text style={styles.priceLabel}>Friday</Text></View>}
              onPress={() => this.openExternalURL('http://tickets.capebreton.ca')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryAccentColour}
            />
            <ListItem
              key={"saturday"}
              title={<View style={styles.priceBox}><Text style={styles.priceAmount}>$20</Text><Text style={styles.priceLabel}>Saturday</Text></View>}
              onPress={() => this.openExternalURL('http://tickets.capebreton.ca')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryAccentColour}
            />
            <ListItem
              key={"sunday"}
              title={<View style={styles.priceBox}><Text style={styles.priceAmount}>$15</Text><Text style={styles.priceLabel}>Sunday</Text></View>}
              onPress={() => this.openExternalURL('http://tickets.capebreton.ca')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryAccentColour}
            />
            <View style={styles.headerContainer}>
              <Text key={"ticket description"} style={styles.altText}>The family pass includes 2 adult and 3 childrens passes.</Text>
            </View>
            <ListItem
              key={"family"}
              title={<View style={styles.priceBox}><Text style={styles.priceAmount}>$100</Text><Text style={styles.priceLabel}>Family Pass</Text></View>}
              onPress={() => this.openExternalURL('http://tickets.capebreton.ca')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryAccentColour}
            />
          </View>

        </ScrollView>

      </View>
    )

  }
}

export default Passes;
