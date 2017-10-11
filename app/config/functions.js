import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
  WebView,
  StyleSheet,
  Platform,
  NetInfo,
  Image,
  Dimensions,
  Linking
} from 'react-native';
import { Grid, Col, Row, Icon, List, ListItem } from 'react-native-elements';
import { styles, htmlstyles, primaryBGColour, primaryFontColour } from '../styles/common';
import HTMLView from 'react-native-htmlview';
import RNFetchBlob from 'react-native-fetch-blob'
import { loadSection } from '../index'


openExternalURL = (url) => {
  Linking.openURL(url).catch(err => console.error('An error occurred', err));
}

const deepLinkUrl = Linking.getInitialURL().then((url) => {

}).catch(err => console.error('An error occurred', err));

export function cleanHTML(html){
  return html.replace(/“|`/g, '"').replace(/<damage>/, "[damage]").replace(/<type>/, "[type]").replace(/<elemental>/, "[elemental]")
}

export class LoadingScreen extends Component {

    render() {

      const maxWidth = Dimensions.get('window').width;

      return (

        <View style={{
          backgroundColor: primaryBGColour,
          padding: 12,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
          <Image
            style={{ width: maxWidth-20, height: 319 }}
            source={require('../assets/Kiki.png')}
            resizeMode="cover">
          </Image>
          <Text style={{fontSize: 24, color: primaryFontColour}}>Loading.</Text>
          <Text style={{fontSize: 12, color: primaryFontColour}}>This requires an internet connection.</Text>
        </View>
      )
    }
}

export class ScheduleHeader extends Component {

  render() {

    let header = this.props.header;
    <View key={header} style={styles.altWithPadding}>
      <Text key={header} style={styles.altHeaderText}>{header}</Text>
    </View>
  }
}

export function buildSubtitle(ele, type) {

  items = [];
  if (type == "class"){
    items.push(<Text key={"class_type"} style={styles.subtitleText}>{ClassTypes[ele.class]}</Text>);
    if(ele.frag_cost !== "" && ele.frag_cost != null){
      items.push(<Text key={"frag_cost"} style={styles.subtitleText}>Frag Cost: {ele.frag_cost}</Text>);
    }
    if(ele.optional != ""){
      if (ele.optional.includes("vocation")) {
        items.push(<Text key={"vocation"} style={styles.subtitleText}>Vocation</Text>);
      }
      if (ele.optional.includes("occupation")) {
        items.push(<Text key={"occupation"} style={styles.subtitleText}>Renowned Occupation: Requires lead shaper approval.</Text>);
      }
    }
  }

  return <View style={{flexDirection: 'column', left: 10}}>{items}</View>;

}
export default function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

export function renderLinks(ele){
  let items = [];
    return (
      <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start'}}>
        {renderIf(ele.twitter!=null,
          <Icon
            raised
            name='twitter'
            type='font-awesome'
            color='#f50'
            onPress={() => this.openExternalURL(ele.twitter)}
            />
        )}
        {renderIf(ele.facebook!=null,
          <Icon
            raised
            name='facebook'
            type='font-awesome'
            color='#f50'
            onPress={() => this.openExternalURL(ele.facebook)}
            />
        )}
        {renderIf(ele.website!=null,
          <Icon
            raised
            name='link'
            type='font-awesome'
            color='#f50'
            onPress={() => this.openExternalURL(ele.website)}
            />
        )}
        </View>
    )
}

export function renderMetaInfo(ele) {
  console.log(ele);
  let items = [];

  items += `<h4>${ele.name}</h4>`;
  if(ele.signing !== null && ele.signing == true){
    items += `<h4>SIGNING AUTOGRAPHS.</h4>`;
  }
  if(ele.host !== null && ele.host != "" && ele.host != undefined){
    items += `<h4>Hosted by: ${ele.host}</h4>`;
  }
  if(ele.type !== null && ele.type != "" && ele.type != undefined){
    items += `<h4>Type: ${ele.type}</h4>`;
  }
  items += `${ele.description}`;
  if(ele.urls !== false && ele.urls !== undefined){
    if(ele.urls.length > 0){
      ele.urls.map((url) => {
        items += `<a href="'${url.url}"><i class="fa fa-${url.type}" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;`;
      });
    }
  }

  return (<View style={{padding: 10}}><HTMLView
            stylesheet={htmlstyles}
            value={items}
          /></View>)
}


export function validatePhotoUrl(photo) {
  if (photo == false || photo == undefined) {
    photo = 'https://capercon.ca/wp-content/uploads/2017/04/kiki.png';
  }
  return photo;
}

export function sortBySlug(array){
  array.sort(function(a, b){
   var nameA=a.slug.toLowerCase(), nameB=b.slug.toLowerCase();
   if (nameA < nameB) //sort string ascending
    return -1;
   if (nameA > nameB)
    return 1;
   return 0; //default return value (no sorting)
  });
  return array;
}

export function loadData(component, string) {
  console.log(`https://capercon.ca/wp-json/wp/v2/${string}`);
  try {
      // Load Data from API
      fetch(`https://capercon.ca/wp-json/wp/v2/${string}`, { })
        .then( (response) => {
        return response.json()
      })
      .then( (responseJson) => {
        console.log(responseJson);
        let items = [];
        let group1 = [];
        let group2 = [];
        responseJson.map((item) => {
          if(string == "guests"){
            item.acf.photo = validatePhotoUrl(item.acf.photo);
          } else {
            item.photo_url = validatePhotoUrl(item.photo_url);
          }
          items.push(item);
        });
        let half_length = Math.ceil(items.length / 2);
        group1 = items.splice(0,half_length);
        group2 = items;
        component.setState({ Data1: group1 });
        component.setState({ Data2: group2 });
      });

  } catch (error) {
  console.log(error);
    // Error saving data
  }
}

export function loadScheduleData(component, string) {
  console.log(`https://capercon.ca/wp-json/wp/v2/${string}`);
  try {
      // Load Data from API
      fetch(`https://capercon.ca/wp-json/wp/v2/${string}`, { })
        .then( (response) => {
        return response.json()
      })
      .then( (responseJson) => {
        let items = [];
        Object.keys(responseJson).map((date) => {
          let times = [];
          Object.keys(responseJson[date]).map((time) => {
          let shows = [];
            responseJson[date][time].map((show) => {
              shows.push(show);
            });
            times.push([time, shows]);
          });
          items.push([date, times]);
        });

        console.log(items);
        component.setState({ Schedule: items });
        console.log("component state set");
      });

  } catch (error) {
  console.log(error);
    // Error saving data
  }
}

export function loadFeaturedContentData(component) {

  try {
      // Load Data from API
      fetch('https://capercon.ca/wp-json/wp/v2/get_random_ads', { })
        .then( (response) => {
        return response.json()
      })
      .then( (responseJson) => {
        component.setState({ fcTop: [responseJson[0]] });
        component.setState({ fcMid: [responseJson[1]] });
        component.setState({ fcBottom: [responseJson[2]] });
      });

  } catch (error) {
  console.log(error);
    // Error saving data
  }
}


export function loadNewsData(component) {

  try {
      // Load Data from API
      fetch('https://capercon.ca/wp-json/wp/v2/recent_news', { })
        .then( (response) => {
        return response.json()
      })
      .then( (responseJson) => {
        component.setState({ NewsData: responseJson });
        //AsyncStorage.setItem(`@UWData:guests:${responseJson.title}`, JSON.stringify(responseJson.acf.races));
      });

  } catch (error) {
  console.log(error);
    // Error saving data
  }

}
