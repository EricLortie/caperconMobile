import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, Dimensions, Image, NetInfo, Linking } from 'react-native';
import { List, ListItem, Button, CheckBox, Icon, Card } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import FeaturedContent from './FeaturedContent';
import { styles, primaryFontColour, primaryBGColour, primaryHighlightColour, primaryAccentColour, secondaryFontColour, secondaryBGColour, secondaryHighlightColour } from '../styles/common';
import { loadNewsData, loadFeaturedContentData } from '../config/functions';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      NewsData: [],
      fcTop: [],
      fcMid: [],
      fcBottom: []
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

    loadNewsData(this);
  }

  componentWillReceiveProps() {
    loadNewsData(this);
  }

  render() {
    const maxWidth = Dimensions.get('window').width;

    return (
      <View>
        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/homeHeader.png')}
            resizeMode="cover">
          </Image>

          <View style={styles.altWithPadding}>
            <Text key={"ticket header"} style={styles.altHeaderText}>{"WELCOME"}</Text>
            <Text key={"ticket description"} style={styles.altText}>{"Stay up to date on the latest CaperCon News & find out about the convention."}</Text>
          </View>

          {this.state.fcTop.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

          <View style={styles.metaPanel}>
            <View style={styles.headerContainer}>
              <Text key={"load data"} style={styles.altHeaderText}>NEWS & UPDATES</Text>
            </View>
              {this.state.NewsData.map((news) => (
                <ListItem
                  key={news.slug}
                  title={<Text style={styles.smallListText}>{news.title.rendered}</Text>}
                  underlayColor={secondaryBGColour}
                  chevronColor={secondaryHighlightColour}
                />
              ))}
          </View>

          {this.state.fcBottom.map((fc) => (
            <FeaturedContent key={fc.slug} fc={fc} />
          ))}

        </ScrollView>
      </View>
    );
  }
}

export default HomePage;
