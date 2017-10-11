import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, Dimensions, Image, NetInfo, Linking } from 'react-native';
import { List, ListItem, Button, CheckBox, Icon, Card } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import FeaturedContent from './FeaturedContent';
import { styles, primaryFontColour, primaryBGColour, primaryHighlightColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';
import { loadFeaturedContentData } from '../config/functions';

class AboutPage extends Component {

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
    const headerTitle1 = "What is CaperCon?";
    const headerText1 = "The best celebration of fandom on the island. Whatever you like: games, tv, movies, comics & everything in between: we're right there with you.";

    const gamingText = "Tabletop games and board games. Play video games on amazing gaming PCs or try live-action roleplay!";
    const cosplayText = "CaperCon is a great experience when it's fully immersive. Come dressed as your favourite character & win prizes!";
    const guestText = "Listen & interact with our guests along a number of diverse and incredibly interesting subjects.";
    const socialText = "Spend a weekend with people who share similar interests to you, or find out new & exciting things to get into.";


    return (
      <View>
        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/teamHeader.jpg')}
            resizeMode="cover">
          </Image>

          <View style={styles.headerContentPanel}>
            <Text style={styles.altHeaderText}>{headerTitle1}</Text>
            <Text style={styles.altText}>{headerText1}</Text>
          </View>

          {this.state.fcTop.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

          <View style={styles.infoPanel}>
            <View  style={styles.infoIconContainer}>
              <Icon
                name='rocket'
                type='font-awesome'
                color={primaryAccentColour}
                style={styles.infoIcon}
              />
            </View>
            <Text style={styles.infoTitle}>Gaming</Text>
            <Text style={styles.infoDesc}>{gamingText}</Text>
          </View>

          <View style={styles.infoPanel}>
            <View  style={styles.infoIconContainer}>
              <Icon
                name='eye'
                type='font-awesome'
                color={primaryAccentColour}
                style={styles.infoIcon}
              />
            </View>
            <Text style={styles.infoTitle}>Costume & Cosplay</Text>
            <Text style={styles.infoDesc}>{cosplayText}</Text>
          </View>

          <View style={styles.infoPanel}>
            <View  style={styles.infoIconContainer}>
              <Icon
                name='bolt'
                type='font-awesome'
                color={primaryAccentColour}
                style={styles.infoIcon}
              />
            </View>
            <Text style={styles.infoTitle}>Marvel</Text>
            <Text style={styles.infoDesc}>{guestText}</Text>
          </View>

          <View style={styles.infoPanel}>
            <View  style={styles.infoIconContainer}>
              <Icon
                name='user-plus'
                type='font-awesome'
                color={primaryAccentColour}
                style={styles.infoIcon}
              />
            </View>
            <Text style={styles.infoTitle}>Hang Out</Text>
            <Text style={styles.infoDesc}>{socialText}</Text>
          </View>


          {this.state.fcMid.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}


          <List style={styles.listContainer}>
            <ListItem
              title={<Text style={styles.listText}>The CaperCon Pop Culture Society</Text>}
              onPress={() => this.openExternalURL('http://capercon.ca/the-capercon-pop-culture-society')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryHighlightColour}
            />
            <ListItem
              title={<Text style={styles.listText}>The CaperCon Community</Text>}
              onPress={() => this.openExternalURL('http://capercon.ca/the-capercon-community')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryHighlightColour}
            />
          </List>

          <List style={styles.listContainer}>
            <ListItem
              title={<Text style={styles.listText}>BUY PASSES</Text>}
              onPress={() => this.onLearnMore('Passes')}
              underlayColor={secondaryBGColour}
              chevronColor={secondaryHighlightColour}
            />
          </List>

          {this.state.fcBottom.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

        </ScrollView>
      </View>
    );
  }
}

export default AboutPage;
