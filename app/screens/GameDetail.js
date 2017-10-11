import React, { Component } from 'react';
import { ScrollView, Text, WebView, StyleSheet, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import { loadLocalPhoto, renderMetaInfo } from '../config/functions';
import { styles, primaryBGColour, primaryFontColour } from '../styles/common';
import HTMLView from 'react-native-htmlview';

class GameDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      localPhoto: '/app/assets/Kiki.png'
    }
  }

  render() {
    const { name, description, photo } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.defaultContainer}>
        <View style={styles.defaultContainer}>
          <Tile style={styles.card}
            imageSrc={{uri: photo}}
            featured
          />
          <View>
            {renderMetaInfo({name: name, description: description})}
          </View>
        </View>

      </ScrollView>
    );
  }
}

export default GameDetail;
